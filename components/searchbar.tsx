"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBar() {

    const [query, setQuery] = useState('');
    const router = useRouter();


    const handleSearch = (e:any) => {
    e.preventDefault();
    if (query.trim()) {
      // Redireciona para a página de pesquisa com o parâmetro 'q'
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };


  return (
    <form onSubmit={handleSearch} className="flex gap-3">
      <input
        type="text"
        placeholder="Buscar por nome, rua ou bairro..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-[#fbf1ed] w-full h-12 rounded-full p-4"
      />
      
      {/* Botão */}
      <button type='submit' className="size-12 rounded-full bg-[#ff621f] hover:bg-[#e8591c] text-white cursor-pointer flex justify-center items-center shrink-0">
            <Search />
        </button>


    </form>
  );

}