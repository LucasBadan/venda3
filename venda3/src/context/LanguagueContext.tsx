'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import i18n from '../i18n'; // ajuste o caminho se necessário

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

const defaultValue: LanguageContextType = {
  language: 'pt',
  toggleLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    // Ao carregar, pegar linguagem salva (se existir)
    const savedLang = localStorage.getItem('lang');
    const initialLang = savedLang || 'pt';
    i18n.changeLanguage(initialLang);
    setLanguage(initialLang);
  }, []);

  useEffect(() => {
    // Toda vez que a linguagem mudar, atualizar i18n e salvar no localStorage
    i18n.changeLanguage(language);
    localStorage.setItem('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}