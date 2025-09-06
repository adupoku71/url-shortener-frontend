"use client";

import { QuickLinkCardProps } from "@/types/types";
import Link from "next/link";

export default function QuickLinkCard({
  href,
  title,
  description,
  iconPath,
}: QuickLinkCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm"
    >
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={iconPath}
            />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 group-hover:text-black">
            {title}
          </h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
