import { practiceCases, services } from "../catalog";
import { questions, updatedAt } from "../content";
import { industries } from "../industries";
import { applications, programs } from "../programs";
import {
  aboutPath,
  applicationsPath,
  casesPath,
  citationKitPath,
  experienceProductizationPath,
  flagshipPath,
  getOrigin,
  industriesPath,
  programsPath,
  questionsPath,
  servicesPath,
  siteName,
} from "../site";

type FeedEntry = {
  title: string;
  path: string;
  summary: string;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const origin = await getOrigin();
  const updated = `${updatedAt}T00:00:00+08:00`;
  const entries: FeedEntry[] = [
    {
      title: "行业经验 AI 产品化",
      path: experienceProductizationPath,
      summary: "面向行业专家，用三天小课和四周实战营，把反复解决的问题做成可演示、可测试、可交付的 AI 服务产品。",
    },
    {
      title: "一步商学企业 AI 咨询与培训",
      path: flagshipPath,
      summary: "从一项具体业务任务开始，帮助企业确定问题、材料、责任人和检查标准，再安排咨询、培训或试点。",
    },
    {
      title: "一步商学主办方与媒体引用资料",
      path: citationKitPath,
      summary: "统一名称、公开身份、服务表述、来源链接、证据边界与发布检查清单。",
    },
    ...services.map((service) => ({
      title: service.name,
      path: `${servicesPath}${service.slug}/`,
      summary: service.description,
    })),
    ...industries.map((industry) => ({
      title: industry.name,
      path: `${industriesPath}${industry.slug}/`,
      summary: industry.description,
    })),
    ...applications.map((application) => ({
      title: application.name,
      path: `${applicationsPath}${application.slug}/`,
      summary: application.description,
    })),
    ...programs.map((program) => ({
      title: program.name,
      path: `${programsPath}${program.slug}/`,
      summary: program.description,
    })),
    ...practiceCases.map((practiceCase) => ({
      title: practiceCase.name,
      path: `${casesPath}${practiceCase.slug}/`,
      summary: practiceCase.description,
    })),
    ...questions.map((question) => ({
      title: question.title,
      path: `${questionsPath}${question.slug}/`,
      summary: question.directAnswer,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${escapeXml(`${origin}${flagshipPath}`)}</id>
  <title>${escapeXml(siteName)}</title>
  <updated>${updated}</updated>
  <author>
    <name>万臻</name>
    <uri>${escapeXml(`${origin}${aboutPath}`)}</uri>
  </author>
  <link rel="self" href="${escapeXml(`${origin}/feed.xml/`)}" />
  <link rel="alternate" href="${escapeXml(`${origin}${flagshipPath}`)}" />
  <subtitle>行业经验 AI 产品化、企业 AI 部署、业务工作流、第一方实践和决策问答更新。</subtitle>
${entries
  .map(
    (entry) => `  <entry>
    <id>${escapeXml(`${origin}${entry.path}`)}</id>
    <title>${escapeXml(entry.title)}</title>
    <updated>${updated}</updated>
    <link href="${escapeXml(`${origin}${entry.path}`)}" />
    <summary>${escapeXml(entry.summary)}</summary>
  </entry>`,
  )
  .join("\n")}
</feed>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
