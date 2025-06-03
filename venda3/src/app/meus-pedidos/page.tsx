'use client';
import { useTranslation } from 'react-i18next';

export default function MeusPedidos() {
    const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-pink-500">{t('text-meus-pedidos')}</h1>
    </div>
  );
}