// app/api/auth/verify-manual-login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { queryOne } from '@/lib/db';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { whatsapp, passcode } = body;

    // Validate input
    if (!whatsapp || !passcode) {
      return NextResponse.json(
        { error: 'WhatsApp number and passcode are required' },
        { status: 400 }
      );
    }

    // Find user by WhatsApp number
    const user = await queryOne(
      'SELECT userid, fname, whatsapp, email, mobile, pic, placeid, courseid, langid FROM users.users WHERE whatsapp = $1 LIMIT 1',
      [whatsapp]
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found. Please register first.' },
        { status: 404 }
      );
    }

    // Verify passcode (pic field stores the 4-digit passcode)
    if (user.pic !== passcode) {
      return NextResponse.json(
        { error: 'Invalid passcode. Please check and try again.' },
        { status: 401 }
      );
    }

    // Create JWT token (matching your existing structure)
    const token = await new SignJWT({
      userid: user.userid,
      name: user.fname,
      whatsapp: user.whatsapp,
      email: user.email,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(SECRET_KEY);

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    console.log(`User logged in successfully: ${user.userid} (${user.fname})`);

    // Return user data (matching your existing structure)
    return NextResponse.json({
      success: true,
      message: 'Login successful!',
      user: {
        userid: user.userid,
        name: user.fname,
        whatsapp: user.whatsapp,
        email: user.email,
        mobile: user.mobile,
        pic: user.pic,
        placeid: user.placeid,
        courseid: user.courseid,
        langid: user.langid,
      },
      token,
    });
  } catch (error) {
    console.error('Manual Login Verification Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}