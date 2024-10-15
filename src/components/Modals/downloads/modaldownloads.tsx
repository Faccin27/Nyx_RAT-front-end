"use client";
import { useState } from "react";
import Image from "next/image";

import logo from "@/assets/logo.png";
import Data5 from "@/data/teste-downloads.json";
import Link from "next/link";

interface Downloads {
  id: number;
  fileName: string;
  fileSize: string;
  downloadDate: string;
}

const dl: Downloads[] = Data5;

export default function ModalDownloads() {
  const [isDownloadsOpen, setIsDownloadsOpen] = useState<boolean>(false);
  const handleCloseDL = () => {
    setIsDownloadsOpen(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Image src={logo} alt="Nyx Logo" width={700} height={700} />
        </div>
        {/* BotÃ£o de fechar */}

        <button onClick={handleCloseDL} className=" self-start text-red-700">
          CLOSE
        </button>
        <h1 className="text-3xl font-bold text-center">Donwloads</h1>
        <div>
          {dl.map(({ id, fileName, fileSize, downloadDate }) => (
            <div className="grid grid-cols-2 gap-4 ml-auto" key={id}>
              <div className="bg-zinc-900 p-4 rounded-md">
                <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                  <Link
                    href={"#"}
                    className="  text-purple-400 hover:underline hover:text-blue-500"
                  >
                    {fileName}
                  </Link>
                </p>
                <div className="bg-zinc-900 p-4 rounded-md">
                  <strong className="text-purple-400">{fileSize}</strong>
                </div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-md">
                <strong className="text-purple-400">{downloadDate}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
