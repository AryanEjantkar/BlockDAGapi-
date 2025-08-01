import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: "Missing GROQ_API_KEY in environment" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing 'message' in request body" });
  }

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          { role: "system", content: "You are a helpful assistant specializing in crypto investing." },
          { role: "user", content: message },
        ],
        temperature: 0.7,
      }),
    });

    const data = await groqRes.json();

    const reply = data?.choices?.[0]?.message?.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Groq API error:", error);
    res.status(500).json({ error: "Groq API call failed" });
  }
}
