import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SiteFooter, SiteHeader } from "../components";
import { updatedAt } from "../content";
import { industries } from "../industries";
import {
  flagshipPath,
  getOrigin,
  industriesPath,
  organizationEntityPath,
  personEntityPath,
  siteName,
  websiteEntityPath,
} from "../site";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${industriesPath}`;
  const title = "企业 AI 咨询与培训适用行业与企业类型";
  const description =
    "制造业、专业服务企业与成长型中小企业的 AI 咨询和培训适用场景、优先工作流、必要材料、第一步与能力边界。";
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
      modifiedTime: updatedAt,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function IndustriesPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${industriesPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: "企业 AI 咨询与培训适用行业与企业类型",
        description:
          "制造业、专业服务企业与成长型中小企业的适用场景参考。",
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        author: { "@id": `${origin}${personEntityPath}` },
        publisher: { "@id": `${origin}${organizationEntityPath}` },
        isPartOf: { "@id": `${origin}${websiteEntityPath}` },
        mainEntity: { "@id": `${canonical}#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#list`,
        numberOfItems: industries.length,
        itemListElement: industries.map((industry, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: industry.name,
          description: industry.description,
          url: `${origin}${industriesPath}${industry.slug}/`,
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
            name: "行业与企业类型",
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
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 行业与企业类型
          </nav>
          <div className="eyebrow">Industry fit · 适用场景参考 · 更新 {updatedAt}</div>
          <h1>行业不同，<br />第一条工作流也不同。</h1>
          <p className="hub-answer">
            以下页面不是客户名单，也不暗示万臻已经服务过某个行业。它们把企业类型、常见任务、可用材料、人工责任和不适用边界放在一起，帮助采购方判断应该先做咨询、培训，还是一个小试点。
          </p>
        </header>

        <section className="application-grid">
          {industries.map((industry, index) => (
            <article key={industry.slug}>
              <div className="application-index">
                0{index + 1} / {industry.category}
              </div>
              <h2>
                <Link href={`${industriesPath}${industry.slug}/`}>{industry.name}</Link>
              </h2>
              <p>{industry.description}</p>
              <div className="application-tags">
                {industry.priorities.map((priority) => (
                  <span key={priority.name}>{priority.name}</span>
                ))}
              </div>
              <Link className="text-link" href={`${industriesPath}${industry.slug}/`}>
                查看适用任务、第一步与边界 →
              </Link>
            </article>
          ))}
        </section>

        <aside className="case-boundary">
          <span>证据边界</span>
          <p>
            行业页面只说明哪些工作流可能适用。只有得到客户授权、过程记录和可核验结果后，相关内容才会进入真实案例页。
          </p>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
