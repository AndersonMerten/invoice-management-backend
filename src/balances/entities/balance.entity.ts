import { ApiProperty } from '@nestjs/swagger';
import { Balance } from '@prisma/client';

export class BalanceEntity implements Balance {
  @ApiProperty()
  id: number;

  @ApiProperty()
  value: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  month: number;

  @ApiProperty()
  year: number;
}
