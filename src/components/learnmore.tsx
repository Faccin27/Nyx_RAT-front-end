"use client"

import { useState } from "react";
import Background from "./background/background";
import Logo from "./logo/logo-top";
import Link from "next/link";


export default function LearnMore() {
    return(
        <Background>
            <Logo/>
            <div className="relative left-1/4 text-">
                <h1>About our Features:</h1>
            </div>
            <div>
            <Link href={'/'} className="w-40 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
               Click here to learn More  
            </Link>
            </div>
        </Background>
        
    );
}