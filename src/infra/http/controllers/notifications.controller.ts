import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { NotificationResponse } from '../dtos/notification-response';
import { NotificationsCountResponse } from '../dtos/notifications-count-response';
import { NotificationsResponse } from '../dtos/notifications-response';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Send notification' })
  @ApiCreatedResponse({
    description: 'The notification has been successfully send',
    type: NotificationResponse,
  })
  async create(
    @Body() body: CreateNotificationBody,
  ): Promise<NotificationResponse> {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHttp(notification),
    };
  }

  @Get('recipients/:recipientId/count')
  @ApiOperation({ summary: 'Count recipient notifications' })
  @ApiOkResponse({
    description: 'Ok',
    type: NotificationsCountResponse,
  })
  async countByRecipient(
    @Param('recipientId') recipientId: string,
  ): Promise<NotificationsCountResponse> {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });

    return {
      count,
    };
  }

  @Get('recipients/:recipientId')
  @ApiOperation({ summary: 'Get recipient notifications' })
  @ApiOkResponse({ description: 'Ok', type: NotificationsResponse })
  async getByRecipient(
    @Param('recipientId') recipientId: string,
  ): Promise<NotificationsResponse> {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return { notifications: notifications.map(NotificationViewModel.toHttp) };
  }

  @Patch(':id/cancel')
  @HttpCode(204)
  @ApiOperation({ summary: 'Cancel notification' })
  @ApiNoContentResponse({ description: 'Ok / No Content' })
  async cancel(@Param('id') id: string): Promise<void> {
    await this.cancelNotification.execute({ notificationId: id });
  }

  @Patch(':id/read')
  @HttpCode(204)
  @ApiOperation({ summary: 'Read notification' })
  @ApiNoContentResponse({ description: 'Ok / No Content' })
  async read(@Param('id') id: string): Promise<void> {
    await this.readNotification.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  @HttpCode(204)
  @ApiOperation({ summary: 'Unread notification' })
  @ApiNoContentResponse({ description: 'Ok / No Content' })
  async unread(@Param('id') id: string): Promise<void> {
    await this.unreadNotification.execute({ notificationId: id });
  }
}
