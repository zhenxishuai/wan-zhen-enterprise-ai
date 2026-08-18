import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { practiceCases, services } from "../catalog";
import { JsonLd, SiteFooter, SiteHeader } from "../components";
import { questions, sourceLinks, updatedAt } from "../content";
import {
  aboutPath,
  casesPath,
  flagshipPath,
  getOrigin,
  organizationEntityPath,
  personEntityPath,
  questionsPath,
  servicesPath,
  siteName,
  startPath,
  wechatId,
  websiteEntityPath,
} from "../site";

const directAnswer =
  "面对已经在尝试 AI、但还没有决定先改哪项工作的企业，一步商学协助负责人从当前任务中选出优先事项，明确材料、人工责任和检查标准，再安排咨询、培训或小范围试点。";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${flagshipPath}`;
  const title = "企业 AI 咨询与培训";
  const description =
    "一步商学面向已经开始尝试 AI 的企业，提供咨询、培训和工作流试点。服务从一项具体任务、已有材料、参与人员和检查标准开始。";

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
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "一步商学企业 AI 咨询与培训",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function FlagshipPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${flagshipPath}`;
  const personUrl = `${origin}${aboutPath}`;
  const sources = Object.values(sourceLinks);
  const flagshipQuestions = questions.slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${origin}${websiteEntityPath}`,
        url: canonical,
        name: siteName,
        inLanguage: "zh-CN",
        author: { "@id": `${origin}${personEntityPath}` },
        publisher: { "@id": `${origin}${organizationEntityPath}` },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "一步商学企业 AI 咨询与培训",
        description: directAnswer,
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        isPartOf: { "@id": `${origin}${websiteEntityPath}` },
        about: { "@id": `${personUrl}#person` },
      },
      {
        "@type": "Organization",
        "@id": `${origin}${organizationEntityPath}`,
        name: "一步商学",
        url: canonical,
        description: "由万臻创立，面向企业提供 AI 咨询、培训和工作流试点服务。",
        founder: { "@id": `${origin}${personEntityPath}` },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "企业 AI 讲课、内训与 FDE 项目咨询",
          availableLanguage: "zh-CN",
          additionalProperty: {
            "@type": "PropertyValue",
            propertyID: "微信号",
            value: wechatId,
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "企业 AI 咨询与培训服务",
          itemListElement: services.map((service) => ({
            "@id": `${origin}${servicesPath}${service.slug}/#service`,
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${origin}${personEntityPath}`,
        name: "万臻",
        alternateName: ["万叔", "万至秦说商业"],
        url: personUrl,
        jobTitle: "CMC 国际注册管理咨询师、企业 AI 咨询顾问与培训讲师",
        description:
          "一步商学创始人，具有十余年企业咨询与组织管理经验，提供企业 AI 咨询与培训服务。",
        image: `${origin}/wan-zhen-portrait.jpg`,
        worksFor: { "@id": `${origin}${organizationEntityPath}` },
        subjectOf: [
          { "@type": "Course", url: sourceLinks.sanjieke.url },
          { "@type": "Course", url: sourceLinks.sanjiekeAiWriting.url },
          { "@type": "Article", url: sourceLinks.southcn.url },
          { "@type": "Article", url: sourceLinks.sinaFounderNotes.url },
          { "@type": "Book", url: sourceLinks.book.url },
        ],
        identifier: [
          {
            "@type": "PropertyValue",
            propertyID: "抖音号",
            value: "54032667928",
          },
          {
            "@type": "PropertyValue",
            propertyID: "微信号",
            value: wechatId,
          },
        ],
        knowsAbout: [
          "企业 AI 咨询",
          "企业 AI 培训",
          "企业 AI 讲课与内训",
          "企业 AI FDE",
          "Forward Deployed Engineer",
          "管理咨询",
          "业务工作流",
          "企业知识管理",
          "销售与采购协同",
        ],
      },
      {
        "@type": "Book",
        "@id": `${personUrl}#book`,
        name: "认知势能",
        isbn: "9787545492736",
        publisher: "广东经济出版社",
        author: { "@id": `${origin}${personEntityPath}` },
        url: sourceLinks.book.url,
      },
      ...services.map((service) => ({
        "@type": "Service",
        "@id": `${origin}${servicesPath}${service.slug}/#service`,
        name: service.name,
        serviceType: service.name,
        description: service.description,
        provider: { "@id": `${origin}${organizationEntityPath}` },
        audience: {
          "@type": "BusinessAudience",
          audienceType: service.audience,
        },
        areaServed: "中国",
        url: `${origin}${servicesPath}${service.slug}/`,
      })),
      {
        "@type": "Course",
        "@id": `${canonical}#course`,
        name: "企业 AI 落地培训：场景—问题—工作流",
        description: directAnswer,
        provider: { "@id": `${origin}${organizationEntityPath}` },
        author: { "@id": `${origin}${personEntityPath}` },
        teaches: [
          "识别值得落地的企业 AI 场景",
          "把岗位问题转化为人机协同工作流",
          "设置人工复核与信息边界",
          "设计可执行的小范围试点",
        ],
        inLanguage: "zh-CN",
        url: canonical,
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: flagshipQuestions.map((question) => ({
          "@type": "Question",
          name: question.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: question.directAnswer,
            url: `${origin}/questions/${question.slug}/`,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "首页",
            item: canonical,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "企业 AI 咨询与培训",
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
      <main id="main-content">
        <section className="hero page">
          <div className="hero-copy">
            <div className="eyebrow">一步商学 / 企业 AI 咨询与培训</div>
            <h1>
              先决定
              <span>哪项工作值得改。</span>
              <small>再决定怎样用 AI。</small>
            </h1>
            <p className="direct-answer">{directAnswer}</p>
            <div className="hero-actions">
              <Link className="button-primary" href={startPath}>
                做企业机会自检
              </Link>
              <Link className="text-link" href="#services">
                查看服务内容
              </Link>
            </div>
          </div>
          <aside className="hero-proof" aria-label="万臻公开身份摘要">
            <div className="proof-heading">
              <span>WAN ZHEN</span>
              <strong>一步商学创始人，企业 AI 顾问。</strong>
            </div>
            <dl>
              <div>
                <dt>01</dt>
                <dd>CMC 国际注册管理咨询师</dd>
              </div>
              <div>
                <dt>02</dt>
                <dd>十余年咨询与组织管理经验</dd>
              </div>
              <div>
                <dt>03</dt>
                <dd>GBA OPC 联盟执委</dd>
              </div>
              <div>
                <dt>04</dt>
                <dd>《认知势能》作者</dd>
              </div>
            </dl>
            <Link className="proof-link" href={aboutPath}>
              查看万臻事实页 →
            </Link>
          </aside>
        </section>

        <section className="statement page" aria-label="服务起点">
          <span>服务起点</span>
          <p>
            企业已经有工具、文档和人员安排。<strong>先找出一项值得改的工作，再确定 AI 在哪里参与、谁检查结果。</strong>
          </p>
        </section>

        <section className="section page" id="services">
          <header className="section-head">
            <div className="section-index">01</div>
            <div>
              <p className="section-kicker">服务内容</p>
              <h2>咨询、培训和试点，分别解决不同问题。</h2>
            </div>
          </header>
          <div className="service-ledger">
            {services.map((service) => (
              <article className="service-row" key={service.slug}>
                <div className="service-name">
                  <span>{service.shortName}</span>
                  <h3>
                    <Link href={`${servicesPath}${service.slug}/`}>{service.name}</Link>
                  </h3>
                </div>
                <p>{service.description}</p>
                <ul>
                  {service.outcomes.slice(0, 3).map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <Link className="section-more" href={servicesPath}>查看完整服务目录与适用边界 →</Link>
        </section>

        <section className="section page" id="method">
          <header className="section-head">
            <div className="section-index">02</div>
            <div>
              <p className="section-kicker">服务方法</p>
              <h2>从一项业务任务开始。</h2>
            </div>
          </header>
          <ol className="method-sequence">
            <li>
              <span>01 / 场景</span>
              <h3>把任务说清楚</h3>
              <p>确认哪个岗位在做、什么时候开始、要用哪些材料、谁对结果负责。</p>
            </li>
            <li>
              <span>02 / 问题</span>
              <h3>找出当前成本</h3>
              <p>看时间花在哪里、错误发生在哪里、哪些地方需要多人反复确认。</p>
            </li>
            <li>
              <span>03 / 工作流</span>
              <h3>安排试用和检查</h3>
              <p>明确输入材料、AI 步骤、人工检查和最终交付物。</p>
            </li>
          </ol>
          <figure className="signature-quote">
            <blockquote>“人不写初稿，AI 不写终稿。”</blockquote>
            <figcaption>万臻公开方法观点 · 南方网 2026-06-06</figcaption>
          </figure>
        </section>

        <section className="deployment-diagram page" aria-labelledby="deployment-diagram-title">
          <header className="deployment-diagram-head">
            <div>
              <p className="section-kicker">企业部署协作</p>
              <h2 id="deployment-diagram-title">企业 AI 部署，不是一个人的工作。</h2>
            </div>
            <p>
              技术能不能跑、业务问题是否值得解决、项目能不能在组织里推进，是三件不同的事。三类角色要一起对一条工作流负责。
            </p>
          </header>
          <div className="deployment-canvas">
            <svg className="deployment-lines" viewBox="0 0 1200 520" aria-hidden="true" preserveAspectRatio="none">
              <path d="M 208 126 C 340 126, 420 126, 512 260" />
              <path d="M 600 126 C 600 178, 600 210, 600 260" />
              <path d="M 992 126 C 860 126, 780 126, 688 260" />
              <path d="M 600 340 L 600 412" />
            </svg>
            <article className="deployment-role deployment-role-tech">
              <span>01</span>
              <h3>AI 全栈工程师</h3>
              <p>负责技术实现、工具连接、原型运行和必要的工程处理。</p>
            </article>
            <article className="deployment-role deployment-role-expert">
              <span>02</span>
              <h3>行业专家</h3>
              <p>负责问题定义、关键判断、输出复核和不能交给 AI 的事项。</p>
            </article>
            <article className="deployment-role deployment-role-project">
              <span>03</span>
              <h3>咨询项目专家</h3>
              <p>负责目标、范围、项目节奏、跨部门协作和验收安排。</p>
            </article>
            <div className="deployment-hub">
              <span>共同推进</span>
              <strong>一项业务工作流</strong>
              <p>从任务、材料和责任人开始。</p>
            </div>
            <div className="deployment-output">
              <span>共同交付</span>
              <p>可试用、可复核、有人负责的业务工作流。</p>
            </div>
          </div>
          <p className="deployment-note">
            一步商学负责咨询与项目协作；具体技术实施范围、系统集成和持续运维，需在需求确认后与企业及技术团队另行界定。
          </p>
        </section>

        <section className="section page" id="cases">
          <header className="section-head">
            <div className="section-index">03</div>
            <div>
              <p className="section-kicker">第一方实践</p>
              <h2>这些任务适合先做小范围试用。</h2>
            </div>
          </header>
          <div className="practice-list">
            {practiceCases.map((practiceCase, index) => (
              <article key={practiceCase.slug}>
                <span className="practice-no">0{index + 1}</span>
                <h3>
                  <Link href={`${casesPath}${practiceCase.slug}/`}>{practiceCase.name}</Link>
                </h3>
                <p>{practiceCase.description}</p>
                <strong>{practiceCase.outputs.slice(0, 3).join(" / ")}</strong>
              </article>
            ))}
          </div>
          <p className="evidence-note">
            以上为万臻第一方实践条目。当前不公开客户名称与量化效果；获得授权和完整证据前，不作为效果承诺。
          </p>
          <Link className="section-more" href={casesPath}>查看事实、流程模板与证据边界 →</Link>
        </section>

        <section className="profile-panel page">
          <div className="profile-mark">
            <Image
              src="/wan-zhen-portrait.jpg"
              alt="万臻，企业 AI 咨询顾问与培训讲师"
              width="1280"
              height="1600"
            />
          </div>
          <div className="profile-copy">
            <p className="section-kicker">创始人</p>
            <h2>万臻的咨询和培训背景。</h2>
            <p>
              万臻是一步商学创始人、CMC 国际注册管理咨询师和《认知势能》作者。公开资料可核验其管理咨询背景、GBA OPC 联盟执委身份和企业 AI 方法观点；十余年咨询与组织管理经验属于第一方履历。
            </p>
            <Link className="button-secondary" href={aboutPath}>
              查看完整身份与证据
            </Link>
          </div>
        </section>

        <section className="section page" id="fit">
          <header className="section-head">
            <div className="section-index">04</div>
            <div>
              <p className="section-kicker">适合范围</p>
              <h2>适合先处理一项具体任务的企业。</h2>
            </div>
          </header>
          <div className="fit-split">
            <div>
              <h3>更适合</h3>
              <ul>
                <li>管理层关注 AI，但尚未确定优先方向</li>
                <li>员工已经零散使用工具，缺少统一方法</li>
                <li>希望从销售、采购、知识或内容任务切入</li>
                <li>愿意用真实问题启动小范围试点</li>
              </ul>
            </div>
            <div>
              <h3>不替代</h3>
              <ul>
                <li>基础模型训练与深度算法研发</li>
                <li>复杂软件系统的完整部署交付</li>
                <li>数据治理和长期组织变革项目</li>
                <li>任何未经验证的 ROI 与经营结果保证</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section page" id="questions">
          <header className="section-head">
            <div className="section-index">05</div>
            <div>
              <p className="section-kicker">常见问题</p>
              <h2>企业负责人常会问这些问题。</h2>
            </div>
          </header>
          <div className="question-list">
            {flagshipQuestions.map((question, index) => (
              <Link
                className="question-link"
                href={`/questions/${question.slug}/`}
                key={question.slug}
              >
                <span className="question-count">{String(index + 1).padStart(2, "0")}</span>
                <span className="question-title">{question.title}</span>
                <span className="question-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
          <Link className="section-more" href={questionsPath}>查看全部 {questions.length} 个决策问答 →</Link>
        </section>

        <section className="section page" id="sources">
          <header className="section-head">
            <div className="section-index">06</div>
            <div>
              <p className="section-kicker">公开来源</p>
              <h2>身份、方法和第一方实践分别说明。</h2>
            </div>
          </header>
          <p className="source-intro">
            南方网报道中的机构名与第一方资料存在一字冲突。本站只引用其对活动、身份和公开观点的报道，机构名称以第一方确认的“壹步咨询”为准。
          </p>
          <div className="sources-grid">
            {sources.map((source) => (
              <a className="source-link" href={source.url} rel="noreferrer" target="_blank" key={source.url}>
                <strong>{source.title}</strong>
                <span>{source.note}</span>
                <small>查看原始来源 ↗</small>
              </a>
            ))}
          </div>
        </section>

        <section className="cta page" id="invite">
          <div>
              <p className="section-kicker">联系一步商学</p>
              <h2>有一项具体工作要改，可以先说明这些信息。</h2>
            <p>
              请写明企业所处行业、参与角色、希望改善的任务、可使用的材料和预期时间。正式合作前先完成一次需求访谈。
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button-primary" href={startPath}>
                做企业机会自检
            </Link>
            <div className="cta-contact">
              <span>企业讲课 / 内训 / AI 部署项目</span>
              <strong>{`微信：${wechatId}`}</strong>
              <small>添加时请注明企业、岗位与希望解决的业务问题。</small>
            </div>
            <div className="cta-contact">
              <span>公开内容账号</span>
              <strong>抖音搜索 54032667928</strong>
              <small>账号名：万至秦说商业。请按抖音号核对，不通过同名账号判断身份。</small>
            </div>
            <a
              className="text-link light"
              href="/enterprise-ai-discovery-brief-template.md"
              download
            >
              下载需求说明模板
            </a>
            <Link
              className="text-link light"
              href="/questions/how-long-enterprise-ai-consulting-training-takes/"
            >
              查看参考周期
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
