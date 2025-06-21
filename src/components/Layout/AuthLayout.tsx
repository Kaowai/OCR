// components/AuthLayout.tsx
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel: dynamic content (form) */}
      <div className="w-full relative md:static md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
        {/* Logo */}
        <div className="text-2xl absolute top-8 left-8 font-bold text-blue-700 mb-6">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image width={36} height={36} alt="icon" src={"/icons/icon-blue.svg"} />
            <div className="text-2xl font-bold">AkaOCR</div>
          </Link>
        </div>

        {/* Form Content */}
        <div className="w-full max-w-sm mt-2">{children}</div>
      </div>

      {/* Right Panel: shared image */}
      <div className="hidden md:block md:w-1/2 relative bg-blue-900">
        <Image
          fill
          src="/images/login.jpg"
          alt="Sign in visual"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
