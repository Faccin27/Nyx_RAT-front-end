import React, { useState } from 'react';
import Link from "next/link";

function LoginRegisterForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      {isLoginForm ? (
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-white mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
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
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="reg-username" className="block text-white mb-1">
                Username
              </label>
              <input
                id="reg-username"
                name="reg-username"
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="reg-email" className="block text-white mb-1">
                Email
              </label>
              <input
                id="reg-email"
                name="reg-email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
            <label htmlFor="reg-phone" className="block text-white mb-1">
              Phone
            </label>
            <input
              id="reg-phone"
              name="reg-phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="reg-password" className="block text-white mb-1">
              Password
            </label>
            <input
              id="reg-password"
              name="reg-password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
            <div>
              <label htmlFor="reg-birthday" className="block text-white mb-1">
                Birthday
              </label>
              <input
                id="reg-birthday"
                name="reg-birthday"
                type="date"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="reg-gender" className="block text-white mb-1">
                Gender
              </label>
              <select
                id="reg-gender"
                name="reg-gender"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </div>
  );
}

export default LoginRegisterForm;