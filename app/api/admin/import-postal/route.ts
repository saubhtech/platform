import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import Papa from 'papaparse';

interface ImportStats {
  totalRows: number;
  newStates: number;
  existingStates: number;
  newDistricts: number;
  existingDistricts: number;
  newPostals: number;
  existingPostals: number;
  skippedRows: number;
  errors: string[];
}

const STATE_CODES: { [key: string]: string } = {
  'ANDAMAN AND NICOBAR ISLANDS': 'AN',
  'ANDHRA PRADESH': 'AP',
  'ARUNACHAL PRADESH': 'AR',
  'ASSAM': 'AS',
  'BIHAR': 'BR',
  'CHANDIGARH': 'CH',
  'CHHATTISGARH': 'CG',
  'DADRA AND NAGAR HAVELI': 'DN',
  'DAMAN AND DIU': 'DD',
  'DELHI': 'DL',
  'GOA': 'GA',
  'GUJARAT': 'GJ',
  'HARYANA': 'HR',
  'HIMACHAL PRADESH': 'HP',
  'JAMMU AND KASHMIR': 'JK',
  'JHARKHAND': 'JH',
  'KARNATAKA': 'KA',
  'KERALA': 'KL',
  'LADAKH': 'LA',
  'LAKSHADWEEP': 'LD',
  'MADHYA PRADESH': 'MP',
  'MAHARASHTRA': 'MH',
  'MANIPUR': 'MN',
  'MEGHALAYA': 'ML',
  'MIZORAM': 'MZ',
  'NAGALAND': 'NL',
  'ODISHA': 'OR',
  'PUDUCHERRY': 'PY',
  'PUNJAB': 'PB',
  'RAJASTHAN': 'RJ',
  'SIKKIM': 'SK',
  'TAMIL NADU': 'TN',
  'TELANGANA': 'TG',
  'TRIPURA': 'TR',
  'UTTAR PRADESH': 'UP',
  'UTTARAKHAND': 'UK',
  'WEST BENGAL': 'WB',
};

