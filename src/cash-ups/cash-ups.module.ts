import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CashUpsController } from './cash-ups.controller';
import { CashUpsService } from './cash-ups.service';

@Module({
  controllers: [CashUpsController],
  providers: [CashUpsService],
  imports: [PrismaModule],
})
export class CashUpsModule {}
