"use client";

import { ResultBoxProps } from "@/types/types";

export default function ResultBox({
  shortUrl,
  copied,
  copyToClipboard,
}: ResultBoxProps) {
  return (
    <div className="mt-8">
      <div className="bg-gray-50 rounded-lg p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your shortened URL
        </label>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            id="shortened-url"
            value={shortUrl}
            readOnly
            className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-gray-900"
          />
          <button
            type="button"
            onClick={copyToClipboard}
            className={`px-4 py-2 rounded transition-colors whitespace-nowrap ${
              copied
                ? "bg-green-500 text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
