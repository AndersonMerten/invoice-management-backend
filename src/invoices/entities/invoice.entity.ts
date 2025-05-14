import { ApiProperty } from '@nestjs/swagger';
import { Invoice } from '@prisma/client';

export class InvoiceEntity implements Invoice {
  @ApiProperty()
  id: number;

  @ApiProperty()
  client_name: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  createdAt: Date;
}
