// app/api/webhooks/whatsapp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import WhatsAppService from '@/lib/whatsapp-service';

// Verification token for WhatsApp webhook
const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'saubh_tech_verify_token_2025';

/**
 * GET - Webhook verification (required by WhatsApp)
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // Verify the webhook
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('✅ Webhook verified successfully');
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Verification failed' }, { status: 403 });
}

/**
 * POST - Handle incoming WhatsApp messages
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('📩 Webhook received:', JSON.stringify(body, null, 2));

    // Extract message data
    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;
    const messages = value?.messages;

    if (!messages || messages.length === 0) {
      return NextResponse.json({ status: 'no_messages' }, { status: 200 });
    }

    const message = messages[0];
    const from = message.from; // Phone number with country code
    const messageText = message.text?.body?.trim();
    const messageType = message.type;

    console.log(`📱 Message from ${from}: ${messageText}`);

    // Only process text messages
    if (messageType !== 'text' || !messageText) {
      return NextResponse.json({ status: 'ignored' }, { status: 200 });
    }

    // Process the message
    await processMessage(from, messageText);

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}

/**
 * Process incoming messages
 */
async function processMessage(phoneNumber: string, messageText: string) {
  const textLower = messageText.toLowerCase();

  try {
    // REGISTRATION: "Register Name" or "Register Yash Singh"
    if (textLower.startsWith('register ')) {
      const name = messageText.substring(9).trim();
      await handleRegistration(phoneNumber, name);
      return;
    }

    // LOGIN: "Login"
    if (textLower === 'login') {
      await handleLogin(phoneNumber);
      return;
    }

    // Default: Send help message
    await sendHelpMessage(phoneNumber);
  } catch (error) {
    console.error('Error processing message:', error);
    await WhatsAppService.sendTextMessage(
      phoneNumber,
      '❌ Sorry, something went wrong. Please try again later.'
    );
  }
}

/**
 * Handle Registration
 */
async function handleRegistration(phoneNumber: string, name: string) {
  console.log(`🆕 Registration request: ${name} (${phoneNumber})`);

  // Validate name
  if (!name || name.length < 3) {
    await WhatsAppService.sendTextMessage(
      phoneNumber,
      '❌ Please provide a valid name (at least 3 characters).\n\nExample: Register Yash Singh'
    );
    return;
  }

  // Check if user already exists
  const existingUser = await queryOne(
    'SELECT userid, fname FROM users.users WHERE whatsapp = $1 LIMIT 1',
    [phoneNumber]
  );

  if (existingUser) {
    await WhatsAppService.sendTextMessage(
      phoneNumber,
      `👋 Hi ${existingUser.fname}!\n\nYou're already registered. To login, send:\n*Login*`
    );
    return;
  }

  // Generate 4-digit passcode
  const passcode = Math.floor(1000 + Math.random() * 9000).toString();

  // Insert new user into database
  try {
    await query(
      `INSERT INTO users.users (fname, whatsapp, pic, mobile, email, dob, placeid, courseid, langid)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        name,
        phoneNumber,
        passcode, // Store passcode in pic field
        phoneNumber.replace('91', ''), // Remove country code for mobile
        '', // Empty email
        null, // No DOB
        null, // No place
        null, // No course
        null, // No language
      ]
    );

    console.log(`✅ User registered: ${name} (${phoneNumber}) with passcode: ${passcode}`);

    // Send welcome message with credentials
    const welcomeMessage = `🎉 *Welcome to Saubh.Tech, ${name}!*

Your registration is complete! 

🔐 *Your Login Credentials:*
📱 WhatsApp: ${phoneNumber}
🔑 Passcode: *${passcode}*

To login to your dashboard:
1. Visit: https://saubh.tech/login
2. Enter your WhatsApp number
3. Enter your passcode: ${passcode}

*Important:* Save this passcode securely. You'll need it to access your account.

If you forget your passcode, just send "Login" to this number and we'll remind you!

Happy learning! 🚀`;

    await WhatsAppService.sendTextMessage(phoneNumber, welcomeMessage);
  } catch (dbError: any) {
    console.error('Database error:', dbError);
    
    if (dbError.code === '23505') { // Unique constraint violation
      await WhatsAppService.sendTextMessage(
        phoneNumber,
        '❌ This WhatsApp number is already registered. To login, send:\n*Login*'
      );
    } else {
      await WhatsAppService.sendTextMessage(
        phoneNumber,
        '❌ Registration failed. Please try again later or contact support.'
      );
    }
  }
}

/**
 * Handle Login
 */
async function handleLogin(phoneNumber: string) {
  console.log(`🔐 Login request from: ${phoneNumber}`);

  // Check if user exists
  const user = await queryOne(
    'SELECT userid, fname, pic FROM users.users WHERE whatsapp = $1 LIMIT 1',
    [phoneNumber]
  );

  if (!user) {
    await WhatsAppService.sendTextMessage(
      phoneNumber,
      `❌ *Account not found!*

You're not registered yet. To register, send:
*Register Your Name*

Example: Register Yash Singh`
    );
    return;
  }

  // Send passcode
  const passcodeMessage = `👋 *Hi ${user.fname}!*

Your login passcode is: *${user.pic}*

To login:
1. Visit: https://saubh.tech/login
2. Enter your WhatsApp number: ${phoneNumber}
3. Enter passcode: ${user.pic}

*Note:* This passcode is unique to your account. Keep it safe!`;

  await WhatsAppService.sendTextMessage(phoneNumber, passcodeMessage);
  console.log(`✅ Passcode sent to ${user.fname} (${phoneNumber}): ${user.pic}`);
}

/**
 * Send help message
 */
async function sendHelpMessage(phoneNumber: string) {
  const helpMessage = `👋 *Welcome to Saubh.Tech!*

📝 *Available Commands:*

🆕 *New User?*
Send: *Register Your Name*
Example: Register Yash Singh

🔐 *Existing User?*
Send: *Login*

Need help? Contact support at support@saubh.tech`;

  await WhatsAppService.sendTextMessage(phoneNumber, helpMessage);
}

export const maxDuration = 30;