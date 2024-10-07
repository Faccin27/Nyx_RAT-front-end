import { useState, useEffect, useRef, MouseEvent } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import Data from '@/data/teste.json';
import { Modalidades } from '@/utils/modalidades';



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
  
  

export const Modal = ({children}:Modalidades) => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
    const selectedUser = users.find(user => user.id === selectedUserId);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openPassord, setIsOpenPassowrd] = useState(false);
    const [openCookie ,setIsOpenCookie] = useState(false);
    const [openDownloads, setIsOpenDownloads] = useState(false);
    return (
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
    {children}
      <h2 className="text-3xl font-bold text-center">Victim informations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>Display Name:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.name || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>Hostname:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.hostname || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>Username:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.username || 'N/A'}</p>
          </div>
        </div>
  
        <h2 className="text-3xl font-bold text-center mt-8">System Informations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>System:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.os || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>Version:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.version || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>Architecture:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.architecture || 'N/A'}</p>
          </div>
        </div>
  
        <h2 className="text-3xl font-bold text-center mt-8">About the System</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>CPU:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.cpu || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>GPU:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.gpu || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>RAM:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.ram || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>HWID:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.hwid || 'N/A'}</p>
          </div>
        </div>
  
        <h2 className="text-3xl font-bold text-center mt-8">Internet Informations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>IP:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.ip || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>MAC:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">fc:f0:c3:0f:3c:f0</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>Country:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.country || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>Region:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.region || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>City:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.city || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>CEP:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.cep || 'N/A'}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-md">
            <strong>ISP:</strong>
            <p className="mt-1 text-sm bg-zinc-700 p-2 rounded-md">{selectedUser?.isp || 'N/A'}</p>
          </div>
        </div>
      </div>
      </div>
  );
};