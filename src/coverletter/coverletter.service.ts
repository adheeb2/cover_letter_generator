import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CoverletterService {
  async generateCoverLetter(
    role: string,
    skills: string[],
    tone: string,
  ): Promise<string> {
    const apiKey = process.env.COHERE_API_KEY;

    const message = `Write a ${tone} cover letter for a job role as ${role} with the following skills: ${skills.join('')}. Make it concise and professional`;
    const response = await axios.post(
      'https://api.cohere.ai/v1/chat', //showed v1/generate was issue
      {
        model: 'command-r-plus', //showed model issue
        message: message, //issue here when prompt used
        max_tokens: 500,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data.text.trim(); //issue here when generate used
  }
}
