"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              ShortLink
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/analytics"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Analytics
            </Link>
            <Link
              href="/login"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-transparent text-black px-4 py-2 border-gray-100 rounded-lg hover:text-white hover:bg-black transition-colors border"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/analytics"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Analytics
              </Link>
              <Link
                href="/login"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-fit"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-white border-gray-300 border text-black px-4 py-2 rounded-lg hover:text-white hover:bg-black transition-colors w-fit"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
