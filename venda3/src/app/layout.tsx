'use client';

import './globals.css';
import Header from './components/Header'; // Caminho ajustado, conforme estrutura

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <footer className="p-4 bg-stone-500 text-white text-center mt-auto">
          <p>© 2025 Fale conosco</p>
        </footer>
      </body>
    </html>
  );
}