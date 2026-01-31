import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all countries
export async function GET(request: NextRequest) {
  try {
    const result = await query(
      'SELECT * FROM users.country ORDER BY country ASC'
    );

    return NextResponse.json({
      success: true,
      data: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch countries' },
      { status: 500 }
    );
  }
}
