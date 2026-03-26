"use client";
import { useState } from "react";

const ALL_QUESTIONS = [
  { q: "Which startup got investment from ALL 5 sharks in Season 1?", opts: ["Tagz Foods", "Skippi Ice Pops", "Get-A-Whey", "Clensta"], a: 1 },
  { q: "Aman Gupta is the co-founder of which company?", opts: ["Lenskart", "SUGAR Cosmetics", "boAt Lifestyle", "Shaadi.com"], a: 2 },
  { q: "Which shark appeared only in Season 1 due to a corporate dispute?", opts: ["Amit Jain", "Ritesh Agarwal", "Ashneer Grover", "Peyush Bansal"], a: 2 },
  { q: "Peyush Bansal is CEO of which unicorn?", opts: ["BharatPe", "Lenskart", "OYO", "CarDekho"], a: 1 },
  { q: "Which shark founded OYO at age 19?", opts: ["Anupam Mittal", "Vineeta Singh", "Peyush Bansal", "Ritesh Agarwal"], a: 3 },
  { q: "Namita Thapar is Executive Director of which company?", opts: ["Sun Pharma", "Cipla", "Emcure Pharmaceuticals", "Dr. Reddy's"], a: 2 },
  { q: "Who founded Shaadi.com in 1997?", opts: ["Anupam Mittal", "Aman Gupta", "Ashneer Grover", "Amit Jain"], a: 0 },
  { q: "Which platform primarily airs Shark Tank India?", opts: ["Netflix", "Amazon Prime", "Sony LIV", "Disney+ Hotstar"], a: 2 },
  { q: "Amit Jain co-founded which auto-tech unicorn?", opts: ["OLA", "CarDekho", "Rapido", "Zoomcar"], a: 1 },
  { q: "Deepinder Goyal founded which company?", opts: ["Swiggy", "Zomato", "ACKO", "InShorts"], a: 1 },
  { q: "Ronnie Screwvala sold which media company to Disney?", opts: ["Balaji Telefilms", "UTV Group", "Yash Raj Films", "T-Series"], a: 1 },
  { q: "Which shark is a Thiel Fellowship recipient?", opts: ["Peyush Bansal", "Aman Gupta", "Ritesh Agarwal", "Anupam Mittal"], a: 2 },
  { q: "Which season had the most episodes (50)?", opts: ["Season 1", "Season 2", "Season 3", "Season 4"], a: 2 },
  { q: "Thinkerbell Labs created tech for which community?", opts: ["Deaf children", "Visually impaired", "Rural students", "Speech-impaired"], a: 1 },
  { q: "Vineeta Singh turned down a ₹1Cr offer from which college?", opts: ["IIT Delhi", "IIM Ahmedabad", "IIT Madras", "IIM Bangalore"], a: 1 },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function QuizPage() {
  const [questions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, 10));
  const [cur, setCur] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const answer = (i: number) => {
    if (chosen !== null) return;
    setChosen(i);
    if (i === questions[cur].a) setScore((s) => s + 1);
    setTimeout(() => {
      if (cur + 1 >= questions.length) setDone(true);
      else { setCur((c) => c + 1); setChosen(null); }
    }, 1300);
  };

  const restart = () => { setCur(0); setScore(0); setChosen(null); setDone(false); };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const [grade, color] =
      pct >= 80 ? ["True Shark", "#e8c73a"] :
      pct >= 60 ? ["Deal Maker", "#3ae87a"] :
      ["Casual Viewer", "#9086a8"];
    return (
      <div className="flex justify-center pt-8">
        <div className="card max-w-sm w-full text-center py-8">
          <div className="text-5xl mb-3">{pct >= 80 ? "🦈" : pct >= 60 ? "💼" : "📺"}</div>
          <div className="text-2xl font-black tracking-widest mb-1" style={{ color }}>{grade.toUpperCase()}</div>
          <div className="text-5xl font-black text-[#e8c73a] leading-none">
            {score}<span className="text-xl text-[#9086a8]">/{questions.length}</span>
          </div>
          <div className="text-sm text-[#9086a8] mt-2 mb-6">{pct}% correct</div>
          <button onClick={restart}
            className="bg-[#e8c73a] text-black font-bold px-6 py-2 rounded-lg text-sm hover:bg-[#e8c73a]/90 transition-colors">
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  const q = questions[cur];
  return (
    <div>
      <h1 className="text-2xl font-black tracking-widest mb-1">TANK <span className="text-[#e8c73a]">QUIZ</span></h1>
      <p className="text-xs text-[#9086a8] mb-5">10 questions — how well do you know Shark Tank India?</p>

      <div className="card max-w-xl">
        <div className="flex justify-between mb-3">
          <span className="font-mono text-xs text-[#e8c73a]">Q {cur + 1} / {questions.length}</span>
          <span className="font-mono text-xs">Score: <strong>{score}</strong></span>
        </div>
        <div className="h-1 bg-[#1a1a24] rounded mb-4 overflow-hidden">
          <div className="h-full bg-[#e8c73a] rounded transition-all duration-300"
            style={{ width: `${(cur / questions.length) * 100}%` }} />
        </div>
        <p className="text-base font-semibold leading-snug mb-4">{q.q}</p>
        <div className="flex flex-col gap-2">
          {q.opts.map((opt, i) => {
            let cls = "bg-[#1a1a24] border-white/10 text-[#f0eff8]";
            if (chosen !== null) {
              if (i === q.a) cls = "bg-green-500/15 border-green-400 text-green-400";
              else if (i === chosen) cls = "bg-red-500/15 border-red-400 text-red-400";
            }
            return (
              <button key={i} onClick={() => answer(i)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border text-sm text-left transition-all ${cls} ${chosen !== null ? "cursor-default" : "hover:border-white/20"}`}>
                <span className="w-5 h-5 rounded-full bg-[#111118] border border-white/10 flex items-center justify-center text-[10px] font-bold font-mono shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
