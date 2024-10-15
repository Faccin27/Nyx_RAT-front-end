import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png";

export default function ModalServices() {
  const [isModalservicesOpen, setIsModalservicesOpen] =
    useState<boolean>(false);
  const rota = useRouter();
  const handleCloseModalServices = () => {
    setIsModalservicesOpen(false);
  };

  const termos = [
    {
      title: "Disclaimer for Misuse",
      content: `Nyx Rat is not responsible for any damage, 
            loss, or consequences resulting from the improper 
            or incorrect use of our products by customers. 
            The use of our products is solely at the user's own risk.`,
    },
    {
      title: "Limited Liability",
      content: `The customer assumes full responsibility for the use of products provided by Nyx Rat. We do not take 
            responsibility for any outcomes resulting from the use, whether in compliance with or contrary to provided instructions.`,
    },
    {
      title: "Use at Customer's Own Risk",
      content: `Nyx Rat products are provided "as is," and their use is 
            entirely at the customer’s own risk. The company 
            is not liable for any damages, losses, or harm caused 
            by the use of our products.`,
    },
    {
      title: "No Warranty for Usage",
      content: `Nyx Rat makes no guarantees that the use of our products will result in any particular outcome or effect. 
            The customer agrees to use the products at their 
            own risk and releases the company from any liability.`,
    },
    {
      title: "Limitation of Liability for Misuse",
      content: `Nyx Rat will not be responsible for any direct or indirect damages arising from the incorrect, improper, 
            or inappropriate use of our products. 
            The use of our products is entirely the customer’s 
            responsibility.`,
    },
    {
      title: "Exclusion of Liability for Usage Consequences",
      content: `Nyx Rat is not liable for any consequences, direct or indirect, related to the use of our products, 
            whether used within or outside the recommended guidelines. 
            All responsibility rests with the customer.`,
    },
    {
      title: "Use at Customer’s Sole Responsibility",
      content: `By using Nyx Rat products, the customer agrees that the company will not be responsible for any effects, 
            consequences, or damages resulting from use, 
            whether used as directed or otherwise.`,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Image src={logo} alt="Nyx Logo" width={700} height={700} />
        </div>
        {/* BotÃ£o de fechar */}

        <button
          onClick={handleCloseModalServices}
          className=" self-start text-red-700"
        >
          CLOSE
        </button>
        <main className="flex flex-col items-center justify-center text-white">
          {/* Título Principal */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
              Terms of Service
            </h1>
          </div>

          {/* Lista de Termos */}
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg border border-purple-500 max-w-3xl">
            <ol className="list-decimal pl-4 space-y-6">
              {termos.map(({ title, content }, index) => (
                <li key={index} className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
                    {title}
                  </h2>
                  <p className="text-lg leading-relaxed">{content}</p>
                </li>
              ))}
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}
