import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all postal codes or filter by district/state/country
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const districtid = searchParams.get('districtid');
    const stateid = searchParams.get('stateid');
    const countrycode = searchParams.get('countrycode');

    let sql = `
      SELECT p.*, d.district, s.state, c.country
      FROM users.postal p
      LEFT JOIN users.district d ON p.districtid = d.districtid
      LEFT JOIN users.state s ON p.stateid = s.stateid
      LEFT JOIN users.country c ON p.countrycode = c.countrycode
    `;
    
    const params: any[] = [];
    const conditions: string[] = [];
    
    if (districtid) {
      conditions.push(`p.districtid = $${params.length + 1}`);
      params.push(districtid);
    }
    
    if (stateid) {
      conditions.push(`p.stateid = $${params.length + 1}`);
      params.push(stateid);
    }
    
    if (countrycode) {
      conditions.push(`p.countrycode = $${params.length + 1}`);
      params.push(countrycode);
    }
    
    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ');
    }
    
    sql += ' ORDER BY p.postid ASC';

    const result = await query(sql, params);

    return NextResponse.json({
      success: true,
      data: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Error fetching postal codes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch postal codes' },
      { status: 500 }
    );
  }
}

// POST - Create new postal code
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postcode, districtid, stateid, countrycode } = body;

    // Validation
    if (!postcode || !districtid || !stateid || !countrycode) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if postcode already exists
    const existingPostcode = await query(
      'SELECT * FROM users.postal WHERE postcode = $1',
      [postcode]
    );

    if (existingPostcode.rows.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Postal code already exists' },
        { status: 400 }
      );
    }

    // Get next postid
    const maxIdResult = await query('SELECT COALESCE(MAX(postid), 0) + 1 as nextid FROM users.postal');
    const postid = maxIdResult.rows[0].nextid;

    const result = await query(
      `INSERT INTO users.postal (postid, postcode, districtid, stateid, countrycode) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [postid, postcode, districtid, stateid, countrycode]
    );

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: 'Postal code created successfully'
    });
  } catch (error: any) {
    console.error('Error creating postal code:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create postal code' },
      { status: 500 }
    );
  }
}

// PUT - Update postal code
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { postid, postcode, districtid, stateid, countrycode } = body;

    if (!postid) {
      return NextResponse.json(
        { success: false, error: 'Postal ID is required' },
        { status: 400 }
      );
    }

    // Check if new postcode already exists (excluding current record)
    const existingPostcode = await query(
      'SELECT * FROM users.postal WHERE postcode = $1 AND postid != $2',
      [postcode, postid]
    );

    if (existingPostcode.rows.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Postal code already exists' },
        { status: 400 }
      );
    }

    const result = await query(
      `UPDATE users.postal 
       SET postcode = $1, districtid = $2, stateid = $3, countrycode = $4
       WHERE postid = $5
       RETURNING *`,
      [postcode, districtid, stateid, countrycode, postid]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Postal code not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: 'Postal code updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating postal code:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update postal code' },
      { status: 500 }
    );
  }
}

// DELETE - Delete postal code
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const postid = searchParams.get('postid');

    if (!postid) {
      return NextResponse.json(
        { success: false, error: 'Postal ID is required' },
        { status: 400 }
      );
    }

    const result = await query(
      'DELETE FROM users.postal WHERE postid = $1 RETURNING *',
      [postid]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Postal code not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Postal code deleted successfully'
    });
  } catch (error: any) {
    console.error('Error deleting postal code:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete postal code' },
      { status: 500 }
    );
  }
}