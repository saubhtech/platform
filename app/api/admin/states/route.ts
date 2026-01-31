import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all states or filter by country
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const countrycode = searchParams.get('countrycode');

    let sql = `
      SELECT s.*, c.country 
      FROM users.state s
      LEFT JOIN users.country c ON s.countrycode = c.countrycode
    `;
    
    const params: any[] = [];
    
    if (countrycode) {
      sql += ' WHERE s.countrycode = $1';
      params.push(countrycode);
    }
    
    sql += ' ORDER BY s.stateid ASC';

    const result = await query(sql, params);

    return NextResponse.json({
      success: true,
      data: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Error fetching states:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch states' },
      { status: 500 }
    );
  }
}

// POST - Create new state
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { countrycode, statecode, state } = body;

    // Validation
    if (!countrycode || !statecode || !state) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get next stateid
    const maxIdResult = await query('SELECT COALESCE(MAX(stateid), 0) + 1 as nextid FROM users.state');
    const stateid = maxIdResult.rows[0].nextid;

    const result = await query(
      `INSERT INTO users.state (stateid, countrycode, statecode, state) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [stateid, countrycode, statecode, state]
    );

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: 'State created successfully'
    });
  } catch (error: any) {
    console.error('Error creating state:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create state' },
      { status: 500 }
    );
  }
}

// PUT - Update state
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { stateid, countrycode, statecode, state } = body;

    if (!stateid) {
      return NextResponse.json(
        { success: false, error: 'State ID is required' },
        { status: 400 }
      );
    }

    const result = await query(
      `UPDATE users.state 
       SET countrycode = $1, statecode = $2, state = $3
       WHERE stateid = $4
       RETURNING *`,
      [countrycode, statecode, state, stateid]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'State not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: 'State updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating state:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update state' },
      { status: 500 }
    );
  }
}

// DELETE - Delete state
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const stateid = searchParams.get('stateid');

    if (!stateid) {
      return NextResponse.json(
        { success: false, error: 'State ID is required' },
        { status: 400 }
      );
    }

    // Check if state has districts
    const districtCheck = await query(
      'SELECT COUNT(*) as count FROM users.district WHERE stateid = $1',
      [stateid]
    );

    if (parseInt(districtCheck.rows[0].count) > 0) {
      return NextResponse.json(
        { success: false, error: 'Cannot delete state with existing districts' },
        { status: 400 }
      );
    }

    const result = await query(
      'DELETE FROM users.state WHERE stateid = $1 RETURNING *',
      [stateid]
    );
 if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'State not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'State deleted successfully'
    });
  } catch (error: any) {
    console.error('Error deleting state:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete state' },
      { status: 500 }
    );
  }
}
