import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoverletterModule } from './coverletter/coverletter.module';
import { resolve, dirname, join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

const uploadsPath = resolve(__dirname, '..', '..', 'uploads');
console.log(uploadsPath);
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: uploadsPath,
      serveRoot: '/uploads',
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    CoverletterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
