import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all districts or filter by state
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const stateid = searchParams.get('stateid');

    let sql = `
      SELECT d.*, s.state, c.country, c.countrycode
      FROM users.district d
      LEFT JOIN users.state s ON d.stateid = s.stateid
      LEFT JOIN users.country c ON s.countrycode = c.countrycode
    `;
    
    const params: any[] = [];
    
    if (stateid) {
      sql += ' WHERE d.stateid = $1';
      params.push(stateid);
    }
    
    sql += ' ORDER BY d.districtid ASC';

    const result = await query(sql, params);

    return NextResponse.json({
      success: true,
      data: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Error fetching districts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch districts' },
      { status: 500 }
    );
  }
}

// POST - Create new district
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { stateid, district, disthhq } = body;

    // Validation
    if (!stateid || !district) {
      return NextResponse.json(
        { success: false, error: 'State ID and District name are required' },
        { status: 400 }
      );
    }

    // Get next districtid
    const maxIdResult = await query('SELECT COALESCE(MAX(districtid), 0) + 1 as nextid FROM users.district');
    const districtid = maxIdResult.rows[0].nextid;

    const result = await query(
      `INSERT INTO users.district (districtid, stateid, district, disthhq) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [districtid, stateid, district, disthhq || null]
    );

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: 'District created successfully'
    });
  } catch (error: any) {
    console.error('Error creating district:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create district' },
      { status: 500 }
    );
  }
}

// PUT - Update district
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { districtid, stateid, district, disthhq } = body;

    if (!districtid) {
      return NextResponse.json(
        { success: false, error: 'District ID is required' },
        { status: 400 }
      );
    }

    const result = await query(
      `UPDATE users.district 
       SET stateid = $1, district = $2, disthhq = $3
       WHERE districtid = $4
       RETURNING *`,
      [stateid, district, disthhq, districtid]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'District not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: 'District updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating district:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update district' },
      { status: 500 }
    );
  }
}

// DELETE - Delete district
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const districtid = searchParams.get('districtid');

    if (!districtid) {
      return NextResponse.json(
        { success: false, error: 'District ID is required' },
        { status: 400 }
      );
    }

    // Check if district has postal codes
    const postalCheck = await query(
      'SELECT COUNT(*) as count FROM users.postal WHERE districtid = $1',
      [districtid]
    );

    if (parseInt(postalCheck.rows[0].count) > 0) {
      return NextResponse.json(
        { success: false, error: 'Cannot delete district with existing postal codes' },
        { status: 400 }
      );
    }

    const result = await query(
      'DELETE FROM users.district WHERE districtid = $1 RETURNING *',
      [districtid]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'District not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'District deleted successfully'
    });
  } catch (error: any) {
    console.error('Error deleting district:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete district' },
      { status: 500 }
    );
  }
}
