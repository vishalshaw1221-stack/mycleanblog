import rss from '@astrojs/rss';

export async function GET(context) {
  const { getCollection } = await import("astro:content");
  const posts = await getCollection("blog");

  const items = posts
    .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
    .map((post) => ({
      title: post.data.title,
      description: post.data.description || post.body.slice(0, 150).replace(/[#>*_`~\-]/g, ""),
      link: `/blog/${post.slug}/`,
      pubDate: post.data.pubDate,
    }));

  return rss({
    stylesheet: true,
    limit: 50,
    title: "Physics in Physics",
    description: "Physics in Physics — Read simplified, engaging articles about modern science and technology.",
    site: context.site,
    items,
    customData: `<language>en-us</language>
      <image>
        <url>https://mycleanblog.vercel.app/favicon.svg</url>
        <title>Physics in Physics</title>
        <link>https://mycleanblog.vercel.app/</link>
      </image>`,
  });
}