"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Data4 from "@/data/teste-history.json";

export default function ModalHistory() {
  interface History1 {
    url: string;
    title: string;
    visitTime: string;
    duration: string;
  }

  interface History2 {
    id: number;
    history: Array<History1>;
  }

  const history2: History1[] = Data4.flatMap((item) => item.history);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const handleCloseHistory = () => {
    setIsHistoryOpen(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Image src={logo} alt="Nyx Logo" width={700} height={700} />
        </div>
        {/* BotÃ£o de fechar */}

        <button
          onClick={handleCloseHistory}
          className=" self-start text-red-700"
        >
          CLOSE
        </button>
        <h1 className="text-3xl font-bold text-center">History</h1>
        <div>
          {history2.map(({ url, title, visitTime, duration }, index) => (
            <div className="bg-zinc-900 p-4 rounded-md" key={index}>
              <strong>{title}</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{url}</p>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {visitTime}
              </p>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
