import { ApiProperty } from '@nestjs/swagger';
import { CashUp } from '@prisma/client';

export class CashUpEntity implements CashUp {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false })
  date: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  pix: number;

  @ApiProperty()
  others: number;

  @ApiProperty()
  card: number;
}
