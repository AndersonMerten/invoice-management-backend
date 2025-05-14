import { PartialType } from '@nestjs/swagger';
import { CreateCashUpDto } from './create-cash-up.dto';

export class UpdateCashUpDto extends PartialType(CreateCashUpDto) {}
