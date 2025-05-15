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
  <div className="flex items-center justify-between h-full px-8">
    <div className="flex-shrink-0 pl-30"> 
      <span className="text-8xl md:text-7xl font-bold pr-12 whitespace-nowrap">
        <span className={`gradient-text ${greatVibes.className}`}>Patricia</span>
      </span>
    </div>

    <div className="pl-26 flex-1 flex justify-center mx-auto">
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="pl-12 pr-8 py-2 w-full rounded-full border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>

    <nav className="flex items-center gap-6 ml-auto"> 
      <Link href="/home" className="text-white transform transition duration-300 hover:scale-120">
        Home
      </Link>
      <Link href="/vestidos" className="text-white transform transition duration-300 hover:scale-120">
        Vestidos
      </Link>
      <Link href="/meus-pedidos" className="text-white transform transition duration-300 hover:scale-120">
        Meus Pedidos
      </Link>
      <Link href="/carrinho" className="text-white ml-2">
        <ShoppingCart className="w-6 h-6 transform transition duration-300 hover:scale-120" />
      </Link>
        <Link href="/login" className="text-white mt-18 transform transition duration-300 hover:scale-120">
        Login
      </Link>
      <Link href="/cadastro" className="text-white mt-18 transform transition duration-300 hover:scale-120">
        Cadastre-se
      </Link>
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