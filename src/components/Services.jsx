import React from 'react';
import { Rocket, Sparkles, Wand2 } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Brand Acceleration',
    desc: 'Positioning, identity systems, and launch campaigns tuned for AI-first channels.'
  },
  {
    icon: Sparkles,
    title: 'Generative Content',
    desc: 'Automated content pipelines that adapt to audience signals in real time.'
  },
  {
    icon: Wand2,
    title: 'Interactive Experiences',
    desc: '3D, voice and micro-animations that amplify conversion and recall.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-20 bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">What we do</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">A modular system that scales from concept to production. Built for dual-theme and motion-first brands.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-white">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
