"use client";
import { useState } from "react";
import { SHARKS, DEALS } from "@/lib/data";

export default function PortfolioPage() {
  const [sid, setSid] = useState(SHARKS[0].id);
  const shark = SHARKS.find((s) => s.id === sid) ?? SHARKS[0];
  const fn = shark.name.split(" ")[0];
  const portfolio = DEALS.filter((d) => d.deal && d.sharks.some((sh) => sh === fn || sh.startsWith(fn)));
  const totalCr = portfolio.reduce((s, d) => s + d.amountCr, 0);

  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">SHARK <span className="text-[#e8c73a]">PORTFOLIO</span></h1>
      <p className="text-xs text-[#9086a8] mb-5">Select a shark to see every deal they made</p>

      <select value={sid} onChange={(e) => setSid(e.target.value)}
        className="w-full bg-[#111118] border rounded-lg px-4 py-2.5 text-sm text-[#f0eff8] outline-none mb-5"
        style={{ borderColor: shark.color + "44" }}>
        {SHARKS.map((s) => <option key={s.id} value={s.id}>{s.name} — {s.company}</option>)}
      </select>

      <div className="card mb-5" style={{ borderColor: shark.color + "33" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm shrink-0"
            style={{ background: shark.color + "22", color: shark.color, border: `2px solid ${shark.color}55` }}>
            {shark.initials}
          </div>
          <div>
            <div className="font-bold text-base">{shark.name}</div>
            <div className="text-xs text-[#9086a8]">{shark.company} · {shark.seasons}</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[["Deals (dataset)", String(portfolio.length)], ["Total Invested", "₹" + totalCr.toFixed(1) + "Cr"], ["Net Worth", shark.netWorth]].map(([k, v]) => (
            <div key={k} className="bg-[#1a1a24] rounded-lg p-3">
              <div className="text-[9px] text-[#9086a8] uppercase tracking-wider mb-1">{k}</div>
              <div className="font-mono font-semibold text-sm" style={{ color: shark.color }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {portfolio.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {portfolio.map((d) => (
            <div key={d.name} className="card" style={{ borderColor: shark.color + "22" }}>
              <div className="font-bold text-sm mb-1">{d.name}</div>
              <div className="text-[10px] text-[#9086a8] uppercase mb-2">{d.sector} · {d.season}</div>
              <div className="font-mono text-sm mb-2" style={{ color: shark.color }}>{d.amount}</div>
              {d.sharks.length > 1 && (
                <div className="text-[10px] text-[#9086a8] mb-1">Co-invested: {d.sharks.filter((sh) => sh !== fn).join(", ")}</div>
              )}
              <p className="text-xs text-[#9086a8] italic">{d.note}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-[#9086a8] py-8">No deals found in dataset for this shark.</p>
      )}
    </div>
  );
}
