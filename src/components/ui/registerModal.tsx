import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
  onLogin: () => void;
  onSupport: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  isSuccess,
  onLogin,
  onSupport
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div className={`z-50 fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-zinc-800 rounded-lg p-8 w-full max-w-lg transition-transform transform duration-300 ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-95 opacity-0'}`}>
        {isSuccess ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Registration Successful</h2>
            <div className="flex justify-center mb-10">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <p className="text-gray-300 mb-10 text-center">Your account has been created successfully. You can now log in to access your account.</p>
            <div className="flex space-x-4">
              <button
                onClick={onLogin}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300"
              >
                Log In
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <>
        <div className='z-50'>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Registration Error</h2>
            <div className="flex justify-center mb-10">
              <AlertCircle size={64} className="text-red-500" />
            </div>
            <p className="text-gray-300 mb-10 text-center">We encountered an error while processing your registration. Please try again or contact support for assistance.</p>
            <div className="flex space-x-4">
              <button
                onClick={onSupport}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300"
              >
                Contact Support
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300"
              >
                Close
              </button>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
