import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';
import RegistrationModal from './ui/registerModal';

interface FormData {
  username: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: string;
}

interface Errors {
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
  birthday?: string;
  gender?: string;
  terms?: string;
  login?: string;
}

const LoginRegisterForm: React.FC = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    phone: '',
    birthday: '',
    gender: '',
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  const toggleForm = (): void => {
    setIsLoginForm(!isLoginForm);
    setErrors({});
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!isLoginForm) {
      if (formData.username.length < 5) {
        newErrors.username = 'Username must be at least 5 characters long';
      }



      const birthDate = new Date(formData.birthday);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 16) {
        newErrors.birthday = 'You must be at least 16 years old';
      }

      if (!acceptTerms) {
        newErrors.terms = 'You must accept the Terms of Service';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:3001/users/login', {
          email: formData.email,
          pass: formData.password,
        });

        if (response.data.token) {
          const in30Minutes = 1/48;
          Cookies.set('token', response.data.token, { expires: in30Minutes }); 
          console.log('User logged in successfully');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setErrors({ login: 'Invalid email or password' });
      }
    }
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:3001/users/', {
          name: formData.username,
          password: formData.password,
          email: formData.email,
          photo: null,
          registeredDate: new Date().toISOString(),
          expiryDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ).toISOString(),
          gender: formData.gender === 'male' ? 'Masculino' : 'Feminino',
          birthDate: new Date(formData.birthday).toISOString(),
          phone: formData.phone,
          role: 'USER',
        });

        console.log('User registered successfully:', response.data);
        setIsRegistrationSuccess(true);
        setIsModalOpen(true);
      } catch (error) {
        console.error('Error registering user:', error);
        setIsRegistrationSuccess(false);
        setIsModalOpen(true);
      }
    }
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const handleLoginClick = (): void => {
    setIsModalOpen(false);
    setIsLoginForm(true);
  };

  const handleSupportClick = (): void => {
    console.log('Support clicked');
  };

  return (
    <div>
      {isLoginForm ? (
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleInputChange}
            />
          </div>
          {errors.login && <p className="text-red-500 text-sm">{errors.login}</p>}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="rounded text-purple-500 focus:ring-pink-500"
              />
              <label htmlFor="remember" className="text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <Link href="#" className="text-sm text-blue-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            LOGIN
          </button>
        </form>
      ) : (
        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="username" className="block text-white mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInputChange}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white mb-1">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInputChange}
                pattern="\d*"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-white mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="birthday" className="block text-white mb-1">
                Birthday
              </label>
              <input
                id="birthday"
                name="birthday"
                type="date"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInputChange}
              />
              {errors.birthday && <p className="text-red-500 text-sm">{errors.birthday}</p>}
            </div>
            <div>
              <label htmlFor="gender" className="block text-white mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="reg-accept"
              className="rounded text-purple-500 focus:ring-pink-500"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <label htmlFor="reg-accept" className="text-sm text-gray-300">
              I accept the Terms of Service
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
          <button
            type="submit"
            className="w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
            disabled={!acceptTerms}
          >
            REGISTER
          </button>
        </form>
      )}
      <button
        onClick={toggleForm}
        className="mt-4 text-sm text-blue-400 hover:underline"
      >
        {isLoginForm ? 'Register' : 'Login'}
      </button>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isSuccess={isRegistrationSuccess}
        onLogin={handleLoginClick}
        onSupport={handleSupportClick}
      />
    </div>
  );
};

export default LoginRegisterForm;