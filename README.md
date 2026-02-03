# AI Primary Care Physician Prototype

This repository contains the prototype and design documentation for the AI PCP Take-Home detailed below.

## Deliverables
- **System Design**: located in `docs/SYSTEM_DESIGN.md`
- **Validation Plan**: located in `docs/VALIDATION_PLAN.md`
- **Reflection**: located in `docs/REFLECTION.md`
- **Prototype**: A Web-based Chat Interface (React) connected to an AI Logic Server (Node.js).

## How to Run the Prototype

### Prerequisites
- Node.js installed.
- OpenAI API Key (create a `.env` file in `server/` with `OPENAI_API_KEY=sk-...`).

### 1. Start the Backend Server
```bash
cd server
npm install
npm start
```
The server will run on `http://localhost:3001`.

### 2. Start the Frontend Client
Open a new terminal window:
```bash
cd client
npm install
npm run dev
```
The client will run on `http://localhost:5173`. Open this URL in your browser.

## Testing Flows
- **Mild Case**: Type "I have a headache." -> Expect 3 numbered recommendations.
- **Emergency Case**: Type "I have severe chest pain." -> Expect immediate escalation.

## Design Constraints
- System Instructions are under 500 words.
- Strict linguistic protocols ("I understand", No Jargon) are enforced via System Prompt.
