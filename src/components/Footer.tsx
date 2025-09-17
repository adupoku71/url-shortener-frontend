// components/Footer.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <footer className="w-full py-4">
      <div className="max-w-6xl md:max-w-3xl mx-auto px-4 flex flex-row sm:flex-row justify-between items-center">
        {/* Left Text */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Shortlink - Adu-Poku
        </p>

        {/* Theme Toggle */}
        <div className="flex items-center sm:gap-2 gap-0">
          <button
            onClick={() => setTheme("light")}
            className={`p-2 rounded-md ${
              theme === "light"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <Sun className="w-4 h-4 text-gray-800 dark:text-gray-200" />
          </button>

          <button
            onClick={() => setTheme("dark")}
            className={`p-2 rounded-md ${
              theme === "dark"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <Moon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
          </button>

          <button
            onClick={() => setTheme("system")}
            className={`p-2 rounded-md ${
              theme === "system"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <Laptop className="w-4 h-4 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
