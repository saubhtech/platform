import { Controller, Post, Body, Headers, HttpCode } from '@nestjs/common';

@Controller('webhooks')
export class WebhookController {
  /**
   * POST /api/webhooks/telephony/providerX
   *
   * Receives inbound telephony events from the provider.
   * TODO Phase 2: Verify provider signature from x-signature header.
   * TODO Phase 2: Parse payload and log to TelephonyEvent table via PrismaService.
   */
  @Post('telephony/providerX')
  @HttpCode(200)
  async handleTelephonyWebhook(
    @Headers('x-signature') _signature: string,
    @Body() body: Record<string, unknown>,
  ) {
    // TODO: Verify webhook signature
    // const isValid = verifySignature(signature, body, secret);
    // if (!isValid) throw new UnauthorizedException('Invalid signature');

    // TODO: Log event to TelephonyEvent table
    // await this.prisma.telephonyEvent.create({
    //   data: {
    //     callId: body.callId,
    //     eventType: body.event,
    //     payload: body,
    //   },
    // });

    console.log('[webhook] telephony event received:', JSON.stringify(body).slice(0, 200));

    return { received: true };
  }
}
