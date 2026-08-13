import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SiteFooter, SiteHeader } from "../components";
import {
  flagshipPath,
  getOrigin,
  organizationEntityPath,
  startPath,
  wechatId,
  websiteEntityPath,
} from "../site";
import OpportunityCheck from "./OpportunityCheck";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${startPath}`;
  const title = "企业 AI 机会自检｜3 分钟判断是否值得咨询";
  const description =
    "用六项事实判断企业 AI 需求是否已经具备具体任务、内部负责人、现状证据、验收标准和明确时间。回答不上传、不保存。";

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
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function StartPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${startPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#page`,
    url: canonical,
    name: "企业 AI 机会自检",
    description: "用六项事实判断一个企业 AI 问题是否值得进入资格沟通。",
    inLanguage: "zh-CN",
    isPartOf: { "@id": `${origin}${websiteEntityPath}` },
    provider: { "@id": `${origin}${organizationEntityPath}` },
  };

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content" className="page">
        <header className="check-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 机会自检
          </nav>
          <div className="check-hero-grid">
            <div>
              <div className="eyebrow">3 分钟 · 六项事实 · 不收集数据</div>
              <h1>先判断有没有一个值得改的任务。</h1>
            </div>
            <p>
              这不是心理测试，也不是自动报价。它只帮你判断：现在应该约一次资格沟通，还是先把问题、负责人和证据补清楚。
            </p>
          </div>
        </header>

        <section className="check-layout" aria-label="企业 AI 机会资格自检">
          <aside>
            <span>判断顺序</span>
            <ol>
              <li>有没有具体任务</li>
              <li>有没有业务代价</li>
              <li>有没有内部负责人</li>
              <li>有没有可核对证据</li>
              <li>有没有验收责任</li>
              <li>有没有明确时间</li>
            </ol>
            <p>任何一项“不确定”都按“否”处理。不要为了得到好结果补答案。</p>
          </aside>
          <OpportunityCheck wechatId={wechatId} />
        </section>

        <section className="check-next">
          <div>
            <p className="section-kicker">需要完整准备</p>
            <h2>自检只负责判断入口，正式访谈仍要回到真实材料。</h2>
          </div>
          <a className="button-secondary" href="/enterprise-ai-discovery-brief-template.md" download>
            下载完整需求说明模板
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
