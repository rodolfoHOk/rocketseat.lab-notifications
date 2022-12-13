import { Body, Controller, Get, Post } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async listNotifications(): Promise<Notification[]> {
    return await this.prismaService.notification.findMany();
  }

  @Post()
  async createNotification(
    @Body() body: CreateNotificationBody,
  ): Promise<Notification> {
    const { recipientId, content, category } = body;

    return this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        recipientId,
        content,
        category,
      },
    });
  }
}
