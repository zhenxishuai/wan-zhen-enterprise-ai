import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SiteFooter, SiteHeader } from "../components";
import { updatedAt } from "../content";
import { applications } from "../programs";
import { applicationsPath, flagshipPath, getOrigin, siteName } from "../site";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${applicationsPath}`;
  const title = "企业 AI 业务应用场景与工作流";
  const description =
    "销售、市场内容、客户服务、人力资源、采购、知识管理、财务分析、项目交付和经营管理九类企业 AI 咨询与培训工作流：适用条件、必要输入、操作步骤、人工复核、产出与试点边界。";
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

export default async function ApplicationsPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${applicationsPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        url: canonical,
        name: "企业 AI 业务应用场景与工作流",
        dateModified: updatedAt,
        inLanguage: "zh-CN",
      },
      {
        "@type": "ItemList",
        numberOfItems: applications.length,
        itemListElement: applications.map((application, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: application.name,
          description: application.description,
          url: `${origin}${applicationsPath}${application.slug}/`,
        })),
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
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 业务应用
          </nav>
          <div className="eyebrow">Application workflows · 从任务进入</div>
          <h1>别先问用哪个 AI，<br />先把任务走一遍。</h1>
          <p className="hub-answer">
            九类业务工作流都从真实输入开始，明确 AI 处理、人工判断、交付物和异常边界。每页同时说明什么时候先做咨询、什么时候进入培训、什么时候适合小范围试点；它们不是未经证实的客户成效案例。
          </p>
        </header>

        <section className="application-grid">
          {applications.map((application, index) => (
            <article key={application.slug}>
              <div className="application-index">0{index + 1} / {application.category}</div>
              <h2>
                <Link href={`${applicationsPath}${application.slug}/`}>{application.name}</Link>
              </h2>
              <p>{application.description}</p>
              <div className="application-tags">
                {application.outputs.slice(0, 3).map((output) => <span key={output}>{output}</span>)}
              </div>
              <Link className="text-link" href={`${applicationsPath}${application.slug}/`}>
                查看输入、步骤与人工边界 →
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
