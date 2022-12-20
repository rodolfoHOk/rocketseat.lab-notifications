import { ApiProperty } from '@nestjs/swagger';
import { NotificationRepresentationModel } from '../view-models/notification-view-model';

export class NotificationsResponse {
  @ApiProperty({ type: [NotificationRepresentationModel] })
  notifications: NotificationRepresentationModel[];
}
