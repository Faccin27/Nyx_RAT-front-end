"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Exemplo from "@/assets/Captura de tela 2024-09-29 121808.png";
import Exemplo2 from "@/assets/funcionalidades.png";
import ModalProps from '@/utils/Modals2'


export default function ModalFeatures({ fecharModal }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6 z-60">
        {/* Imagem do logo com opacidade baixa */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Image src={logo} alt="Nyx Logo" width={700} height={700} />
        </div>

        {/* Botão de fechar */}
        <button
          onClick={fecharModal}
          className="relative z-70 self-start text-red-700"
        >
          CLOSE
        </button>

        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
          How does this RAT really work?
        </h1>

        <div className="text-lg leading-relaxed text-gray-300 mb-16">
          <p className="mb-4">
            Our RAT (Remote Access Tool) collects victim information directly on
            our dashboard, giving our users complete control.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
            Dashboard Example:
          </h2>

          {/* Imagem com borda e animação */}
          <div className="relative mx-auto max-w-3xl">
            <Image
              src={Exemplo}
              alt="Image of our RAT dashboard"
              width={800}
              className="rounded-xl shadow-xl border-4 border-purple-500 hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <p className="mt-8 mb-4">
            In our control panel, the user can do many things with the victim.
            Our user can collect information, take webcam pictures, screen
            captures, and even:
          </p>

          <ul className="list-disc list-inside text-left inline-block text-gray-400">
            <li>Steal passwords</li>
            <li>Access cookies, browsing history, and downloads</li>
            <li>
              Control{" "}
              <Link
                href={"https://discord.com/"}
                target="_blank"
                className="text-purple-500 hover:text-purple-700 transition-colors"
              >
                Discord®
              </Link>{" "}
              accounts
            </li>
          </ul>

          {/* Outra seção de exemplo */}
          <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
            Working Example:
          </h2>

          <div className="relative mx-auto max-w-3xl">
            <Image
              src={Exemplo2}
              alt="The second example"
              className="rounded-xl shadow-xl border-4 border-purple-500 hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
