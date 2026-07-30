import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, SiteFooter, SiteHeader } from "../../components";
import { updatedAt } from "../../content";
import { industries, industryMap } from "../../industries";
import {
  flagshipPath,
  getOrigin,
  industriesPath,
  organizationEntityPath,
  personEntityPath,
  servicesPath,
  siteName,
  websiteEntityPath,
} from "../../site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryMap[slug];
  if (!industry) return {};
  const origin = await getOrigin();
  const canonical = `${origin}${industriesPath}${slug}/`;
  return {
    title: `${industry.name}｜适用场景、工作流与边界`,
    description: industry.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      title: industry.name,
      description: industry.description,
      url: canonical,
      siteName,
      modifiedTime: updatedAt,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industryMap[slug];
  if (!industry) notFound();
  const origin = await getOrigin();
  const canonical = `${origin}${industriesPath}${slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: industry.name,
        description: industry.directAnswer,
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        author: { "@id": `${origin}${personEntityPath}` },
        publisher: { "@id": `${origin}${organizationEntityPath}` },
        isPartOf: { "@id": `${origin}${websiteEntityPath}` },
        about: ["企业 AI 咨询", "企业 AI 培训", industry.category],
        mentions: industry.priorities.map((priority) => ({
          "@type": "HowTo",
          name: priority.name,
          url: `${origin}${priority.href}`,
        })),
        audience: {
          "@type": "BusinessAudience",
          audienceType: `${industry.category}企业负责人、管理团队与业务部门`,
        },
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
            name: "行业与企业类型",
            item: `${origin}${industriesPath}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: industry.name,
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
        <header className="detail-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={industriesPath}>行业与企业类型</Link> / {industry.category}
          </nav>
          <div className="eyebrow">Industry fit · 非客户案例 · 更新 {updatedAt}</div>
          <h1>{industry.name}</h1>
          <p className="detail-answer">{industry.directAnswer}</p>
        </header>

        <section className="when-section">
          <div>
            <p className="section-kicker">Fit signals</p>
            <h2>出现这些信号时，值得先诊断</h2>
          </div>
          <ul>
            {industry.fitSignals.map((signal) => <li key={signal}>{signal}</li>)}
          </ul>
        </section>

        <section className="framework-grid">
          {industry.priorities.map((priority, index) => (
            <article key={priority.name}>
              <span>0{index + 1}</span>
              <h2>{priority.name}</h2>
              <p>{priority.description}</p>
              <Link className="text-link" href={priority.href}>查看工作流 →</Link>
            </article>
          ))}
        </section>

        <section className="workflow-section">
          <header>
            <p className="section-kicker">First controlled step</p>
            <h2>第一轮怎样做</h2>
          </header>
          <ol>
            {industry.firstSteps.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="takeaway-section">
          <div>
            <p className="section-kicker">Bring real inputs</p>
            <h2>需要准备什么</h2>
          </div>
          <div>
            {industry.inputs.map((input, index) => (
              <span key={input}>0{index + 1} / {input}</span>
            ))}
          </div>
        </section>

        <aside className="case-boundary">
          <span>适用与证据边界</span>
          <p>{industry.boundary}</p>
        </aside>

        <section className="path-split">
          <Link href={`${servicesPath}enterprise-ai-consulting/`}>
            <span>方向与场景还不清楚</span>
            <strong>先做企业 AI 咨询诊断 →</strong>
          </Link>
          <Link href={`${servicesPath}enterprise-ai-training/`}>
            <span>任务已经明确，需要团队掌握</span>
            <strong>查看企业 AI 业务培训 →</strong>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
