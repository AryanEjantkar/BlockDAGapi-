// /api/askai.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'GET request to /api/askai successful 🎉' });
  } else if (req.method === 'POST') {
    const { question } = req.body || {};
    if (!question) {
      return res.status(400).json({ error: 'Missing `question` in request body' });
    }

    // 🧠 Example logic (replace with your Groq or AI API call later)
    const answer = `You asked: "${question}". Here's a placeholder response.`;

    res.status(200).json({ answer });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
