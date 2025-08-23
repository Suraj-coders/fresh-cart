'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LoginHeader() {
  return (
    <header className="w-full bg-white border-b border-[#dfe2e1] shadow-md py-3 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
      <Link href="/">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Image src="/freshcart.svg" alt="FreshCart Logo" width={150} height={36} />
        </div>
      </Link>

      <p className="text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/signin" className="text-gray-800 font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </header>
  );
}
