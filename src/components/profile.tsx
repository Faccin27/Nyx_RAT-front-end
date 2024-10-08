"use client";

import { HereBackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Logo from "./logo/logo-top";
import Footer from "./footer/footer";
import Image from "next/image";
import usuario from "../assets/—Pngtree—avatar icon profile icon member_5247852.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react"

interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  photo: string;
  registeredDate: string;
  expiryDate: string;
  gender: string;
  birthDate: string;
  phone: string;
  isActive: boolean;
  roles: string[];
  createdAt: string;
  updatedAt: string;
}

interface UserInfoProps {
  user: User[];
  handleLogout: () => void;
}

export default function UserProfile({user}:UserInfoProps) {
  const [nome, setNome] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("55+ ")



  const submit = (evento: React.FormEvent<HTMLFormElement>) => {
  };

  return (
    <>
      <HereBackgroundGradientAnimation>
        <Logo />
        <form
          className="relative max-w-7xl mx-auto px-6 py-12 text-center"
          onSubmit={submit}
        >
          {/* Título do perfil */}
          <div className="text-4xl font-bold text-gray-100 mb-8 drop-shadow-lg">
            <h1 className="mb-8">Profile</h1>

            {/* Imagem do Usuário */}
            <div className="mb-6">
              <Image
                src={usuario}
                alt="User picture"
                width={170}
                className="mx-auto rounded-full border-4 border-gray-300 shadow-lg"
              />
            </div>
            </div>
            {/* Formulário de Edição */}
         
              {/* Campo de Nome */}
       <div className="space-y-6">
                <div className="max-w-fit ml-auto mr-auto">
                <label htmlFor="name" className="text-xl text-gray-200 mb-2">
                  Name:
                </label>
                <input
                  id="name"
                  value={nome}
                  type="text"
                  onChange={(evento) => setNome(evento.target.value)}
                  required
                  className="w-full max-w-lg px-4 py-2 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 outline-none text-xl"
                  aria-label="Enter your name"
                />
              </div>

              {/* Campo de Senha */}
              <div className="max-w-fit ml-auto mr-auto">
                <label
                  htmlFor="password"
                  className="text-xl text-gray-200 mb-2"
                >
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  value={senha}
                  onChange={(evento) => setSenha(evento.target.value)}
                  required
                  className="w-full max-w-lg px-4 py-2 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 outline-none text-xl"
                  aria-label="Enter your password"
                />
              </div>

              {/* Campo de Email */}
              <div className="max-w-fit ml-auto mr-auto">
                <label htmlFor="email" className="text-xl text-gray-200 mb-2 ">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(evento) => setEmail(evento.target.value)}
                  required
                  className="w-full max-w-lg px-4 py-2 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 outline-none text-xl"
                  aria-label="Enter your email"
                />
              </div>
              <div
                className="
              max-w-fit
               ml-auto 
               mr-auto
               "
              >
                <h2
                  className="
                text-xl 
                text-gray-200 
                mb-2
                "
                >
                  Photo:
                </h2>
                <input
                  type="file"
                  className="
                text-xl 
                text-gray-200 
                mb-2"
                  required
                />
              </div>
              <div className="max-w-fit ml-auto mr-auto text-xl text-gray-200 mb-2">
                <label htmlFor="numero" className="text-gray-200 mb-2"> Change you phone number:</label>
                <input 
                id="numero"
                type="tel"
                value={phone}
                onChange={(event)=>setPhone(event.target.value)}
                className="w-full max-w-lg px-4 py-2 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 outline-none text-xl"

                />
              </div>
              <div className="max-w-fit ml-auto mr-auto text-xl text-gray-200 mb-2">
              <label htmlFor="reg-gender" className="block text-white mb-1">
                Gender
              </label>
              <select
                id="reg-gender"
                name="reg-gender"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">Other</option>
              <option value="female">I prefer not to say.</option>
            </select>
              </div>
              <br />
              <br />
            </div>
          <div>
            <button
              className="
            w-52 
            bg-white 
            hover:bg-purple-700 
            text-black 
            py-2 
            rounded-md 
            transition-all 
            duration-300 
            ease-in-out 
            transform 
            hover:scale-105
            "
            >
              Enviar
            </button>
          </div>
        </form>
        <Footer />
      </HereBackgroundGradientAnimation>
    </>
  );
}

