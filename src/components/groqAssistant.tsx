import { useState } from "react";

export default function GroqAssistant() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askGroq = async () => {
    setLoading(true);
    setResponse("");

    const res = await fetch("/api/askAI", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Give advice on improving my crypto investment strategy.",
      }),
    });

    const data = await res.json();
    setResponse(data.reply || "No response from AI.");
    setLoading(false);
  };

  return (
    <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-xl mt-8 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-purple-400">💡 KryptaNator Assistant</h2>
      
      <button
        onClick={askGroq}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl mb-4"
      >
        {loading ? "Thinking..." : "Ask Assistant"}
      </button>

      {response && (
        <div className="whitespace-pre-wrap bg-zinc-800 text-green-300 p-4 rounded-xl border border-zinc-700">
          {response}
        </div>
      )}
    </div>
  );
}
