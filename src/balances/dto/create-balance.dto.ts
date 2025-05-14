import { ApiProperty } from '@nestjs/swagger';

export class CreateBalanceDto {
  @ApiProperty({ required: true })
  value: number;

  @ApiProperty({ required: true })
  month: number;

  @ApiProperty({ required: true })
  year: number;
}
