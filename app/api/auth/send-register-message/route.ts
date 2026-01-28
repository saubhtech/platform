// app/api/auth/send-register-message/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { evolutionApiService } from '@/lib/evolution-api';
import { authService } from '@/lib/auth-service';

export async function POST(request: NextRequest) {
  try {
    const { whatsapp, message } = await request.json();

    // Validate
    if (!whatsapp || !message) {
      return NextResponse.json(
        { error: 'WhatsApp number and message are required' },
        { status: 400 }
      );
    }

    if (!authService.validatePhoneNumber(whatsapp)) {
      return NextResponse.json(
        { error: 'Invalid WhatsApp number format' },
        { status: 400 }
      );
    }

    // Send the "REGISTER Name" message to user
    const welcomeMessage = `${message}

👋 Welcome to Saubh.Tech!

To complete your registration, simply reply to this message with:
YES

Once confirmed, you'll receive your login credentials instantly.`;

    await evolutionApiService.sendMessage(whatsapp, welcomeMessage);

    return NextResponse.json({
      success: true,
      message: 'Registration message sent successfully'
    });

  } catch (error: any) {
    console.error('Send register message error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send registration message' },
      { status: 500 }
    );
  }
}

export const maxDuration = 30;