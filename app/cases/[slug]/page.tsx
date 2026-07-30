import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { practiceCaseMap, practiceCases } from "../../catalog";
import { JsonLd, SiteFooter, SiteHeader } from "../../components";
import { updatedAt } from "../../content";
import {
  casesPath,
  flagshipPath,
  getOrigin,
  organizationEntityPath,
  personEntityPath,
  siteName,
  websiteEntityPath,
} from "../../site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practiceCases.map((practiceCase) => ({ slug: practiceCase.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const practiceCase = practiceCaseMap[slug];
  if (!practiceCase) return {};
  const origin = await getOrigin();
  const canonical = `${origin}${casesPath}${slug}/`;
  const title = `${practiceCase.name}｜企业 AI 第一方实践`;
  return {
    title,
    description: practiceCase.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      title,
      description: practiceCase.description,
      url: canonical,
      siteName,
      publishedTime: updatedAt,
      modifiedTime: updatedAt,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params;
  const practiceCase = practiceCaseMap[slug];
  if (!practiceCase) notFound();
  const origin = await getOrigin();
  const canonical = `${origin}${casesPath}${slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: practiceCase.name,
        description: practiceCase.description,
        datePublished: updatedAt,
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        mainEntityOfPage: canonical,
        author: {
          "@id": `${origin}${personEntityPath}`,
        },
        publisher: { "@id": `${origin}${organizationEntityPath}` },
        isPartOf: { "@id": `${origin}${websiteEntityPath}` },
        about: [practiceCase.category, "企业 AI", "人机协同工作流"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "企业 AI 咨询与培训",
            item: `${origin}${flagshipPath}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "第一方实践",
            item: `${origin}${casesPath}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: practiceCase.name,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content" className="page">
        <header className="case-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={casesPath}>第一方实践</Link> / {practiceCase.category}
          </nav>
          <div className="eyebrow">First-party practice · 非客户效果承诺 · 更新 {updatedAt}</div>
          <h1>{practiceCase.name}</h1>
          <p className="detail-answer">{practiceCase.directAnswer}</p>
        </header>

        <div className="case-evidence-grid">
          <section className="evidence-panel confirmed">
            <span>01 / 已确认</span>
            <h2>第一方明确陈述的实践内容</h2>
            <ul>
              {practiceCase.confirmed.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section className="evidence-panel template">
            <span>02 / 可复用模板</span>
            <h2>如果企业要试，可以这样展开</h2>
            <ol>
              {practiceCase.reusableWorkflow.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>
        </div>

        <section className="case-output-section">
          <div>
            <p className="section-kicker">Possible outputs</p>
            <h2>可形成的工作产出</h2>
          </div>
          <div className="output-list">
            {practiceCase.outputs.map((output, index) => (
              <span key={output}><em>0{index + 1}</em>{output}</span>
            ))}
          </div>
        </section>

        <aside className="case-boundary">
          <span>03 / 证据边界</span>
          <p>{practiceCase.boundary}</p>
        </aside>

        <section className="related-section">
          <p className="section-kicker">More first-party practices</p>
          <h2>查看其他业务场景</h2>
          <div className="related-links">
            {practiceCases.filter((entry) => entry.slug !== slug).map((entry) => (
              <Link href={`${casesPath}${entry.slug}/`} key={entry.slug}>
                <span>{entry.category}</span>
                <strong>{entry.name} →</strong>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
