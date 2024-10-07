import {useEffect, useState} from 'react'
import { Modalidades } from '@/utils/modalidades';
export const ModalReutilizavel = ({children}:Modalidades) =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-zinc-800 p-6 rounded-md text-white w-10/12 max-w-4xl h-4/5 overflow-y-auto space-y-6">
        <button onClick={handleCloseModal} className=" self-start text-red-700">
            CLOSE
        </button>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            {children}
        </div>
        </div>
    );
}