"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png";

export default function ModalPrincing() {
  const [isModalOpenPrice, setIsModalOpenPrice] = useState<boolean>(false);
  const rota = useRouter();
  const handleCloseModalPrice = () => {
    setIsModalOpenPrice(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6 ">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none ">
          <Image src={logo} alt="Nyx Logo" width={700} height={700} />
        </div>
        {/* Botão de fechar */}

        <button
          onClick={handleCloseModalPrice}
          className=" self-start text-red-700"
        >
          CLOSE
        </button>
        <div className="text-center my-10">
          <h1 className="text-5xl font-bold text-purple-400 border-b-4 border-purple-600 inline-block pb-2 mb-8 transition-all duration-300 ease-in-out transform hover:scale-105">
            Our Plans
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            Choose a plan that fits your needs and experience the best of Nyx
            Rat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  z-50 max-w-fit ml-auto mr-auto">
          {/* Plan Basic */}
          <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4 text-purple-400">
              Basic
            </h3>
            <ul className="text-left text-sm">
              <li>
                Display-Name: <span className="text-green-500">✓</span>
              </li>
              <li>
                Hostname: <span className="text-green-500">✓</span>
              </li>
              <li>
                Username: <span className="text-green-500">✓</span>
              </li>
              <li>
                System: <span className="text-green-500">✓</span>
              </li>
              <li>
                Version: <span className="text-green-500">✓</span>
              </li>
              <li>
                Architecture: <span className="text-green-500">✓</span>
              </li>
              <li>
                CPU: <span className="text-green-500">✓</span>
              </li>
              <li>
                GPU: <span className="text-red-500">X</span>
              </li>
              <li>
                RAM: <span className="text-green-500">✓</span>
              </li>
              <li>
                HWID: <span className="text-red-500">X</span>
              </li>
              <li>
                IP: <span className="text-green-500">✓</span>
              </li>
              <li>
                MAC: <span className="text-red-500">X</span>
              </li>
              <li>
                Country: <span className="text-green-500">✓</span>
              </li>
              <li>
                Region: <span className="text-green-500">✓</span>
              </li>
              <li>
                City: <span className="text-green-500">✓</span>
              </li>
              <li>
                CEP: <span className="text-red-500">X</span>
              </li>
              <li>
                ISP: <span className="text-red-500">X</span>
              </li>
              <li>
                Web-Cam: <span className="text-green-500">✓</span>
              </li>
              <li>
                Print-screen: <span className="text-red-500">X</span>
              </li>
            </ul>
          </div>

          {/* Plan Pro */}
          <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4 text-purple-400">Pro</h3>
            <ul className="text-left text-sm">
              <li>
                Display-Name: <span className="text-green-500">✓</span>
              </li>
              <li>
                Hostname: <span className="text-green-500">✓</span>
              </li>
              <li>
                Username: <span className="text-green-500">✓</span>
              </li>
              <li>
                System: <span className="text-green-500">✓</span>
              </li>
              <li>
                Version: <span className="text-green-500">✓</span>
              </li>
              <li>
                Architecture: <span className="text-green-500">✓</span>
              </li>
              <li>
                CPU: <span className="text-green-500">✓</span>
              </li>
              <li>
                GPU: <span className="text-green-500">✓</span>
              </li>
              <li>
                RAM: <span className="text-green-500">✓</span>
              </li>
              <li>
                HWID: <span className="text-green-500">✓</span>
              </li>
              <li>
                IP: <span className="text-green-500">✓</span>
              </li>
              <li>
                MAC: <span className="text-green-500">✓</span>
              </li>
              <li>
                Country: <span className="text-green-500">✓</span>
              </li>
              <li>
                Region: <span className="text-green-500">✓</span>
              </li>
              <li>
                City: <span className="text-green-500">✓</span>
              </li>
              <li>
                CEP: <span className="text-green-500">✓</span>
              </li>
              <li>
                ISP: <span className="text-green-500">✓</span>
              </li>
              <li>
                Web-Cam: <span className="text-green-500">✓</span>
              </li>
              <li>
                Print-screen: <span className="text-green-500">✓</span>
              </li>
            </ul>
          </div>
          <div></div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
