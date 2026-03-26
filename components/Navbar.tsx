"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/sharks", label: "Sharks" },
  { href: "/seasons", label: "Seasons" },
  { href: "/deals", label: "Pitches" },
  { href: "/leaderboard", label: "Top Deals" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/tracker", label: "Post-Show" },
  { href: "/vote", label: "Fan Vote" },
  { href: "/quiz", label: "Quiz" },
  { href: "/sim", label: "Pitch Sim" },
  { href: "/submit", label: "Submit Deal" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#111118] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <div className="w-7 h-7 bg-[#e8c73a] rounded-lg flex items-center justify-center text-base">🦈</div>
          <span className="font-bold text-sm tracking-widest">
            STI <span className="text-[#e8c73a]">WIKI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5 overflow-x-auto">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                pathname === href
                  ? "bg-[#e8c73a]/15 text-[#e8c73a]"
                  : "text-[#9086a8] hover:text-[#f0eff8] hover:bg-white/5"
              }`}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 bg-[#f0eff8] transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#f0eff8] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#f0eff8] transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#111118] px-4 py-3 grid grid-cols-2 gap-1">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? "bg-[#e8c73a]/15 text-[#e8c73a]"
                  : "text-[#9086a8] hover:text-[#f0eff8] hover:bg-white/5"
              }`}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
