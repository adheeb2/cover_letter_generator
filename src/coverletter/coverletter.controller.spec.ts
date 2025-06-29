import { Test, TestingModule } from '@nestjs/testing';
import { CoverletterController } from './coverletter.controller';

describe('CoverletterController', () => {
  let controller: CoverletterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoverletterController],
    }).compile();

    controller = module.get<CoverletterController>(CoverletterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
