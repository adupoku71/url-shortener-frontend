"use client";

import { FeatureCardProps } from "@/types/types";

export default function FeatureCard({
  path,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="space-y-3">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={path}
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
