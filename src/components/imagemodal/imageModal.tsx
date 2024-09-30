import React from "react";
import { motion } from 'framer-motion'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    imageSrc: string;
}

const imageModal: React.FC<ModalProps> = ({isOpen, onClose, title, imageSrc}) => {
    if (!isOpen) return null

    return (
        <motion.div
        className="fixed inset-0 flex items-center justify-center bg-zinc-950 bg-opacity-50 z-50"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div className="bg-zinc-900 p-5 rounded-lg max-w-lg w-full">
                <h2 className="text-center text-white text-xl mb-4">{title}</h2>
                <img src={imageSrc} alt={title} className="w-full h-auto rounded-md mb-4" />
                <button onClick={onClose} className=" text-red-600 w-full">Close</button>
            </div>

        </motion.div>
    )
}


export default imageModal;