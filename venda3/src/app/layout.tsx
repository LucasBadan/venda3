'use client';

import './globals.css';
import { Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';
import { useEffect, useState } from 'react';
import AuthService from './services/auth.service';
import { usePathname } from 'next/navigation';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname(); // Isso muda quando a rota muda
  
  // Este useEffect será executado sempre que a página mudar
  useEffect(() => {
    // Verifica o status de login
    setIsLoggedIn(AuthService.isLoggedIn());
  }, [pathname]); // <-- Isso é importante
  
  const handleLogout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
  };

  return (
    <html lang="pt-BR">
      <body className="">
    <header className="w-full h-26 bg-stone-500">
  <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">

    {/* Logo */}
    <div className="flex items-center space-x-4">
      <span className="pl-48 text-5xl md:text-7xl font-bold">
        <span className={`gradient-text ${greatVibes.className}`}>Patricia</span>
      </span>
    </div>

    {/* Campo de Pesquisa */}
    <div className="flex items-center justify-center mr-5">
  <div className="relative w-60 md:w-80">
    <input
      type="text"
      placeholder="Pesquisar..."
      className="w-full px-10 py-2 text-white bg-stone-600 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
    />
    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
      <Search className="w-5 h-5 text-white" />
    </div>
  </div>
</div>

    {/* Navegação */}
    <nav className="flex items-center space-x-4 text-white text-sm md:text-lg">
      <Link href="/home" className="hover:text-pink-300">Home</Link>
      <Link href="/vestidos" className="hover:text-pink-300">Vestidos</Link>
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
          <Link href="/login" className="hover:text-pink-300 mt-18">Login</Link>
          <Link href="/cadastro" className="hover:text-pink-300 mt-18">Cadastre-se</Link>
        </>
      )}
    </nav>

  </div>
</header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="p-4 bg-stone-500 text-white text-center mt-auto">
          <p>© 2025 Fale conosco</p>
        </footer>
      </body>
    </html>
  );
}