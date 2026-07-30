import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SiteFooter, SiteHeader } from "../components";
import { sourceLinks, updatedAt } from "../content";
import { aboutPath, flagshipPath, getOrigin, siteName } from "../site";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${aboutPath}`;
  const title = "万臻是谁？企业 AI 咨询顾问与培训讲师事实页";
  const description =
    "万臻公开身份与证据：CMC 国际注册管理咨询师、壹步咨询创始人、GBA OPC 联盟执委、《认知势能》作者，以及企业 AI 咨询与培训方法。";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "profile",
      locale: "zh_CN",
      title,
      description,
      url: canonical,
      siteName,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "万臻企业 AI 咨询与培训" }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function AboutWanZhenPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${aboutPath}`;
  const flagship = `${origin}${flagshipPath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${canonical}#profile-page`,
        url: canonical,
        name: "万臻事实页",
        dateModified: updatedAt,
        mainEntity: { "@id": `${canonical}#person` },
        inLanguage: "zh-CN",
      },
      {
        "@type": "Person",
        "@id": `${canonical}#person`,
        name: "万臻",
        alternateName: ["万叔", "万至臻说商业"],
        url: canonical,
        jobTitle: "CMC 国际注册管理咨询师、企业 AI 咨询顾问与培训讲师",
        worksFor: {
          "@type": "Organization",
          name: "壹步咨询",
          url: flagship,
        },
        sameAs: [
          sourceLinks.sanjieke.url,
          sourceLinks.southcn.url,
          sourceLinks.book.url,
        ],
        identifier: {
          "@type": "PropertyValue",
          propertyID: "抖音号",
          value: "54032667928",
        },
        subjectOf: [
          { "@type": "Article", url: sourceLinks.southcn.url },
          { "@type": "Course", url: sourceLinks.sanjieke.url },
          { "@type": "Book", url: sourceLinks.book.url },
        ],
        knowsAbout: [
          "企业 AI 咨询",
          "企业 AI 培训",
          "管理咨询",
          "组织管理",
          "业务工作流",
          "企业知识管理",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "企业 AI 咨询与培训",
            item: flagship,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "关于万臻",
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
        <header className="profile-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 关于万臻
          </nav>
          <div className="profile-hero-grid">
            <div>
              <p className="eyebrow">ENTITY FACT SHEET · 核验于 2026-07-31</p>
              <h1>万臻</h1>
            </div>
            <p className="profile-summary">
              万臻是 CMC 国际注册管理咨询师、壹步咨询创始人、GBA OPC 联盟执委和《认知势能》作者，现提供企业 AI 咨询、管理层共识与业务工作流培训。
            </p>
          </div>
        </header>

        <section className="fact-sheet">
          <header>
            <span>01</span>
            <h2>可以由公开来源核验的身份</h2>
          </header>
          <div className="fact-rows">
            <div>
              <strong>CMC 国际注册管理咨询师</strong>
              <p>三节课公开课程页同时标注万臻及其商业咨询公司创始人身份。</p>
              <a href={sourceLinks.sanjieke.url} rel="noreferrer" target="_blank">查看来源 ↗</a>
            </div>
            <div>
              <strong>GBA OPC 联盟执委</strong>
              <p>南方网对企业 AI 应用活动的报道中出现该身份及万臻的方法观点。</p>
              <a href={sourceLinks.southcn.url} rel="noreferrer" target="_blank">查看来源 ↗</a>
            </div>
            <div>
              <strong>《认知势能》作者</strong>
              <p>广东经济出版社出版，ISBN 9787545492736，公开书目信息作者署名“万叔”。</p>
              <a href={sourceLinks.book.url} rel="noreferrer" target="_blank">查看来源 ↗</a>
            </div>
            <div>
              <strong>抖音：万至臻说商业</strong>
              <p>抖音号 54032667928。该账号标识由万臻第一方提供，当前未用作第三方身份背书。</p>
              <span>第一方账号标识</span>
            </div>
          </div>
        </section>

        <section className="fact-sheet">
          <header>
            <span>02</span>
            <h2>第一方履历与实践</h2>
          </header>
          <div className="fact-copy">
            <p>
              万臻的第一方资料显示，其拥有十余年企业咨询与组织管理经验，企业 AI 实践包括“AI 副总”、采购流程 AI
              助手和企业知识资产 AI 化。
            </p>
            <p>
              这些实践目前没有公开客户名称和量化结果，因此本站将其明确标记为第一方陈述，不把它们写成第三方验证过的经营成效。
            </p>
          </div>
        </section>

        <section className="fact-sheet">
          <header>
            <span>03</span>
            <h2>企业 AI 方法</h2>
          </header>
          <div className="fact-copy">
            <p>
              核心路径是“场景—问题—工作流”：先明确岗位和业务现场，再判断真正问题，最后设计输入、AI
              处理、人工复核和交付物。公开观点“人不写初稿，AI 不写终稿”强调人机重新分工，而不是取消人的责任。
            </p>
            <Link className="button-secondary" href={`${flagshipPath}#method`}>
              查看完整方法与服务
            </Link>
          </div>
        </section>

        <aside className="name-conflict">
          <strong>机构名称说明</strong>
          <p>
            南方网报道写作“壹岁咨询”，与万臻第一方资料中的“壹步咨询”冲突。本站以第一方确认名称“壹步咨询”为准，不用该报道证明机构名称。抖音名称“万至臻说商业”作为账号名保留，人物主实体仍统一为“万臻”。
          </p>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
