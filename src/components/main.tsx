'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logo from "@/assets/logo.png";
import { HereBackgroundGradientAnimation } from "./ui/background-gradient-animation";
import TablePrice from "./table";
import Footer from "./footer/footer";
import LoginRegisterForm from '@/components/loginform';
import axios from 'axios';
import Cookies from 'js-cookie';
import { checkLoginStatus, User } from '@/utils/auth'; 
import Logo from '@/components/logo/logo-top'
import  Background from '../components/background/background'
import Exemplo from '@/assets/Captura de tela 2024-09-29 121808.png';
import Exemplo2 from '@/assets/funcionalidades.png'



interface MenuHamburgerProps {
  setActiveTab: (tab: string) => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
}


function MenuHamburger({ setActiveTab, isLoggedIn, handleLogout }: MenuHamburgerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = [
    "about",
    "download",
    "pricing",
    "features",
    "terms of service",
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <nav className="relative">
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 text-white focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
        </button>
      </div>

      <ul
        className={`
        md:flex md:items-center md:space-x-4
        absolute right-0 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg
        transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible md:opacity-100 md:visible"
        }
        ${isOpen ? "top-full" : "-top-96 md:top-auto"}
        md:relative md:w-auto md:bg-transparent md:shadow-none
      `}
      >
        {menuItems.map((item) => (
          <li key={item} className="px-4 py-2 md:py-0">
            <button
              className="w-full text-left text-white hover:text-gray-300 capitalize"
              onClick={() => handleTabClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
        {isLoggedIn ? (
          <li className="px-4 py-2 md:py-0">
            <button
              className="w-full px-8 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        ) : (
          <li className="px-4 py-2 md:py-0">
            <button className="w-full px-8 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Sign In
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}


function useUserAuthentication() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const fetchLoginStatus = async () => {
      const { isLoggedIn, user } = await checkLoginStatus();
      setIsLoggedIn(isLoggedIn);
      setUser(user);
    };
    
    fetchLoginStatus();
  }, []);

  return { isLoggedIn, user, setIsLoggedIn, setUser };
}

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<string>("about");
  const router = useRouter();
  const { isLoggedIn, user, setIsLoggedIn, setUser } = useUserAuthentication();

  const handleLogout = async () => {
    try {
      Cookies.remove('token')
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutContent />;
      case "download":
        return <DownloadContent />;
      case "pricing":
        return <PricingContent />;
      case "features":
        return <FeaturesContent />;
      case "terms of service":
        return <TermService />;
      default:
        return <AboutContent />;
    }
  };

  return (
     <Background>
      <nav className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 absolute left-10">
          <Image
            src={logo}
            alt="Nyx rat logo"
            className="rounded-full w-12 h-12"
            width={48}
            height={48}
          />
          <h3 className="text-white text-xl font-bold">NYX RAT</h3>
        </div>
        <div className="ml-auto">
          <MenuHamburger setActiveTab={setActiveTab} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </div>
      </nav>

      <div className="mt-8 flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="md:w-2/5 p-8 border-r border-gray-700">
          {isLoggedIn && user ? (
            <UserInfo user={user} handleLogout={handleLogout} />
          ) : (
            <LoginRegisterForm />
          )}
        </div>

        {/* Right Side */}
        <div className="md:w-3/5 p-8 text-white relative">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </Background>
  );
}

interface UserInfoProps {
  user: User;
  handleLogout: () => void;
}

function UserInfo({ user, handleLogout }: UserInfoProps) {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h2>
      {/* <Image src={user.photo} alt={user.name} width={100} height={100} className="rounded-full mb-4" /> */}
      <p className="mb-2">Email: {user.email}</p>
      <p className="mb-2">Gender: {user.gender}</p>
      <p className="mb-2">Registered: {new Date(user.registeredDate).toLocaleDateString()}</p>
      <p className="mb-2">Expiry: {new Date(user.expiryDate).toLocaleDateString()}</p>
      <p className="mb-4">Role: {user.role}</p>
      <button
        onClick={handleLogout}
        className="w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Logout
      </button>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">About Nyx RAT</h2>
      <p>
        Nyx RAT is a software designed for remote system administration and management.
        It provides advanced features for IT professionals and system administrators
        to efficiently manage and monitor computer systems remotely.
      </p>
    </div>
  );
}

function DownloadContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Download Nyx RAT</h2>
      <p>
        To download Nyx RAT, you need to choose one of the plans in the Pricing section.
        Each plan offers different features and capabilities to suit your needs.
      </p>
      <br />
      <button
        className="w-60 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() => alert("Please select a plan from the Pricing section to proceed with the download.")}
      >
        View Pricing Plans
      </button>
    </div>
  );
}

function Modal () {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)//Os modals são bem fáceis se liga:
  const rota = useRouter()
