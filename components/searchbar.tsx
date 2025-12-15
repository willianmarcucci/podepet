// components/searchbar.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

type SearchBarProps = {
  className?: string;
  defaultValue?: string;
};

export default function SearchBar({ className, defaultValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex gap-3 ${className}`}
      role="search"
    >
      <label htmlFor="search-input" className="sr-only">
        Buscar lugares
      </label>
      <input
        id="search-input"
        type="search"
        placeholder="Buscar por nome, rua ou bairro..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-[#fbf1ed] w-full h-12 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-[#ff621f] focus:border-transparent"
      />

      <button
        type="submit"
        aria-label="Buscar"
        className="size-12 rounded-full bg-[#ff621f] hover:bg-[#e8591c] text-white cursor-pointer flex justify-center items-center shrink-0 transition-colors"
      >
        <Search size={20} />
      </button>
    </form>
  );
}