import { ApiProperty } from '@nestjs/swagger';

export class NotificationsCountResponse {
  @ApiProperty({ example: 1 })
  count: number;
}
