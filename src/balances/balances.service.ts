import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';

@Injectable()
export class BalancesService {
  constructor(private prisma: PrismaService) {}

  create(createBalanceDto: CreateBalanceDto) {
    return this.prisma.balance.create({ data: createBalanceDto });
  }

  findAll() {
    return this.prisma.balance.findMany();
  }

  findOne(id: number) {
    return this.prisma.balance.findUnique({ where: { id } });
  }

  update(id: number, updateBalanceDto: UpdateBalanceDto) {
    return this.prisma.balance.update({
      where: { id },
      data: updateBalanceDto,
    });
  }

  remove(id: number) {
    return this.prisma.balance.delete({ where: { id } });
  }
}
