// app/dashboard/page.tsx
"use client";

import { useState } from "react";

interface LinkItem {
  id: number;
  original: string;
  short: string;
  clicks: number;
  created: string;
  status: "Active" | "Inactive";
}

export default function DashboardPage() {
  const [links, setLinks] = useState<LinkItem[]>([
    {
      id: 1,
      original: "https://vercel.com/blog/introducing-vercel-ai-sdk",
      short: "short.io/abc123",
      clicks: 120,
      created: "2025-09-15",
      status: "Active",
    },
    {
      id: 2,
      original: "https://nextjs.org/docs",
      short: "short.io/xyz789",
      clicks: 45,
      created: "2025-09-12",
      status: "Active",
    },
  ]);

  const [newUrl, setNewUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");

  const createShortLink = () => {
    if (!newUrl.trim()) return alert("Please enter a URL to shorten");

    const shortId =
      customAlias.trim() || Math.random().toString(36).substr(2, 6);

    const newLink: LinkItem = {
      id: Date.now(),
      original: newUrl,
      short: `short.io/${shortId}`,
      clicks: 0,
      created: "Just now",
      status: "Active",
    };

    setLinks([newLink, ...links]);
    setNewUrl("");
    setCustomAlias("");
  };

  return (
    <main className=" bg-white dark:bg-gray-950  py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and track all your shortened links
          </p>
        </div>

        {/* Create New Link */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Create New Short Link
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="url"
              placeholder="Enter your long URL here..."
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <input
              type="text"
              placeholder="Custom alias (optional)"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
              className="sm:w-48 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <button
              onClick={createShortLink}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600  transition-colors whitespace-nowrap"
            >
              Create Link
            </button>
          </div>
        </div>

        {/* Links Table */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Your Links
            </h2>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search links..."
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <option>All Links</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Short Link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Original URL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Clicks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {links.map((link) => (
                  <tr
                    key={link.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {link.short}
                      </span>
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate text-sm text-gray-900 dark:text-gray-200">
                      {link.original}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {link.clicks}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {link.created}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        {link.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing {links.length} results
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                Previous
              </button>
              <button className="px-3 py-1 bg-black text-white rounded text-sm hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
