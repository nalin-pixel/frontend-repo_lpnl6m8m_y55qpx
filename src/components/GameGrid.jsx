import { useMemo, useState } from 'react';
import { ArrowRightCircle } from 'lucide-react';
import SearchBar from './SearchBar';

const GAMES = [
  {
    id: 'mlbb',
    title: 'Mobile Legends',
    logo: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'pubg',
    title: 'PUBG Mobile',
    logo: 'https://images.unsplash.com/photo-1612544446667-727076b399e9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'freefire',
    title: 'Free Fire',
    logo: 'https://images.unsplash.com/photo-1614854262761-25f495cdb36b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'valorant',
    title: 'Valorant',
    logo: 'https://images.unsplash.com/photo-1598124146165-d200bd2a19f0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'genshin',
    title: 'Genshin Impact',
    logo: 'https://images.unsplash.com/photo-1633114128170-1cb2b2f38fa2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'codm',
    title: 'Call of Duty: Mobile',
    logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
  },
];

function GameCard({ game }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition shadow-[0_0_40px_rgba(34,211,238,0.08)]">
      <div className="relative h-44">
        <img
          src={game.logo}
          alt={game.title}
          className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/0 to-transparent" />
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold tracking-wide">{game.title}</h3>
          <p className="text-xs text-gray-400">Top-up available 24/7</p>
        </div>
        <a
          href={`#topup-${game.id}`}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-3 py-2 text-sm font-semibold text-white opacity-90 group-hover:opacity-100 hover:brightness-110 transition"
        >
          Top Up Now <ArrowRightCircle className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function GameGrid() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return GAMES.filter((g) => g.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="games" className="relative py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-72 w-[60rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Popular Games</h2>
          <p className="text-gray-300 max-w-2xl">
            Choose from top titles loved by gamers. Search and top up instantly with secure payments.
          </p>
          <div className="w-full max-w-2xl">
            <SearchBar onChange={setQuery} />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-400">No games found.</div>
          )}
        </div>
      </div>
    </section>
  );
}
