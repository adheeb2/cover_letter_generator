import { Body, Controller, Post } from '@nestjs/common';
import { CoverletterService } from './coverletter.service';

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
}
