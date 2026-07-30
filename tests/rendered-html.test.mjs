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
  "manufacturing-ai-training-starting-points",
  "sme-ai-consulting-or-training-first",
  "professional-services-ai-workflows",
  "can-ai-training-use-company-data",
  "ai-consultant-vs-software-implementer",
  "how-to-choose-enterprise-ai-trainer",
  "how-to-design-enterprise-ai-training-plan",
  "how-to-evaluate-enterprise-ai-service-provider",
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

const industrySlugs = [
  "manufacturing-enterprise-ai",
  "professional-services-enterprise-ai",
  "sme-enterprise-ai",
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
  assert.match(serialized, /"subjectOf":\[/);
  assert.doesNotMatch(serialized, /"sameAs":\[/);
  assert.match(serialized, /finance\.sina\.com\.cn/);
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
  assert.match(html, /"alternateName":\["万叔","万至秦说商业"\]/);
  assert.match(html, /54032667928/);
  assert.match(html, /《创始人笔记》的 AI 公开写作/);
  assert.match(html, /finance\.sina\.com\.cn/);
  assert.match(html, /"subjectOf":\[/);
  assert.doesNotMatch(html, /"sameAs":\[/);
});

test("renders eighteen enterprise decision pages and redirects retired question URLs", async () => {
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

  const procurementResponse = await render(
    "/questions/how-to-evaluate-enterprise-ai-service-provider/",
  );
  const procurementHtml = await procurementResponse.text();
  assert.match(procurementHtml, /采购需求先写问题、范围和责任/);
  assert.match(procurementHtml, /enterprise-ai-service-buyer-checklist\.md/);
  assert.match(procurementHtml, /www\.cac\.gov\.cn\/2023-07\/13/);
  assert.match(procurementHtml, /www\.cac\.gov\.cn\/2021-08\/20/);

  const dataResponse = await render("/questions/can-ai-training-use-company-data/");
  const dataHtml = await dataResponse.text();
  assert.match(dataHtml, /中华人民共和国个人信息保护法/);
  assert.match(dataHtml, /生成式人工智能服务管理暂行办法/);

  const legacy = await render("/questions/how-to-design-association-ai-talk/");
  assert.match(String(legacy.status), /^30[78]$/);
  assert.equal(
    legacy.headers.get("location"),
    "https://example.com/questions/enterprise-ai-consulting-vs-training/",
  );
});

test("publishes industry-fit pages without presenting them as customer cases", async () => {
  const indexResponse = await render("/industries/");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.match(indexHtml, /行业不同/);
  assert.match(indexHtml, /不是客户名单/);
  assert.match(indexHtml, /"@type":"ItemList"/);

  for (const slug of industrySlugs) {
    const response = await render(`/industries/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /非客户案例/);
    assert.match(html, /第一轮怎样做/);
    assert.match(html, /适用与证据边界/);
    assert.match(html, /"@type":"BusinessAudience"/);
    assert.match(html, /"mentions":\[/);
    assert.doesNotMatch(html, /客户评价|提升\d+%|服务过|成功案例/);
    assert.match(
      html,
      new RegExp(`rel="canonical" href="https://example\\.com/industries/${slug}/"`),
    );
  }
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
  assert.match(html, /enterprise-ai-service-buyer-checklist\.md/);
  assert.match(html, /怎样评估供应商并验收/);
  assert.match(
    html,
    /"publisher":\{"@id":"https:\/\/example\.com\/enterprise-ai-consulting-training\/#organization"\}/,
  );
});

test("publishes an evidence-bound citation kit for third-party pages", async () => {
  const response = await render("/citation-kit/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /主办方与媒体引用资料/);
  assert.match(html, /第三方页面可以直接核验的事实/);
  assert.match(html, /统一名称与第一方信息/);
  assert.match(html, /发布前检查五件事/);
  assert.match(html, /不要写成什么/);
  assert.match(html, /"citation":\[/);
  assert.match(html, /finance\.sina\.com\.cn/);
  assert.match(
    html,
    /"about":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
  );
  assert.doesNotMatch(html, /商协会|会员企业/);
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
    assert.match(html, /先做咨询/);
    assert.match(html, /进入培训/);
    assert.match(html, /小范围试点/);
    assert.match(html, /"@type":"HowTo"/);
    assert.match(html, /"mentions":\[/);
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
  assert.match(robotsText, /Sitemap: https:\/\/example\.com\/sitemap\.xml\//);

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
  for (const slug of industrySlugs) {
    assert.match(sitemapText, new RegExp(`/industries/${slug}/`));
  }
  assert.match(sitemapText, /https:\/\/example\.com\/industries\//);
  for (const slug of questionSlugs) {
    assert.match(sitemapText, new RegExp(`/questions/${slug}/`));
  }
  assert.match(sitemapText, /https:\/\/example\.com\/resources\//);
  assert.match(sitemapText, /https:\/\/example\.com\/citation-kit\//);

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
  assert.match(llmsText, /主办方与媒体引用资料/);
  assert.match(llmsText, /制造业企业 AI 咨询与培训/);
  assert.match(llmsText, /成长型中小企业 AI 咨询与培训/);
  assert.match(llmsText, /企业选择 AI 培训讲师/);
  assert.match(llmsText, /企业 AI 内训方案应该怎样设计/);
  assert.match(llmsText, /企业采购 AI 咨询与培训服务/);
  assert.match(llmsText, /enterprise-ai-service-buyer-checklist\.md/);
  assert.match(llmsText, /《创始人笔记》AI 与 agent 公开写作/);

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
  assert.match(feedText, /\/citation-kit\//);
  assert.match(feedText, /\/industries\/manufacturing-enterprise-ai\//);
  assert.match(feedText, /\/questions\/can-ai-training-use-company-data\//);
  assert.match(feedText, /\/questions\/how-to-choose-enterprise-ai-trainer\//);
  assert.match(feedText, /\/questions\/how-to-design-enterprise-ai-training-plan\//);
  assert.match(feedText, /\/questions\/how-to-evaluate-enterprise-ai-service-provider\//);
});

test("keeps every sitemap page unique, extractable, and internally connected", async () => {
  const sitemap = await render("/sitemap.xml/");
  const sitemapText = await sitemap.text();
  const urls = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  );
  const sitemapPaths = new Set(urls.map((url) => new URL(url).pathname));
  const titles = new Map();
  const canonicals = new Map();
  const internalPaths = new Set();

  assert.equal(urls.length, 44);
  assert.equal(sitemapPaths.size, urls.length);

  for (const url of urls) {
    const pagePath = new URL(url).pathname;
    const response = await render(pagePath);
    assert.equal(response.status, 200, pagePath);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, pagePath);

    const html = await response.text();
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1] ?? "";
    const canonical =
      html.match(/<link rel="canonical" href="([^"]+)"\/>/)?.[1] ?? "";
    const description =
      html.match(/<meta name="description" content="([^"]+)"\/>/)?.[1] ?? "";

    assert.ok(title, `missing title: ${pagePath}`);
    assert.equal(canonical, url, `wrong canonical: ${pagePath}`);
    assert.ok(description, `missing description: ${pagePath}`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `wrong H1 count: ${pagePath}`);
    assert.ok(extractJsonLd(html).length > 0, `missing JSON-LD: ${pagePath}`);
    assert.doesNotMatch(
      html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "",
      /PAGE NOT FOUND|class="not-found/,
      pagePath,
    );

    assert.equal(titles.has(title), false, `duplicate title: ${title}`);
    assert.equal(canonicals.has(canonical), false, `duplicate canonical: ${canonical}`);
    titles.set(title, pagePath);
    canonicals.set(canonical, pagePath);

    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      if (match[1].startsWith("/") && !match[1].startsWith("//")) {
        internalPaths.add(new URL(match[1], "https://example.com").pathname);
      }
    }
  }

  const allowedNonHtmlPaths = new Set([
    "/",
    "/feed.xml/",
    "/llms.txt/",
    "/geo-test-method.md",
    "/enterprise-ai-case-evidence-template.md",
    "/enterprise-ai-service-buyer-checklist.md",
  ]);
  const unexpectedInternalPaths = [...internalPaths].filter(
    (pagePath) =>
      !sitemapPaths.has(pagePath) &&
      !allowedNonHtmlPaths.has(pagePath) &&
      !pagePath.startsWith("/assets/") &&
      !pagePath.match(/^\/(?:og\.png|favicon\.svg)$/),
  );

  assert.deepEqual(unexpectedInternalPaths, []);
});