const handleCloseModal = () => {
  rota.push('/');
}
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6 ">
    <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none ">
        <Image
          src={logo}
          alt="Nyx Logo"
          width={700}
          height={700}
        />
      </div>
      {/* Botão de fechar */}
      
      <button onClick={handleCloseModal} className=" self-start text-red-700">
        CLOSE
      </button>
      <div className="text-center my-10">
              <h1 className="text-5xl font-bold text-purple-400 border-b-4 border-purple-600 inline-block pb-2 mb-8 transition-all duration-300 ease-in-out transform hover:scale-105">
                  Our Plans
              </h1>
              <p className="text-gray-300 text-lg mb-10">
                  Choose a plan that fits your needs and experience the best of Nyx Rat.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  z-50 max-w-fit ml-auto mr-auto">
              

              {/* Plan Basic */}
              <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <h3 className="text-3xl font-semibold mb-4 text-purple-400">Basic</h3>
                  <ul className="text-left text-sm">
                      <li>Display-Name: <span className="text-green-500">✓</span></li>
                      <li>Hostname: <span className="text-green-500">✓</span></li>
                      <li>Username: <span className="text-green-500">✓</span></li>
                      <li>System: <span className="text-green-500">✓</span></li>
                      <li>Version: <span className="text-green-500">✓</span></li>
                      <li>Architecture: <span className="text-green-500">✓</span></li>
                      <li>CPU: <span className="text-green-500">✓</span></li>
                      <li>GPU: <span className="text-red-500">X</span></li>
                      <li>RAM: <span className="text-green-500">✓</span></li>
                      <li>HWID: <span className="text-red-500">X</span></li>
                      <li>IP: <span className="text-green-500">✓</span></li>
                      <li>MAC: <span className="text-red-500">X</span></li>
                      <li>Country: <span className="text-green-500">✓</span></li>
                      <li>Region: <span className="text-green-500">✓</span></li>
                      <li>City: <span className="text-green-500">✓</span></li>
                      <li>CEP: <span className="text-red-500">X</span></li>
                      <li>ISP: <span className="text-red-500">X</span></li>
                      <li>Web-Cam: <span className="text-green-500">✓</span></li>
                      <li>Print-screen: <span className="text-red-500">X</span></li>
                  </ul>
              </div>

              {/* Plan Pro */}
              <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <h3 className="text-3xl font-semibold mb-4 text-purple-400">Pro</h3>
                  <ul className="text-left text-sm">
                      <li>Display-Name: <span className="text-green-500">✓</span></li>
                      <li>Hostname: <span className="text-green-500">✓</span></li>
                      <li>Username: <span className="text-green-500">✓</span></li>
                      <li>System: <span className="text-green-500">✓</span></li>
                      <li>Version: <span className="text-green-500">✓</span></li>
                      <li>Architecture: <span className="text-green-500">✓</span></li>
                      <li>CPU: <span className="text-green-500">✓</span></li>
                      <li>GPU: <span className="text-green-500">✓</span></li>
                      <li>RAM: <span className="text-green-500">✓</span></li>
                      <li>HWID: <span className="text-green-500">✓</span></li>
                      <li>IP: <span className="text-green-500">✓</span></li>
                      <li>MAC: <span className="text-green-500">✓</span></li>
                      <li>Country: <span className="text-green-500">✓</span></li>
                      <li>Region: <span className="text-green-500">✓</span></li>
                      <li>City: <span className="text-green-500">✓</span></li>
                      <li>CEP: <span className="text-green-500">✓</span></li>
                      <li>ISP: <span className="text-green-500">✓</span></li>
                      <li>Web-Cam: <span className="text-green-500">✓</span></li>
                      <li>Print-screen: <span className="text-green-500">✓</span></li>
                  </ul>
              </div>
              <div>
              </div>
              <br />
              <br />
              <br />
              <br />
          </div>    
        </div>
      </div>
  );
}


function PricingContent() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const handleOpenModal = () => {
      setIsModalOpen(true);
    }
    
 
  const navegando = useRouter()
  


  
    const rota = useRouter()
  
    return (
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="mb-6 text-gray-300">
          Choose the plan that fits your needs. We have options for various requirements.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="text-2xl font-bold mb-4">$9.99/mo</p>
            <button className="w-full bg-white hover:bg-green-400 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Choose Plan
            </button>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-2xl font-bold mb-4">$29.99/mo</p>
            <button className="w-full bg-white hover:bg-green-400 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Choose Plan
            </button>
          </div>
        </div>
        <br />
        <button
          className="relative w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={()=> handleOpenModal()}
        >
          Show Details
        </button>
        <div>
        {isModalOpen && <Modal />}
        </div>
      </div>
    );
  }



function ModalFeatures() {    
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const rota = useRouter()
    const handleCloseModal = () => {
      setIsModalOpen(false)
  
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
        {/* Botão de fechar */}
        
        <button onClick={handleCloseModal} className=" self-start text-red-700">
          CLOSE
        </button>
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
         
          </div>
        </div>
  )
}


function FeaturesContent() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const rota = useRouter()
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const router = useRouter();

  return (
    <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4">Features</h2>
      <p className="mb-6 text-gray-300">
        Explore the powerful features of Nyx RAT:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Remote control of the victim's computer</li>
        <li>Capture screenshots and webcam access</li>
        <li>Retrieve passwords and browser history</li>
        <li>Keylogger functionality</li>
        <li>File management and execution</li>
        <li>System information gathering</li>
      </ul>
      <button
        className="mt-6 w-60 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={handleOpenModal}
      >
        Learn More
      </button>
      <div>
        {isModalOpen && <ModalFeatures/>}
      </div>
    </div>
  );
}



function ModalServices () {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const rota = useRouter()
    const handleCloseModal = () => {
      setIsModalOpen(false)
  
    }


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
      {/* BotÃ£o de fechar */}
      
      <button onClick={handleCloseModal} className=" self-start text-red-700">
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
                                <p className="text-lg leading-relaxed">
                                    {content}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </main>
      </div>
      </div>
  )
}

function TermService() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  
  const handleOpenModal = () =>{
    setIsModalOpen(true)
  }


  const router = useRouter();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
      <p>
        When you buy one of our products they become your property, and we shall
        not be held responsible for any use made of our products.
      </p>
      <br />
      <button
        className="relative w-40 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={handleOpenModal}
      >
        Learn More
      </button>
      <div>
        {isModalOpen && <ModalServices/>}
      </div>
    </div>
  );
}