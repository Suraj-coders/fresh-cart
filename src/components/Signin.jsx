'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <main className="py-8 bg-white flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-20 px-4 py-2 lg:py-6">
        {/* Illustration */}
        <div className="flex items-center justify-center">
          <img
            src="/signin-g.svg"
            alt="Sign In Illustration"
            className="max-w-sm w-full h-auto"
          />
        </div>

        {/* Sign-in Form */}
        <div className="flex flex-col justify-center max-w-sm w-full mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Sign in to FreshCart
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Welcome back to FreshCart! Enter your email to get started.
          </p>

          <form className="space-y-4">
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-600 rounded-sm"
                />
                Remember me
              </label>
              <Link href="#" className="text-green-600 font-medium hover:underline">
                Reset It
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md text-sm font-medium"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-green-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
