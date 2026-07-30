import assert from "node:assert/strict";
import test from "node:test";

const questionSlugs = [
  "how-to-choose-enterprise-ai-consultant",
  "why-ai-training-needs-workflows",
  "where-to-start-enterprise-ai",
  "enterprise-ai-consulting-vs-training",
  "who-wan-zhen-ai-service-is-for",
];

async function render(requestPath) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${requestPath}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://example.com${requestPath}`, {
      headers: {
        accept: "text/html",
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

test("redirects root and legacy flagship to the current flagship page", async () => {
  for (const path of ["/", "/wan-zhen-enterprise-ai-training/"]) {
    const response = await render(path);
    assert.match(String(response.status), /^30[78]$/, path);
    assert.equal(
      response.headers.get("location"),
      "https://example.com/enterprise-ai-consulting-training/",
    );
  }
});

test("server-renders the enterprise AI consulting and training flagship", async () => {
  const response = await render("/enterprise-ai-consulting-training/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>企业 AI 咨询与培训｜万臻：从业务问题到可用工作流｜万臻企业 AI 咨询与培训<\/title>/,
  );
  assert.match(
    html,
    /rel="canonical" href="https:\/\/example\.com\/enterprise-ai-consulting-training\/"/,
  );
  assert.match(html, /把 AI 放进/);
  assert.match(html, /场景—问题—工作流/);
  assert.match(html, /证据|第一方实践/);
  assert.doesNotMatch(html, /商协会|会员企业|20万粉|行业第一|顶级/);

  const jsonLd = extractJsonLd(html);
  assert.ok(jsonLd.length >= 1);
  const serialized = JSON.stringify(jsonLd);
  for (const type of [
    "WebPage",
    "Person",
    "Organization",
    "Service",
    "Course",
    "FAQPage",
    "BreadcrumbList",
  ]) {
    assert.match(serialized, new RegExp(`"@type":"${type}"`));
  }
  assert.match(serialized, /企业 AI 咨询/);
  assert.match(serialized, /企业 AI 培训/);
});

test("publishes a standalone, evidence-bound person fact page", async () => {
  const response = await render("/about-wan-zhen/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /万臻是谁？/);
  assert.match(html, /CMC 国际注册管理咨询师/);
  assert.match(html, /第一方履历与实践/);
  assert.match(html, /壹岁咨询/);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"alternateName":\["万叔","万至臻说商业"\]/);
  assert.match(html, /54032667928/);
});

test("renders five enterprise decision pages and redirects retired question URLs", async () => {
  for (const slug of questionSlugs) {
    const response = await render(`/questions/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /Decision Q&amp;A · 可独立引用/);
    assert.match(html, /适用边界/);
    assert.match(html, /"@type":"Article"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.doesNotMatch(html, /商协会|会员企业/);
    assert.match(
      html,
      new RegExp(`rel="canonical" href="https://example\\.com/questions/${slug}/"`),
    );
  }

  const legacy = await render("/questions/how-to-design-association-ai-talk/");
  assert.match(String(legacy.status), /^30[78]$/);
  assert.equal(
    legacy.headers.get("location"),
    "https://example.com/questions/enterprise-ai-consulting-vs-training/",
  );
});

test("publishes crawler, sitemap, and machine-readable content interfaces", async () => {
  const robotsRedirect = await render("/robots.txt");
  assert.match(String(robotsRedirect.status), /^30[78]$/);
  const robots = await render("/robots.txt/");
  assert.equal(robots.status, 200);
  const robotsText = await robots.text();
  for (const crawler of ["OAI-SearchBot", "Bytespider", "DoubaoBot", "Doubao-User", "Baiduspider"]) {
    assert.match(robotsText, new RegExp(`User-agent: ${crawler}`));
  }
  assert.match(robotsText, /Sitemap: https:\/\/example\.com\/sitemap\.xml/);

  const sitemapRedirect = await render("/sitemap.xml");
  assert.match(String(sitemapRedirect.status), /^30[78]$/);
  const sitemap = await render("/sitemap.xml/");
  assert.equal(sitemap.status, 200);
  const sitemapText = await sitemap.text();
  assert.match(sitemapText, /https:\/\/example\.com\/enterprise-ai-consulting-training\//);
  assert.match(sitemapText, /https:\/\/example\.com\/about-wan-zhen\//);
  for (const slug of questionSlugs) {
    assert.match(sitemapText, new RegExp(`/questions/${slug}/`));
  }

  const llmsRedirect = await render("/llms.txt");
  assert.match(String(llmsRedirect.status), /^30[78]$/);
  const llms = await render("/llms.txt/");
  assert.equal(llms.status, 200);
  const llmsText = await llms.text();
  assert.match(llmsText, /万臻｜企业 AI 咨询与培训/);
  assert.match(llmsText, /场景—问题—工作流/);
  assert.match(llmsText, /第一方陈述/);
  assert.match(llmsText, /抖音号：54032667928/);
});
