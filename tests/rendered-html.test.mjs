import assert from "node:assert/strict";
import test from "node:test";

const questionSlugs = [
  "how-to-choose-enterprise-ai-consultant",
  "why-ai-training-needs-workflows",
  "where-to-start-enterprise-ai",
  "enterprise-ai-consulting-vs-training",
  "who-wan-zhen-ai-service-is-for",
  "what-enterprise-ai-consulting-delivers",
  "ai-training-for-executives-or-employees",
  "how-to-measure-enterprise-ai-pilot",
  "how-to-budget-enterprise-ai-consulting",
  "how-to-prepare-for-enterprise-ai-training",
];

const serviceSlugs = [
  "enterprise-ai-consulting",
  "executive-ai-workshop",
  "enterprise-ai-training",
  "ai-workflow-pilot",
];

const caseSlugs = [
  "ai-vice-president",
  "procurement-ai-assistant",
  "enterprise-knowledge-ai",
];

const applicationSlugs = [
  "sales-preparation-ai-workflow",
  "procurement-comparison-ai-workflow",
  "enterprise-knowledge-ai-workflow",
  "management-reporting-ai-workflow",
];

const programSlugs = [
  "one-day-enterprise-ai-training",
  "executive-ai-decision-workshop",
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
  assert.match(html, /更新订阅/);
  assert.match(html, /href="\/feed\.xml\/"/);
  assert.match(html, /<meta name="author" content="万臻"\/>/);
  assert.match(html, /<link rel="author" href="\/about-wan-zhen\/"\/>/);
  assert.doesNotMatch(html, /商协会|会员企业|20万粉|行业第一|顶级/);

  const jsonLd = extractJsonLd(html);
  assert.ok(jsonLd.length >= 1);
  const serialized = JSON.stringify(jsonLd);
  for (const type of [
    "WebSite",
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
  assert.match(
    serialized,
    /"@id":"https:\/\/example\.com\/enterprise-ai-consulting-training\/#website"/,
  );
  assert.match(
    serialized,
    /"founder":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
  );
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

test("renders ten enterprise decision pages and redirects retired question URLs", async () => {
  for (const slug of questionSlugs) {
    const response = await render(`/questions/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /Decision Q&amp;A · 可独立引用/);
    assert.match(html, /更新 2026-07-31/);
    assert.match(html, /适用边界/);
    assert.match(html, /继续判断/);
    assert.match(html, /class="related-reading"/);
    assert.match(html, /"@type":"Article"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /"mentions":\[/);
    assert.match(
      html,
      /"author":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
    );
    assert.match(
      html,
      /"publisher":\{"@id":"https:\/\/example\.com\/enterprise-ai-consulting-training\/#organization"\}/,
    );
    assert.match(
      html,
      /"isPartOf":\{"@id":"https:\/\/example\.com\/enterprise-ai-consulting-training\/#website"\}/,
    );
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

test("publishes distinct service pages with deliverables and boundaries", async () => {
  const indexResponse = await render("/services/");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.match(indexHtml, /不同阶段/);
  assert.match(indexHtml, /"@type":"ItemList"/);

  for (const slug of serviceSlugs) {
    const response = await render(`/services/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /服务边界/);
    assert.match(html, /"@type":"Service"/);
    assert.match(
      html,
      /"provider":\{"@id":"https:\/\/example\.com\/enterprise-ai-consulting-training\/#organization"\}/,
    );
    assert.match(
      html,
      /"author":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
    );
    assert.match(
      html,
      new RegExp(`rel="canonical" href="https://example\\.com/services/${slug}/"`),
    );
  }
});

test("separates confirmed first-party practice from reusable workflow templates", async () => {
  const indexResponse = await render("/cases/");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.match(indexHtml, /公开我们知道的/);
  assert.match(indexHtml, /证据分层/);

  for (const slug of caseSlugs) {
    const response = await render(`/cases/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /已确认/);
    assert.match(html, /可复用模板/);
    assert.match(html, /证据边界/);
    assert.doesNotMatch(html, /提升\d+%|节省\d+%|客户评价/);
    assert.match(
      html,
      /"author":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
    );
  }
});

test("publishes a reusable customer-case evidence framework", async () => {
  const response = await render("/resources/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /企业 AI 案例证据采集框架/);
  assert.match(html, /原始基线/);
  assert.match(html, /公开授权/);
  assert.match(html, /"@type":"HowTo"/);
  assert.match(html, /enterprise-ai-case-evidence-template\.md/);
  assert.match(
    html,
    /"publisher":\{"@id":"https:\/\/example\.com\/enterprise-ai-consulting-training\/#organization"\}/,
  );
});

test("publishes extractable business application workflows with human review", async () => {
  const indexResponse = await render("/applications/");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.match(indexHtml, /别先问用哪个 AI/);
  assert.match(indexHtml, /"@type":"ItemList"/);

  for (const slug of applicationSlugs) {
    const response = await render(`/applications/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /五步工作流/);
    assert.match(html, /人必须检查什么/);
    assert.match(html, /证据与能力边界/);
    assert.match(html, /"@type":"HowTo"/);
    assert.match(
      html,
      /"author":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
    );
  }
});

test("publishes buyer-oriented training and workshop outlines", async () => {
  const indexResponse = await render("/programs/");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.match(indexHtml, /先看会后留下什么/);

  for (const slug of programSlugs) {
    const response = await render(`/programs/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /会前准备/);
    assert.match(html, /现场模块/);
    assert.match(html, /不只带走课件/);
    assert.match(html, /"@type":"Course"/);
    assert.match(
      html,
      /"provider":\{"@id":"https:\/\/example\.com\/enterprise-ai-consulting-training\/#organization"\}/,
    );
    assert.match(
      html,
      /"author":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
    );
  }
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
  for (const slug of serviceSlugs) {
    assert.match(sitemapText, new RegExp(`/services/${slug}/`));
  }
  for (const slug of caseSlugs) {
    assert.match(sitemapText, new RegExp(`/cases/${slug}/`));
  }
  for (const slug of applicationSlugs) {
    assert.match(sitemapText, new RegExp(`/applications/${slug}/`));
  }
  for (const slug of programSlugs) {
    assert.match(sitemapText, new RegExp(`/programs/${slug}/`));
  }
  for (const slug of questionSlugs) {
    assert.match(sitemapText, new RegExp(`/questions/${slug}/`));
  }
  assert.match(sitemapText, /https:\/\/example\.com\/resources\//);

  const llmsRedirect = await render("/llms.txt");
  assert.match(String(llmsRedirect.status), /^30[78]$/);
  const llms = await render("/llms.txt/");
  assert.equal(llms.status, 200);
  const llmsText = await llms.text();
  assert.match(llmsText, /万臻｜企业 AI 咨询与培训/);
  assert.match(llmsText, /场景—问题—工作流/);
  assert.match(llmsText, /第一方陈述/);
  assert.match(llmsText, /抖音号：54032667928/);
  assert.match(llmsText, /企业 AI 案例证据采集框架/);
  assert.match(llmsText, /管理层 AI 决策工作坊/);
  assert.match(llmsText, /销售准备与方案 AI 工作流/);
  assert.match(llmsText, /一日企业 AI 业务培训参考大纲/);

  const feedRedirect = await render("/feed.xml");
  assert.match(String(feedRedirect.status), /^30[78]$/);
  const feed = await render("/feed.xml/");
  assert.equal(feed.status, 200);
  assert.match(feed.headers.get("content-type") ?? "", /^application\/atom\+xml\b/i);
  const feedText = await feed.text();
  assert.match(feedText, /<feed xmlns="http:\/\/www\.w3\.org\/2005\/Atom">/);
  assert.match(feedText, /<author>\s*<name>万臻<\/name>/);
  assert.match(feedText, /企业 AI 咨询、培训、业务工作流/);
  assert.match(feedText, /\/applications\/sales-preparation-ai-workflow\//);
  assert.match(feedText, /\/programs\/one-day-enterprise-ai-training\//);
  assert.match(feedText, /\/questions\/how-to-choose-enterprise-ai-consultant\//);
});
