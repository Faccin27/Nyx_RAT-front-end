'use client'

import Link from "next/link"
import { useState } from "react"
import logotipo from '@/assets/images/Logo.png'
import Image from 'next/image';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('about')
  const [rememberMe, setRememberMe] = useState(false)

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
      default:
        return <AboutContent />
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-4">
      <div className="w-full max-w-4xl bg-gradient-to-br from-purple-950 via-indigo-950 to-black rounded-3xl shadow-2xl overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-30">
        <nav className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
                src={logotipo} 
                alt="Nyx rat logo"
                className="rounded-full w-12 h-12"
            />
            <span className="text-white text-xl font-bold">NYX</span>
            <span className="text-white text-xl font-bold">RAT</span>
            </div>
          <div className="space-x-2">
            {['about', 'download', 'pricing', 'features'].map((tab) => (
              <button
                key={tab}
                className={`px-3 py-2 text-white hover:bg-white/10 rounded-md ${activeTab === tab ? 'bg-white/20' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <button 
              className="px-4 py-2 text-white border border-white rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </div>
        </nav>
        <div className="mt-8 flex flex-col md:flex-row">
          {/* LADO ESQUERDO*/}
          <div className="md:w-2/5 p-8 border-r border-gray-700">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <form className="space-y-4">
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
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
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
                    className="rounded text-blue-500 focus:ring-blue-500"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-300">Remember me</label>
                </div>
                <Link href="#" className="text-sm text-blue-400 hover:underline">Forgot your password?</Link>
              </div>
            </form>
          </div>

          {/* LADO DIREITO */}
          <div className="md:w-3/5 p-8 text-white relative overflow-hidden">
            {renderContent()}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M41.9,-70.3C54.9,-62.9,66.2,-52.8,74.6,-40.1C83,-27.4,88.5,-12.2,88.1,2.8C87.7,17.8,81.4,32.6,72.4,45.3C63.4,58,51.6,68.5,38.1,74.8C24.6,81.1,9.4,83.2,-4.8,80.9C-18.9,78.6,-32,72,-44.6,64C-57.2,56,-69.4,46.6,-76.3,34.3C-83.3,21.9,-85,6.6,-83.1,-8C-81.1,-22.6,-75.6,-36.5,-66.5,-47.1C-57.4,-57.7,-44.8,-65,-32.1,-71.1C-19.3,-77.1,-6.5,-81.9,6.3,-82.1C19.1,-82.3,38.2,-77.8,41.9,-70.3Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutContent() {
  return (
    <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4">Welcome.</h2>
      <p className="mb-6 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Link href="#" className="text-blue-400 hover:underline">Sign up now</Link>
    </div>
  )
}

function DownloadContent() {
  return (
    <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4">Download</h2>
      <p className="mb-6 text-gray-300">Get our latest version and start creating amazing designs today!</p>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
        Download Now
      </button>
    </div>
  )
}

function PricingContent() {
  return (
    <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4">Pricing</h2>
      <p className="mb-6 text-gray-300">Choose the plan that fits your needs. We have options for everyone!</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Basic</h3>
          <p className="text-2xl font-bold mb-4">$9.99/mo</p>
          <button className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Choose Plan
          </button>
        </div>
        <div className="border border-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="text-2xl font-bold mb-4">$19.99/mo</p>
          <button className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  )
}

function FeaturesContent() {
  return (
    <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4">Features</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Advanced design tools</li>
        <li>Collaboration features</li>
        <li>Cloud storage</li>
        <li>24/7 support</li>
      </ul>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
        Learn More
      </button>
    </div>
  )
}