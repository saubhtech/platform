// app/api/auth/verify-login-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { queryOne } from '@/lib/db';
import WhatsAppService from '@/lib/whatsapp-service';
import OTPManager from '@/lib/otp-manager';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { whatsapp, otp } = body;

    // Validate input
    if (!whatsapp || !otp) {
      return NextResponse.json(
        { error: 'WhatsApp number and OTP are required' },
        { status: 400 }
      );
    }

    // Format phone number
    const formattedPhone = WhatsAppService.formatPhoneNumber(whatsapp);

    // Verify OTP
    const otpResult = await OTPManager.verifyOTP(formattedPhone, otp);

    if (!otpResult.success) {
      return NextResponse.json(
        { error: otpResult.message },
        { status: 400 }
      );
    }

    // Get user from database
    const user = await queryOne(
      'SELECT * FROM users.users WHERE whatsapp = $1 LIMIT 1',
      [formattedPhone]
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Create JWT token
    const token = await new SignJWT({
      userid: user.userid,
      name: user.name,
      whatsapp: user.whatsapp,
      email: user.email,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d') // Token expires in 30 days
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

    console.log(`User logged in successfully: ${user.userid}`);

    return NextResponse.json({
      success: true,
      message: 'Login successful!',
      user: {
        userid: user.userid,
        name: user.name,
        whatsapp: user.whatsapp,
        email: user.email,
        pic: user.pic,
        placeid: user.placeid,
        courseid: user.courseid,
        langid: user.langid,
      },
      token,
    });
  } catch (error) {
    console.error('Verify Login OTP Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}