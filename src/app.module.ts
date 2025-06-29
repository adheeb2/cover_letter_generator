import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CoverletterModule } from './coverletter/coverletter.module';

@Module({
  imports: [ConfigModule.forRoot(), CoverletterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
