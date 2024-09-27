'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import logo from '@/assets/logo.png'

export default function Component() {
  const [isOnline, setIsOnline] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const users = [
    { id: 1, ip: '192.168.1.100', name: 'John Doe', username: 'jdoe', version: '1.2.3', location: 'New York', os: 'Windows 10', privileges: 'Admin', currentWindow: 'Discord', hasWebcam: true },
    { id: 2, ip: '192.168.1.101', name: 'Jane Smith', username: 'jsmith', version: '1.2.2', location: 'Los Angeles', os: 'macOS', privileges: 'User', currentWindow: 'Valorant', hasWebcam: false },
    { id: 3, ip: '192.168.1.102', name: 'Bob Johnson', username: 'bjohnson', version: '1.2.3', location: 'Chicago', os: 'Linux', privileges: 'User', currentWindow: 'Chrome', hasWebcam: true },
    { id: 4, ip: '192.168.1.103', name: 'Alice Brown', username: 'abrown', version: '1.2.1', location: 'Houston', os: 'Windows 11', privileges: 'Admin', currentWindow: 'Spotify', hasWebcam: true },
    { id: 5, ip: '192.168.1.104', name: 'Charlie Davis', username: 'cdavis', version: '1.2.3', location: 'Miami', os: 'macOS', privileges: 'User', currentWindow: 'Photoshop', hasWebcam: false },
    { id: 6, ip: '192.168.1.105', name: 'Eva Wilson', username: 'ewilson', version: '1.2.2', location: 'Seattle', os: 'Linux', privileges: 'User', currentWindow: 'Terminal', hasWebcam: true },
    { id: 7, ip: '192.168.1.106', name: 'Frank Miller', username: 'fmiller', version: '1.2.3', location: 'Boston', os: 'Windows 10', privileges: 'Admin', currentWindow: 'Visual Studio Code', hasWebcam: true },
    { id: 8, ip: '192.168.1.107', name: 'Grace Lee', username: 'glee', version: '1.2.1', location: 'San Francisco', os: 'macOS', privileges: 'User', currentWindow: 'Zoom', hasWebcam: true },
  ]

  const userInfo = {
    name: 'Faccin',
    registeredDate: '2023-01-15',
    expiryDate: '2038-01-15'
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col relative">
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
          <span className="text-zinc-400">Nyx</span> tool
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
                <tr key={user.id} className="border-b border-zinc-700">
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

      <footer className="p-4 flex justify-between text-blue-300 text-xs sm:text-sm relative z-10">
        <span>Status: Nyx - Connected - {users.length}</span>
        <span>Listening on port 4782</span>
      </footer>
    </div>
  )
}