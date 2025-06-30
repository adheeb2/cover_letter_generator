import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CoverletterService } from './coverletter.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('cover-letter')
export class CoverletterController {
  constructor(private readonly CoverLetterService: CoverletterService) {}

  @Post()
  async generate(
    @Body('role') role: string,
    @Body('skills') skills: string[],
    @Body('tone') tone: string,
  ) {
    const result = await this.CoverLetterService.generateCoverLetter(
      role,
      skills,
      tone,
    );
    return { coverLetter: result };
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `file-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const extractedText =
      await this.CoverLetterService.extractTextFromFile(file);
    const coverLetter =
      await this.CoverLetterService.generateCoverLetterFromText(extractedText);
    return { extractedText, coverLetter };
  }
}
