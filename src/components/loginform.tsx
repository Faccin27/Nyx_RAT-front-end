import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from 'js-cookie';
import RegistrationModal from './ui/registerModal';

function LoginRegisterForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email: formData.email,
        pass: formData.password,
      });

      if (response.data.token) {
        var in30Minutes = 1/48;
        Cookies.set('token', response.data.token, { expires: in30Minutes }); 
        console.log("User logged in successfully");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // You might want to show an error message to the user here
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/users/", {
        name: formData.username,
        password: formData.password,
        email: formData.email,
        photo: null,
        registeredDate: new Date().toISOString(),
        expiryDate: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ).toISOString(),
        gender: formData.gender === "male" ? "Masculino" : "Feminino",
        birthDate: new Date(formData.birthday).toISOString(),
        phone: formData.phone,
        role: "USER",
      });

      console.log("User registered successfully:", response.data);
      setIsRegistrationSuccess(true);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error registering user:", error);
      setIsRegistrationSuccess(false);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginClick = () => {
    setIsModalOpen(false);
    setIsLoginForm(true);
  };

  const handleSupportClick = () => {
    // Implement support functionality here
    console.log("Support clicked");
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
              required
            />
            <label htmlFor="reg-accept" className="text-sm text-gray-300">
              I accept the Terms of Service
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            REGISTER
          </button>
        </form>
      )}
      <button
        onClick={toggleForm}
        className="mt-4 text-sm text-blue-400 hover:underline"
      >
        {isLoginForm ? "Register" : "Login"}
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
}

export default LoginRegisterForm;