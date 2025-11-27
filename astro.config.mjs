import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";

export default defineConfig({
  site: "https://mycleanblog.vercel.app/",
  trailingSlash: "always",

  legacy: {
    collections: true,
  },

  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      i18n: { defaultLocale: "en" },
    }),

    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://mycleanblog.vercel.app/sitemap-index.xml",
      host: "https://mycleanblog.vercel.app/",
    }),

    mdx(),

    compress({
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true,
    }),
  ],

  build: {
    format: "directory",
  },

  markdown: {
    syntaxHighlight: "prism",
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },

  server: {
    port: 4321,
  },
});