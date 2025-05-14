import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BalancesController } from './balances.controller';
import { BalancesService } from './balances.service';

@Module({
  controllers: [BalancesController],
  providers: [BalancesService],
  imports: [PrismaModule],
})
export class BalancesModule {}
