"use client";

import { useState } from "react";
import { HereBackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Logo from "./logo/logo-top";
import Link from "next/link";
import Footer from "./footer/footer";
import Lago from '@/assets/logo.png'
import Image from 'next/image';
import Exemplo from '@/assets/Captura de tela 2024-09-29 121808.png';
import Exemplo2 from '@/assets/funcionalidades.png'
import { useRouter } from "next/navigation";
export default function LearnMore() {
    const rota = useRouter()
    return (
        
        <HereBackgroundGradientAnimation>
            <Logo />
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                        <Image
                        src={Lago}
                        alt="Nyx Logo"
                        width={10000}
                        height={10000}
                        />
                    </div>
            <div className="relative max-w-7xl mx-auto px-6 py-12 text-center">
                {/* Título principal */}
                <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
                    How does this RAT really work?
                </h1>

                <div className="text-lg leading-relaxed text-gray-300 mb-16">
                    <p className="mb-4">
                        Our RAT (Remote Access Tool) collects victim information directly on our dashboard, giving our users complete control.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Dashboard Example:</h2>
                    
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
                        In our control panel, the user can do many things with the victim. Our user can collect information, take webcam pictures, screen captures, and even:
                    </p>

                    <ul className="list-disc list-inside text-left inline-block text-gray-400">
                        <li>Steal passwords</li>
                        <li>Access cookies, browsing history, and downloads</li>
                        <li>Control <Link href={'https://discord.com/'} target="_blank" className="text-purple-500 hover:text-purple-700 transition-colors">Discord®</Link> accounts</li>
                    </ul>

                    {/* Outra seção de exemplo */}
                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Working Example:</h2>
                    
                    <div className="relative mx-auto max-w-3xl">
                        <Image
                        src={Exemplo2}
                        alt="The second example"
                        className="rounded-xl shadow-xl border-4 border-purple-500 hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </div>

                {/* Botão de voltar */}
                <div className="mt-12">
                <button
                className="relative w-40 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={()=> rota.push('/')}
                >
                Back to Main Page
                
                </button>
                <br />
                <br />
                <br />
                </div>
            </div>

            <Footer />
        </HereBackgroundGradientAnimation>
    );
}
