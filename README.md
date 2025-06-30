# 🤖 AI-Powered Cover Letter Generator

An AI powered NestJS application that generates tailored, professional cover letters using state-of-the-art **Generative AI** via the **Cohere Language Model API**. Users can input their resume or skillset, and instantly receive a customized cover letter based on the role and tone selected.

---

## 🔍 Features

- 🧠 **AI-Powered**: Uses Cohere's large language model (`command-medium-nightly`) to write professional cover letters.
- 📄 **Resume File Parsing**: Upload `.pdf`, `.docx`, or `.txt` files — auto-extracts resume content.
- 🧠 **Dynamic Prompting**: Prompts are generated based on user role, skills, and tone.
- ⚙️ **Built with NestJS**: Modular, scalable backend using TypeScript and Express.
- 🗃️ **File Upload Support**: Integrated with `Multer` to handle user resume uploads.
- 🔐 **Environment Configs**: API keys handled securely using `.env`.

---

## 🛠️ Tech Stack

| Layer            | Tech Stack                                               |
| ---------------- | -------------------------------------------------------- |
| **Backend**      | NestJS, TypeScript, Axios                                |
| **AI Engine**    | [Cohere AI](https://cohere.com) (command-medium-nightly) |
| **File Parsing** | `pdf-parse`, `mammoth`, `fs/promises`                    |
| **Uploads**      | `Multer`, `diskStorage`                                  |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/coverletter-generator.git
cd coverletter-generator

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env

#Update your environment file
COHERE_API_KEY=your_cohere_api_key

```

---

## Running The App

```bash
# Development
pnpm start:dev

# Production
pnpm build
pnpm start:prod

```

---

## API ENDPOINTS

### 1. Generate from Role and Skills

- **Method:** `POST`
- **Endpoint:** `http://localhost:3000/cover-letter`
- **Body (JSON):**

```json
{
  "role": "Frontend Developer",
  "skills": ["React", "CSS", "JavaScript"],
  "tone": "professional"
}
```

### 2. Generate from Resume File

- **Method:** `POST`
- **Endpoint:** `http://localhost:3000/cover-letter/upload`
- **Form-data**
- file: .pdf, .docx, or .txt

## How AI is Used

This project utilizes Cohere’s LLM API for generating cover letters using **prompt engineering** techniques. The system sends a carefully structured prompt (based on user inputs or parsed resume) to the model, which returns a fully-formed, context-aware cover letter — simulating human writing ability.

```bash
`Write a ${tone} cover letter for a job role as ${role} with the following skills: ${skills.join('')}. Make it concise and professional`;

```

## Use Cases

This service is ideal for:

- **AI-powered** HR tools

- **Resume** builders

- Developer **portfolio** assistants

- Automation **pipelines** for job application workflows
