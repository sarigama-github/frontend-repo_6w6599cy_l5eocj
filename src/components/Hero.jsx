import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-white dark:bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial gradient overlay to enhance legibility (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.78),rgba(255,255,255,0.55),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.65),rgba(0,0,0,0.5),transparent_60%)]" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-28 lg:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
            AI-enhanced Creative Studio
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Piara Agency 2.0
            <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 bg-clip-text text-transparent">Where brands meet intelligent motion</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base text-slate-700 dark:text-slate-300 sm:text-lg">
            We blend strategy, design, and generative AI to craft immersive, responsive brand experiences. Explore live 3D, adaptive themes, and voice-ready interfaces.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:shadow-slate-900/20 dark:bg-white dark:text-black"
            >
              Start a project
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 backdrop-blur-md transition hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white"
            >
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
