import { ApiProperty } from '@nestjs/swagger';

export class CreateCashUpDto {
  @ApiProperty({ required: false })
  date: string;

  @ApiProperty()
  pix: number;

  @ApiProperty()
  card: number;

  @ApiProperty()
  others: number;
}
