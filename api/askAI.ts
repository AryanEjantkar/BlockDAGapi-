import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Missing "message" in request body.' });
      }

      // Example response
      const reply = `You said: "${message}". AI says hi 👋`;

      return res.status(200).json({ reply });
    } catch (err) {
      console.error('Error in askAI:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
