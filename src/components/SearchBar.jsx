import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const v = e.target.value;
    setValue(v);
    onChange?.(v);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-300/70" />
        <input
          value={value}
          onChange={handleChange}
          placeholder="Search games..."
          className="w-full rounded-xl bg-white/5 pl-11 pr-4 py-3 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-transparent"
        />
      </div>
    </div>
  );
}
