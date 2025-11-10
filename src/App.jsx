import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <GameGrid />
        {/* CTA banner */}
        <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 p-8 sm:p-10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
            </div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold">Level up faster with instant top-ups</h3>
                <p className="mt-2 text-gray-300 max-w-xl">Secure payments, instant delivery, and 24/7 support. Join thousands of gamers who trust PulseTopUp.</p>
              </div>
              <a
                href="#games"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-[0_10px_35px_-10px_rgba(34,211,238,0.65)] hover:brightness-110 transition"
              >
                Browse Games
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
