import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Shark Tank India Wiki — Fan Guide S1–S5",
    template: "%s | Shark Tank India Wiki",
  },
  description:
    "The ultimate fan wiki for Shark Tank India. All 17 sharks, 80+ pitches, deal stats, season breakdowns and more — covering Seasons 1 to 5.",
  keywords: ["Shark Tank India", "sharks", "deals", "pitches", "Aman Gupta", "Namita Thapar", "Ashneer Grover"],
  openGraph: {
    title: "Shark Tank India Wiki",
    description: "The ultimate fan wiki for Shark Tank India S1–S5.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f] text-[#f0eff8] min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        <footer className="text-center py-4 text-xs text-[#9086a8] border-t border-white/10 mt-12">
          Fan-made wiki · Not affiliated with Sony LIV or Studio Next · Data from public sources
        </footer>
      </body>
    </html>
  );
}
