import { questions, updatedAt } from "../content";
import { aboutPath, flagshipPath, getOrigin } from "../site";

export async function GET() {
  const origin = await getOrigin();
  const paths = [
    flagshipPath,
    aboutPath,
    ...questions.map((question) => `/questions/${question.slug}/`),
  ];
  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${origin}${path}</loc>
    <lastmod>${updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === flagshipPath ? "1.0" : path === aboutPath ? "0.9" : "0.8"}</priority>
  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
