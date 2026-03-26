"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

type Submission = {
  id: number;
  startup_name: string;
  sector: string;
  season: string;
  deal_amount: string;
  sharks: string;
  notes: string;
  created_at: string;
  status: string;
};

export default function SubmitPage() {
  const [form, setForm] = useState({
    startup_name: "", sector: "", season: "S1",
    deal_amount: "", sharks: "", notes: "",
  });
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase
      .from("submissions")
      .select("*")
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .then(({ data }) => { if (data) setSubmissions(data as Submission[]); });
  }, []);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async () => {
    if (!form.startup_name || !form.sector) return;
    setLoading(true);
    await supabase.from("submissions").insert([{ ...form, status: "pending" }]);
    setSent(true);
    setLoading(false);
    setForm({ startup_name: "", sector: "", season: "S1", deal_amount: "", sharks: "", notes: "" });
  };

  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">SUBMIT A <span className="text-[#e8c73a]">DEAL</span></h1>
      <p className="text-xs text-[#9086a8] mb-6">Know a deal we missed? Submit it and we'll review it.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Form */}
        <div className="card">
          <p className="font-mono text-[9px] text-[#e8c73a] tracking-widest mb-4">SUBMISSION FORM</p>

          {sent ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">✅</div>
              <div className="font-bold mb-2">Thanks for the submission!</div>
              <p className="text-xs text-[#9086a8] mb-5">We'll review it and add it to the wiki if it checks out.</p>
              <button onClick={() => setSent(false)} className="text-xs text-[#e8c73a] underline hover:no-underline">
                Submit another
              </button>
            </div>
          ) : (
            <>
              {[
                ["Startup Name *", "text", "startup_name", "e.g. Skippi Ice Pops"],
                ["Sector *", "text", "sector", "e.g. Food & Bev"],
                ["Deal Amount", "text", "deal_amount", "e.g. ₹1Cr or No Deal"],
                ["Sharks Involved", "text", "sharks", "e.g. Aman, Namita"],
              ].map(([lbl, type, key, ph]) => (
                <div key={key} className="mb-3">
                  <label className="text-[10px] text-[#9086a8] uppercase tracking-wider block mb-1">{lbl}</label>
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => set(key, e.target.value)}
                    placeholder={ph}
                    className="w-full bg-[#1a1a24] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#f0eff8] outline-none focus:border-[#e8c73a]/50 placeholder:text-[#9086a8]"
                  />
                </div>
              ))}

              <div className="mb-3">
                <label className="text-[10px] text-[#9086a8] uppercase tracking-wider block mb-1">Season</label>
                <select
                  value={form.season}
                  onChange={(e) => set("season", e.target.value)}
                  className="w-full bg-[#1a1a24] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#f0eff8] outline-none focus:border-[#e8c73a]/50"
                >
                  {["S1", "S2", "S3", "S4", "S5"].map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="mb-5">
                <label className="text-[10px] text-[#9086a8] uppercase tracking-wider block mb-1">Notes</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="Any additional context about the pitch..."
                  className="w-full bg-[#1a1a24] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#f0eff8] outline-none focus:border-[#e8c73a]/50 placeholder:text-[#9086a8] resize-none h-20"
                />
              </div>

              <button
                onClick={submit}
                disabled={loading || !form.startup_name || !form.sector}
                className="w-full bg-[#e8c73a] text-black font-bold py-2.5 rounded-lg text-sm disabled:opacity-50 hover:bg-[#e8c73a]/90 transition-colors"
              >
                {loading ? "Submitting..." : "Submit Deal"}
              </button>
            </>
          )}
        </div>

        {/* Approved submissions */}
        <div>
          <p className="font-mono text-[9px] text-[#e8c73a] tracking-widest mb-3">RECENTLY APPROVED</p>
          {submissions.length === 0 ? (
            <div className="card text-center py-8">
              <div className="text-3xl mb-2">📭</div>
              <p className="text-sm text-[#9086a8]">No approved submissions yet.</p>
              <p className="text-xs text-[#9086a8] mt-1">Be the first to contribute!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {submissions.map((s) => (
                <div key={s.id} className="card">
                  <div className="font-bold text-sm mb-1">{s.startup_name}</div>
                  <div className="text-[10px] text-[#9086a8] uppercase mb-2">{s.sector} · {s.season}</div>
                  {s.deal_amount && <div className="font-mono text-sm text-[#e8c73a] mb-1">{s.deal_amount}</div>}
                  {s.sharks && <div className="text-xs text-[#9086a8] mb-1">{s.sharks}</div>}
                  {s.notes && <p className="text-xs text-[#9086a8] italic">{s.notes}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
