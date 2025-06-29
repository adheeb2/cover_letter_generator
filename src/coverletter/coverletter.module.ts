import { Module } from '@nestjs/common';
import { CoverletterController } from './coverletter.controller';
import { CoverletterService } from './coverletter.service';

@Module({
  controllers: [CoverletterController],
  providers: [CoverletterService]
})
export class CoverletterModule {}
