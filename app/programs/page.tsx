import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SiteFooter, SiteHeader } from "../components";
import { updatedAt } from "../content";
import { programs } from "../programs";
import { flagshipPath, getOrigin, programsPath, siteName } from "../site";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${programsPath}`;
  const title = "企业 AI 内训与管理层工作坊参考大纲";
  const description =
    "一日企业 AI 业务培训与三小时管理层 AI 决策工作坊参考大纲：会前准备、现场模块、带走成果和适用边界。";
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

export default async function ProgramsPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${programsPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        url: canonical,
        name: "企业 AI 内训与管理层工作坊参考大纲",
        dateModified: updatedAt,
        inLanguage: "zh-CN",
      },
      {
        "@type": "ItemList",
        itemListElement: programs.map((program, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: program.name,
          url: `${origin}${programsPath}${program.slug}/`,
          description: program.description,
        })),
      },
    ],
  };

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content" className="page">
        <header className="hub-hero compact">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 参考大纲
          </nav>
          <div className="eyebrow">Program outlines · 大纲服务于产出</div>
          <h1>先看会后留下什么，<br />再看课上讲什么。</h1>
          <p className="hub-answer">
            以下是两种常用合作形式的参考结构。正式方案会根据岗位任务、材料条件、信息边界和参与者基础调整，不用一份固定课件应付所有企业。
          </p>
        </header>

        <section className="program-list">
          {programs.map((program, index) => (
            <article key={program.slug}>
              <span>0{index + 1}</span>
              <div>
                <p className="section-kicker">{program.format}</p>
                <h2>{program.name}</h2>
                <p>{program.description}</p>
              </div>
              <div>
                <small>会后带走</small>
                <ul>{program.takeaways.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
                <Link href={`${programsPath}${program.slug}/`}>查看完整参考大纲 →</Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
