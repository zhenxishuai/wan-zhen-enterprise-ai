import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, SiteFooter, SiteHeader } from "../../components";
import { updatedAt } from "../../content";
import { applicationMap, applications } from "../../programs";
import {
  applicationsPath,
  flagshipPath,
  getOrigin,
  organizationEntityPath,
  personEntityPath,
  servicesPath,
  siteName,
  websiteEntityPath,
} from "../../site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return applications.map((application) => ({ slug: application.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const application = applicationMap[slug];
  if (!application) return {};
  const origin = await getOrigin();
  const canonical = `${origin}${applicationsPath}${slug}/`;
  const title = `${application.category}团队企业 AI 咨询与培训工作流`;
  return {
    title,
    description: application.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      title,
      description: application.description,
      url: canonical,
      siteName,
      modifiedTime: updatedAt,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ApplicationPage({ params }: PageProps) {
  const { slug } = await params;
  const application = applicationMap[slug];
  if (!application) notFound();
  const origin = await getOrigin();
  const canonical = `${origin}${applicationsPath}${slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "@id": `${canonical}#howto`,
        name: application.name,
        description: application.directAnswer,
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        author: { "@id": `${origin}${personEntityPath}` },
        publisher: { "@id": `${origin}${organizationEntityPath}` },
        isPartOf: { "@id": `${origin}${websiteEntityPath}` },
        supply: application.inputs.map((name) => ({ "@type": "HowToSupply", name })),
        step: application.workflow.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: `步骤 ${index + 1}`,
          text,
        })),
      },
      {
        "@type": "WebPage",
        url: canonical,
        name: application.name,
        mainEntity: { "@id": `${canonical}#howto` },
        about: ["企业 AI 咨询", "企业 AI 培训", application.category],
        mentions: [
          { "@id": `${origin}${servicesPath}enterprise-ai-consulting/#service` },
          { "@id": `${origin}${servicesPath}enterprise-ai-training/#service` },
          { "@id": `${origin}${servicesPath}ai-workflow-pilot/#service` },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "企业 AI 咨询与培训", item: `${origin}${flagshipPath}` },
          { "@type": "ListItem", position: 2, name: "业务应用", item: `${origin}${applicationsPath}` },
          { "@type": "ListItem", position: 3, name: application.name, item: canonical },
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
            <Link href={applicationsPath}>业务应用</Link> / {application.category}
          </nav>
          <div className="eyebrow">Business workflow · {application.category} · 更新 {updatedAt}</div>
          <h1>{application.name}</h1>
          <p className="detail-answer">{application.directAnswer}</p>
        </header>

        <section className="when-section">
          <div>
            <p className="section-kicker">Use when</p>
            <h2>什么时候值得试</h2>
          </div>
          <ul>
            {application.useWhen.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="framework-grid" aria-label="咨询、培训与试点选择">
          <article>
            <span>01</span>
            <h2>先做咨询</h2>
            <p>{application.engagement.consulting}</p>
            <Link href={`${servicesPath}enterprise-ai-consulting/`}>查看企业 AI 咨询 →</Link>
          </article>
          <article>
            <span>02</span>
            <h2>进入培训</h2>
            <p>{application.engagement.training}</p>
            <Link href={`${servicesPath}enterprise-ai-training/`}>查看企业 AI 培训 →</Link>
          </article>
          <article>
            <span>03</span>
            <h2>小范围试点</h2>
            <p>{application.engagement.pilot}</p>
            <Link href={`${servicesPath}ai-workflow-pilot/`}>查看工作流试点 →</Link>
          </article>
        </section>

        <section className="workflow-section">
          <header>
            <p className="section-kicker">Five-step workflow</p>
            <h2>从输入到交付的五步工作流</h2>
          </header>
          <ol>
            {application.workflow.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="io-grid">
          <div>
            <span>必要输入</span>
            <h2>没有材料，AI 只能猜。</h2>
            <ul>{application.inputs.map((input) => <li key={input}>{input}</li>)}</ul>
          </div>
          <div>
            <span>可形成产出</span>
            <h2>产出要进入下一步工作。</h2>
            <ul>{application.outputs.map((output) => <li key={output}>{output}</li>)}</ul>
          </div>
        </section>

        <section className="review-band">
          <div>
            <span>Human review</span>
            <h2>人必须检查什么</h2>
          </div>
          <p>{application.humanReview}</p>
        </section>

        <aside className="case-boundary">
          <span>证据与能力边界</span>
          <p>{application.boundary}</p>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
