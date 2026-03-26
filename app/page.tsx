import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shark Tank India Wiki — Fan Guide S1–S5",
};

const CARDS = [
  { href: "/sharks", icon: "🦈", title: "Sharks", desc: "17 investors + bios" },
  { href: "/seasons", icon: "🎬", title: "Seasons", desc: "S1–S5 breakdown" },
  { href: "/deals", icon: "💼", title: "Pitches", desc: "All deals & no-deals" },
  { href: "/leaderboard", icon: "🏆", title: "Top Deals", desc: "Biggest investments" },
  { href: "/portfolio", icon: "📁", title: "Portfolio", desc: "Per-shark view" },
  { href: "/tracker", icon: "🔭", title: "Post-Show", desc: "Startup tracker" },
  { href: "/vote", icon: "⭐", title: "Fan Vote", desc: "Vote your faves" },
  { href: "/quiz", icon: "🧠", title: "Quiz", desc: "Test your knowledge" },
  { href: "/sim", icon: "🧮", title: "Pitch Sim", desc: "Simulate a pitch" },
  { href: "/submit", icon: "➕", title: "Submit Deal", desc: "Add a missing deal" },
];

export default function HomePage() {
  return (
    <div>
      <div className="text-center py-10 md:py-16">
        <p className="text-[10px] text-[#e8c73a] tracking-[3px] uppercase mb-3">
          India's #1 Business Reality Show
        </p>
        <h1 className="font-black leading-none tracking-widest text-[clamp(52px,12vw,100px)] mb-2">
          SHARK<br /><span className="text-[#e8c73a]">TANK</span>
        </h1>
        <p className="text-[clamp(12px,3vw,20px)] tracking-[6px] text-[#9086a8] font-light mb-6">
          INDIA FAN WIKI
        </p>
        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          {[["5", "Seasons"], ["17", "Sharks"], ["80+", "Pitches"], ["₹200Cr+", "Invested"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#e8c73a]">{n}</div>
              <div className="text-[10px] text-[#9086a8] uppercase tracking-widest">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {CARDS.map(({ href, icon, title, desc }) => (
          <Link key={href} href={href}
            className="card hover:border-white/20 hover:-translate-y-0.5 transition-all cursor-pointer">
            <div className="text-xl mb-2">{icon}</div>
            <div className="font-bold text-sm mb-1">{title}</div>
            <div className="text-xs text-[#9086a8]">{desc}</div>
          </Link>
        ))}
      </div>

      <div className="card">
        <h2 className="font-bold text-sm mb-2">About the Show</h2>
        <p className="text-xs text-[#9086a8] leading-relaxed">
          Shark Tank India is the Indian adaptation of the American show Shark Tank, airing on Sony LIV
          and Sony Entertainment Television. The show premiered on 20 December 2021 and has become a
          cultural phenomenon — turning entrepreneurs into household names. Produced by Studio Next,
          it has run for 5 successful seasons as of 2025.
        </p>
      </div>
    </div>
  );
}
