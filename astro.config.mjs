// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://vooruitsu.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Noticia Text",
        cssVariable: "--font-noticia",
      },
      {
        provider: fontProviders.google(),
        name: "Playfair Display",
        cssVariable: "--font-playfair-display",
      },
    ],
  },
});
