import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  recipientId: string;
  content: string;
  category: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() payload: SendNotificationPayload) {
    await this.sendNotification.execute({
      recipientId: payload.recipientId,
      content: payload.content,
      category: payload.category,
    });
  }
}
