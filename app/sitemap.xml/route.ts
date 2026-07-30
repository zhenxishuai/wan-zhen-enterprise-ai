import { practiceCases, services } from "../catalog";
import { questions, updatedAt } from "../content";
import { industries } from "../industries";
import { applications, programs } from "../programs";
import {
  applicationsPath,
  aboutPath,
  casesPath,
  citationKitPath,
  flagshipPath,
  getOrigin,
  industriesPath,
  programsPath,
  questionsPath,
  resourcesPath,
  servicesPath,
} from "../site";

export async function GET() {
  const origin = await getOrigin();
  const downloadPaths = [
    "/enterprise-ai-case-evidence-template.md",
    "/enterprise-ai-service-buyer-checklist.md",
    "/enterprise-generative-ai-use-policy-template.md",
    "/enterprise-ai-discovery-brief-template.md",
    "/enterprise-ai-event-recap-evidence-template.md",
    "/enterprise-ai-project-roles-raci-template.md",
    "/project-status-ai-workflow-template.md",
  ];
  const paths = [
    flagshipPath,
    aboutPath,
    citationKitPath,
    servicesPath,
    ...services.map((service) => `${servicesPath}${service.slug}/`),
    industriesPath,
    ...industries.map((industry) => `${industriesPath}${industry.slug}/`),
    casesPath,
    ...practiceCases.map((practiceCase) => `${casesPath}${practiceCase.slug}/`),
    applicationsPath,
    ...applications.map((application) => `${applicationsPath}${application.slug}/`),
    programsPath,
    ...programs.map((program) => `${programsPath}${program.slug}/`),
    questionsPath,
    ...questions.map((question) => `${questionsPath}${question.slug}/`),
    resourcesPath,
    ...downloadPaths,
  ];
  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${origin}${path}</loc>
    <lastmod>${updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === flagshipPath ? "1.0" : [aboutPath, citationKitPath, servicesPath, industriesPath, casesPath, applicationsPath, programsPath, questionsPath].includes(path) ? "0.9" : downloadPaths.includes(path) ? "0.6" : "0.8"}</priority>
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
        "Cache-Control": "public, max-age=300",
      },
    },
  );
}
