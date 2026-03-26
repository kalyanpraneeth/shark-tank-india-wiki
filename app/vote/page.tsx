"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { SHARKS } from "@/lib/data";

const PITCHES = [
  "Skippi Ice Pops", "Heads Up For Tails", "Snitch", "StayVista",
  "Plix", "The Whole Truth", "Mokobara", "Thinkerbell Labs",
  "YesMadam", "ByteMint", "GreenJams", "iThink Logistics",
];

export default function VotePage() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [casting, setCasting] = useState(false);

  useEffect(() => {
    supabase.from("votes").select("vote_type, vote_key, count").then(({ data }) => {
      if (!data) return;
      const map: Record<string, number> = {};
      (data as { vote_type: string; vote_key: string; count: number }[]).forEach((r) => {
        map[`${r.vote_type}:${r.vote_key}`] = r.count;
      });
      setVotes(map);
    });
  }, []);

  const cast = async (type: string, key: string) => {
    if (casting) return;
    setCasting(true);
    const k = `${type}:${key}`;
    setVotes((v) => ({ ...v, [k]: (v[k] ?? 0) + 1 }));
    await supabase.rpc("upsert_vote", { p_type: type, p_key: key });
    setCasting(false);
  };

  const sharkTotal = SHARKS.slice(0, 12).reduce((s, sh) => s + (votes[`shark:${sh.name.split(" ")[0]}`] ?? 0), 0) || 1;
  const pitchTotal = PITCHES.reduce((s, p) => s + (votes[`pitch:${p}`] ?? 0), 0) || 1;

  const topShark = [...SHARKS.slice(0, 12)].sort((a, b) =>
    (votes[`shark:${b.name.split(" ")[0]}`] ?? 0) - (votes[`shark:${a.name.split(" ")[0]}`] ?? 0)
  )[0];
  const topPitch = [...PITCHES].sort((a, b) => (votes[`pitch:${b}`] ?? 0) - (votes[`pitch:${a}`] ?? 0))[0];

  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">FAN <span className="text-[#e8c73a]">VOTE</span></h1>
      <p className="text-xs text-[#9086a8] mb-5">Click to vote — results are live and saved for everyone</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Shark votes */}
        <div>
          <p className="font-mono text-[9px] text-[#e8c73a] tracking-widest mb-3">FAVOURITE SHARK</p>
          {SHARKS.slice(0, 12).map((s) => {
            const key = s.name.split(" ")[0];
            const count = votes[`shark:${key}`] ?? 0;
            const pct = Math.round((count / sharkTotal) * 100);
            return (
              <button key={s.id} onClick={() => cast("shark", key)}
                className="flex items-center gap-2 w-full mb-2 bg-[#111118] border border-white/5 rounded-lg px-3 py-2 hover:border-white/15 transition-colors text-left">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black shrink-0"
                  style={{ background: s.color + "22", color: s.color }}>
                  {s.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold mb-1">{key}</div>
                  <div className="h-1 bg-[#1a1a24] rounded overflow-hidden">
                    <div className="h-full rounded transition-all duration-300" style={{ width: `${pct}%`, background: s.color }} />
                  </div>
                </div>
                <div className="font-mono text-[10px] text-[#9086a8] w-6 text-right shrink-0">{count}</div>
              </button>
            );
          })}
        </div>

        {/* Pitch votes */}
        <div>
          <p className="font-mono text-[9px] text-[#e8c73a] tracking-widest mb-3">MOST ICONIC PITCH</p>
          {PITCHES.map((name) => {
            const count = votes[`pitch:${name}`] ?? 0;
            const pct = Math.round((count / pitchTotal) * 100);
            return (
              <button key={name} onClick={() => cast("pitch", name)}
                className="flex items-center gap-2 w-full mb-2 bg-[#111118] border border-white/5 rounded-lg px-3 py-2 hover:border-white/15 transition-colors text-left">
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold mb-1">{name}</div>
                  <div className="h-1 bg-[#1a1a24] rounded overflow-hidden">
                    <div className="h-full bg-[#e8c73a] rounded transition-all duration-300" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <div className="font-mono text-[10px] text-[#9086a8] w-6 text-right shrink-0">{count}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Leaders */}
      <div className="bg-[#e8c73a]/5 border border-[#e8c73a]/15 rounded-lg p-4">
        <p className="font-mono text-[9px] text-[#e8c73a] tracking-widest mb-3">CURRENT LEADERS</p>
        <div className="flex gap-8 flex-wrap">
          <div>
            <div className="text-[10px] text-[#9086a8] mb-0.5">Top Shark</div>
            <div className="font-bold text-sm">
              {topShark?.name.split(" ")[0]}{" "}
              <span className="font-mono text-xs text-[#e8c73a]">
                {votes[`shark:${topShark?.name.split(" ")[0]}`] ?? 0} votes
              </span>
            </div>
          </div>
          <div>
            <div className="text-[10px] text-[#9086a8] mb-0.5">Top Pitch</div>
            <div className="font-bold text-sm">
              {topPitch}{" "}
              <span className="font-mono text-xs text-[#e8c73a]">
                {votes[`pitch:${topPitch}`] ?? 0} votes
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-[#9086a8] mt-3">
        Votes are stored in a real database and shared across all visitors.
      </p>
    </div>
  );
}
