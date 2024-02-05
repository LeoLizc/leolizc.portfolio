import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import { DEFAULT_LOCALE, fallback, locales } from './src/i18n/index';

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