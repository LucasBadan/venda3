'use client';

import { useTranslation } from 'react-i18next'; // no topo
import ButtonLang from './ButtonLang';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import PatriciaTitle from './PatriciaTitle';
import AuthService from '../services/auth.service';


export default function Header() {
  
  const { t } = useTranslation();
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
  <header className="w-full bg-white shadow-lg rounded-b-2xl border-b mx-auto min-h-[110px]">
    <div className="grid grid-cols-3 gap-4 items-center justify-items-center mt-2 h-full px-4 sm:px-6 lg:px-8">
      
      {/* Coluna 1: Logo e botão de idioma */}
      <div className="flex items-center justify-start truncate">
        <PatriciaTitle />
        <ButtonLang />
      </div>

      {/* Coluna 2: Busca */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
          <input
            type="text"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('search')}
            className="w-full px-10 py-2 bg-white placeholder:text-gray-400 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <div className="absolute inset-y-0 left-3 flex items-center">
            <button
              type="button"
              onClick={handleSearch}
              className="absolute inset-y-0 left-0 flex items-center cursor-pointer"
            >
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Coluna 3: Navegação */}
      <nav className="flex gap-10 items-center text-base">
        <Link
          href="/home"
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            pathname === "/home"
              ? "bg-pink-100 text-pink-600"
              : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
          }`}
        >
          {t('home')}
        </Link>

          <Link
    href="/catalogo"
    className={`px-4 py-2 rounded-lg font-semibold transition ${
      pathname === "/catalogo"
        ? "bg-pink-100 text-pink-600"
        : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
    }`}
  >
    {t('dresses') /* ou "Vestidos" */}
  </Link>
        {isLoggedIn && (
          <Link
            href="/meus-pedidos"
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              pathname === "/meus-pedidos"
                ? "bg-pink-100 text-pink-600"
                : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
            }`}
          >
            {t('myOrders')}
          </Link>
        )}
        {!isLoggedIn && (
          <>
            <Link
              href="/login"
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                pathname === "/login"
                  ? "bg-pink-100 text-pink-600"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                pathname === "/cadastro"
                  ? "bg-pink-100 text-pink-600"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              Cadastre-se
            </Link>
          </>
        )}
        <Link
          href="/carrinho"
          className="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition flex items-center"
        >
          <ShoppingCart className="w-6 h-6" />
        </Link>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg font-semibold text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition"
          >
            {t('logout')}
          </button>
        )}
      </nav>
    </div>
  </header>
);
}