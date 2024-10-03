"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Logo from "@/assets/logo.png";
import { HereBackgroundGradientAnimation } from "./ui/background-gradient-animation";
import TablePrice from "./table";
import Footer from "./footer/footer";

interface MenuHamburgerProps {
  setActiveTab: (tab: string) => void;
}

function MenuHamburger({ setActiveTab }: MenuHamburgerProps) {
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
        <li className="px-4 py-2 md:py-0">
          <button className="w-full px-8 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);
  const router = useRouter();

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
    <HereBackgroundGradientAnimation>
      <nav className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 absolute left-10">
          <Image
            src={Logo}
            alt="Nyx rat logo"
            className="rounded-full w-12 h-12"
            width={48}
            height={48}
          />
          <h3 className="text-white text-xl font-bold">NYX RAT</h3>
        </div>{" "}
        <div className="ml-auto">
          {" "}
          {/* Adiciona ml-auto aqui */}
          <MenuHamburger setActiveTab={setActiveTab} />
        </div>
      </nav>

      <div className="mt-8 flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="md:w-2/5 p-8 border-r border-gray-700">
          <div className="flex justify-center mb-6">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-20 h-20 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
          <form className="space-y-4" action="/control-panel">
            <div>
              <label htmlFor="username" className="block text-white mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-white mb-1">
                Password
              </label>
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
                <label htmlFor="remember" className="text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <input
                type="checkbox"
                id="accept"
                checked={accept}
                onChange={() => setAccept(!accept)}
                className="rounded text-purple-500 focus:ring-pink-500"
                required
              />
              <label htmlFor="accept" className=" text-gray-300">
                Terms of service
              </label>
              <Link href="#" className="text-sm text-blue-400 hover:underline">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>

        {/* Right Side */}
        <div className="md:w-3/5 p-8 text-white relative">
          {renderContent()}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src={Logo}
              alt="Logo"
              className="rounded-full"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <Footer />
    </HereBackgroundGradientAnimation>
  );
}

function AboutContent() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">About Nyx RAT</h2>
      <p>
        Nyx RAT is a software designed to take shadow control of the victim's
        computer. It can capture screenshots from the victim's webcam, giving
        our users full visual access. This software is often spread through the
        victim's passwords, history and more, compromising the victim's privacy
        and posing risks like identity theft and blackmail.
      </p>
    </div>
  );
}

function DownloadContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Download Nyx RAT</h2>
      <p>
        To download our RAT, you need to choose one of the plans in the Plans
        section
      </p>
      <br />
      <button
        className="w-60 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() => alert("You need to choose one of our plans to continue")}
      >
        Download Now
      </button>
    </div>
  );
}

function PricingContent() {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4">Pricing</h2>
      <p className="mb-6 text-gray-300">
        Choose the plan that fits your needs. We have options for everyone!
      </p>
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
        <div className="border border-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Ultra</h3>
          <p className="text-2xl font-bold mb-4">$69.99/mo</p>
          <button className="w-full bg-white hover:bg-green-400 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Choose Plan
          </button>
        </div>
      </div>
      <br />
      <button
        className="relative w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() => setShowTable(!showTable)}
      >
        {showTable ? "Close" : "Details"}
      </button>
      {showTable && <TablePrice />}
    </div>
  );
}

function FeaturesContent() {
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
        onClick={() => router.push("/features")}
      >
        Learn More
      </button>
    </div>
  );
}

function TermService() {
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
        onClick={() => router.push("/service-terms")}
      >
        Learn More
      </button>
    </div>
  );
}
