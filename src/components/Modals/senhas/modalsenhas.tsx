"use client";
import { useState} from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Data2 from "@/data/teste-senhas.json";

export default function ModalPassowrds() {
  interface Senhas {
    id: number;
    location: string;
    password: string;
    email: string;
  }
  const senhas: Senhas[] = Data2;
  const [isModalOpenSenha, setIsModalOpenSenha] = useState<boolean>(false);
  const handleCloseModalSenha = () => {
    setIsModalOpenSenha(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Image src={logo} alt="Nyx Logo" width={700} height={700} />
        </div>
        {/* BotÃ£o de fechar */}

        <button
          onClick={handleCloseModalSenha}
          className=" self-start text-red-700"
        >
          CLOSE
        </button>
        <h1 className="text-3xl font-bold text-center">Passwords</h1>
        <div>
          {senhas.map(({ id, location, password, email }) => (
            <div className="grid grid-cols-2 gap-4" key={id}>
              <div className="bg-zinc-900 p-4 rounded-md">
                <strong>{location}</strong>
              </div>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {password}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
