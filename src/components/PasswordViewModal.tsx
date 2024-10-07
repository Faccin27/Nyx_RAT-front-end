import { useState } from "react"
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { SenhasModal } from "@/utils/modalTeste";


//Criando o modal das senhas roubadas
export default function Passowrd({modalOpen,modalClose,children}:SenhasModal) {
    if(!modalOpen){
        return(null)
    }

    const handleClose = () => {
        modalClose
    }


    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <Image
                    src={logo}
                    alt="Nyx Logo"
                    width={700}
                    height={700}
                    />
                </div>
                    <div>
                    {children}
                    </div>
                </div>
        </div>
    )
}