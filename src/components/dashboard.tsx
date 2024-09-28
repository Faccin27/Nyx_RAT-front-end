'use client'
import { useState, useEffect, useRef, MouseEvent } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import logo from '@/assets/logo.png'
import { HereBackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Data from '@/data/teste.json';
import { useParams } from 'next/navigation'
import Footer from './footer/footer'

interface User {
  id: number;
  ip: string;
  name: string;
  username: string;
  version: string;
  location: string;
  os: string;
  privileges: string;
  currentWindow: string;
  hasWebcam: boolean;
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
  const [isOnline, setIsOnline] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({ visible: false, x: 0, y: 0, userId: null })
  const [subMenu, setSubMenu] = useState<SubMenuState>({ visible: false, x: 0, y: 0 })
  const contextMenuRef = useRef<HTMLDivElement>(null)
  const subMenuRef = useRef<HTMLDivElement>(null)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)



  const users = Data;


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

  const handleSubMenuHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSubMenu({ visible: true, x: rect.right, y: rect.top })
  }

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId === selectedUserId ? null : userId)
  }


  const ContextMenu = () => (
    <div
      ref={contextMenuRef}
      className="absolute bg-zinc-800 border border-zinc-700 rounded shadow-lg py-1 z-50"
      style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
    >
      <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">GET Victim Information</div>
      <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">GET Webcam pic</div>
      <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">GET Screenshot</div>
      <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer relative" onMouseEnter={handleSubMenuHover}>
        Stealer Options ▶
        {subMenu.visible && (
          <div
            ref={subMenuRef}
            className="absolute bg-zinc-800 border border-zinc-700 rounded shadow-lg py-1"
            style={{ top: '0', left: '100%', minWidth: 250 }}
          >
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">Steal Passwords</div>
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">Steal Cookies</div>
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">Steal History</div>
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">Steal Downloads</div>
            <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">Steal Discord</div>
          </div>
        )}
      </div>
      <div className="px-4 py-2 hover:bg-zinc-700 text-red-500 cursor-pointer">Remove victim</div>
    </div>
  )
  
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
          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
              isOnline ? 'bg-blue-300' : 'bg-gray-600'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                isOnline ? 'transform translate-x-6' : ''
              }`}
            ></div>
          </button>
          <span className="hidden sm:inline">Status</span>
          <span>{isOnline ? 'Online' : 'Offline'}</span>
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
                    className={`border-b border-zinc-700 transition-colors duration-200 ${
                      selectedUserId === user.id ? 'bg-blue-500 bg-opacity-30' : 'hover:bg-zinc-700'
                    }`}
                    onClick={() => handleUserClick(user.id)}
                    onContextMenu={(e) => handleContextMenu(e, user.id)}
                  >
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.ip}</td>
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
    </HereBackgroundGradientAnimation>         
  )
}