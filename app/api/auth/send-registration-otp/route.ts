// app/api/auth/send-registration-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { queryOne } from '@/lib/db';
import WhatsAppService from '@/lib/whatsapp-service';
import OTPManager from '@/lib/otp-manager';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, whatsapp, email } = body;

    // Validate input
    if (!name || !whatsapp) {
      return NextResponse.json(
        { error: 'Name and WhatsApp number are required' },
        { status: 400 }
      );
    }

    // Format phone number
    const formattedPhone = WhatsAppService.formatPhoneNumber(whatsapp);

    // Check if user already exists
    const existingUser = await queryOne(
      'SELECT * FROM users.users WHERE whatsapp = $1 LIMIT 1',
      [formattedPhone]
    );

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this WhatsApp number already exists. Please login.' },
        { status: 409 }
      );
    }

    // Check email if provided
    if (email) {
      const existingEmail = await queryOne(
        'SELECT * FROM users.users WHERE email = $1 LIMIT 1',
        [email]
      );

      if (existingEmail) {
        return NextResponse.json(
          { error: 'User with this email already exists.' },
          { status: 409 }
        );
      }
    }

    // Check if can resend OTP
    if (!OTPManager.canResendOTP(formattedPhone)) {
      const remaining = OTPManager.getRemainingCooldown(formattedPhone);
      return NextResponse.json(
        { error: `Please wait ${remaining} seconds before requesting a new OTP` },
        { status: 429 }
      );
    }

    // Generate OTP
    const otp = WhatsAppService.generateOTP();

    // Send OTP via WhatsApp
    const whatsappResult = await WhatsAppService.sendRegistrationOTP(
      formattedPhone,
      otp,
      name
    );

    if (!whatsappResult.success) {
      console.error('WhatsApp OTP send failed:', whatsappResult.error);
      return NextResponse.json(
        { error: 'Failed to send OTP. Please try again.' },
        { status: 500 }
      );
    }

    // Store OTP
    await OTPManager.storeOTP(formattedPhone, otp, 'registration');

    console.log(`Registration OTP sent to ${formattedPhone}: ${otp}`);

    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully to your WhatsApp',
      messageId: whatsappResult.messageId,
      phoneNumber: formattedPhone,
    });
  } catch (error) {
    console.error('Send Registration OTP Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}