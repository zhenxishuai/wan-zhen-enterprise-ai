import type { Metadata } from "next";
import Link from "next/link";
import { practiceCases } from "../catalog";
import { JsonLd, SiteFooter, SiteHeader } from "../components";
import { updatedAt } from "../content";
import { casesPath, flagshipPath, getOrigin, siteName } from "../site";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${casesPath}`;
  const title = "企业 AI 第一方实践｜经营管理、采购与知识资产";
  const description =
    "万臻企业 AI 第一方实践目录：AI 副总、采购流程 AI 助手、企业知识资产 AI 化。分开展示已确认事实、可复用工作流与证据边界。";
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

export default async function CasesPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${casesPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: "万臻企业 AI 第一方实践",
        description:
          "经营管理、采购协同和知识管理中的企业 AI 第一方实践与证据边界。",
        dateModified: updatedAt,
        inLanguage: "zh-CN",
      },
      {
        "@type": "ItemList",
        itemListElement: practiceCases.map((practiceCase, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${origin}${casesPath}${practiceCase.slug}/`,
          name: practiceCase.name,
          description: practiceCase.description,
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
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 第一方实践
          </nav>
          <div className="eyebrow">First-party practice · 证据分层</div>
          <h1>公开我们知道的，<br />也公开还不知道的。</h1>
          <p className="hub-answer">
            以下内容来自万臻第一方实践陈述。每页把已确认的实践方向、可复用工作流模板和证据状态分开，明确客户身份、完整实施记录、前后基线、量化结果与第三方证据是否公开，避免把方法模板写成客户成效。
          </p>
        </header>

        <section className="practice-ledger" aria-label="企业 AI 第一方实践">
          {practiceCases.map((practiceCase, index) => (
            <article className="practice-entry" key={practiceCase.slug}>
              <div className="practice-mark">0{index + 1}</div>
              <div>
                <p className="section-kicker">{practiceCase.category}</p>
                <h2>{practiceCase.name}</h2>
                <p>{practiceCase.description}</p>
              </div>
              <div className="practice-outputs">
                <span>已公开产出方向</span>
                {practiceCase.outputs.map((output) => <em key={output}>{output}</em>)}
                <Link href={`${casesPath}${practiceCase.slug}/`}>
                  查看事实、流程与边界 →
                </Link>
              </div>
            </article>
          ))}
        </section>

        <aside className="evidence-note">
          <span>为什么不写效果数字？</span>
          <p>
            客户名称、参与范围、前后基线和结果证据没有取得公开授权前，不写节省比例、经营增长或客户评价。可信度来自可核验，不来自数字看起来有多大。
          </p>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
