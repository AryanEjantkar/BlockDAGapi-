import { useState } from "react";

function App() {
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");

  const askGroqAssistant = async () => {
    setStatus("Asking Assistant...");
    setResponse("");

    try {
      const res = await fetch("/api/askAI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Give advice on improving my crypto investment strategy.",
        }),
      });

      const data = await res.json();
      setResponse(data.reply || "No response from AI.");
      setStatus("✅ Response received");
    } catch (error) {
      console.error("Error calling Groq AI:", error);
      setStatus("❌ AI call failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">KryptaNator: Crypto Assistant</h1>

      <button
        onClick={askGroqAssistant}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl mb-6"
      >
        Ask Assistant
      </button>

      {status && <p className="text-sm text-gray-400 mb-2">{status}</p>}

      {response && (
        <div className="w-full max-w-2xl p-4 bg-gray-800 rounded-xl shadow text-green-300 whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  );
}

export default App;
