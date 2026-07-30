import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceMap, services } from "../../catalog";
import { ContentByline, JsonLd, SiteFooter, SiteHeader } from "../../components";
import { updatedAt } from "../../content";
import {
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
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceMap[slug];
  if (!service) return {};
  const origin = await getOrigin();
  const canonical = `${origin}${servicesPath}${slug}/`;
  const title = `${service.name}｜适用对象、交付成果与边界`;

  return {
    title,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      title,
      description: service.description,
      url: canonical,
      siteName,
      modifiedTime: updatedAt,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceMap[slug];
  if (!service) notFound();
  const origin = await getOrigin();
  const canonical = `${origin}${servicesPath}${slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: service.name,
        description: service.description,
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        mainEntity: { "@id": `${canonical}#service` },
        author: { "@id": `${origin}${personEntityPath}` },
        publisher: { "@id": `${origin}${organizationEntityPath}` },
        isPartOf: { "@id": `${origin}${websiteEntityPath}` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: service.name,
        description: service.directAnswer,
        serviceType: service.name,
        provider: {
          "@id": `${origin}${organizationEntityPath}`,
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: service.audience,
        },
        areaServed: "中国",
        url: canonical,
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
            name: "服务目录",
            item: `${origin}${servicesPath}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: canonical,
          },
        ],
      },
    ],
  };

  const relatedServices = services.filter((entry) => entry.slug !== slug).slice(0, 3);

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content" className="page">
        <header className="detail-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={servicesPath}>服务目录</Link> / {service.shortName}
          </nav>
          <div className="eyebrow">Enterprise AI service · 更新于 {updatedAt}</div>
          <h1>{service.name}</h1>
          <p className="detail-answer">{service.directAnswer}</p>
          <ContentByline updatedAt={updatedAt} />
          <div className="outcome-strip" aria-label="预期交付">
            {service.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}
          </div>
        </header>

        <div className="detail-layout">
          <article className="article-body">
            {service.sections.map((section, index) => (
              <section className="article-section" id={`section-${index + 1}`} key={section.heading}>
                <div className="section-index">0{index + 1}</div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                )}
              </section>
            ))}
            <section className="article-section">
              <div className="article-boundary">
                <p><strong>服务边界：</strong>{service.boundary}</p>
              </div>
            </section>
          </article>

          <aside className="detail-aside">
            <div className="aside-block">
              <span className="aside-label">适用对象</span>
              <p>{service.audience}</p>
              <span className="aside-label">本页能回答</span>
              {service.sections.map((section, index) => (
                <a href={`#section-${index + 1}`} key={section.heading}>
                  0{index + 1} · {section.heading}
                </a>
              ))}
              <Link href={`${flagshipPath}#invite`}>讨论一个真实任务 →</Link>
            </div>
          </aside>
        </div>

        <section className="related-section">
          <p className="section-kicker">Other service paths</p>
          <h2>也可以从另一个阶段开始</h2>
          <div className="related-links">
            {relatedServices.map((entry) => (
              <Link href={`${servicesPath}${entry.slug}/`} key={entry.slug}>
                <span>{entry.shortName}</span>
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
