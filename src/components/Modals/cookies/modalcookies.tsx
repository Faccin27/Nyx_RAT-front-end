"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

import Data3 from '@/data/teste-cookies.json'


export default function ModalCookies() {
    interface Cookies {
        id: number;
        location: string;
        cookie: string;
      }
      const biscoitos: Cookies[] = Data3;      
    const [isCookiesOpen, setIsCookiesOpen] = useState<boolean>(false);
    const handleCloseCookies = () =>{
      setIsCookiesOpen(false)
    }

    return(
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <Image src={logo} alt="Nyx Logo" width={700} height={700} />
          </div>
          {/* BotÃ£o de fechar */}

          <button
            onClick={()=>handleCloseCookies()}
            className=" self-start text-red-700"
          >
            CLOSE
          </button>
          <h1 className="text-3xl font-bold text-center">Cookies</h1>
          <div>
            {biscoitos.map(({ id, location, cookie }) => (
              <div className="bg-zinc-900 p-4 rounded-md" key={id}>
                <strong>{location}</strong>
                <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                  {cookie}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
