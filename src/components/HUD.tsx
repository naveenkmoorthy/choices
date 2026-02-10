import type { PlayerStats } from "@/types/story";

type HUDProps = {
  stats: PlayerStats;
};

export function HUD({ stats }: HUDProps) {
  return (
    <div className="grid grid-cols-3 gap-3 rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-sm">
      <StatCard label="Confidence" value={stats.confidence} accent="text-cyan-300" />
      <StatCard label="Romance" value={stats.romance} accent="text-pink-300" />
      <StatCard label="Coins" value={stats.coins} accent="text-amber-300" />
    </div>
  );
}

type StatCardProps = {
  label: string;
  value: number;
  accent: string;
};

function StatCard({ label, value, accent }: StatCardProps) {
  return (
    <div className="rounded-lg bg-slate-800/90 p-3 text-center">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className={`text-xl font-semibold ${accent}`}>{value}</p>
    </div>
  );
}
