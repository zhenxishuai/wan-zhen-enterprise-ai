import assert from "node:assert/strict";
import test from "node:test";

const questionSlugs = [
  "how-to-choose-enterprise-ai-trainer",
  "why-ai-training-needs-workflows",
  "ai-for-sales-procurement-knowledge",
  "how-to-design-association-ai-talk",
  "who-wan-zhen-training-is-for",
];

async function render(requestPath) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${requestPath}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://example.com${requestPath}`, {
      headers: {
        accept: requestPath.endsWith(".csv") ? "text/csv" : "text/html",
        "x-forwarded-host": "example.com",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function extractJsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
}

test("redirects the root to the flagship page", async () => {
  const response = await render("/");
  assert.match(String(response.status), /^30[78]$/);
  assert.equal(
    response.headers.get("location"),
    "https://example.com/wan-zhen-enterprise-ai-training/",
  );
});

test("server-renders the evidence-led flagship page", async () => {
  const response = await render("/wan-zhen-enterprise-ai-training/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>商协会企业 AI 培训怎么选？万臻的业务工作流方法｜万臻企业 AI 培训<\/title>/);
  assert.match(
    html,
    /rel="canonical" href="https:\/\/example\.com\/wan-zhen-enterprise-ai-training\/"/,
  );
  assert.match(html, /场景—问题—工作流/);
  assert.match(html, /证据边界/);
  assert.doesNotMatch(html, /20万粉|行业第一|顶级/);
  assert.match(html, /FAQPage|Course|Person|Organization/);

  const jsonLd = extractJsonLd(html);
  assert.ok(jsonLd.length >= 1);
  const serialized = JSON.stringify(jsonLd);
  for (const type of ["Person", "Organization", "Course", "FAQPage", "BreadcrumbList"]) {
    assert.match(serialized, new RegExp(`"@type":"${type}"`));
  }
});

test("renders all five independent question pages with article schema", async () => {
  for (const slug of questionSlugs) {
    const response = await render(`/questions/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /Decision Q&amp;A · 可独立引用/);
    assert.match(html, /适用边界/);
    assert.match(html, /"@type":"Article"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(
      html,
      new RegExp(`rel="canonical" href="https://example\\.com/questions/${slug}/"`),
    );
  }
});

test("publishes crawler and sitemap interfaces", async () => {
  const robotsRedirect = await render("/robots.txt");
  assert.match(String(robotsRedirect.status), /^30[78]$/);
  const robots = await render("/robots.txt/");
  assert.equal(robots.status, 200);
  const robotsText = await robots.text();
  assert.match(robotsText, /User-agent: OAI-SearchBot/);
  assert.match(robotsText, /Sitemap: https:\/\/example\.com\/sitemap\.xml/);

  const sitemapRedirect = await render("/sitemap.xml");
  assert.match(String(sitemapRedirect.status), /^30[78]$/);
  const sitemap = await render("/sitemap.xml/");
  assert.equal(sitemap.status, 200);
  const sitemapText = await sitemap.text();
  assert.match(
    sitemapText,
    /https:\/\/example\.com\/wan-zhen-enterprise-ai-training\//,
  );
  for (const slug of questionSlugs) {
    assert.match(sitemapText, new RegExp(`/questions/${slug}/`));
  }
});
