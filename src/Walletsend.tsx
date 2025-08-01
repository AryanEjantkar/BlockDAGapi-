import React from "react";

type WalletType = "metamask" | "phantom" | null;

interface WalletsendProps {
  walletAddress: string;
  walletType: WalletType;
  setWalletAddress: (address: string) => void;
  setWalletType: (type: WalletType) => void;
  setStatus: (msg: string) => void;
}

const Walletsend: React.FC<WalletsendProps> = ({
  walletAddress,
  walletType,
  setWalletAddress,
  setWalletType,
  setStatus,
}) => {
  // Simulate wallet connection functions

  const connectMetamask = async () => {
    // Simulated logic to connect MetaMask wallet
    setWalletAddress("0xMetaMaskFakeAddress123");
    setWalletType("metamask");
    setStatus("Connected to MetaMask");
  };

  const connectPhantom = async () => {
    // Simulated logic to connect Phantom wallet
    setWalletAddress("PhantomFakeAddress456");
    setWalletType("phantom");
    setStatus("Connected to Phantom");
  };

  const disconnectWallet = () => {
    setWalletAddress("");
    setWalletType(null);
    setStatus("Disconnected wallet");
  };

  return (
    <div className="p-4 bg-zinc-800 rounded-lg mb-6">
      <h2 className="text-xl mb-2">Wallet Connection</h2>
      {walletAddress ? (
        <div>
          <p>
            Connected wallet: <strong>{walletType}</strong>
          </p>
          <p>Address: {walletAddress}</p>
          <button
            onClick={disconnectWallet}
            className="mt-2 bg-red-600 px-4 py-2 rounded"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={connectMetamask}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Connect MetaMask
          </button>
          <button
            onClick={connectPhantom}
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
          >
            Connect Phantom
          </button>
        </div>
      )}
    </div>
  );
};

export default Walletsend;