export async function POST(request: NextRequest) {
  const client = await pool.connect();
  
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const text = await file.text();
    const { data } = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim().toLowerCase(),
    });

    const stats: ImportStats = {
      totalRows: data.length,
      newStates: 0,
      existingStates: 0,
      newDistricts: 0,
      existingDistricts: 0,
      newPostals: 0,
      existingPostals: 0,
      skippedRows: 0,
      errors: [],
    };

    // Cache for IDs
    const stateCache = new Map<string, number>();
    const districtCache = new Map<string, number>();
    const existingPostals = new Set<string>();

    await client.query('BEGIN');

    // Pre-load existing states
    const existingStates = await client.query('SELECT stateid, UPPER(state) as state FROM users.state');
    existingStates.rows.forEach(row => {
      stateCache.set(row.state, row.stateid);
    });

    // Pre-load existing districts
    const existingDistricts = await client.query('SELECT districtid, stateid, UPPER(district) as district FROM users.district');
    existingDistricts.rows.forEach(row => {
      districtCache.set(`${row.stateid}:${row.district}`, row.districtid);
    });

    // Pre-load existing postal codes
    const existingPostalsResult = await client.query('SELECT postcode FROM users.postal');
    existingPostalsResult.rows.forEach(row => {
      existingPostals.add(row.postcode);
    });

    // Collect unique states and districts to insert
    const statesToInsert = new Map<string, { name: string; code: string }>();
    const districtsToInsert = new Map<string, { stateId: number; name: string }>();
    const postalsToInsert: any[] = [];

    // First pass: collect what needs to be inserted
    for (let i = 0; i < data.length; i++) {
      const row: any = data[i];

      if (!row.pincode || !row.district || !row.statename) {
        stats.skippedRows++;
        continue;
      }

      const pincode = row.pincode?.trim();
      const districtName = row.district?.trim().toUpperCase();
      const stateName = row.statename?.trim().toUpperCase();
      const stateCode = STATE_CODES[stateName] || stateName.substring(0, 2);

      // Check if state needs to be inserted
      if (!stateCache.has(stateName)) {
        statesToInsert.set(stateName, { name: stateName, code: stateCode });
      }
    }

    // Batch insert states
    if (statesToInsert.size > 0) {
      const stateValues = Array.from(statesToInsert.values());
      const stateInsertQuery = `
        INSERT INTO users.state (state, statecode, countrycode)
        VALUES ${stateValues.map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`).join(', ')}
        ON CONFLICT DO NOTHING
        RETURNING stateid, UPPER(state) as state
      `;
      const stateParams = stateValues.flatMap(s => [s.name, s.code, 'IN']);
      const insertedStates = await client.query(stateInsertQuery, stateParams);
      
      insertedStates.rows.forEach(row => {
        stateCache.set(row.state, row.stateid);
      });
      stats.newStates = insertedStates.rowCount || 0;
    }

    // Second pass: collect districts
    for (let i = 0; i < data.length; i++) {
      const row: any = data[i];

      if (!row.pincode || !row.district || !row.statename) continue;

      const districtName = row.district?.trim().toUpperCase();
      const stateName = row.statename?.trim().toUpperCase();
      const stateId = stateCache.get(stateName);

      if (!stateId) continue;

      const districtKey = `${stateId}:${districtName}`;
      if (!districtCache.has(districtKey)) {
        districtsToInsert.set(districtKey, { stateId, name: districtName });
      }
    }

    // Batch insert districts
    if (districtsToInsert.size > 0) {
      const districtValues = Array.from(districtsToInsert.values());
      const districtInsertQuery = `
        INSERT INTO users.district (stateid, district, districthq)
        VALUES ${districtValues.map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`).join(', ')}
        ON CONFLICT DO NOTHING
        RETURNING districtid, stateid, UPPER(district) as district
      `;
      const districtParams = districtValues.flatMap(d => [d.stateId, d.name, d.name]);
      const insertedDistricts = await client.query(districtInsertQuery, districtParams);
      
      insertedDistricts.rows.forEach(row => {
        districtCache.set(`${row.stateid}:${row.district}`, row.districtid);
      });
      stats.newDistricts = insertedDistricts.rowCount || 0;
    }

    // Third pass: collect postal codes
    for (let i = 0; i < data.length; i++) {
      const row: any = data[i];

      if (!row.pincode || !row.district || !row.statename) continue;

      const pincode = row.pincode?.trim();
      const districtName = row.district?.trim().toUpperCase();
      const stateName = row.statename?.trim().toUpperCase();
      const stateId = stateCache.get(stateName);

      if (!stateId) continue;

      const districtKey = `${stateId}:${districtName}`;
      const districtId = districtCache.get(districtKey);

      if (!districtId) continue;

      if (!existingPostals.has(pincode)) {
        postalsToInsert.push({ pincode, districtId, stateId });
        existingPostals.add(pincode);
      } else {
        stats.existingPostals++;
      }
    }

    // Batch insert postal codes (in chunks of 1000)
    const CHUNK_SIZE = 1000;
    for (let i = 0; i < postalsToInsert.length; i += CHUNK_SIZE) {
      const chunk = postalsToInsert.slice(i, i + CHUNK_SIZE);
      const postalInsertQuery = `
        INSERT INTO users.postal (postcode, districtid, stateid, countrycode)
        VALUES ${chunk.map((_, idx) => `($${idx * 4 + 1}, $${idx * 4 + 2}, $${idx * 4 + 3}, $${idx * 4 + 4})`).join(', ')}
      `;
      const postalParams = chunk.flatMap(p => [p.pincode, p.districtId, p.stateId, 'IN']);
      const result = await client.query(postalInsertQuery, postalParams);
      stats.newPostals += result.rowCount || 0;
    }

    await client.query('COMMIT');

    return NextResponse.json({
      success: true,
      stats,
    });

  } catch (error: any) {
    await client.query('ROLLBACK');
    console.error('Import error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Import failed' },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}