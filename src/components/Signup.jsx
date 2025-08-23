'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <main className="py-8 bg-white flex items-center justify-center">
      <div className="max-w-5xl w-full grid  grid-cols-1 md:grid-cols-2 gap-6 px-4 lg:px-15 py-2 lg:py-6">
        {/* Illustration */}
        <div className="flex items-center justify-center">
          <img
            src="/signup-g.svg"
            alt="Sign Up Illustration"
            className="max-w-sm w-full h-auto"
          />
        </div>

        {/* Sign-up Form */}
        <div className="flex flex-col justify-center max-w-sm w-full mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Get Start Shopping
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Welcome to FreshCart! Enter your email to get started.
          </p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="*****"
                className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md text-sm font-medium"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-xs text-center text-gray-600">
            By continuing, you agree to our{' '}
            <Link href="#" className="text-green-600 font-medium hover:underline">
              Terms of Service
            </Link>{' '}
            &{' '}
            <Link href="#" className="text-green-600 font-medium hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
