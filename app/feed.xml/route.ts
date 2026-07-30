import { practiceCases, services } from "../catalog";
import { questions, updatedAt } from "../content";
import { applications, programs } from "../programs";
import {
  applicationsPath,
  casesPath,
  flagshipPath,
  getOrigin,
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
      title: "万臻企业 AI 咨询与培训",
      path: flagshipPath,
      summary: "从经营目标、业务场景和工作流出发，帮助企业选择、设计并验证值得落地的 AI 任务。",
    },
    ...services.map((service) => ({
      title: service.name,
      path: `${servicesPath}${service.slug}/`,
      summary: service.description,
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
  <link rel="self" href="${escapeXml(`${origin}/feed.xml/`)}" />
  <link rel="alternate" href="${escapeXml(`${origin}${flagshipPath}`)}" />
  <subtitle>企业 AI 咨询、培训、业务工作流、第一方实践和决策问答更新。</subtitle>
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
