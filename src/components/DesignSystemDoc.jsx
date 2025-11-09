import React from 'react';

export default function DesignSystemDoc() {
  return (
    <section id="design-system" className="relative w-full py-20 bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Figma Design Documentation — Piara Agency 2.0</h2>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
          This section outlines a production-ready design system for a dual-theme, animated, AI-enhanced creative agency website. It covers tokens, components, interactions, and responsive rules suitable for direct translation into Figma styles, variables, and component sets.
        </p>

        {/* Color System */}
        <div className="mt-10 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">1. Color System</h3>
          <ul className="list-disc pl-6 text-sm text-slate-700 dark:text-slate-300">
            <li>Semantic Neutrals: slate-900/700/600 for light theme; slate-100/300/400 for dark theme text.</li>
            <li>Primary Gradient: purple-500 → blue-500 → orange-400 for brand actions and accents.</li>
            <li>Surfaces: White 100% (Light), White 5% with blur and rings (Dark) for glassy layers.</li>
            <li>States: Success (emerald-500), Warning (amber-500), Error (rose-500) with 12% tints for backgrounds.</li>
            <li>Elevation Rings: light theme uses slate-200/60 ring; dark theme uses white/10 ring.</li>
          </ul>
        </div>

        {/* Typography */}
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">2. Typography</h3>
          <ul className="list-disc pl-6 text-sm text-slate-700 dark:text-slate-300">
            <li>Display: 48–64px, 120% leading, tight tracking for hero headlines (Inter/Geist).</li>
            <li>Heading: 24–32px, 120% leading for section titles.</li>
            <li>Body: 14–18px, 150% leading, neutral color tokens matching theme.</li>
            <li>Monospace: IBM Plex Mono for code or data figures.</li>
          </ul>
        </div>

        {/* Components */}
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">3. Components & States</h3>
          <ul className="list-disc pl-6 text-sm text-slate-700 dark:text-slate-300">
            <li>Buttons: Primary (solid gradient), Secondary (soft glass), Tertiary (text). States: hover, pressed, focus, disabled.</li>
            <li>Cards: Soft elevation, ring outlines, hover lift with 4–8px translate and subtle shadow increase.</li>
            <li>Inputs: 12px radius, ring on focus, support prefix/suffix icons.</li>
            <li>Navbar: Sticky, backdrop blur 12–16px, theme toggle, CTA aligns right.</li>
            <li>Toast: Slide-in bottom with 250ms ease-out, auto-dismiss 4s.</li>
          </ul>
        </div>

        {/* Motion */}
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">4. Motion & Micro-interactions</h3>
          <ul className="list-disc pl-6 text-sm text-slate-700 dark:text-slate-300">
            <li>Entrance transitions: 250–700ms ease-out with 10–24px translate and fade.</li>
            <li>Buttons: background shift on hover following brand gradient; press compress to 98% scale.</li>
            <li>Cards: hover expand underline bar using gradient from 0 → 96px over 300ms.</li>
            <li>Hero: Spline 3D scene with radial gradient overlay for legibility; do not block pointer events.</li>
            <li>Theme: smooth cross-fade between light/dark surface tokens over 300ms.</li>
          </ul>
        </div>

        {/* Responsive */}
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">5. Responsive Behavior</h3>
          <ul className="list-disc pl-6 text-sm text-slate-700 dark:text-slate-300">
            <li>Grid: 1 → 2 → 3 columns at 640px and 1024px breakpoints respectively.</li>
            <li>Type scales down by one step at each breakpoint; maintain minimum tap targets of 44px.</li>
            <li>Navbar condenses to icon-only below 640px, shows labels at 640px and up.</li>
            <li>Hero min-height 80vh (mobile) → 100vh (desktop); buttons stack on mobile.</li>
          </ul>
        </div>

        {/* AI Considerations */}
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">6. AI-enhanced Patterns</h3>
          <ul className="list-disc pl-6 text-sm text-slate-700 dark:text-slate-300">
            <li>Voice-ready CTA: microphone affordance, animated listening ring using brand gradient.</li>
            <li>Adaptive theme: follows system preference with manual override; store choice in local storage.</li>
            <li>Smart content: sections reveal based on scroll depth; keep motion within 60fps budget.</li>
          </ul>
        </div>

        {/* Spline Asset */}
        <div className="mt-8 space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">7. Hero Animation Asset</h3>
          <p className="text-sm text-slate-700 dark:text-slate-300">Use the Spline scene below as the hero animation:</p>
          <a href="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" className="text-sm font-medium text-blue-600 underline underline-offset-4 dark:text-blue-400">https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode</a>
        </div>
      </div>
    </section>
  );
}
