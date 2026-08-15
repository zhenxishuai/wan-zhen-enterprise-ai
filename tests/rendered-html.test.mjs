import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  "how-long-enterprise-ai-consulting-training-takes",
  "how-to-prepare-for-enterprise-ai-training",
  "manufacturing-ai-training-starting-points",
  "sme-ai-consulting-or-training-first",
  "professional-services-ai-workflows",
  "can-ai-training-use-company-data",
  "ai-consultant-vs-software-implementer",
  "how-to-choose-enterprise-ai-trainer",
  "how-to-design-enterprise-ai-training-plan",
  "how-to-evaluate-enterprise-ai-service-provider",
  "how-to-sustain-enterprise-ai-training-adoption",
  "how-customer-service-teams-should-use-ai",
  "how-hr-teams-should-use-ai-in-recruitment",
  "how-marketing-teams-should-use-ai-content",
  "how-finance-teams-should-use-ai-for-management-analysis",
  "how-project-teams-should-use-ai-for-status-reporting",
  "who-should-lead-enterprise-ai-training-project",
  "what-rules-enterprise-ai-employees-need",
  "questions-before-enterprise-ai-consulting",
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
  "marketing-content-ai-workflow",
  "customer-service-ai-workflow",
  "hr-recruitment-ai-workflow",
  "procurement-comparison-ai-workflow",
  "enterprise-knowledge-ai-workflow",
  "finance-management-analysis-ai-workflow",
  "project-status-ai-workflow",
  "management-reporting-ai-workflow",
];

const programSlugs = [
  "one-day-enterprise-ai-training",
  "executive-ai-decision-workshop",
  "thirty-day-enterprise-ai-adoption-plan",
];

const industrySlugs = [
  "manufacturing-enterprise-ai",
  "professional-services-enterprise-ai",
  "sme-enterprise-ai",
];

const downloadResourcePaths = [
  "/enterprise-ai-case-evidence-template.md",
  "/enterprise-ai-service-buyer-checklist.md",
  "/enterprise-generative-ai-use-policy-template.md",
  "/enterprise-ai-discovery-brief-template.md",
  "/enterprise-ai-event-recap-evidence-template.md",
  "/enterprise-ai-project-roles-raci-template.md",
  "/project-status-ai-workflow-template.md",
  "/enterprise-ai-consulting-diagnostic-questions.md",
];

