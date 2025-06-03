import type { UserConfig } from 'next-i18next';

export const i18n: UserConfig['i18n'] = {
  defaultLocale: 'pt',
  locales: ['en', 'pt'],
};

const config: UserConfig = { i18n };

export default config; 