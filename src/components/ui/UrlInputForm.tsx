"use client";

import { UrlInputFormProps } from "@/types/types";

export default function UrlInputForm({
  longUrl,
  setLongUrl,
  handleSubmit,
  loading,
}: UrlInputFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="url-input"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter your long URL
        </label>
        <input
          type="url"
          id="url-input"
          placeholder="https://example.com/very/long/url/that/needs/shortening"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
          loading
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {loading ? "Shortening..." : "Shorten URL"}
      </button>
    </form>
  );
}
