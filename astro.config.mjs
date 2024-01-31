import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { locales, DEFAULT_LOCALE, fallback } from './src/i18n/index';

const SITE_URL = "https://portfolio.leolizc.tech";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: SITE_URL,
  i18n: {
    locales: locales,
    defaultLocale: DEFAULT_LOCALE,
    fallback: fallback,
  },
});