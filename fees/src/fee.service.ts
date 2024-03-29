import { Injectable, Logger } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { randomUUID } from 'crypto';
import { OrderPlacedEvent } from '@simplebank/shared-objects/dist';

@Injectable()
export class FeeService {
  private readonly logger = new Logger(FeeService.name);

  @RabbitSubscribe({
    exchange: 'temp-exchange-name',
    routingKey: 'temp.routing.key',
    queue: `${randomUUID()}`,
    queueOptions: {
      autoDelete: true,
    },
  })
  subscribeOrderPlaced(event: OrderPlacedEvent) {
    // TODO
  }
}
