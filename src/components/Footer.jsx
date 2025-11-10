import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-20 border-t border-white/10 bg-gray-950/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-40 w-40 -translate-y-1/2 translate-x-1/3 rounded-full bg-fuchsia-500/10 blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-white font-semibold text-lg">PulseTopUp</h4>
            <p className="mt-2 text-gray-400 text-sm">
              A premium platform for fast and secure game top-ups. Powering players across the globe.
            </p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Support</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Email: support@pulsetopup.gg</li>
              <li>Hours: 24/7 Live Chat</li>
              <li>Location: Online Worldwide</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Follow Us</h5>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition"><Facebook className="h-5 w-5" /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition"><Twitter className="h-5 w-5" /></a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition"><Instagram className="h-5 w-5" /></a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition"><Youtube className="h-5 w-5" /></a>
              <a aria-label="Email" href="mailto:support@pulsetopup.gg" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} PulseTopUp. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