async function render(requestPath, requestHeaders = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${requestPath}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://example.com${requestPath}`, {
      headers: {
        accept: "text/html",
        "x-forwarded-host": "example.com",
        "x-forwarded-proto": "https",
        ...requestHeaders,
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

test("protects the second-brain workspace and renders it for a signed-in user", async () => {
  const anonymous = await render("/second-brain/");
  assert.match(String(anonymous.status), /^30[78]$/);
  assert.equal(
    anonymous.headers.get("location"),
    "https://example.com/signin-with-chatgpt?return_to=%2Fsecond-brain%2F",
  );

  const signedIn = await render("/second-brain/", {
    "oai-authenticated-user-email": "owner@example.com",
  });
  assert.equal(signedIn.status, 200);
  const html = await signedIn.text();
  assert.match(html, /万叔第二大脑/);
  assert.match(html, /当前用户：<!-- -->owner@example\.com/);
  assert.match(html, /href="http:\/\/pro\.tail487e3a\.ts\.net:8765\/"/);
  assert.match(html, /name="robots" content="noindex, nofollow"/);
});

function extractJsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
}

test("server-renders the dual-entry personal brand homepage and keeps the legacy enterprise redirect", async () => {
  const home = await render("/");
  assert.equal(home.status, 200);
  const homeHtml = await home.text();
  assert.match(homeHtml, /一步商学/);
  assert.match(homeHtml, /企业 AI 服务/);
  assert.match(homeHtml, /FDE 顾问课程/);
  assert.match(homeHtml, /一步商学由万臻创立/);
  assert.match(homeHtml, /href="\/fde-consultant-course\/"/);
  assert.match(homeHtml, /href="\/enterprise-ai-consulting-training\/"/);
  assert.match(homeHtml, /href="\/start\/"/);
  assert.match(homeHtml, /href="https:\/\/fresophy\.feishu\.cn\/share\/base\/shrcnfGAskXHH9CFcaS66DfSaZ8"/);
  assert.match(homeHtml, /rel="canonical" href="https:\/\/example\.com\/"/);
  assert.match(homeHtml, /"@type":"WebSite"/);
  assert.match(homeHtml, /企业服务怎么开始/);
  assert.match(homeHtml, /创始人/);
  assert.doesNotMatch(homeHtml, /约\s*100\s*人|5[—-]6\s*人/);

  const legacy = await render("/wan-zhen-enterprise-ai-training/");
  assert.match(String(legacy.status), /^30[78]$/);
  assert.equal(
    legacy.headers.get("location"),
    "https://example.com/enterprise-ai-consulting-training/",
  );
});

test("server-renders the FDE consultant course hub with evidence boundaries", async () => {
  const response = await render("/fde-consultant-course/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /FDE 顾问课程/);
  assert.match(html, /一步商学课程/);
  assert.match(html, /问题简报/);
  assert.match(html, /可试用版本/);
  assert.match(html, /申请表会收集以下信息/);
  assert.match(html, /href="https:\/\/fresophy\.feishu\.cn\/share\/base\/shrcnfGAskXHH9CFcaS66DfSaZ8"/);
  assert.match(html, /填写课程申请表/);
  assert.match(html, /独立课程线索表/);
  assert.match(html, /由万臻人工阅读后决定是否进一步联系/);
  assert.match(html, /微信.*xituzhilu11/s);
  assert.match(html, /不是对就业、收入、客户项目或经营结果的承诺/);
  assert.match(html, /href="\/enterprise-ai-consulting-training\/"/);
  assert.match(html, /rel="canonical" href="https:\/\/example\.com\/fde-consultant-course\/"/);
  assert.match(html, /"@type":"Course"/);
  assert.doesNotMatch(html, /课程将保证|学员必将|申请首期共创|首期共创/);
});

test("server-renders the enterprise AI consulting and training flagship", async () => {
  const response = await render("/enterprise-ai-consulting-training/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>企业 AI 咨询与培训｜一步商学<\/title>/,
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
  assert.match(html, /enterprise-ai-discovery-brief-template\.md/);
  assert.match(html, /查看参考周期/);
  assert.match(html, /抖音搜索 54032667928/);
  assert.match(html, /微信：xituzhilu11/);
  assert.match(html, /企业 AI FDE/);
  assert.match(html, /href="\/start\/"/);
  assert.match(html, /先做 3 分钟自检/);
  assert.match(html, /Forward Deployed Engineer/);
  assert.match(html, /账号名：万至秦说商业/);
  assert.match(html, /不通过同名账号判断身份/);
  assert.doesNotMatch(html, /douyin\.com\/user\//);
  assert.doesNotMatch(html, /href="mailto:/);
  assert.match(html, /<meta name="author" content="万臻"\/>/);
  assert.match(html, /<link rel="author" href="\/about-wan-zhen\/"\/>/);
  assert.doesNotMatch(html, /商协会|会员企业|20万粉|行业第一|顶级/);

  const jsonLd = extractJsonLd(html);
  assert.ok(jsonLd.length >= 1);
  const serialized = JSON.stringify(jsonLd);
  const graph = jsonLd.flatMap((entry) => entry["@graph"] ?? [entry]);
  const flagshipFaq = graph.find((entry) => entry["@type"] === "FAQPage");
  assert.equal(flagshipFaq.mainEntity.length, 6);
  assert.equal((html.match(/class="question-link"/g) ?? []).length, 6);
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
    /"@id":"https:\/\/example\.com\/#website"/,
  );
  assert.match(
    serialized,
    /"founder":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
  );
  assert.match(serialized, /"subjectOf":\[/);
  assert.doesNotMatch(serialized, /"sameAs":\[/);
  assert.match(serialized, /finance\.sina\.com\.cn/);
  assert.match(serialized, /sanjieke\.cn\/course\/detail\/sjk\/8005800/);
});

test("renders the private, evidence-gated enterprise AI opportunity check", async () => {
  const response = await render("/start/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /企业 AI 机会自检/);
  assert.match(html, /先判断有没有一个值得改的任务/);
  assert.match(html, /能否只说出一个具体岗位或流程/);
  assert.match(html, /回答只在当前浏览器内计算，不上传、不保存/);
  assert.match(html, /微信：xituzhilu11/);
  assert.match(html, /enterprise-ai-discovery-brief-template\.md/);
  assert.match(html, /rel="canonical" href="https:\/\/example\.com\/start\/"/);
  assert.doesNotMatch(html, /<form[^>]+action=/);
});

test("publishes a standalone, evidence-bound person fact page", async () => {
  const response = await render("/about-wan-zhen/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /万臻｜一步商学创始人/);
  assert.match(html, /CMC 国际注册管理咨询师/);
  assert.match(html, /第一方履历与实践/);
  assert.match(html, /壹岁咨询/);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"alternateName":\["万叔","万至秦说商业"\]/);
  assert.match(html, /54032667928/);
  assert.match(html, /xituzhilu11/);
  assert.match(html, /《创始人笔记》的 AI 公开写作/);
  assert.match(html, /AI 写作公开课程/);
  assert.match(html, /sanjieke\.cn\/course\/detail\/sjk\/8005800/);
  assert.match(html, /不证明企业客户成效/);
  assert.match(html, /finance\.sina\.com\.cn/);
  assert.match(html, /"subjectOf":\[/);
  assert.doesNotMatch(html, /"sameAs":\[/);
});

test("renders twenty-eight enterprise decision pages and redirects retired question URLs", async () => {
  for (const slug of questionSlugs) {
    const response = await render(`/questions/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /Decision Q&amp;A · 可独立引用/);
    assert.match(html, /更新 2026-08-07/);
    assert.match(html, /内容作者与事实核验/);
    assert.match(html, /rel="author">万臻<\/a>/);
    assert.match(
      html,
      /<time dateTime="2026-08-07">更新于 (?:<!-- -->)?2026-08-07<\/time>/,
    );
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
      /"isPartOf":\{"@id":"https:\/\/example\.com\/#website"\}/,
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

  const adoptionResponse = await render(
    "/questions/how-to-sustain-enterprise-ai-training-adoption/",
  );
  const adoptionHtml = await adoptionResponse.text();
  assert.match(adoptionHtml, /把课程产出变成一个真实任务/);
  assert.match(adoptionHtml, /30 天落地陪跑参考计划/);
  assert.match(adoptionHtml, /openai\.com\/zh-Hans-CN\/business/);
  assert.match(adoptionHtml, /www\.oecd\.org\/en\/publications\/ai-and-skills/);

  const customerServiceResponse = await render(
    "/questions/how-customer-service-teams-should-use-ai/",
  );
  const customerServiceHtml = await customerServiceResponse.text();
  assert.match(customerServiceHtml, /先选低风险、可核验的问题类型/);
  assert.match(customerServiceHtml, /客户服务知识与回复工作流/);
  assert.match(customerServiceHtml, /airc\.nist\.gov\/airmf-resources/);
  assert.match(customerServiceHtml, /生成式人工智能服务管理暂行办法/);

  const recruitmentResponse = await render(
    "/questions/how-hr-teams-should-use-ai-in-recruitment/",
  );
  const recruitmentHtml = await recruitmentResponse.text();
  assert.match(recruitmentHtml, /先把岗位标准写清，再让 AI 辅助整理/);
  assert.match(recruitmentHtml, /招聘准备与人工决策工作流/);
  assert.match(recruitmentHtml, /www\.ilo\.org\/publications\/ai-human-resource-management/);
  assert.match(recruitmentHtml, /www\.mohrss\.gov\.cn\/xxgk2020/);
  assert.match(recruitmentHtml, /中华人民共和国个人信息保护法/);

  const marketingResponse = await render(
    "/questions/how-marketing-teams-should-use-ai-content/",
  );
  const marketingHtml = await marketingResponse.text();
  assert.match(marketingHtml, /先建立来源清单和不可自动生成的承诺/);
  assert.match(marketingHtml, /市场内容研究、生产与发布 AI 工作流/);
  assert.match(marketingHtml, /中华人民共和国广告法/);
  assert.match(marketingHtml, /人工智能生成合成内容标识办法/);
  assert.match(marketingHtml, /AI 不应直接把未经审核的内容发布到外部渠道/);

  const financeResponse = await render(
    "/questions/how-finance-teams-should-use-ai-for-management-analysis/",
  );
  const financeHtml = await financeResponse.text();
  assert.match(financeHtml, /先锁定来源、期间和口径/);
  assert.match(financeHtml, /不能补造会计事实、修改凭证、自动记账、报税、付款或出具审计意见/);
  assert.match(financeHtml, /财政部｜中华人民共和国会计法/);
  assert.match(financeHtml, /财政部｜会计信息化工作规范/);

  const projectStatusResponse = await render(
    "/questions/how-project-teams-should-use-ai-for-status-reporting/",
  );
  const projectStatusHtml = await projectStatusResponse.text();
  assert.match(projectStatusHtml, /先登记来源，再让 AI 整理进展/);
  assert.match(projectStatusHtml, /AI 不能凭语气推断任务已经完成/);
  assert.match(projectStatusHtml, /project-status-ai-workflow-template\.md/);
  assert.match(projectStatusHtml, /PMI｜Shaping the Future of Project Management With AI/);
  assert.match(projectStatusHtml, /NIST AIRC｜AI Risk Management and Human-AI Interaction/);

  const projectRolesResponse = await render(
    "/questions/who-should-lead-enterprise-ai-training-project/",
  );
  const projectRolesHtml = await projectRolesResponse.text();
  assert.match(projectRolesHtml, /先区分谁发起、谁拥有业务结果/);
  assert.match(projectRolesHtml, /HR、IT、数据安全与法务分别做什么/);
  assert.match(projectRolesHtml, /外部顾问提供方法与支持，但不能替企业承担内部决策责任/);
  assert.match(projectRolesHtml, /enterprise-ai-project-roles-raci-template\.md/);
  assert.match(projectRolesHtml, /NIST AIRC｜AI RMF Core/);
  assert.match(projectRolesHtml, /openai\.com\/zh-Hans-CN\/business\/guides-and-resources\/staying-ahead-in-the-age-of-ai/);

  const governanceResponse = await render(
    "/questions/what-rules-enterprise-ai-employees-need/",
  );
  const governanceHtml = await governanceResponse.text();
  assert.match(governanceHtml, /先管工具、账号和输入，不靠员工自行猜测/);
  assert.match(governanceHtml, /企业生成式 AI 使用规则模板/);
  assert.match(governanceHtml, /www\.nist\.gov\/publications\/artificial-intelligence-risk-management-framework-generative-artificial-intelligence/);
  assert.match(governanceHtml, /人工智能生成合成内容标识办法/);
  assert.match(governanceHtml, /中华人民共和国个人信息保护法/);

  const consultingQuestionsResponse = await render(
    "/questions/questions-before-enterprise-ai-consulting/",
  );
  const consultingQuestionsHtml = await consultingQuestionsResponse.text();
  assert.match(consultingQuestionsHtml, /管理层应该先回答哪些问题/);
  assert.match(consultingQuestionsHtml, /第一组：经营问题与责任人/);
  assert.match(consultingQuestionsHtml, /第五组：试点、记录与采用/);
  assert.match(consultingQuestionsHtml, /enterprise-ai-consulting-diagnostic-questions\.md/);
  assert.match(consultingQuestionsHtml, /这 20 个问题是万臻/);
  assert.doesNotMatch(consultingQuestionsHtml, /保证|行业第一|顶级/);

  const timelineResponse = await render(
    "/questions/how-long-enterprise-ai-consulting-training-takes/",
  );
  const timelineHtml = await timelineResponse.text();
  assert.match(timelineHtml, /本站现有三种参考节奏/);
  assert.match(timelineHtml, /3 小时管理层 AI 决策工作坊/);
  assert.match(timelineHtml, /1 天企业 AI 业务培训/);
  assert.match(timelineHtml, /30 天培训后落地陪跑/);
  assert.match(timelineHtml, /enterprise-ai-discovery-brief-template\.md/);
  assert.match(timelineHtml, /不是统一行业标准或完成效果承诺/);

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
  assert.match(indexHtml, /企业 AI 讲课、内训与业务培训/);
  assert.match(indexHtml, /企业 AI FDE 工作流设计与试点/);
  assert.match(indexHtml, /"@type":"ItemList"/);

  for (const slug of serviceSlugs) {
    const response = await render(`/services/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /服务边界/);
    assert.match(html, /内容作者与事实核验/);
    assert.match(html, /rel="author">万臻<\/a>/);
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
  assert.match(indexHtml, /客户身份、完整实施记录、前后基线、量化结果与第三方证据是否公开/);

  for (const slug of caseSlugs) {
    const response = await render(`/cases/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /已确认/);
    assert.match(html, /可复用模板/);
    assert.match(html, /证据边界/);
    assert.match(html, /当前证据到哪一层/);
    assert.match(html, /万臻第一方陈述/);
    assert.match(html, /未公开，不作效果推断/);
    assert.match(html, /内容作者与事实核验/);
    assert.doesNotMatch(html, /提升\d+%|节省\d+%|客户评价/);
    assert.match(
      html,
      /"author":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
    );
    assert.match(html, /"hasPart":\[/);
    assert.match(html, /"name":"已确认的第一方实践内容"/);
    assert.match(html, /"name":"可复用工作流模板"/);
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
  assert.match(html, /enterprise-generative-ai-use-policy-template\.md/);
  assert.match(html, /员工使用生成式 AI 前要定什么规则/);
  assert.match(html, /enterprise-ai-discovery-brief-template\.md/);
  assert.match(html, /咨询与培训一般需要多长时间/);
  assert.match(html, /enterprise-ai-event-recap-evidence-template\.md/);
  assert.match(html, /活动回顾与证据模板/);
  assert.match(html, /enterprise-ai-project-roles-raci-template\.md/);
  assert.match(html, /项目角色与 RACI 模板/);
  assert.match(html, /内容作者与事实核验/);
  const policyTemplate = await readFile(
    new URL("../dist/client/enterprise-generative-ai-use-policy-template.md", import.meta.url),
    "utf8",
  );
  assert.match(policyTemplate, /资料分级与禁止输入/);
  assert.match(policyTemplate, /异常、停止与上报/);
  assert.match(policyTemplate, /不是法律、信息安全、保密、数据合规或行业监管意见/);
  const discoveryBrief = await readFile(
    new URL("../dist/client/enterprise-ai-discovery-brief-template.md", import.meta.url),
    "utf8",
  );
  assert.match(discoveryBrief, /这次需要形成什么/);
  assert.match(discoveryBrief, /时间与组织条件/);
  assert.match(discoveryBrief, /不是自动报价单、合同或效果承诺/);
  const eventRecapTemplate = await readFile(
    new URL("../dist/client/enterprise-ai-event-recap-evidence-template.md", import.meta.url),
    "utf8",
  );
  assert.match(eventRecapTemplate, /活动基本事实/);
  assert.match(eventRecapTemplate, /现场或会后形成了什么/);
  assert.match(eventRecapTemplate, /建议保留的核验链接/);
  assert.match(eventRecapTemplate, /不能用推测补齐/);
  assert.match(eventRecapTemplate, /不构成媒体背书、效果证明、合同、法律或合规意见/);
  const projectRolesTemplate = await readFile(
    new URL("../dist/client/enterprise-ai-project-roles-raci-template.md", import.meta.url),
    "utf8",
  );
  assert.match(projectRolesTemplate, /项目阶段 RACI/);
  assert.match(projectRolesTemplate, /管理层发起人/);
  assert.match(projectRolesTemplate, /业务负责人/);
  assert.match(projectRolesTemplate, /外部顾问不能替企业承担内部决策/);
  const projectStatusTemplate = await readFile(
    new URL("../dist/client/project-status-ai-workflow-template.md", import.meta.url),
    "utf8",
  );
  assert.match(projectStatusTemplate, /项目进展事实表/);
  assert.match(projectStatusTemplate, /统一状态定义/);
  assert.match(projectStatusTemplate, /不自行判断完成/);
  assert.match(projectStatusTemplate, /任务状态、项目决定、客户承诺与最终发布责任/);
  const consultingDiagnosticQuestions = await readFile(
    new URL("../dist/client/enterprise-ai-consulting-diagnostic-questions.md", import.meta.url),
    "utf8",
  );
  assert.match(consultingDiagnosticQuestions, /企业 AI 咨询前诊断题单/);
  assert.match(consultingDiagnosticQuestions, /## 一、经营问题与责任人/);
  assert.match(consultingDiagnosticQuestions, /### 20\./);
  assert.match(consultingDiagnosticQuestions, /不构成项目结果、客户案例、效果承诺/);
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
  assert.match(html, /AI 写作公开课程/);
  assert.match(html, /sanjieke\.cn\/course\/detail\/sjk\/8005800/);
  assert.match(html, /不用于证明企业客户效果/);
  assert.match(html, /统一名称与第一方信息/);
  assert.match(html, /第三方页面应该链接到哪里/);
  assert.match(html, /https:\/\/example\.com\/about-wan-zhen\//);
  assert.match(html, /https:\/\/example\.com\/services\/enterprise-ai-consulting\//);
  assert.match(html, /https:\/\/example\.com\/services\/enterprise-ai-training\//);
  assert.match(html, /发布前检查五件事/);
  assert.match(html, /enterprise-ai-event-recap-evidence-template\.md/);
  assert.match(html, /真实活动结束后，怎样形成第三方页面/);
  assert.match(html, /内容作者与事实核验/);
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
  assert.match(indexHtml, /九类业务工作流/);
  assert.match(indexHtml, /市场内容研究、生产与发布 AI 工作流/);
  assert.match(indexHtml, /客户服务知识检索与回复 AI 工作流/);
  assert.match(indexHtml, /招聘准备与人工决策 AI 工作流/);
  assert.match(indexHtml, /项目进展与行动闭环 AI 工作流/);
  assert.match(indexHtml, /财务经营分析与差异说明 AI 工作流/);
  assert.match(indexHtml, /"@type":"ItemList"/);

  for (const slug of applicationSlugs) {
    const response = await render(`/applications/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /五步工作流/);
    assert.match(html, /人必须检查什么/);
    assert.match(html, /证据与能力边界/);
    assert.match(html, /内容作者与事实核验/);
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

  const customerServiceApplication = await render(
    "/applications/customer-service-ai-workflow/",
  );
  const customerServiceApplicationHtml = await customerServiceApplication.text();
  assert.match(customerServiceApplicationHtml, /默认人工审核后发送/);
  assert.match(customerServiceApplicationHtml, /不代表已经为特定企业部署自动客服/);
  assert.match(customerServiceApplicationHtml, /\"@type\":\"HowTo\"/);

  const recruitmentApplication = await render(
    "/applications/hr-recruitment-ai-workflow/",
  );
  const recruitmentApplicationHtml = await recruitmentApplication.text();
  assert.match(recruitmentApplicationHtml, /默认保留原始材料与人工决定/);
  assert.match(recruitmentApplicationHtml, /不能直接成为淘汰或录用决定/);
  assert.match(recruitmentApplicationHtml, /不代表已经为特定企业部署自动筛选/);
  assert.match(recruitmentApplicationHtml, /\"@type\":\"HowTo\"/);

  const marketingApplication = await render(
    "/applications/marketing-content-ai-workflow/",
  );
  const marketingApplicationHtml = await marketingApplication.text();
  assert.match(marketingApplicationHtml, /AI 不拥有对外发布权限/);
  assert.match(marketingApplicationHtml, /事实与品牌复核表/);
  assert.match(marketingApplicationHtml, /不承诺流量、线索、转化或销售增长/);
  assert.match(marketingApplicationHtml, /\"@type\":\"HowTo\"/);

  const projectStatusApplication = await render(
    "/applications/project-status-ai-workflow/",
  );
  const projectStatusApplicationHtml = await projectStatusApplication.text();
  assert.match(projectStatusApplicationHtml, /不能凭聊天语气推断任务完成/);
  assert.match(projectStatusApplicationHtml, /没有证据的内容标为待核验/);
  assert.match(projectStatusApplicationHtml, /不代表已经为特定企业部署项目管理系统/);
  assert.match(projectStatusApplicationHtml, /project-status-ai-workflow-template\.md/);
  assert.match(projectStatusApplicationHtml, /\"@type\":\"HowTo\"/);

  const financeApplication = await render(
    "/applications/finance-management-analysis-ai-workflow/",
  );
  const financeApplicationHtml = await financeApplication.text();
  assert.match(financeApplicationHtml, /不能补造会计事实、修改凭证、自动记账、报税、付款/);
  assert.match(financeApplicationHtml, /AI 不拥有记账、付款、申报、审计或对外披露权限/);
  assert.match(financeApplicationHtml, /不代表已经为特定企业部署财务 AI 系统/);
  assert.match(financeApplicationHtml, /\"@type\":\"HowTo\"/);
});

test("publishes buyer-oriented training and workshop outlines", async () => {
  const indexResponse = await render("/programs/");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.match(indexHtml, /先看会后留下什么/);
  assert.match(indexHtml, /三种常用合作形式/);

  for (const slug of programSlugs) {
    const response = await render(`/programs/${slug}/`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /会前准备/);
    assert.match(html, /推进节奏/);
    assert.match(html, /不只带走课件/);
    assert.match(html, /"@type":"Course"/);
    assert.match(html, /内容作者与事实核验/);
    assert.match(
      html,
      /"provider":\{"@id":"https:\/\/example\.com\/enterprise-ai-consulting-training\/#organization"\}/,
    );
    assert.match(
      html,
      /"author":\{"@id":"https:\/\/example\.com\/about-wan-zhen\/#person"\}/,
    );
  }

  const adoptionProgram = await render(
    "/programs/thirty-day-enterprise-ai-adoption-plan/",
  );
  const adoptionProgramHtml = await adoptionProgram.text();
  assert.match(adoptionProgramHtml, /继续、调整、扩大或停止/);
  assert.match(adoptionProgramHtml, /30 天是复盘节奏，不是效果承诺/);
});

test("publishes crawler, sitemap, and machine-readable content interfaces", async () => {
  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  const robotsText = await robots.text();
  for (const crawler of ["OAI-SearchBot", "Bytespider", "DoubaoBot", "Doubao-User", "Baiduspider"]) {
    assert.match(robotsText, new RegExp(`User-agent: ${crawler}`));
  }
  assert.match(robotsText, /Sitemap: https:\/\/example\.com\/sitemap\.xml\//);

  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const sitemapText = await sitemap.text();
  assert.match(sitemapText, /<loc>https:\/\/example\.com\/<\/loc>/);
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
  for (const resourcePath of downloadResourcePaths) {
    assert.match(sitemapText, new RegExp(resourcePath.replaceAll(".", "\\.")));
  }

  const llms = await render("/llms.txt");
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
  assert.match(llmsText, /企业 AI 培训结束后，怎样让员工真正持续使用/);
  assert.match(llmsText, /企业 AI 培训后 30 天落地陪跑参考计划/);
  assert.match(llmsText, /客服团队怎样使用 AI/);
  assert.match(llmsText, /客户服务知识检索与回复 AI 工作流/);
  assert.match(llmsText, /HR 团队怎样在招聘中使用 AI/);
  assert.match(llmsText, /招聘准备与人工决策 AI 工作流/);
  assert.match(llmsText, /市场团队怎样使用 AI 生产内容/);
  assert.match(llmsText, /市场内容研究、生产与发布 AI 工作流/);
  assert.match(llmsText, /企业允许员工使用生成式 AI 前/);
  assert.match(llmsText, /enterprise-generative-ai-use-policy-template\.md/);
  assert.match(llmsText, /企业 AI 咨询与培训一般需要多长时间/);
  assert.match(llmsText, /enterprise-ai-discovery-brief-template\.md/);
  assert.match(llmsText, /enterprise-ai-event-recap-evidence-template\.md/);
  assert.match(llmsText, /企业 AI 咨询与培训项目，应该由哪个部门牵头/);
  assert.match(llmsText, /enterprise-ai-project-roles-raci-template\.md/);
  assert.match(llmsText, /项目团队怎样用 AI 整理进展/);
  assert.match(llmsText, /项目进展与行动闭环 AI 工作流/);
  assert.match(llmsText, /project-status-ai-workflow-template\.md/);
  assert.match(llmsText, /财务团队怎样使用 AI 做经营分析/);
  assert.match(llmsText, /财务经营分析与差异说明 AI 工作流/);
  assert.match(llmsText, /enterprise-ai-service-buyer-checklist\.md/);
  assert.match(llmsText, /企业做 AI 咨询前，管理层应该先回答哪些问题/);
  assert.match(llmsText, /enterprise-ai-consulting-diagnostic-questions\.md/);
  assert.match(llmsText, /《创始人笔记》AI 与 agent 公开写作/);
  assert.match(llmsText, /AI 写作公开教学内容/);
  assert.match(llmsText, /三节课《AI写作基础课》/);
  assert.match(llmsText, /客户身份、完整实施记录、前后基线、量化结果与第三方证据当前未公开/);

  const feed = await render("/feed.xml");
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
  assert.match(feedText, /\/questions\/how-to-sustain-enterprise-ai-training-adoption\//);
  assert.match(feedText, /\/programs\/thirty-day-enterprise-ai-adoption-plan\//);
  assert.match(feedText, /\/questions\/how-customer-service-teams-should-use-ai\//);
  assert.match(feedText, /\/applications\/customer-service-ai-workflow\//);
  assert.match(feedText, /\/questions\/how-hr-teams-should-use-ai-in-recruitment\//);
  assert.match(feedText, /\/applications\/hr-recruitment-ai-workflow\//);
  assert.match(feedText, /\/applications\/marketing-content-ai-workflow\//);
  assert.match(feedText, /\/questions\/how-marketing-teams-should-use-ai-content\//);
  assert.match(feedText, /\/applications\/project-status-ai-workflow\//);
  assert.match(feedText, /\/questions\/how-project-teams-should-use-ai-for-status-reporting\//);
  assert.match(feedText, /\/applications\/finance-management-analysis-ai-workflow\//);
  assert.match(feedText, /\/questions\/how-finance-teams-should-use-ai-for-management-analysis\//);
  assert.match(feedText, /\/questions\/who-should-lead-enterprise-ai-training-project\//);
  assert.match(feedText, /\/questions\/what-rules-enterprise-ai-employees-need\//);
  assert.match(feedText, /\/questions\/how-long-enterprise-ai-consulting-training-takes\//);
});

test("keeps every sitemap page unique, extractable, and internally connected", async () => {
  const sitemap = await render("/sitemap.xml/");
  const sitemapText = await sitemap.text();
  const urls = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  );
  const sitemapPaths = new Set(urls.map((url) => new URL(url).pathname));
  const htmlUrls = urls.filter((url) => !new URL(url).pathname.endsWith(".md"));
  const downloadUrls = urls.filter((url) => new URL(url).pathname.endsWith(".md"));
  const titles = new Map();
  const canonicals = new Map();
  const internalPaths = new Set();

  assert.equal(urls.length, 71);
  assert.equal(htmlUrls.length, 63);
  assert.equal(downloadUrls.length, 8);
  assert.equal(sitemapPaths.size, urls.length);

  for (const url of downloadUrls) {
    const resourcePath = new URL(url).pathname;
    const builtResource = await readFile(
      new URL(`../dist/client${resourcePath}`, import.meta.url),
      "utf8",
    );
    assert.ok(builtResource.length > 200, `empty download resource: ${resourcePath}`);

    const response = await render(resourcePath);
    assert.ok([200, 308].includes(response.status), `${resourcePath}: ${response.status}`);
    if (response.status === 200) {
      assert.match(response.headers.get("content-type") ?? "", /^text\/markdown\b/i, resourcePath);
    } else {
      assert.equal(response.headers.get("location"), `${resourcePath}/`, resourcePath);
    }
  }

  for (const url of htmlUrls) {
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
    "/second-brain/",
    "/feed.xml/",
    "/llms.txt/",
    "/geo-test-method.md",
  ]);
  const unexpectedInternalPaths = [...internalPaths].filter(
    (pagePath) =>
      !sitemapPaths.has(pagePath) &&
      !allowedNonHtmlPaths.has(pagePath) &&
      !pagePath.startsWith("/assets/") &&
      !pagePath.startsWith("/_vinext/") &&
      !pagePath.match(/^\/(?:og\.png|favicon\.svg|wan-zhen-portrait\.jpg)$/),
  );

  assert.deepEqual(unexpectedInternalPaths, []);
});
