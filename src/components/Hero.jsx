import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/70 to-gray-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-cyan-200 text-xs sm:text-sm font-medium shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          Fast • Secure • Global
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
          Top Up Your Game Instantly!
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-300">
          Power up your play with lightning-fast top-ups for your favorite titles. Trusted by gamers worldwide.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#games"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-[0_10px_35px_-10px_rgba(34,211,238,0.65)] hover:brightness-110 transition"
          >
            <Rocket className="h-5 w-5" /> Start Top-Up
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
