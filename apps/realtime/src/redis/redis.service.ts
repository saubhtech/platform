import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

/**
 * Redis pub/sub service for WebSocket fanout.
 *
 * TODO Phase 2: Full fanout implementation
 *   - Subscribe to channels per conversation
 *   - Publish messages for multi-instance broadcasting
 *   - Use @socket.io/redis-adapter for native Socket.io scaling
 */
@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private client: Redis | null = null;
  private subscriber: Redis | null = null;

  async onModuleInit() {
    const url = process.env.REDIS_URL;

    if (!url) {
      this.logger.warn(
        'REDIS_URL not set — Redis pub/sub disabled. Set REDIS_URL to enable.',
      );
      return;
    }

    try {
      this.client = new Redis(url);
      this.subscriber = new Redis(url);

      this.client.on('connect', () =>
        this.logger.log('Redis pub client connected'),
      );
      this.subscriber.on('connect', () =>
        this.logger.log('Redis sub client connected'),
      );

      this.client.on('error', (err) =>
        this.logger.error(`Redis pub error: ${err.message}`),
      );
      this.subscriber.on('error', (err) =>
        this.logger.error(`Redis sub error: ${err.message}`),
      );
    } catch (err) {
      this.logger.error(`Failed to connect to Redis: ${err}`);
    }
  }

  async onModuleDestroy() {
    await this.client?.quit();
    await this.subscriber?.quit();
    this.logger.log('Redis connections closed');
  }

  /**
   * Publish a message to a Redis channel.
   * TODO Phase 2: Wire into ChatGateway for cross-instance fanout.
   */
  async publish(channel: string, message: string): Promise<void> {
    if (!this.client) {
      this.logger.warn('Redis publish skipped — no connection');
      return;
    }
    await this.client.publish(channel, message);
  }

  /**
   * Subscribe to a Redis channel with a callback handler.
   * TODO Phase 2: Wire into ChatGateway to receive messages from other instances.
   */
  async subscribe(
    channel: string,
    handler?: (message: string) => void,
  ): Promise<void> {
    if (!this.subscriber) {
      this.logger.warn('Redis subscribe skipped — no connection');
      return;
    }

    await this.subscriber.subscribe(channel);

    if (handler) {
      this.subscriber.on('message', (ch, msg) => {
        if (ch === channel) handler(msg);
      });
    }
  }
}
