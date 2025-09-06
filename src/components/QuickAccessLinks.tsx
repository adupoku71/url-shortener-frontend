"use client";

import QuickLinkCard from "./ui/QuickLinkCard";
export default function QuickAccessLinks() {
  return (
    <section className="max-w-4xl mx-auto mt-16 mb-24">
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Need more control?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <QuickLinkCard
            href="/dashboard"
            title="Dashboard"
            description="Manage all your shortened links in one place"
            iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
          <QuickLinkCard
            href="/analytics"
            title="Analytics"
            description="Deep insights into your link performance"
            iconPath="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </div>
      </div>
    </section>
  );
}
