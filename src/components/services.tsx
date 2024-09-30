"use client"

import Background from "./background/background";
import Logo from "./logo/logo-top";
import Footer from "./footer/footer";
import { useRouter } from "next/navigation"

export default function Services() {
    const rota = useRouter();
    return(
        <Background>
            <Logo/>
            <div>
                <h1></h1>
            </div>
            <div>
                <button 
                className="relative w-40 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={()=> rota.push('/')}
                >
                    Back to main page
                </button>
            </div>
            <Footer/>
        </Background>
    );
}