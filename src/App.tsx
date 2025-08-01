import React, { useEffect, useState } from "react";
import Walletsend from "./Walletsend"; // note the lowercase 's'
import GroqAssistant from "./components/groqAssistant";

const App: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [walletType, setWalletType] = useState<"metamask" | "phantom" | null>(null);

  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Add wallet connection logic here to update walletAddress and walletType as needed

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-purple-400">KryptaNator</h1>
            <button
              onClick={toggleDarkMode}
              className="bg-zinc-800 hover:bg-zinc-700 text-sm text-white px-4 py-2 rounded-xl"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          <Walletsend
            walletAddress={walletAddress}
            walletType={walletType}
            setStatus={() => {}}
          />

          <GroqAssistant />
        </div>
      </div>
    </div>
  );
};

export default App;
