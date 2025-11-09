import React from 'react';

const cases = [
  {
    tag: 'Fintech',
    title: 'NeonPay — Transaction clarity with motion cues',
    desc: 'A dual-theme dashboard using semantic colors and micro-interactions to reduce user friction by 28%.'
  },
  {
    tag: 'Healthcare',
    title: 'LumaCare — Empathy-led onboarding',
    desc: 'Voice-ready flows and accessible typography delivering 34% faster task completion.'
  },
  {
    tag: 'Web3',
    title: 'Orbit Labs — 3D product storytelling',
    desc: 'Spline scenes and GPU-friendly shaders to visualize protocol mechanics.'
  }
];

export default function Showcase() {
  return (
    <section id="cases" className="relative w-full py-20 bg-slate-50/70 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Selected work</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">Outcome-first case studies centered on measurable brand and product impact.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 backdrop-blur-md transition hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white">All projects</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{c.tag}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.desc}</p>
              <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-orange-400/20 ring-1 ring-inset ring-slate-200/60 dark:ring-white/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
