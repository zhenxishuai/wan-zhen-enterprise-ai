import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../catalog";
import { JsonLd, SiteFooter, SiteHeader } from "../components";
import { updatedAt } from "../content";
import {
  applicationsPath,
  flagshipPath,
  getOrigin,
  programsPath,
  servicesPath,
  siteName,
} from "../site";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${servicesPath}`;
  const title = "企业 AI 咨询、培训与工作流试点｜服务目录";
  const description =
    "万臻企业 AI 服务目录：企业 AI 咨询、管理层 AI 决策工作坊、业务团队培训与 AI 工作流试点。查看适用对象、交付成果与能力边界。";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      title,
      description,
      url: canonical,
      siteName,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServicesPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${servicesPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: "万臻企业 AI 服务目录",
        description:
          "企业 AI 咨询、管理层工作坊、业务团队培训与工作流试点的适用对象、交付成果和边界。",
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        mainEntity: { "@id": `${canonical}#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#list`,
        numberOfItems: services.length,
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${origin}${servicesPath}${service.slug}/`,
          name: service.name,
          description: service.description,
        })),
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
        <header className="hub-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 服务
          </nav>
          <div className="eyebrow">Service catalog · 从判断到采用</div>
          <h1>不同阶段，<br />需要的不是同一种服务。</h1>
          <p className="hub-answer">
            方向不清时先做咨询诊断，管理层未对齐时先做决策工作坊，团队不会用时做业务培训，已经选定任务时进入工作流试点。每种服务都写清交付物与不包含的事项。
          </p>
        </header>

        <section className="catalog-list" aria-label="企业 AI 服务">
          {services.map((service, index) => (
            <article className="catalog-row" key={service.slug}>
              <div className="catalog-number">0{index + 1}</div>
              <div className="catalog-copy">
                <p className="section-kicker">{service.shortName}</p>
                <h2>
                  <Link href={`${servicesPath}${service.slug}/`}>{service.name}</Link>
                </h2>
                <p>{service.description}</p>
              </div>
              <div className="catalog-meta">
                <span>适合</span>
                <p>{service.audience}</p>
                <span>可形成</span>
                <ul>
                  {service.outcomes.slice(0, 3).map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <Link className="text-link" href={`${servicesPath}${service.slug}/`}>
                  查看服务判断与边界 →
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="path-split">
          <Link href={applicationsPath}>
            <span>按业务任务进入</span>
            <strong>销售、采购、知识与经营工作流 →</strong>
          </Link>
          <Link href={programsPath}>
            <span>按活动方案进入</span>
            <strong>一日内训与管理层工作坊大纲 →</strong>
          </Link>
        </section>

        <section className="hub-cta">
          <p>还不确定应该培训、咨询，还是先做试点？</p>
          <h2>先描述一个真实业务问题。</h2>
          <Link className="button-primary" href={`${flagshipPath}#invite`}>
            发起业务诊断
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
