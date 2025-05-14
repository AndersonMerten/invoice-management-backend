import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InvoicesModule } from './invoices/invoices.module';
import { CashUpsModule } from './cash-ups/cash-ups.module';
import { BalancesModule } from './balances/balances.module';

@Module({
  imports: [PrismaModule, InvoicesModule, CashUpsModule, BalancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
