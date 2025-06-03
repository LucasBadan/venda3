'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Importando a instância do i18n
import './globals.css';
import Header from './components/Header'; // Caminho ajustado, conforme estrutura

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
        <footer className="p-4 bg-stone-500 text-white text-center mt-auto">
          <p>© 2025 Fale conosco</p>
        </footer>
      </body>
    </html>
  );
}