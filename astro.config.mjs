// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import rss from "@astrojs/rss";

// ✅ MAX SEO CONFIGURATION
export default defineConfig({
  site: "https://mycleanblog.vercel.app/", // 🌐 update to your custom domain when ready
  trailingSlash: "always",

  integrations: [
    // 🗺️ Sitemap for Google
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      i18n: { defaultLocale: "en" },
    }),

    // 🤖 Robots.txt
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://mycleanblog.vercel.app/sitemap-index.xml",
      host: "https://mycleanblog.vercel.app/",
    }),

    // 🧠 MDX support for interactive blog content
    mdx(),

    // 💨 Auto-compress output for faster loads
    compress({
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true,
    }),

    // 📰 RSS Feed for Google Discover & News
    rss({
      stylesheet: true,
      limit: 50,
      title: "Physics in Physics",
      description:
        "Physics in Physics — Read simplified, engaging articles about modern science and technology.",
      site: "https://mycleanblog.vercel.app/",
      items: async () => {
        const { getCollection } = await import("astro:content");
        const posts = await getCollection("blog");
        return posts
          .sort(
            (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate)
          )
          .map((post) => ({
            title: post.data.title,
            description:
              post.data.description ||
              post.body.slice(0, 150).replace(/[#>*_`~\-]/g, ""),
            link: `/blog/${post.slug}/`,
            pubDate: post.data.pubDate,
          }));
      },
      customData: `<language>en-us</language>
        <image>
          <url>https://mycleanblog.vercel.app/favicon.svg</url>
          <title>Physics in Physics</title>
          <link>https://mycleanblog.vercel.app/</link>
        </image>`,
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