"use client"


import { HereBackgroundGradientAnimation } from './ui/background-gradient-animation'
import Logo from './logo/logo-top'
import Footer from './footer/footer'
import Image from 'next/image'
import usuario from '../assets/—Pngtree—avatar icon profile icon member_5247852.png'
import {useState} from 'react';
 
export default function UserProfile() {

    const [nome, setNome] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const submit = (evento:React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

    }

  return (
    <>
      <HereBackgroundGradientAnimation>
        <Logo />
        <form className="relative max-w-7xl mx-auto px-6 py-12 text-center" onSubmit={submit}>
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

            {/* Formulário de Edição */}
            <div className="space-y-6">
              {/* Campo de Nome */}
              <div className="flex flex-col items-start">
                <label htmlFor="name" className="text-xl text-gray-200 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  value={nome}
                  type="text"
                  onChange={(evento)=>setNome(evento.target.value)}
                  required
                  className="w-full max-w-lg px-4 py-2 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 outline-none text-xl"
                  aria-label="Enter your name"
                />
              </div>

              {/* Campo de Senha */}
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="text-xl text-gray-200 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={senha}
                  onChange={(evento)=>setSenha(evento.target.value)}
                  required
                  className="w-full max-w-lg px-4 py-2 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 outline-none text-xl"
                  aria-label="Enter your password"
                />
              </div>

              {/* Campo de Email */}
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="text-xl text-gray-200 mb-2 ">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(evento)=>setEmail(evento.target.value)}
                  required
                  className="w-full max-w-lg px-4 py-2 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 outline-none text-xl"
                  aria-label="Enter your email"
                />
              </div>
            </div>
          </div>
          <div>
            <button>
                Enviar
            </button>
          </div>
        </form>
      </HereBackgroundGradientAnimation>
      <Footer />
    </>
  )
}
