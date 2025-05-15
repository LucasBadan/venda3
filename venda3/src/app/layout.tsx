import './globals.css';
import { Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });


export const metadata = {
  title: 'Ladies',
  description: 'Uma aplicação com layout global',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
    <header className="w-full h-26 bg-stone-500">
  <div className="flex flex-wrap items-center justify-between h-full px-4 sm:px-6 lg:px-8">
    <div className="flex-shrink-0 py-2"> 
      <span className="text-5xl md:text-7xl font-bold whitespace-nowrap">
        <span className={`gradient-text ${greatVibes.className}`}>Patricia</span>
      </span>
    </div>

    <div className="flex-1 flex justify-center py-2">
      <div className="relative w-60 md:w-80">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 text-white bg-stone-600 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>

   
    <nav className="flex flex-wrap items-center gap-4 text-white text-sm md:text-lg">
      <Link href="/home" className="hover:text-pink-300">Home</Link>
      <Link href="/vestidos" className="hover:text-pink-300">Vestidos</Link>
      <Link href="/meus-pedidos" className="hover:text-pink-300">Meus Pedidos</Link>
      <Link href="/carrinho" className="hover:text-pink-300">
        <ShoppingCart className="w-6 h-6" />
      </Link>
      <Link href="/login" className="hover:text-pink-300 mt-18">Login</Link>
      <Link href="/cadastro" className="hover:text-pink-300 mt-18">Cadastre-se</Link>
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