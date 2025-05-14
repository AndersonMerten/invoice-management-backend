import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCashUpDto } from './dto/create-cash-up.dto';
import { UpdateCashUpDto } from './dto/update-cash-up.dto';

@Injectable()
export class CashUpsService {
  constructor(private prisma: PrismaService) {}

  create(createCashUpDto: CreateCashUpDto) {
    return this.prisma.cashUp.create({ data: createCashUpDto });
  }

  findAll() {
    return this.prisma.cashUp.findMany();
  }

  findOne(id: number) {
    return this.prisma.cashUp.findUnique({ where: { id } });
  }

  update(id: number, updateCashUpDto: UpdateCashUpDto) {
    return this.prisma.cashUp.update({
      where: { id },
      data: updateCashUpDto,
    });
  }

  remove(id: number) {
    return this.prisma.cashUp.delete({ where: { id } });
  }
}
