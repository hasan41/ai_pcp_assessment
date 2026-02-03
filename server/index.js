// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai'); // Make sure to install: npm install openai
const { SYSTEM_PROMPT } = require('./systemPrompt');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Initialize OpenAI Logic
// NOTE: In a real scenario, this comes from process.env.OPENAI_API_KEY
// generic error handling if missing
const apiKey = process.env.OPENAI_API_KEY;
let openai = null;
if (apiKey) {
    openai = new OpenAI({ apiKey });
}

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body; // Expects array of { role, content }

        if (!messages) {
            return res.status(400).json({ error: 'Messages array required' });
        }

        // Construct the full conversation history for the AI
        // Prepend system prompt
        const conversation = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages
        ];

        let aiContent = "";

        if (openai) {
            const completion = await openai.chat.completions.create({
                messages: conversation,
                model: 'gpt-4o', // or gpt-3.5-turbo
            });
            aiContent = completion.choices[0].message.content;
        } else {
            // Fallback for testing/mocking if no key provided yet
            aiContent = "[MOCK AI] I understand. I am simulating a response because the API Key is missing. What concerns you most about this?";
        }

        res.json({ role: 'assistant', content: aiContent });

    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
