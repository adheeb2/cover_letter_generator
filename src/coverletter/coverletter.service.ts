import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs/promises';
import * as pdfParse from 'pdf-parse';
import * as mammoth from 'mammoth';
import * as path from 'path';

@Injectable()
export class CoverletterService {
  async generateCoverLetter(
    role: string,
    skills: string[],
    tone: string,
  ): Promise<string> {
    const apiKey = process.env.COHERE_API_KEY;

    const prompt = `Write a ${tone} cover letter for a job role as ${role} with the following skills: ${skills.join('')}. Make it concise and professional`;
    const response = await axios.post(
      'https://api.cohere.ai/v1/generate',
      {
        // model: 'command-medium-nightly',
        prompt: prompt,
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
    return response.data.generations[0].text.trim();
  }
  async extractTextFromFile(file: Express.Multer.File): Promise<string> {
    const filePath = file.path;
    const ext = path.extname(file.originalname).toLowerCase();

    if (ext === '.txt') {
      return await fs.readFile(filePath, 'utf-8');
    } else if (ext === '.pdf') {
      const data = await fs.readFile(filePath);
      const result = await pdfParse(data);
      return result.text;
    } else if (ext === '.docx') {
      const data = await fs.readFile(filePath);
      const result = await mammoth.extractRawText({ buffer: data });
      return result.value;
    } else {
      throw new Error('Unsupported file type');
    }
  }
  async generateCoverLetterFromText(text: string): Promise<string> {
    const apiKey = process.env.COHERE_API_KEY;
    const prompt = `Based on the following resume or content, write a concise, professional cover letter:\n\n${text}`;

    const response = await axios.post(
      'https://api.cohere.ai/v1/generate',
      {
        prompt: prompt,
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
    return response.data.generations[0].text.trim();
  }
}
