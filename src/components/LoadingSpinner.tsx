'use client'
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900">
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
      <p className="text-white mt-4 text-lg font-medium">Carregando...</p>
    </div>
  );
};

export default LoadingSpinner;
