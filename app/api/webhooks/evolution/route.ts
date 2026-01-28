import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = body?.data;
    if (!data) return NextResponse.json({ ok: true });

    // ❌ Ignore messages sent by bot itself
    if (data.key?.fromMe === true) {
      return NextResponse.json({ ok: true });
    }

    const message =
      data.message?.conversation ||
      data.message?.extendedTextMessage?.text;

    if (!message) return NextResponse.json({ ok: true });

    const from = data.key.remoteJid;
    const text = message.trim();

    // ✅ Only REGISTER command
    if (text.toUpperCase().startsWith('REGISTER')) {
      const name = text.replace(/REGISTER/i, '').trim();

      if (!name) {
        await sendMessage(from, '❌ Use format: REGISTER Your Full Name');
        return NextResponse.json({ ok: true });
      }

      const userId = `USR${Date.now().toString().slice(-6)}`;
      const password = Math.random().toString(36).slice(-8);

      await sendMessage(
        from,
        `✅ Registration Successful!\n\nUser ID: ${userId}\nPassword: ${password}\n\nLogin:\nhttps://saubh.tech/login`
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ ok: true }); // ⚠️ never throw 500
  }
}

async function sendMessage(to: string, text: string) {
  await fetch(
    `${process.env.EVOLUTION_API_URL}/message/sendText/${process.env.EVOLUTION_INSTANCE_NAME}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: process.env.EVOLUTION_INSTANCE_TOKEN!,
      },
      body: JSON.stringify({
        number: to.replace('@s.whatsapp.net', ''),
        text,
      }),
    }
  );
}
