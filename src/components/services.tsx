"use client"

import Background from "./background/background";
import Logo from "./logo/logo-top";
import Footer from "./footer/footer";
import { useRouter } from "next/navigation"

export default function Services() {
    const termos = [
        {
            title: "Disclaimer for Misuse", 
            content: `Nyx Rat is not responsible for any damage, 
            loss, or consequences resulting from the improper 
            or incorrect use of our products by customers. 
            The use of our products is solely at the user's own risk.`
        },
        {
            title: "Limited Liability", 
            content: `The customer assumes full responsibility for the use of products provided by Nyx Rat. We do not take 
            responsibility for any outcomes resulting from the use, whether in compliance with or contrary to provided instructions.`
        },
        {
            title: "Use at Customer's Own Risk",
            content: `Nyx Rat products are provided "as is," and their use is 
            entirely at the customer’s own risk. The company 
            is not liable for any damages, losses, or harm caused 
            by the use of our products.`
        },
        {
            title: "No Warranty for Usage",
            content: `Nyx Rat makes no guarantees that the use of our products will result in any particular outcome or effect. 
            The customer agrees to use the products at their 
            own risk and releases the company from any liability.`
        },
        {
            title: "Limitation of Liability for Misuse",
            content: `Nyx Rat will not be responsible for any direct or indirect damages arising from the incorrect, improper, 
            or inappropriate use of our products. 
            The use of our products is entirely the customer’s 
            responsibility.`
        },
        {
            title: "Exclusion of Liability for Usage Consequences",
            content: `Nyx Rat is not liable for any consequences, direct or indirect, related to the use of our products, 
            whether used within or outside the recommended guidelines. 
            All responsibility rests with the customer.`
        },
        {
            title: "Use at Customer’s Sole Responsibility",
            content: `By using Nyx Rat products, the customer agrees that the company will not be responsible for any effects, 
            consequences, or damages resulting from use, 
            whether used as directed or otherwise.`
        }

    ]

    const rota = useRouter();

    return (
        <Background>
            <Logo />
            <main className="flex flex-col items-center justify-center text-white">
                {/* Título Principal */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-purple-500 border-b-2 border-purple-500 pb-2">
                        Terms of Service
                    </h1>
                </div>

                {/* Lista de Termos */}
                <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg border border-purple-500 max-w-3xl">
                    <ol className="list-decimal pl-4 space-y-6">
                        {termos.map(({ title, content }, index) => (
                            <li key={index} className="space-y-2">
                                <h2 className="text-2xl font-semibold text-purple-400">
                                    {title}
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    {content}
                                </p>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-12">
                    <button 
                        className="relative w-40 bg-purple-700 hover:bg-purple-500 text-white py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => rota.push('/')}
                    >
                        Back to Main Page
                    </button>
                </div>
                </div>
            </main>
                <br />
                <br />
                <br />
            <Footer />
        </Background>
    );
}
