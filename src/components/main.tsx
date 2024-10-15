"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logo from "@/assets/logo.png";
import Footer from "./footer/footer";
import LoginRegisterForm from "@/components/loginform";
import Cookies from "js-cookie";
import { checkLoginStatus, User } from "@/utils/auth";
import Background from "../components/background/background";
import ModalServices from "@/components/Modals2/terms/term";
import ModalPricing from "@/components/Modals2/pricing/pricing";
import ModalFeatures from "@/components/Modals2/features/features";

interface MenuHamburgerProps {
  setActiveTab: (tab: string) => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

function MenuHamburger({
  setActiveTab,
  isLoggedIn,
  handleLogout,
}: MenuHamburgerProps) {
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
      Cookies.remove("token");
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
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
          <MenuHamburger
            setActiveTab={setActiveTab}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          />
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
  const rota = useRouter();
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h2>
      {/* <Image src={user.photo} alt={user.name} width={100} height={100} className="rounded-full mb-4" /> */}
      <p className="mb-2">Email: {user.email}</p>
      <p className="mb-2">Gender: {user.gender}</p>
      <p className="mb-2">
        Registered: {new Date(user.registeredDate).toLocaleDateString()}
      </p>
      <p className="mb-2">
        Expiry: {new Date(user.expiryDate).toLocaleDateString()}
      </p>
      <p className="mb-4">Role: {user.role}</p>
      <button
        onClick={handleLogout}
        className="w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Logout
      </button>
      <br />
      <br />
      <br />
      <div>
        <button
          onClick={() => rota.push("/control-panel")}
          className="w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Control Panel
        </button>
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">About Nyx RAT</h2>
      <p>
        Nyx RAT is a software designed for remote system administration and
        management. It provides advanced features for IT professionals and
        system administrators to efficiently manage and monitor computer systems
        remotely.
      </p>
    </div>
  );
}

function DownloadContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Download Nyx RAT</h2>
      <p>
        To download Nyx RAT, you need to choose one of the plans in the Pricing
        section. Each plan offers different features and capabilities to suit
        your needs.
      </p>
      <br />
      <button
        className="w-60 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() =>
          alert(
            "Please select a plan from the Pricing section to proceed with the download."
          )
        }
      >
        View Pricing Plans
      </button>
    </div>
  );
}

function PricingContent() {
  const [isModalOpenPrice, setIsModalOpenPrice] = useState<boolean>(false);
  const handleOpenModalPrice = () => {
    setIsModalOpenPrice(true);
  };

  return (
    <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4">Pricing</h2>
      <p className="mb-6 text-gray-300">
        Choose the plan that fits your needs. We have options for various
        requirements.
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
        onClick={handleOpenModalPrice}
      >
        Show Details
      </button>
      <div>{isModalOpenPrice && <ModalPricing />}</div>
    </div>
  );
}

function FeaturesContent() {
  const [isModalFOpen, setIsModalFOpen] = useState<boolean>(false);
  const handleOpenModalF = () => {
    setIsModalFOpen(true);
  };
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
        onClick={handleOpenModalF}
      >
        Learn More
      </button>
      <div>{isModalFOpen && <ModalFeatures />}</div>
    </div>
  );
}

function TermService() {
  const [isModalservicesOpen, setIsModalservicesOpen] =
    useState<boolean>(false);
  const rota = useRouter();
  const handleOpenModalServices = () => {
    setIsModalservicesOpen(true);
  };

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
        onClick={handleOpenModalServices}
      >
        Learn More
      </button>
      <div>{isModalservicesOpen && <ModalServices />}</div>
    </div>
  );
}
