import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @ApiProperty({ required: true })
  client_name: string;

  @ApiProperty({ required: true })
  value: number;
}
