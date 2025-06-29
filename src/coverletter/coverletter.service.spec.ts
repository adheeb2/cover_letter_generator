import { Test, TestingModule } from '@nestjs/testing';
import { CoverletterService } from './coverletter.service';

describe('CoverletterService', () => {
  let service: CoverletterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoverletterService],
    }).compile();

    service = module.get<CoverletterService>(CoverletterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
