"use client";

import { useState } from "react";
import UrlInputForm from "@/components/ui/UrlInputForm";
import ResultBox from "@/components/ui/ResultBox";

export default function ShortenForm() {
  const [longUrl, setLongUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!longUrl.trim()) return;

    setLoading(true);
    setShortUrl(null);
    setCopied(false);

    // Simulate API call
    setTimeout(() => {
      setShortUrl("https://shortlink.io/abc123");
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <UrlInputForm
          longUrl={longUrl}
          setLongUrl={setLongUrl}
          handleSubmit={handleSubmit}
          loading={loading}
        />

        {shortUrl && (
          <ResultBox
            shortUrl={shortUrl}
            copied={copied}
            copyToClipboard={copyToClipboard}
          />
        )}
      </div>
    </div>
  );
}
