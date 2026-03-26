import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SHARKS, DEALS } from "@/lib/data";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  return SHARKS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const shark = SHARKS.find((s) => s.id === params.id);
  if (!shark) return {};
  return { title: shark.name, description: shark.bio };
}

export default function SharkPage({ params }: Props) {
  const shark = SHARKS.find((s) => s.id === params.id);
  if (!shark) notFound();

  const firstName = shark.name.split(" ")[0];
  const portfolio = DEALS.filter((d) => d.deal && d.sharks.some((sh) => sh === firstName || sh.startsWith(firstName)));
  const totalCr = portfolio.reduce((sum, d) => sum + d.amountCr, 0);

  return (
    <div>
      <Link href="/sharks" className="text-xs text-[#9086a8] hover:text-[#f0eff8] mb-6 inline-flex items-center gap-1 transition-colors">
        ← Back to Sharks
      </Link>

      <div className="card mb-6" style={{ borderColor: shark.color + "33" }}>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-base shrink-0"
            style={{ background: shark.color + "22", color: shark.color, border: `2px solid ${shark.color}55` }}>
            {shark.initials}
          </div>
          <div>
            <h1 className="font-bold text-xl">{shark.name}</h1>
            <p className="text-xs text-[#9086a8]">{shark.company} · {shark.seasons}</p>
          </div>
        </div>

        <p className="text-sm text-[#9086a8] leading-relaxed mb-5">{shark.bio}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[["Net Worth", shark.netWorth], ["Total Deals", shark.deals], ["Invested", shark.invested], ["Avg Deal", shark.avgDeal]].map(([k, v]) => (
            <div key={k} className="bg-[#1a1a24] rounded-lg p-3">
              <div className="text-[9px] text-[#9086a8] uppercase tracking-wider mb-1">{k}</div>
              <div className="font-mono font-semibold text-sm" style={{ color: shark.color }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {portfolio.length > 0 && (
        <div>
          <h2 className="text-sm font-bold mb-3 text-[#9086a8] uppercase tracking-widest">
            Portfolio — {portfolio.length} deals · ₹{totalCr.toFixed(1)}Cr invested
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {portfolio.map((d) => (
              <div key={d.name} className="card" style={{ borderColor: shark.color + "22" }}>
                <div className="font-bold text-sm mb-1">{d.name}</div>
                <div className="text-[10px] text-[#9086a8] uppercase mb-2">{d.sector} · {d.season}</div>
                <div className="font-mono text-sm mb-2" style={{ color: shark.color }}>{d.amount}</div>
                {d.sharks.length > 1 && (
                  <div className="text-[10px] text-[#9086a8]">
                    Co-invested: {d.sharks.filter((sh) => sh !== firstName).join(", ")}
                  </div>
                )}
                <p className="text-xs text-[#9086a8] italic mt-1">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
