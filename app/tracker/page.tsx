"use client";
import { useState } from "react";
import { POST_SHOW, STATUS_COLORS } from "@/lib/data";

const STATUS_LABELS: Record<string, string> = {
  thriving: "🚀 Thriving",
  growing: "📈 Growing",
  pivoted: "⚙️ Pivoted",
  closed: "❌ Closed",
};

export default function TrackerPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? POST_SHOW : POST_SHOW.filter((p) => p.status === filter);

  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">
        POST-SHOW <span className="text-[#e8c73a]">TRACKER</span>
      </h1>
      <p className="text-xs text-[#9086a8] mb-5">What happened to startups after the tank?</p>

      <div className="flex gap-2 flex-wrap mb-5">
        {[["all", "All"], ["thriving", "Thriving"], ["growing", "Growing"], ["pivoted", "Pivoted"], ["closed", "Closed"]].map(([v, l]) => (
          <button key={v} onClick={() => setFilter(v)}
            className="px-3 py-1 rounded-full text-xs font-medium border transition-colors"
            style={{
              borderColor: filter === v ? (STATUS_COLORS[v] ?? "#e8c73a") : "rgba(255,255,255,0.1)",
              background: filter === v ? (STATUS_COLORS[v] ?? "#e8c73a") + "15" : "none",
              color: filter === v ? (STATUS_COLORS[v] ?? "#e8c73a") : "#9086a8",
            }}>
            {l}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {filtered.map((p, i) => (
          <div key={i} className="card" style={{ borderColor: (STATUS_COLORS[p.status] ?? "#9086a8") + "33" }}>
            <div className="flex justify-between items-start mb-2">
              <div className="font-bold text-sm">{p.name}</div>
              <span className="text-[10px] px-2 py-0.5 rounded-full border ml-2 shrink-0"
                style={{
                  background: (STATUS_COLORS[p.status] ?? "#9086a8") + "15",
                  color: STATUS_COLORS[p.status] ?? "#9086a8",
                  borderColor: (STATUS_COLORS[p.status] ?? "#9086a8") + "33",
                }}>
                {STATUS_LABELS[p.status]}
              </span>
            </div>
            <p className="text-xs text-[#9086a8] leading-relaxed">{p.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#e8c73a]/5 border border-[#e8c73a]/15 rounded-lg px-4 py-3 text-xs text-[#9086a8]">
        ⚠️ Data based on publicly available information as of 2025. Status is estimated from news reports and may not reflect current state.
      </div>
    </div>
  );
}
