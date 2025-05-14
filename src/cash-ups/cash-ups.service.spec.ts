import { Test, TestingModule } from '@nestjs/testing';
import { CashUpsService } from './cash-ups.service';

describe('CashUpsService', () => {
  let service: CashUpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashUpsService],
    }).compile();

    service = module.get<CashUpsService>(CashUpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
