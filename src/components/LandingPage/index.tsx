// pages/index.tsx
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d1b2a] to-[#1b263b] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image width={36} height={36} alt="icon" src={"/icons/icon.svg"} />
          <div className="text-2xl font-bold">AkaOCR</div>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/login">
            <Button className="text-white bg-transparent rounded-lg px-4 py-2 hover:border-white hover:bg-transparent hover:border cursor-pointer">
              Log in
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              Register
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 mt-20">
        <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight">
          Transform documents into <br />
          <span className="text-blue-400">useful data with AI-based IDP</span>
        </h1>
        <p className="text-lg text-gray-300 mt-6 max-w-2xl">
          akaOCR helps make inefficient manual entry a thing of the past—and
          reliable data insights a thing of the present.
        </p>
      </section>
    </main>
  );
}
