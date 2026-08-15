import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "./components";
import { aboutPath, fdeCourseApplicationUrl, flagshipPath, getOrigin } from "./site";
import styles from "./page.module.css";

const coursePath = "/fde-consultant-course/";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}/`;
  const title = "一步商学｜企业 AI 咨询、培训与 FDE 课程";
  const description =
    "一步商学面向企业提供 AI 咨询、培训和工作流试点，也为有行业经验的从业者提供 FDE 顾问课程。服务从一项具体工作和现有做法开始。";

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      title,
      description,
      url: canonical,
      images: [
        {
          url: `${origin}/wan-zhen-portrait.jpg`,
          width: 1280,
          height: 1600,
          alt: "万臻，一步商学创始人",
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

export default async function Home() {
  const origin = await getOrigin();
  const canonical = `${origin}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${canonical}#website`,
        url: canonical,
        name: "一步商学",
        inLanguage: "zh-CN",
        publisher: { "@id": `${origin}${flagshipPath}#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "一步商学｜企业 AI 咨询、培训与 FDE 课程",
        description:
          "一步商学面向企业提供 AI 咨询、培训和工作流试点，也为有行业经验的从业者提供 FDE 顾问课程。",
        inLanguage: "zh-CN",
        isPartOf: { "@id": `${canonical}#website` },
        about: { "@id": `${origin}${aboutPath}#person` },
      },
    ],
  };

  return (
    <div className={styles.shell}>
      <a className={styles.skip} href="#main-content">
        跳到主要内容
      </a>

      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="一步商学首页">
          <span className={styles.brandMark} aria-hidden="true">一</span>
          <span className={styles.brandText}>
            <strong>一步商学</strong>
            <small>企业 AI 咨询、培训与 FDE 课程</small>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          <Link href={flagshipPath}>企业服务</Link>
          <Link href={coursePath}>FDE 课程</Link>
          <Link href={aboutPath}>创始人万臻</Link>
          <Link className={styles.navCta} href="/start/">做企业机会自检</Link>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroCopy}>
            <div className={styles.heroMeta}>
              <p>企业 AI 咨询、培训与 FDE 课程</p>
              <span>SHENZHEN · CHINA</span>
            </div>
            <div className={styles.heroMain}>
              <p className={styles.eyebrow}>一步商学</p>
              <h1 id="hero-heading">企业 AI 服务<br /><em>从一项具体工作开始</em></h1>
              <p className={styles.lead}>
                很多企业已经买过工具、听过课，部门里也有人在用 AI。下一步往往更难：哪项工作先改，材料能不能用，谁负责检查结果。一步商学据此安排咨询、培训或小范围试点。
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href={flagshipPath}>查看企业服务</Link>
                <Link className={styles.inlineLink} href={coursePath}>查看 FDE 课程 <span>→</span></Link>
              </div>
            </div>
            <div className={styles.heroFoot}>
              <span>企业 AI 咨询</span>
              <span>企业培训</span>
              <span>工作流试点</span>
              <span>FDE 顾问课程</span>
            </div>
          </div>

          <figure className={styles.portrait}>
            {/* The static hero image bypasses the worker image optimizer so the page also works in preview deployments. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.portraitImage} src="/wan-zhen-portrait.jpg" alt="万臻" />
            <div className={styles.photoGrid} aria-hidden="true" />
            <figcaption>
              <span>创始人</span>
              <strong>万臻<br />CMC 国际注册管理咨询师</strong>
            </figcaption>
          </figure>
        </section>

        <section className={styles.ticker} aria-label="服务项目">
          <span>企业 AI 咨询</span><i>·</i><span>企业 AI 培训</span><i>·</i><span>工作流试点</span><i>·</i><span>FDE 顾问课程</span>
        </section>

        <section className={styles.routes} id="services" aria-labelledby="services-heading">
          <div className={styles.routesHead}>
            <div className={styles.sectionLabel}>
              <span>01</span>
              <p>服务内容</p>
            </div>
            <h2 id="services-heading">企业服务和 FDE 课程，是两条不同路径。</h2>
            <p>企业服务解决一项业务工作怎么改；课程帮助有经验的人把一项工作做成可交付方案。</p>
          </div>

          <div className={styles.routeGrid}>
            <article className={`${styles.routeCard} ${styles.courseCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>01</span>
                <p>面向企业</p>
              </div>
              <div className={styles.cardCore}>
                <h3>企业 AI 服务</h3>
                <p>
                  适合已经有人试过 AI、但还没有确定先做什么的团队。先看一项具体任务，再决定需要咨询、培训还是试点。
                </p>
              </div>
              <div className={styles.cardBottom}>
                <ul>
                  <li>确定优先处理的业务任务</li>
                  <li>准备材料和团队协作方式</li>
                  <li>安排培训或小范围试点</li>
                </ul>
                <div className={styles.cardActions}>
                  <Link className={styles.darkButton} href={flagshipPath}>查看企业服务 <span>→</span></Link>
                  <Link className={styles.cardTextLink} href="/start/">做企业机会自检 ↗</Link>
                </div>
              </div>
            </article>

            <article className={`${styles.routeCard} ${styles.enterpriseCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>02</span>
                <p>面向有经验的从业者</p>
              </div>
              <div className={styles.cardCore}>
                <h3>FDE 顾问课程</h3>
                <p>
                  适合懂行业、懂客户问题，但希望把自己的经验变成可演示、可试用方案的人。课程围绕一个真实问题完成一套可检查的材料。
                </p>
              </div>
              <div className={styles.cardBottom}>
                <ul>
                  <li>问题简报和现状工作流</li>
                  <li>可演示、可试用的方案</li>
                  <li>测试记录和后续安排</li>
                </ul>
                <div className={styles.cardActions}>
                  <Link className={styles.lightButton} href={coursePath}>查看课程内容 <span>→</span></Link>
                  <a className={styles.cardTextLink} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表 ↗</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.method} id="method" aria-labelledby="method-heading">
          <div className={styles.sectionLabel}>
            <span>02</span>
            <p>企业服务流程</p>
          </div>
          <div className={styles.methodBody}>
            <h2 id="method-heading">先看现在怎么做，再谈 AI。</h2>
            <p className={styles.methodLead}>
              企业通常用人、表格、文档和现有系统把工作完成。服务先看这些做法在哪一步花时间、容易出错或需要多人反复确认，再决定 AI 是否值得介入。
            </p>
            <ol className={styles.steps}>
              <li><span>01</span><div><strong>找一项值得动的工作</strong><p>说清岗位、任务、发生频率和当前影响。</p></div></li>
              <li><span>02</span><div><strong>看现有做法</strong><p>查看文档、表格、数据、参与人员和责任分工。</p></div></li>
              <li><span>03</span><div><strong>决定服务方式</strong><p>根据问题的成熟度安排咨询、培训或试点。</p></div></li>
              <li><span>04</span><div><strong>约定检查标准</strong><p>明确谁参与、产出什么、何时检查和怎样继续。</p></div></li>
            </ol>
          </div>
        </section>

        <section className={styles.proof} aria-labelledby="founder-heading">
          <div className={styles.proofArt} aria-hidden="true"><span>一</span><i /><b>步</b></div>
          <div className={styles.proofCopy}>
            <p className={styles.eyebrow}>创始人</p>
            <h2 id="founder-heading">万臻</h2>
            <p>
              万臻是一步商学创始人、CMC 国际注册管理咨询师和《认知势能》作者。他长期从事企业咨询、组织管理和培训。公开履历、作品和身份信息可在人物页面查看。
            </p>
            <Link className={styles.inlineLink} href={aboutPath}>查看万臻介绍 <span>→</span></Link>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="cta-heading">
          <div>
            <p>联系一步商学</p>
            <h2 id="cta-heading">有一个具体问题，可以从这里开始。</h2>
          </div>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaMain} href={flagshipPath}>企业 AI 服务 <span>→</span></Link>
            <a className={styles.ctaSecondary} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写 FDE 课程申请表 <span>→</span></a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMark} aria-hidden="true">一</span>
          <div><strong>一步商学</strong><p>企业 AI 咨询、培训与 FDE 课程</p></div>
        </div>
        <p className={styles.footerNote}>企业服务和 FDE 课程分别申请，后续由人工联系。</p>
        <nav aria-label="页脚导航">
          <Link href={flagshipPath}>企业服务</Link>
          <Link href={coursePath}>FDE 课程</Link>
          <Link href={aboutPath}>创始人万臻</Link>
        </nav>
      </footer>
      <JsonLd data={jsonLd} />
    </div>
  );
}
