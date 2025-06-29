import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoverletterModule } from './coverletter/coverletter.module';

@Module({
  imports: [ConfigModule.forRoot(), CoverletterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
