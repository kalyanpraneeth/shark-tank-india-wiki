import { DEALS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Top Deals" };

export default function LeaderboardPage() {
  const sorted = [...DEALS].filter((d) => d.deal && d.amountCr > 0).sort((a, b) => b.amountCr - a.amountCr);

  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">TOP <span className="text-[#e8c73a]">DEALS</span></h1>
      <p className="text-xs text-[#9086a8] mb-6">Biggest investments ranked by deal amount across all 5 seasons</p>
      <div className="card p-0 overflow-hidden">
        {sorted.map((d, i) => (
          <div key={i} className={`grid grid-cols-[40px_1fr_auto] gap-3 items-center px-4 py-3 border-b border-white/5 ${i === 0 ? "bg-[#e8c73a]/5" : i === 1 ? "bg-white/[0.02]" : ""}`}>
            <div className={`text-center font-black ${i < 3 ? "text-lg" : "text-sm text-[#9086a8]"}`}>
              {i < 3 ? ["🥇", "🥈", "🥉"][i] : i + 1}
            </div>
            <div>
              <div className="font-bold text-sm mb-0.5">{d.name}</div>
              <div className="text-[10px] text-[#9086a8] mb-1">{d.sector} · {d.season}</div>
              <div className="flex gap-1 flex-wrap">
                {d.sharks.map((sh) => (
                  <span key={sh} className="text-[9px] px-1.5 py-0.5 bg-[#1a1a24] text-[#9086a8] rounded">{sh}</span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono font-bold text-[#e8c73a]">{d.amount}</div>
              <div className="text-[9px] text-[#9086a8]">invested</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
