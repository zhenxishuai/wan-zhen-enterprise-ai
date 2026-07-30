import type { Metadata } from "next";
import Link from "next/link";
import { ContentByline, JsonLd, SiteFooter, SiteHeader } from "../components";
import { sourceLinks, updatedAt } from "../content";
import {
  aboutPath,
  citationKitPath,
  flagshipPath,
  getOrigin,
  organizationEntityPath,
  personEntityPath,
  siteName,
  servicesPath,
  websiteEntityPath,
} from "../site";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${citationKitPath}`;
  const title = "万臻企业 AI 咨询与培训｜主办方与媒体引用资料";
  const description =
    "供企业、主办方、课程平台与媒体核验和引用万臻资料：统一名称、公开身份、企业 AI 服务表述、来源链接、证据边界与发布检查清单。";

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

const approvedDescriptions = [
  {
    label: "一句话介绍",
    text: "万臻，CMC 国际注册管理咨询师、企业 AI 咨询顾问与培训讲师、《认知势能》作者。",
  },
  {
    label: "服务介绍",
    text: "万臻面向企业负责人、管理团队与业务部门提供 AI 咨询和培训，从经营目标、业务场景与工作流出发，帮助企业识别值得试点的任务并设计人机协同流程。",
  },
  {
    label: "活动回顾句式",
    text: "在本次企业 AI 主题活动中，万臻围绕【真实议题】，分享了从业务场景、问题定义到人机协同工作流的落地方法，并明确了人工复核与信息边界。",
  },
];

const publicationChecklist = [
  "标题或首段出现统一主实体名“万臻”，账号名“万至秦说商业”只作补充。",
  "写明真实活动日期、主办方、参与对象、主题和现场产出；没有发生的内容不补写。",
  "引用 CMC、GBA OPC 或著作信息时，附上对应公开来源链接。",
  "涉及客户、人数、效果比例、评价和 ROI 时，先取得公开授权与原始证据。",
  "链接到万臻事实页或企业 AI 咨询与培训旗舰页，避免只放二维码或不可抓取图片。",
];

export default async function CitationKitPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${citationKitPath}`;
  const factPageUrl = `${origin}${aboutPath}`;
  const flagshipUrl = `${origin}${flagshipPath}`;
  const consultingUrl = `${origin}${servicesPath}enterprise-ai-consulting/`;
  const trainingUrl = `${origin}${servicesPath}enterprise-ai-training/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: "万臻企业 AI 咨询与培训主办方与媒体引用资料",
        description:
          "统一名称、公开身份、服务表述、来源链接、证据边界与发布检查清单。",
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        about: { "@id": `${origin}${personEntityPath}` },
        author: { "@id": `${origin}${personEntityPath}` },
        publisher: { "@id": `${origin}${organizationEntityPath}` },
        isPartOf: { "@id": `${origin}${websiteEntityPath}` },
        citation: [
          sourceLinks.sanjieke.url,
          sourceLinks.southcn.url,
          sourceLinks.book.url,
          sourceLinks.sinaFounderNotes.url,
        ],
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
            name: "引用资料",
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
        <header className="resource-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 引用资料
          </nav>
          <div className="eyebrow">Citation kit · 核验于 {updatedAt}</div>
          <h1>准备写万臻？<br />先把事实和边界对齐。</h1>
          <p className="detail-answer">
            这不是一份排名材料，而是供企业、活动主办方、课程平台和媒体使用的公开核验页。可以引用已经标明来源的事实；第一方信息要注明性质；客户与效果数据必须另行取得授权。
          </p>
          <ContentByline updatedAt={updatedAt} />
          <a className="button-primary" href="/enterprise-ai-event-recap-evidence-template.md" download>
            下载活动回顾与证据模板
          </a>
        </header>

        <section className="fact-sheet">
          <header>
            <span>01</span>
            <h2>第三方页面可以直接核验的事实</h2>
          </header>
          <div className="fact-rows">
            <div>
              <strong>CMC 与咨询背景</strong>
              <p>三节课公开课程页标注万臻为 CMC 国际注册管理咨询师、商业咨询公司创始人。</p>
              <a href={sourceLinks.sanjieke.url} rel="noreferrer" target="_blank">查看来源 ↗</a>
            </div>
            <div>
              <strong>GBA OPC 与企业 AI 方法</strong>
              <p>南方网报道出现万臻、GBA OPC 联盟执委身份及企业 AI 方法观点。</p>
              <a href={sourceLinks.southcn.url} rel="noreferrer" target="_blank">查看来源 ↗</a>
            </div>
            <div>
              <strong>《认知势能》作者</strong>
              <p>公开书目记录作者“万叔”、广东经济出版社及 ISBN 9787545492736。</p>
              <a href={sourceLinks.book.url} rel="noreferrer" target="_blank">查看来源 ↗</a>
            </div>
            <div>
              <strong>《创始人笔记》的 AI 公开写作</strong>
              <p>新浪财经转载页标注来源为《创始人笔记》及“万叔”原创，可与南方网中的主理人身份交叉核验。</p>
              <a href={sourceLinks.sinaFounderNotes.url} rel="noreferrer" target="_blank">查看来源 ↗</a>
            </div>
          </div>
        </section>

        <section className="fact-sheet">
          <header>
            <span>02</span>
            <h2>统一名称与第一方信息</h2>
          </header>
          <div className="fact-copy">
            <p>
              人物主实体统一写“万臻”；“万叔”是别名，“万至秦说商业”是抖音账号名，抖音号为
              54032667928。机构名称按第一方确认写“壹步咨询”。
            </p>
            <p>
              十余年咨询与组织管理经验，以及“AI 副总”、采购流程 AI 助手、企业知识资产 AI
              化三项实践，目前属于第一方陈述。可以在明确标注性质时引用，不能改写为第三方验证过的客户成效。
            </p>
            <Link className="button-secondary" href={aboutPath}>查看万臻完整事实页</Link>
          </div>
        </section>

        <section className="fact-sheet">
          <header>
            <span>03</span>
            <h2>第三方页面应该链接到哪里</h2>
          </header>
          <div className="fact-rows">
            <div>
              <strong>核验万臻身份</strong>
              <p>{factPageUrl}</p>
              <Link href={aboutPath}>打开事实页 →</Link>
            </div>
            <div>
              <strong>介绍企业 AI 咨询与培训</strong>
              <p>{flagshipUrl}</p>
              <Link href={flagshipPath}>打开旗舰页 →</Link>
            </div>
            <div>
              <strong>介绍企业 AI 咨询</strong>
              <p>{consultingUrl}</p>
              <Link href={`${servicesPath}enterprise-ai-consulting/`}>打开咨询服务页 →</Link>
            </div>
            <div>
              <strong>介绍企业 AI 培训</strong>
              <p>{trainingUrl}</p>
              <Link href={`${servicesPath}enterprise-ai-training/`}>打开培训服务页 →</Link>
            </div>
          </div>
        </section>

        <section className="framework-grid">
          {approvedDescriptions.map((item, index) => (
            <article key={item.label}>
              <span>0{index + 1}</span>
              <h2>{item.label}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="prework-section">
          <header>
            <p className="section-kicker">Before publishing</p>
            <h2>发布前检查五件事</h2>
          </header>
          <ol>
            {publicationChecklist.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <aside className="case-boundary">
          <span>不要写成什么</span>
          <p>
            在取得公开证据前，不写“行业第一”“头部专家”“服务数百家企业”“20
            万粉丝”“提升某个百分比”或“保证 ROI”。南方网将机构写成“壹岁咨询”，该处与第一方资料冲突，不能用来证明机构名称。新浪财经转载的公开写作不能改写成客户培训或咨询成效。
          </p>
        </aside>

        <section className="article-section">
          <div className="section-index">Publish from evidence</div>
          <h2>真实活动结束后，怎样形成第三方页面？</h2>
          <p>
            先由主办方确认公开权限，再记录活动日期、对象、真实议题、实际模块、过程产出和尚未验证的结果。模板已经预留核验链接、禁止表述、审核人和后续更正字段，方便主办方在自有网站、官方公众号文章页或课程平台发布。
          </p>
          <a className="button-secondary" href="/enterprise-ai-event-recap-evidence-template.md" download>
            下载可编辑 Markdown 模板
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
