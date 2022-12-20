import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ example: 'd659c97b-7cc9-4f51-8b90-ecdaacd6ff8c' })
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  @ApiProperty({ example: 'You have a new friend request' })
  content: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'social' })
  category: string;
}
