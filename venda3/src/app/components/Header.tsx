'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';
import AuthService from '../services/auth.service';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const search = searchParams.get('search') || '';
  const [termoBusca, setTermoBusca] = useState(search);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTermoBusca(search);
  }, [search]);

  useEffect(() => {
    setIsLoggedIn(AuthService.isLoggedIn());
  }, [pathname]);

  const handleSearch = () => {
    if (termoBusca) {
      router.push(`/catalogo?search=${encodeURIComponent(termoBusca.trim())}`);
    } else {
      router.push(`/catalogo`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
  };

  return (
   <header className="w-full h-26 bg-stone-500">
  <div className="grid grid-cols-3 gap-4 items-center h-full px-4 sm:px-6 lg:px-8">
    
    <div className="flex items-center justify-start truncate">
      <span className="text-7xl font-bold">
        <span className={`gradient-text ${greatVibes.className}`}>Patricia</span>
      </span>
    </div>

    <div className="flex justify-center">
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
        <input
          type="text"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Pesquisar..."
          className="w-full px-10 py-2 text-white bg-stone-600 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <div className="absolute inset-y-0 left-3 flex items-center">
        <button
          type="button"
            onClick={handleSearch}
            className="absolute inset-y-0 left-0 flex items-center cursor-pointer"
           
        >
          <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>

   
    <nav className="flex flex-wrap justify-end items-center gap-x-3 gap-y-1 text-white text-sm md:text-base">
      <Link href="/home" className="hover:text-pink-300">Home</Link>
      <Link href="/catalogo" className="hover:text-pink-300">Vestidos</Link>
      {isLoggedIn && (
        <Link href="/meus-pedidos" className="hover:text-pink-300">Meus Pedidos</Link>
      )}
      <Link href="/carrinho" className="hover:text-pink-300">
        <ShoppingCart className="w-6 h-6" />
      </Link>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="hover:text-pink-300">Sair</button>
      ) : (
        <>
          <Link href="/login" className="hover:text-pink-300">Login</Link>
          <Link href="/cadastro" className="hover:text-pink-300">Cadastre-se</Link>
        </>
      )}
    </nav>
  </div>
</header>
  );
}