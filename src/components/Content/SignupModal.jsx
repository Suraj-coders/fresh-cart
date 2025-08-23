'use client';

import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';

export default function SignUpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 sm:px-6 transition-opacity duration-200 ease-in-out">
      <div className="relative bg-white w-full max-w-md rounded-xl p-6 sm:p-8 shadow-lg">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <IoMdClose />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign Up</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="Enter Email address"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500">
            By Signup, you agree to our{' '}
            <Link href="#" className="text-green-600 hover:underline">
              Terms of Service
            </Link>{' '}
            &{' '}
            <Link href="#" className="text-green-600 hover:underline">
              Privacy Policy
            </Link>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md text-sm hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-700 mt-4">
          Already have an account?{' '}
          <Link href="/signin" className="text-green-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
