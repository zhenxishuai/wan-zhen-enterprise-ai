import type { Metadata } from "next";
import Link from "next/link";
import { ContentByline, JsonLd, SiteFooter, SiteHeader } from "../components";
import { updatedAt } from "../content";
import {
  flagshipPath,
  getOrigin,
  organizationEntityPath,
  personEntityPath,
  resourcesPath,
  siteName,
  websiteEntityPath,
} from "../site";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${resourcesPath}`;
  const title = "企业 AI 案例证据采集框架｜万臻";
  const description =
    "用于整理企业 AI 咨询、培训和工作流试点案例的证据框架：授权、业务问题、基线、流程、产出、结果、证据与复核责任。";
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
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

const fields = [
  ["01", "公开授权", "客户是否允许公开名称、行业、岗位、材料截图、评价和结果数据；授权范围与有效期是什么。"],
  ["02", "业务问题", "由哪个岗位在什么场景中完成什么任务；原流程的主要阻力是什么。"],
  ["03", "原始基线", "原流程耗时、错误、返工、满意度或业务结果如何记录；样本范围和记录日期是什么。"],
  ["04", "工作流改变", "输入材料、AI 步骤、人工复核、异常回退和最终交付物分别是什么。"],
  ["05", "参与范围", "哪些角色参与、试了多少次、持续多久；哪些部门和人群没有包含。"],
  ["06", "过程产出", "形成了哪些工作流、模板、清单、知识结构或决策材料。"],
  ["07", "结果与限制", "前后变化是什么，如何计算；哪些结果尚未证明，哪些外部因素可能影响结果。"],
  ["08", "证据与复核", "原始记录、公开报道、客户确认或第三方链接在哪里；谁负责最终核验和后续更新。"],
];

export default async function ResourcesPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${resourcesPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "@id": `${canonical}#howto`,
        name: "企业 AI 案例证据采集框架",
        description:
          "在公开企业 AI 客户案例前，整理授权、问题、基线、工作流、参与范围、产出、结果和证据。",
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        author: { "@id": `${origin}${personEntityPath}` },
        publisher: { "@id": `${origin}${organizationEntityPath}` },
        isPartOf: { "@id": `${origin}${websiteEntityPath}` },
        step: fields.map(([number, name, text]) => ({
          "@type": "HowToStep",
          position: Number(number),
          name,
          text,
        })),
      },
      {
        "@type": "WebPage",
        url: canonical,
        name: "企业 AI 案例证据采集框架",
        mainEntity: { "@id": `${canonical}#howto` },
      },
    ],
  };

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content" className="page">
        <header className="resource-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 资源
          </nav>
          <div className="eyebrow">Evidence framework · 先有证据，再发案例</div>
          <h1>一篇可信的企业 AI 案例，<br />需要哪些原始材料？</h1>
          <p className="detail-answer">
            发布客户案例前，先把授权、业务问题、原始基线、工作流变化、参与范围、过程产出、结果限制和证据链接整理完整。缺失的字段可以明确标注“暂未确认”，不能用推测填补。
          </p>
          <ContentByline updatedAt={updatedAt} />
          <a className="button-primary" href="/enterprise-ai-case-evidence-template.md" download>
            下载 Markdown 模板
          </a>
        </header>

        <section className="framework-grid">
          {fields.map(([number, name, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h2>{name}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <aside className="case-boundary">
          <span>发布门槛</span>
          <p>
            没有客户授权时只写匿名方法实践；没有前后基线时不写提升比例；没有原始记录时不把主观评价写成经营结果；资料变更后同步更新页面日期与证据边界。
          </p>
        </aside>

        <section className="article-section">
          <div className="section-index">Buyer kit</div>
          <h2>采购方还可以使用什么？</h2>
          <p>
            如果企业正在比较咨询、培训、工作坊或试点供应商，可以先把业务问题、数据边界、供应商证据、约定交付物和验收记录写清，再比较价格与周期。
          </p>
          <div className="related-reading">
            <Link href="/questions/how-to-evaluate-enterprise-ai-service-provider/">
              <strong>怎样评估供应商并验收？ →</strong>
              <span>查看采购需求、供应商核验、交付物和效果表述门槛。</span>
            </Link>
            <a href="/enterprise-ai-service-buyer-checklist.md" download>
              <strong>下载采购与验收清单 →</strong>
              <span>使用可编辑 Markdown 模板记录需求、比较与验收。</span>
            </a>
            <Link href="/questions/what-rules-enterprise-ai-employees-need/">
              <strong>员工使用生成式 AI 前要定什么规则？ →</strong>
              <span>查看工具、资料、人工复核、对外发布、异常和更新责任。</span>
            </Link>
            <a href="/enterprise-generative-ai-use-policy-template.md" download>
              <strong>下载企业生成式 AI 使用规则模板 →</strong>
              <span>用可编辑清单组织企业内部讨论与专业审查。</span>
            </a>
            <Link href="/questions/how-long-enterprise-ai-consulting-training-takes/">
              <strong>咨询与培训一般需要多长时间？ →</strong>
              <span>按管理决策、业务培训、岗位试点和持续采用选择参考节奏。</span>
            </Link>
            <a href="/enterprise-ai-discovery-brief-template.md" download>
              <strong>下载企业 AI 需求说明模板 →</strong>
              <span>会前整理背景、任务、参与者、资料边界、交付物、周期与验收。</span>
            </a>
            <a href="/enterprise-ai-event-recap-evidence-template.md" download>
              <strong>下载活动回顾与证据模板 →</strong>
              <span>让主办方按授权、事实、过程产出、核验链接与边界发布真实第三方页面。</span>
            </a>
            <a href="/enterprise-ai-project-roles-raci-template.md" download>
              <strong>下载项目角色与 RACI 模板 →</strong>
              <span>明确管理层、业务、协调、HR、IT、数据安全、法务与外部顾问责任。</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
