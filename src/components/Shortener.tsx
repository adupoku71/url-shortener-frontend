"use client";
import { useState } from "react";

export default function Shortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setShortUrl("https://short.link/abc123"); // fake short URL
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <section className="max-w-3xl mx-auto text-center mt-20 px-4">
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="url"
          placeholder="Enter your long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Shorten
        </button>
      </form>

      {/* Result */}
      {shortUrl && (
        <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between border border-gray-200 dark:border-gray-700">
          <input
            type="text"
            value={shortUrl}
            readOnly
            className="flex-1 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded text-gray-900 dark:text-gray-100"
          />
          <button
            onClick={handleCopy}
            className="ml-4 px-4 py-2 rounded bg-black hover:bg-gray-800 text-white dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </section>
  );
}
