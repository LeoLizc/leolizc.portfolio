import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const SITE_URL = "https://portfolio.leolizc.tech";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: SITE_URL
});