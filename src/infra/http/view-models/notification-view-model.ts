import { Notification } from '@application/entities/notification';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationRepresentationModel {
  @ApiProperty({ example: '34ba681b-9ecd-418f-a406-5f42af53ed06' })
  id: string;

  @ApiProperty({ example: 'd659c97b-7cc9-4f51-8b90-ecdaacd6ff8c' })
  recipientId: string;

  @ApiProperty({ example: 'You have a new friend request' })
  content: string;

  @ApiProperty({ example: 'social' })
  category: string;
}

export class NotificationViewModel {
  static toHttp(notification: Notification): NotificationRepresentationModel {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
    };
  }
}
