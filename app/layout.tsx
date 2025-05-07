import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

// Configure Poppins font with specific weights and character sets
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// Configure Geist Mono font for monospace text
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for the application
// This is used for SEO and browser tab information
export const metadata: Metadata = {
  title: "Posts",
  description: "Create post",
  icons: {
    icon: "/favicon.ico",
  },
};

// Root layout component that wraps all pages in the application
// This is a special Next.js file that must export a default component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply Poppins font to the entire application */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
