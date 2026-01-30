// app/api/auth/send-login-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { queryOne } from '@/lib/db';
import WhatsAppService from '@/lib/whatsapp-service';
import OTPManager from '@/lib/otp-manager';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { whatsapp } = body;

    // Validate input
    if (!whatsapp) {
      return NextResponse.json(
        { error: 'WhatsApp number is required' },
        { status: 400 }
      );
    }

    // Format phone number
    const formattedPhone = WhatsAppService.formatPhoneNumber(whatsapp);

    // Check if user exists
    const user = await queryOne(
      'SELECT * FROM users.users WHERE whatsapp = $1 LIMIT 1',
      [formattedPhone]
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found. Please register first.' },
        { status: 404 }
      );
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
    const whatsappResult = await WhatsAppService.sendLoginOTP(
      formattedPhone,
      otp,
      user.name
    );

    if (!whatsappResult.success) {
      console.error('WhatsApp OTP send failed:', whatsappResult.error);
      return NextResponse.json(
        { error: 'Failed to send OTP. Please try again.' },
        { status: 500 }
      );
    }

    // Store OTP
    await OTPManager.storeOTP(formattedPhone, otp, 'login');

    console.log(`Login OTP sent to ${formattedPhone}: ${otp}`);

    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully to your WhatsApp',
      messageId: whatsappResult.messageId,
      phoneNumber: formattedPhone,
      userName: user.name,
    });
  } catch (error) {
    console.error('Send Login OTP Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}