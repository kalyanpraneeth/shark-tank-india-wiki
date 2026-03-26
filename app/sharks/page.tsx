import Link from "next/link";
import type { Metadata } from "next";
import { SHARKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Sharks",
  description: "Profiles of all 17 sharks on Shark Tank India across Seasons 1–5.",
};

export default function SharksPage() {
  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">THE <span className="text-[#e8c73a]">SHARKS</span></h1>
      <p className="text-xs text-[#9086a8] mb-6">All 17 investors across Seasons 1–5 — click for full profile</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SHARKS.map((s) => (
          <Link key={s.id} href={`/sharks/${s.id}`}
            className="card hover:border-white/20 hover:-translate-y-0.5 transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: s.color }} />
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-xs mb-3"
              style={{ background: s.color + "22", color: s.color, border: `2px solid ${s.color}44` }}>
              {s.initials}
            </div>
            <div className="font-bold text-sm mb-0.5">{s.name}</div>
            <div className="text-[10px] text-[#9086a8] mb-1">{s.company}</div>
            <div className="text-[10px] text-[#9086a8] mb-3">Seasons: <span className="text-[#f0eff8]">{s.seasons}</span></div>
            <div className="flex gap-2">
              <div className="bg-[#1a1a24] rounded-md px-2 py-1.5 text-xs">{s.deals} deals</div>
              <div className="bg-[#1a1a24] rounded-md px-2 py-1.5 text-xs text-[#e8c73a]">{s.invested}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
