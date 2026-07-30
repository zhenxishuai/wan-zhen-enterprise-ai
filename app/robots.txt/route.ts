import { getOrigin } from "../site";

export async function GET() {
  const origin = await getOrigin();
  const body = `User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: DoubaoBot
Allow: /

User-agent: Doubao-User
Allow: /

User-agent: Baiduspider
Allow: /

Sitemap: ${origin}/sitemap.xml/
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
