import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shortlink",
  description: "A modern and minimalistic URL shortener service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
