"use client";
import { useState } from "react";
import { SHARKS } from "@/lib/data";

const AFFINITY: Record<string, string[]> = {
  ashneer: ["Fintech", "Fashion", "Food"],
  namita: ["Health", "Pharma", "Beauty", "AgriTech"],
  aman: ["Electronics", "Fashion", "Food", "Sports", "D2C"],
  vineeta: ["Beauty", "Fashion", "D2C", "Wellness"],
  anupam: ["SaaS", "Fintech", "Social", "Food"],
  peyush: ["EdTech", "SaaS", "Health", "Fintech", "Sustainability"],
  amit: ["Fintech", "Logistics", "Auto"],
  ritesh: ["Hospitality", "Travel", "EV"],
  ghazal: ["Beauty", "Personal Care", "Baby"],
  deepinder: ["Food", "Logistics", "Consumer"],
  radhika: ["Fintech", "Finance", "EdTech"],
  ronnie: ["EdTech", "Media", "Consumer"],
  kunal: ["E-commerce", "D2C", "SaaS"],
  viraj: ["Food", "FMCG", "Snacks"],
  varun_a: ["Beauty", "D2C", "FMCG"],
};

type Reaction = { shark: typeof SHARKS[0]; score: number; in: boolean };
type Result = {
  reactions: Reaction[];
  name: string; sector: string; askL: number; eq: number;
  val: number; rm: string | null;
  interested: Reaction[];
};

const SECTORS = ["Food & Bev", "Health & Wellness", "Fashion", "EdTech", "Fintech", "AgriTech", "Consumer Electronics", "Beauty", "Sustainability", "Hospitality", "SaaS", "EV", "FMCG", "Social Impact"];

export default function SimPage() {
  const [form, setForm] = useState({ name: "", sector: "", ask: "", equity: "", rev: "" });
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const run = () => {
    const askL = parseFloat(form.ask) || 0;
    const eq = parseFloat(form.equity) || 0;
    const rev = parseFloat(form.rev) || 0;
    if (!form.sector || !askL || !eq) { setError(true); return; }
    setError(false);
    const val = askL / (eq / 100);
    const rm = rev > 0 ? (val / rev).toFixed(1) : null;
    const reactions: Reaction[] = SHARKS.map((s) => {
      const kw = AFFINITY[s.id] ?? [];
      const match = kw.some((k) =>
        form.sector.toLowerCase().includes(k.toLowerCase()) ||
        k.toLowerCase().includes(form.sector.toLowerCase().split(" ")[0])
      );
      let sc = match ? 62 : 32;
      if (eq >= 5) sc += 12; if (eq <= 2) sc -= 15;
      if (rm && parseFloat(rm) < 5) sc += 18; if (rm && parseFloat(rm) > 20) sc -= 18;
      if (askL <= 100) sc += 10; if (askL > 300) sc -= 10;
      if (rev > 500) sc += 10; if (rev === 0) sc -= 18;
      sc = Math.max(8, Math.min(96, sc + (Math.random() * 14 - 7)));
      return { shark: s, score: Math.round(sc), in: sc >= 54 };
    }).sort((a, b) => b.score - a.score);
    setResult({ reactions, name: form.name || "Your Startup", sector: form.sector, askL, eq, val, rm, interested: reactions.filter((r) => r.in) });
  };

  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">PITCH <span className="text-[#e8c73a]">SIMULATOR</span></h1>
      <p className="text-xs text-[#9086a8] mb-5">Enter your startup details and see how the sharks might react</p>

      <div className="grid md:grid-cols-2 gap-5 items-start">
        <div className="card">
          {[["Startup Name", "text", "name", "e.g. SpiceRocket"], ["Asking (₹ Lakhs)", "number", "ask", "75"], ["Equity (%)", "number", "equity", "5"], ["Revenue (₹ Lakhs)", "number", "rev", "200"]].map(([lbl, type, key, ph]) => (
            <div key={key} className="mb-3">
              <label className="text-[10px] text-[#9086a8] uppercase tracking-wider block mb-1">{lbl}</label>
              <input type={type} value={form[key as keyof typeof form]} onChange={(e) => set(key, e.target.value)} placeholder={ph}
                className="w-full bg-[#1a1a24] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#f0eff8] outline-none focus:border-[#e8c73a]/50 placeholder:text-[#9086a8]" />
            </div>
          ))}
          <div className="mb-4">
            <label className="text-[10px] text-[#9086a8] uppercase tracking-wider block mb-1">Sector</label>
            <select value={form.sector} onChange={(e) => set("sector", e.target.value)}
              className="w-full bg-[#1a1a24] border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#e8c73a]/50"
              style={{ color: form.sector ? "#f0eff8" : "#9086a8" }}>
              <option value="">Select sector...</option>
              {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          {error && <p className="text-xs text-red-400 mb-3">Please fill in sector, asking amount and equity.</p>}
          <button onClick={run}
            className="w-full bg-[#e8c73a] text-black font-bold py-2.5 rounded-lg text-sm hover:bg-[#e8c73a]/90 transition-colors">
            🦈 Enter the Tank
          </button>
        </div>

        <div className="card min-h-[260px] flex items-center justify-center">
          {!result ? (
            <p className="text-sm text-[#9086a8] text-center">Fill in your details<br />and hit Enter the Tank</p>
          ) : (
            <div className="w-full">
              <div className="bg-[#e8c73a]/5 border border-[#e8c73a]/20 rounded-lg p-3 mb-4">
                <div className="font-black text-base mb-1">{result.name.toUpperCase()}</div>
                <div className="text-[10px] text-[#9086a8]">
                  {result.sector} · Ask ₹{result.askL}L · Val ₹{result.val.toFixed(0)}L{result.rm ? ` · ${result.rm}x rev` : ""}
                </div>
              </div>
              <p className="font-mono text-[9px] text-[#9086a8] tracking-widest mb-2">SHARK REACTIONS</p>
              <div className="flex flex-col gap-1.5 mb-4">
                {result.reactions.map((r) => (
                  <div key={r.shark.id} className="flex items-center gap-2 bg-[#0a0a0f] border rounded-lg px-3 py-1.5"
                    style={{ borderColor: r.in ? r.shark.color + "44" : "rgba(255,255,255,0.06)" }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-black shrink-0"
                      style={{ background: r.shark.color + "22", color: r.shark.color }}>
                      {r.shark.initials}
                    </div>
                    <div className="text-xs font-semibold w-14 shrink-0">{r.shark.name.split(" ")[0]}</div>
                    <div className="flex-1 h-1 bg-[#1a1a24] rounded overflow-hidden">
                      <div className="h-full rounded transition-all"
                        style={{ width: `${r.score}%`, background: r.score > 70 ? "#3ae87a" : r.score > 45 ? "#e8c73a" : "#e84a4a" }} />
                    </div>
                    <div className="text-[10px] font-mono w-10 text-right shrink-0"
                      style={{ color: r.in ? "#3ae87a" : "#e84a4a" }}>
                      {r.in ? "✓ In" : "✗ Out"}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#0a0a0f] border border-white/10 rounded-lg p-3 text-xs text-[#9086a8]">
                {result.interested.length >= 2
                  ? `🎉 Likely deal! ${result.interested.length} sharks interested.`
                  : result.interested.length === 1
                  ? `⚖️ Possible deal. Only ${result.interested[0].shark.name.split(" ")[0]} is likely to bite.`
                  : "😬 Tough room. Revise valuation or increase equity."}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
