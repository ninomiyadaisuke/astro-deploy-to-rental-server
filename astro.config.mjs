import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'http://xs994187.xsrv.jp/astro-ecommerce/',
  base: '/astro-ecommerce/',
});