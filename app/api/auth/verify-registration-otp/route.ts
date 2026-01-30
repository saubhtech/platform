// app/api/auth/verify-registration-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import WhatsAppService from '@/lib/whatsapp-service';
import OTPManager from '@/lib/otp-manager';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, whatsapp, email, mobile, otp, pic, placeid, dob, courseid, langid, social } = body;

    // Validate required fields
    if (!name || !whatsapp || !otp) {
      return NextResponse.json(
        { error: 'Name, WhatsApp number, and OTP are required' },
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

    // Check if user already exists (double check)
    const existingUser = await queryOne(
      'SELECT * FROM users.users WHERE whatsapp = $1 LIMIT 1',
      [formattedPhone]
    );

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    // Create user in database
    const insertQuery = `
      INSERT INTO users.users (
        name, whatsapp, email, mobile, pic, placeid, dob, 
        courseid, langid, social, verifiedby, edate
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING userid, name, whatsapp, email
    `;

    const values = [
      name,
      formattedPhone,
      email || null,
      mobile || null,
      pic || null,
      placeid || null,
      dob ? new Date(dob) : null,
      courseid || null,
      langid || null,
      social || null,
      false, // verifiedby
      new Date(), // edate
    ];

    const result = await query(insertQuery, values);
    const newUser = result.rows[0];

    // Send welcome message via WhatsApp
    await WhatsAppService.sendWelcomeMessage(formattedPhone, name);

    console.log(`User registered successfully: ${newUser.userid}`);

    return NextResponse.json({
      success: true,
      message: 'Registration successful! Welcome message sent to WhatsApp.',
      user: {
        userid: newUser.userid,
        name: newUser.name,
        whatsapp: newUser.whatsapp,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Verify Registration OTP Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}