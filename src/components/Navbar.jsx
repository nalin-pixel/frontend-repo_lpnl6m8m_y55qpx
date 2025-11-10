import { useState } from 'react';
import { Menu, X, User, LogIn, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Games', href: '#games' },
    { name: 'Contact', href: '#contact' },
    { name: 'Login', href: '#login' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-950/80 to-transparent backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500 to-fuchsia-600 text-white shadow-[0_0_30px_rgba(56,189,248,0.35)]">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <span className="text-white font-semibold tracking-wide text-lg group-hover:text-cyan-300 transition-colors">
            PulseTopUp
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_-10px_rgba(99,102,241,0.6)] hover:brightness-110 transition"
          >
            <LogIn className="h-4 w-4" />
            Login
          </a>
          <button aria-label="Account" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-200 transition">
            <User className="h-5 w-5" />
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-md bg-white/5 text-gray-200 hover:bg-white/10"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-950/80 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5"
              >
                {l.name}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white"
            >
              <LogIn className="h-4 w-4" /> Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
