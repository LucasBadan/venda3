import { i18n } from './src/next-i18next.config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n,
  images: {
    domains: ['kojistore.com.br', 'images.tcdn.com.br'],
  },
};

export default nextConfig;