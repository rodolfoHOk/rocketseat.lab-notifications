import { ApiProperty } from '@nestjs/swagger';
import { NotificationRepresentationModel } from '../view-models/notification-view-model';

export class NotificationResponse {
  @ApiProperty({ type: NotificationRepresentationModel })
  notification: NotificationRepresentationModel;
}
