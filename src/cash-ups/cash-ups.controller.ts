import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CashUpsService } from './cash-ups.service';
import { CreateCashUpDto } from './dto/create-cash-up.dto';
import { UpdateCashUpDto } from './dto/update-cash-up.dto';
import { CashUpEntity } from './entities/cash-up.entity';

@Controller('cash-ups')
@ApiTags('Cash Ups')
export class CashUpsController {
  constructor(private readonly cashUpsService: CashUpsService) {}

  @Post()
  @ApiCreatedResponse({ type: CashUpEntity })
  create(@Body() createCashUpDto: CreateCashUpDto) {
    return this.cashUpsService.create(createCashUpDto);
  }

  @Get()
  @ApiOkResponse({ type: CashUpEntity, isArray: true })
  findAll() {
    return this.cashUpsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CashUpEntity })
  findOne(@Param('id') id: string) {
    return this.cashUpsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CashUpEntity })
  update(@Param('id') id: string, @Body() updateCashUpDto: UpdateCashUpDto) {
    return this.cashUpsService.update(+id, updateCashUpDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CashUpEntity })
  remove(@Param('id') id: string) {
    return this.cashUpsService.remove(+id);
  }
}
