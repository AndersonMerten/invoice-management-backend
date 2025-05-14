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
import { BalancesService } from './balances.service';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';
import { BalanceEntity } from './entities/balance.entity';

@Controller('balances')
@ApiTags('Balances')
export class BalancesController {
  constructor(private readonly balancesService: BalancesService) {}

  @Post()
  @ApiCreatedResponse({ type: BalanceEntity })
  create(@Body() createBalanceDto: CreateBalanceDto) {
    return this.balancesService.create(createBalanceDto);
  }

  @Get()
  @ApiOkResponse({ type: BalanceEntity, isArray: true })
  findAll() {
    return this.balancesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BalanceEntity })
  findOne(@Param('id') id: string) {
    return this.balancesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BalanceEntity })
  update(@Param('id') id: string, @Body() updateBalanceDto: UpdateBalanceDto) {
    return this.balancesService.update(+id, updateBalanceDto);
  }

  @ApiOkResponse({ type: BalanceEntity })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.balancesService.remove(+id);
  }
}
