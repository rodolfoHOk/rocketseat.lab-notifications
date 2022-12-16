import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        brokers: ['neutral-ox-6358-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          username: process.env.KAFKA_UPSTASH_USER!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          password: process.env.KAFKA_UPSTASH_KEY!,
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
