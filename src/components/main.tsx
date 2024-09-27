'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import Logo from './logo.png'
import Image from 'next/image';
import { HereBackgroundGradientAnimation } from "./ui/background-gradient-animation";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('about')
  const [rememberMe, setRememberMe] = useState(false)
  const [cliente, setCliente] = useState(false)

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
    }
  }

  useEffect(() => {
    setCliente(true);
  }, [])

  if (!cliente) {
    return null;
  } else {
    return (
      
      <HereBackgroundGradientAnimation> 
        

        <div className="relative z-10 w-full max-w-4xl bg-gradient-to-br from-purple-950 via-indigo-950 to-black rounded-3xl shadow-2xl overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-30">
          <nav className="p-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="Nyx rat logo"
                className="rounded-full w-12 h-12"
                width={0}
                height={0}
              />
              <span className="text-white text-xl font-bold">NYX <br /> RAT</span>
            </div>
            <div className="space-x-2">
              {['about', 'download', 'pricing', 'features', 'terms of service'].map((tab) => (
                <button
                  key={tab}
                  className={`px-3 py-2 text-white hover:bg-white/10 rounded-md ${activeTab === tab ? 'bg-white/20' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
              <button 
                className="px-4 py-2 text-white border border-purple rounded-md hover:bg-pink hover:text-pink-900 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </div>
          </nav>

          <div className="mt-8 flex flex-col md:flex-row">
            {/* LADO ESQUERDO */}
            <div className="md:w-2/5 p-8 border-r border-gray-700">
              <div className="flex justify-center mb-6">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
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
                      className="rounded text-purple-500 focus:ring-pink-500"
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
        </div>
        </HereBackgroundGradientAnimation> 
      
    )
  }
}

// Exemplo das funções de conteúdo
function AboutContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">About Nyx RAT</h2>
      <p>Nyx RAT is a malicious software tool designed to take control of a victim’s Discord account. It can capture screenshots from the victim’s webcam and screen, giving the attacker full visual access. This malware is often spread through phishing, malicious downloads, or deceptive links, compromising the victim’s privacy and posing risks like identity theft and blackmail.</p>
    </div>
  )
}

function DownloadContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Download Nyx RAT</h2>
      <p>Get our latest version and start creating amazing designs today!</p>
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

function TermService() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
      <p>We are not responsible for the use of our product by buyers. Upon purchase, the product becomes the private property of the buyer.</p>
    </div>
  )
}

