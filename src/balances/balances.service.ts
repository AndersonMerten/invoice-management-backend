import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';

@Injectable()
export class BalancesService {
  constructor(private prisma: PrismaService) {}

  async create(createBalanceDto: CreateBalanceDto) {
    const invoicesSum = await this.prisma.invoice.aggregate({
      _sum: { value: true },
    });

    const cashupsSum = await this.prisma.cashUp.aggregate({
      _sum: { pix: true, card: true, others: true },
    });

    const totalCashups =
      (cashupsSum._sum.pix || 0) +
      (cashupsSum._sum.card || 0) +
      (cashupsSum._sum.others || 0);
    const balanceValue = (invoicesSum._sum.value || 0) - totalCashups;

    // Cria um novo objeto de dados para salvar
    const balanceData = {
      value: balanceValue,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };

    // Salva o balance no banco de dados
    return this.prisma.balance.create({ data: balanceData });
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
