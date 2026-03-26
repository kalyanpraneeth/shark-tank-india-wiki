"use client";
import { useState } from "react";
import { SEASONS } from "@/lib/data";

export default function SeasonsPage() {
  const [sel, setSel] = useState(0);
  const s = SEASONS[sel];

  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">ALL <span className="text-[#e8c73a]">SEASONS</span></h1>
      <p className="text-xs text-[#9086a8] mb-5">Season-by-season breakdown with stats and highlights</p>

      <div className="flex gap-2 flex-wrap mb-5">
        {SEASONS.map((sd, i) => (
          <button key={i} onClick={() => setSel(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              sel === i ? "bg-[#e8c73a] text-black border-[#e8c73a] font-bold" : "border-white/10 text-[#9086a8] hover:border-white/20 hover:text-[#f0eff8]"
            }`}>
            Season {sd.number}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="text-6xl font-black text-[#e8c73a]/10 leading-none mb-2">S{s.number}</div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-[#9086a8] mb-1">Aired: <span className="text-[#f0eff8]">{s.aired}</span></p>
            <p className="text-xs text-[#9086a8] mb-1">Episodes: <span className="text-[#f0eff8]">{s.episodes}</span> · Deals: <span className="text-[#3ae87a]">{s.dealCount}</span></p>
            <p className="text-xs text-[#9086a8] mb-4">Asked: <span className="text-[#f0eff8]">{s.totalAsked}</span> · Closed: <span className="text-[#e8c73a]">{s.totalClosed}</span></p>
            <p className="text-sm text-[#9086a8] leading-relaxed mb-4">{s.highlight}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.sharks.map((sh) => (
                <span key={sh} className="text-[10px] px-2 py-0.5 rounded-full bg-[#e8c73a]/10 text-[#e8c73a] border border-[#e8c73a]/25">{sh}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] text-[#9086a8] uppercase tracking-widest mb-3">Notable Facts</p>
            {s.facts.map((f) => (
              <div key={f} className="flex gap-2 mb-2">
                <span className="text-[#e8c73a] shrink-0 mt-0.5">›</span>
                <span className="text-xs text-[#9086a8]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
