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

// State code mapping for Indian states
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
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Read and parse CSV
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

    // Process each row
    for (let i = 0; i < data.length; i++) {
      const row: any = data[i];
      
      try {
        // Validate required fields
        if (!row.pincode || !row.district || !row.statename) {
          stats.skippedRows++;
          stats.errors.push(`Row ${i + 1}: Missing required fields`);
          continue;
        }

        const pincode = row.pincode?.trim();
        const districtName = row.district?.trim().toUpperCase();
        const stateName = row.statename?.trim().toUpperCase();
        const stateCode = STATE_CODES[stateName] || row.statename?.trim().substring(0, 2);

        if (!stateCode) {
          stats.skippedRows++;
          stats.errors.push(`Row ${i + 1}: Invalid state name - ${stateName}`);
          continue;
        }

        // Step 1: Check/Insert State
        // Schema: stateid, countrycode, statecode, state
        let stateId: number;
        const stateCheck = await pool.query(
          'SELECT stateid FROM users.state WHERE UPPER(state) = $1',
          [stateName]
        );

        if (stateCheck.rows.length > 0) {
          stateId = stateCheck.rows[0].stateid;
          stats.existingStates++;
        } else {
          const stateInsert = await pool.query(
            'INSERT INTO users.state (state, statecode, countrycode) VALUES ($1, $2, $3) RETURNING stateid',
            [stateName, stateCode, 'IN']
          );
          stateId = stateInsert.rows[0].stateid;
          stats.newStates++;
        }

        // Step 2: Check/Insert District
        // Schema: districtid, stateid, district, districthq
        let districtId: number;
        const districtCheck = await pool.query(
          'SELECT districtid FROM users.district WHERE UPPER(district) = $1 AND stateid = $2',
          [districtName, stateId]
        );

        if (districtCheck.rows.length > 0) {
          districtId = districtCheck.rows[0].districtid;
          stats.existingDistricts++;
        } else {
          const districtInsert = await pool.query(
            'INSERT INTO users.district (stateid, district, districthq) VALUES ($1, $2, $3) RETURNING districtid',
            [stateId, districtName, districtName] // Using district name as HQ for now
          );
          districtId = districtInsert.rows[0].districtid;
          stats.newDistricts++;
        }

        // Step 3: Check/Insert Postal Code
        // Schema: postid, postcode, districtid, stateid, countrycode
        const postalCheck = await pool.query(
          'SELECT postid FROM users.postal WHERE postcode = $1',
          [pincode]
        );

        if (postalCheck.rows.length > 0) {
          stats.existingPostals++;
        } else {
          await pool.query(
            'INSERT INTO users.postal (postcode, districtid, stateid, countrycode) VALUES ($1, $2, $3, $4)',
            [pincode, districtId, stateId, 'IN']
          );
          stats.newPostals++;
        }

      } catch (error: any) {
        stats.errors.push(`Row ${i + 1}: ${error.message}`);
        stats.skippedRows++;
      }
    }

    return NextResponse.json({
      success: true,
      stats,
    });

  } catch (error: any) {
    console.error('Import error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Import failed' },
      { status: 500 }
    );
  }
}