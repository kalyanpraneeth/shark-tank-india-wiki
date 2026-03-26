"use client";
import { useState, useMemo } from "react";
import { DEALS } from "@/lib/data";

export default function DealsPage() {
  const [q, setQ] = useState("");
  const [season, setSeason] = useState("all");
  const [outcome, setOutcome] = useState("all");

  const filtered = useMemo(() =>
    DEALS.filter((d) => {
      const ms = season === "all" || d.season === season;
      const mo = outcome === "all" || (outcome === "deal" ? d.deal : !d.deal);
      const mq = !q || [d.name, d.sector, ...d.sharks].join(" ").toLowerCase().includes(q.toLowerCase());
      return ms && mo && mq;
    }), [q, season, outcome]);

  const funded = filtered.filter((d) => d.deal).length;

  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">ALL <span className="text-[#e8c73a]">PITCHES</span></h1>
      <p className="text-xs text-[#9086a8] mb-5">Every startup that walked into the tank</p>

      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search startup, sector, shark..."
        className="w-full bg-[#111118] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-[#f0eff8] outline-none focus:border-[#e8c73a]/50 mb-3 placeholder:text-[#9086a8]" />

      <div className="flex gap-2 flex-wrap mb-2">
        {[["all", "All"], ["S1", "S1"], ["S2", "S2"], ["S3", "S3"], ["S4", "S4"], ["S5", "S5"]].map(([v, l]) => (
          <button key={v} onClick={() => setSeason(v)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${season === v ? "bg-[#e8c73a] text-black border-[#e8c73a]" : "border-white/10 text-[#9086a8] hover:border-white/20"}`}>
            {l}
          </button>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {[["all", "All"], ["deal", "✓ Funded"], ["nodeal", "✗ No Deal"]].map(([v, l]) => (
          <button key={v} onClick={() => setOutcome(v)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${outcome === v ? "bg-[#e8c73a] text-black border-[#e8c73a]" : "border-white/10 text-[#9086a8] hover:border-white/20"}`}>
            {l}
          </button>
        ))}
      </div>

      <p className="text-xs text-[#9086a8] mb-4">
        <strong className="text-[#f0eff8]">{filtered.length}</strong> pitches &nbsp;
        <span className="text-[#3ae87a]">✓ {funded}</span> &nbsp;
        <span className="text-[#e84a4a]">✗ {filtered.length - funded}</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((d, i) => (
          <div key={i} className={`card ${!d.deal ? "opacity-75 border-red-500/20" : ""}`}>
            <div className="flex justify-between items-start mb-1">
              <div className="font-bold text-sm">{d.name}</div>
              <span className={`pill ${d.deal ? "pill-deal" : "pill-nodeal"} ml-2 shrink-0`}>
                {d.deal ? "✓ Deal" : "✗ No Deal"}
              </span>
            </div>
            <div className="text-[10px] text-[#9086a8] uppercase tracking-wider mb-2">{d.sector} · {d.season}</div>
            {d.deal && <div className="font-mono text-sm text-[#e8c73a] mb-2">{d.amount}</div>}
            {d.deal && d.sharks.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-2">
                {d.sharks.map((sh) => (
                  <span key={sh} className="text-[10px] px-1.5 py-0.5 bg-[#1a1a24] border border-white/10 rounded text-[#9086a8]">{sh}</span>
                ))}
              </div>
            )}
            <p className="text-xs text-[#9086a8] italic">{d.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
