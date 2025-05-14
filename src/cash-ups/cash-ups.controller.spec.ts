import { Test, TestingModule } from '@nestjs/testing';
import { CashUpsController } from './cash-ups.controller';
import { CashUpsService } from './cash-ups.service';

describe('CashUpsController', () => {
  let controller: CashUpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashUpsController],
      providers: [CashUpsService],
    }).compile();

    controller = module.get<CashUpsController>(CashUpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
