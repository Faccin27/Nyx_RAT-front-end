'use client'
import Link from "next/link"
import { useEffect} from "react"
import Logo from '@/assets/logo.png'
import Image from 'next/image';
import { HereBackgroundGradientAnimation } from "./ui/background-gradient-animation";
import TablePrice from "./table";
import { useRouter } from 'next/navigation'
import Footer from "./footer/footer";
import { useState } from "react";
import { IoMenuOutline } from 'react-icons/io5';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutContent />
      case 'download':
        return <DownloadContent />
      case 'pricing':
        return <PricingContent />
      case 'features':
        return <FeaturesContent />
      case 'terms of service':
        return <TermService />
      default:
        return <AboutContent />
    };
  }

 
    return (
      
      <HereBackgroundGradientAnimation>         
          <nav className="p-6 flex justify-between items-center">
            <div className="flex items-center space-x-2 absolute left-10">
              <Image
                src={Logo}
                alt="Nyx rat logo"
                className="rounded-full w-12 h-12"
                width={0}
                height={0}
              />
              
              <h3 className="text-white text-xl font-bold">NYX RAT</h3>
              
            </div>
            <MenuHamburguer setActiveTab={setActiveTab}/> 
            </nav>
            
          

          <div className="mt-8 flex flex-col md:flex-row">
            {/* LADO ESQUERDO */}
            <div className="md:w-2/5 p-8 border-r border-gray-700">
              <div className="flex justify-center mb-6">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <form className="space-y-4" action="/control-panel">
                <div>
                  <label htmlFor="username" className="block text-white mb-1">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-white mb-1">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                  <button 
                  type="submit"
                  className="w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  LOGIN
                </button>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="rounded text-purple-500 focus:ring-pink-500"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-300">Remember me</label>
                  </div>
                  <input
                  type="checkbox" 
                   id="accept"
                   checked={accept}
                   onChange={() => setAccept(!accept)}
                   className="rounded text-purple-500 focus:ring-pink-500"
                   required
                    /> 
                    <label htmlFor="accept" className=" text-gray-300">Terms of service</label>
                  <Link href="#" className="text-sm text-blue-400 hover:underline">Forgot your password?</Link>
                </div>
              </form>
            </div>

            {/* LADO DIREITO */}
            <div className="md:w-3/5 p-8 text-white relative">
            
           {renderContent()}
         
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="rounded-full"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer/>
             
        </HereBackgroundGradientAnimation> 
      
    )
  }
  function MenuHamburguer({setActiveTab}:MenuHamburguerProps) {
       const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
      <nav className={`absolute right-16 flex place-items-center space-x-1`}>
     
          {(
            <>
            <div className="flex justify-between items-right md:hidden">
            <span 
            className="cursor-pointer md:hidden block" 
            onClick={() => setIsOpen(!isOpen)}>
              <IoMenuOutline className="text-[40px]" /> {/* Definindo um tamanho específico */}
          </span>
             </div>
            <ul className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4 absolute md:static md:bg-transparent w-full md:w-auto left-0 md:left-auto transition-all duration-300 ease-in-out ${
    isOpen ? 'top-16 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'
  }`}>
              {['about', 'download', 'pricing', 'features', 'terms of service'].map((tab) => (
                
                <li className="mx-4 md:items-center">
                <button
                  key={tab}
                  className={`px-3 py-2 text-white hover:bg-white/10 rounded-md
                    `}
                  onClick={() => {
                    setActiveTab(tab); // Atualiza o activeTab no componente pai
                    setIsOpen(false); // Opcional: fechar o menu ao selecionar uma opção
                  }}
                  
                >
                  
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
                </li>
              ))}
              <li className="mx-4">
              <button className="w-20 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                Sign In
              </button>
              </li>
            </ul>
            </>
          )}
          
      </nav>
    )
}

// Exemplo das funções de conteúdo
function AboutContent() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">About Nyx RAT</h2>
      <p>Nyx RAT is a softaware designed to take a shadow control of the victimim computer. It can capture screenshots from the victim’s webcam, giving the our users full visual access. This softaware is often spread through the victim passwords, hisroty and more, compromising the victim’s privacy and posing risks like identity theft and blackmail.</p>
    </div>
  )
}

function DownloadContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Download Nyx RAT</h2>
      <p>To downaload the our RAT you need to Choose one of the plans in the Plans place</p>
      <br />
      <button className="w-60 bg-white  hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
      onClick={()=> (alert('You need to chosse one of our plans to continue'))}
      >
        Download Now
      </button>
    </div>
  )
}

function PricingContent() {
  const [tablea, setTaleba] = useState(false);
  useEffect(()=>{
    if(tablea){
      {/* Aqui eu falo que se a tabela for true, vai dar um console indicando isso */}
      console.log(`If i'm reading this, the ${tablea} is working.`) 
    }
  },[tablea])

  return (
    <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4">Pricing</h2>
      <p className="mb-6 text-gray-300">Choose the plan that fits your needs. We have options for everyone!</p>
      <div className="grid grid-cols-2 gap-4">
      <div className="border border-gray-700 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Starting Version</h3>
          <p className="text-2xl font-bold mb-4">Free</p>
          <button className="w-full bg-white hover:bg-green-400 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Choose Plan
          </button>
            </div>
            <div className="border border-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Basic</h3>
          <p className="text-2xl font-bold mb-4">$9.99/mo</p>
          <button className="w-full bg-white  hover:bg-green-400 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Choose Plan
          </button>
          <br />
          <br />
        </div>
        <div className="border border-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="text-2xl font-bold mb-4">$29.99/mo</p>
          <button className="w-full bg-white hover:bg-green-400 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Choose Plan'
          </button>
        </div>
        <div className="border border-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Ultra</h3>
          <p className="text-2xl font-bold mb-4">$69.99/mo</p>
          <button className="w-full bg-white  hover:bg-green-400 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Choose Plan
          </button>
        </div>
      </div>
      <br />
      {/* Mostrar a lista se a tabela for true ou apagar se ela for false:*/}
      {tablea? (
        <div>
          <button
          className="relative w-full bg-white  hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={()=> setTaleba(false)}
          >
            Close
          </button>
          <TablePrice/>
        </div>
      ):
      (
        <button
        className="relative w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={()=> setTaleba(true)}
        >
          Details
        </button>
      )
      }
      </div>
  )
}

function FeaturesContent() {
  const rota = useRouter()

  return (
    <div className="relative z-10">
    <h2 className="text-4xl font-bold mb-4">Features</h2>
    <ul className="list-disc list-inside mb-6 text-gray-300">
      <li>Multi plataform (this web site and the <Link href={'https://discord.com/'} target="_blank">®Discord.</Link>)</li>
      <li>We can catch the user passwords, IP, Country, prints of the user screen and a lot of other things.</li>
      <li>SQL storage</li>
      <li>Support 24/7</li>
    </ul>
    <button
        className="relative w-40 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={()=> rota.push('/learn-more')}
        >
          Learn More
        </button>

  </div>
    )
  }

function TermService() {
  const rota = useRouter()
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
      <p>When you but one of our products they become your propreety, and we shall not be held responsible for any use made of our products.</p>
      <br />
      <button
        className="relative w-40 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={()=> rota.push('/service-tems')}
        >
          Learn More
        </button>

      
    </div>
    )
  }
