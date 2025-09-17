"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto  py-4 flex justify-between items-center">
        <div className="text-lg font-bold text-black dark:text-white">
          ShortLink
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300">
          <Link href="/" className="hover:text-black dark:hover:text-white">
            Home
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-black dark:hover:text-white"
          >
            Dashboard
          </Link>
          <Link href="#" className="hover:text-black dark:hover:text-white">
            Login
          </Link>
          <Link href="#" className="hover:text-black dark:hover:text-white">
            Sign Up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer md:hidden text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="px-6 pb-4 space-y-2 md:hidden">
          <Link
            href="/"
            className="block text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="block text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="block text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Login
          </Link>{" "}
          <Link
            href="#"
            className="block text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}
