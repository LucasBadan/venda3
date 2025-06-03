'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function ButtonLang() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = lang === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
    setLang(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="ml-4 p-1 border rounded text-sm cursor-pointer">
      {lang === 'pt' ? 'EN' : 'PT'}
    </button>
  );
}