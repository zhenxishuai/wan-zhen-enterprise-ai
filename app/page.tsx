import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "./components";
import {
  aboutPath,
  experienceProductizationPath,
  flagshipPath,
  getOrigin,
} from "./site";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}/`;
  const title = "一步商学｜行业经验 AI 产品化与企业 AI 部署";
  const description =
    "一步商学面向行业专家开设行业经验 AI 产品化课程，也为企业提供 AI 部署相关的咨询、培训和工作流试点。";

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
        name: "一步商学｜行业经验 AI 产品化与企业 AI 部署",
        description:
          "面向行业专家的行业经验 AI 产品化课程，以及面向企业的 AI 部署相关服务。",
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
            <small>行业经验 AI 产品化与企业 AI 部署</small>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          <Link href={experienceProductizationPath}>行业专家课程</Link>
          <Link href={flagshipPath}>企业服务</Link>
          <Link href={aboutPath}>创始人万臻</Link>
          <Link className={styles.navCta} href="/start/">做企业机会自检</Link>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroCopy}>
            <div className={styles.heroMeta}>
              <p>面向行业专家的首期课程</p>
              <span>2026 · SHENZHEN</span>
            </div>
            <div className={styles.heroMain}>
              <p className={styles.eyebrow}>一步商学</p>
              <h1 id="hero-heading">把十年以上行业经验<br /><em>做成 AI 服务产品</em></h1>
              <p className={styles.lead}>
                这门课面向在一个行业或职能里工作十年以上的人。用已经反复解决过的问题，做出第一张产品卡、一个可测试的原型和一套能交给客户看的服务说明。
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href={experienceProductizationPath}>查看首期课程</Link>
                <Link className={styles.inlineLink} href={flagshipPath}>企业 AI 服务 <span>→</span></Link>
              </div>
            </div>
            <div className={styles.heroFoot}>
              <span>行业专家</span>
              <span>99 元三天小课</span>
              <span>四周实战营</span>
              <span>企业 AI 部署</span>
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

        <section className={styles.ticker} aria-label="主要服务">
          <span>行业经验 AI 产品化</span><i>·</i><span>企业 AI 咨询</span><i>·</i><span>企业培训</span><i>·</i><span>工作流试点</span>
        </section>

        <section className={styles.routes} id="services" aria-labelledby="services-heading">
          <div className={styles.routesHead}>
            <div className={styles.sectionLabel}>
              <span>01</span>
              <p>两条路径</p>
            </div>
            <h2 id="services-heading">一个面向行业专家，一个面向企业。</h2>
            <p>行业专家把经验做成可部署的服务产品；企业通过三类角色协作，把一项业务工作真正跑起来。</p>
          </div>

          <div className={styles.routeGrid}>
            <article className={`${styles.routeCard} ${styles.courseCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>01</span>
                <p>面向行业专家</p>
              </div>
              <div className={styles.cardCore}>
                <h3>行业经验 AI 产品化</h3>
                <p>
                  适合有十年以上行业或职能经验，手上有反复解决的问题，也愿意找真实用户测试的人。
                </p>
              </div>
              <div className={styles.cardBottom}>
                <ul>
                  <li>三天完成第一张 AI 服务产品卡</li>
                  <li>四周做出原型、测试、报价和交付说明</li>
                  <li>用真实反馈决定继续、修改或停止</li>
                </ul>
                <div className={styles.cardActions}>
                  <Link className={styles.darkButton} href={experienceProductizationPath}>查看首期课程 <span>→</span></Link>
                </div>
              </div>
            </article>

            <article className={`${styles.routeCard} ${styles.enterpriseCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>02</span>
                <p>面向企业</p>
              </div>
              <div className={styles.cardCore}>
                <h3>企业 AI 部署服务</h3>
                <p>
                  从一项具体工作开始，确定问题、材料、责任人和检查标准，再安排咨询、培训或小范围试点。
                </p>
              </div>
              <div className={styles.cardBottom}>
                <ul>
                  <li>确定优先处理的业务任务</li>
                  <li>组织行业判断与技术实现</li>
                  <li>安排试用、复核和后续协作</li>
                </ul>
                <div className={styles.cardActions}>
                  <Link className={styles.lightButton} href={flagshipPath}>查看企业服务 <span>→</span></Link>
                  <Link className={styles.cardTextLink} href="/start/">做企业机会自检 ↗</Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.method} id="method" aria-labelledby="method-heading">
          <div className={styles.sectionLabel}>
            <span>02</span>
            <p>企业交付铁三角</p>
          </div>
          <div className={styles.methodBody}>
            <h2 id="method-heading">一项企业部署，需要三类角色协作。</h2>
            <p className={styles.methodLead}>
              技术能不能跑、业务问题是否值得解决、项目能不能在组织里推进，是三件不同的事。企业服务把这三件事放在同一张交付表上处理。
            </p>
            <ol className={styles.steps}>
              <li><span>01</span><div><strong>AI 全栈工程师</strong><p>负责技术实现、工具连接、原型运行和必要的工程处理。</p></div></li>
              <li><span>02</span><div><strong>行业专家</strong><p>负责定义问题、判断关键事实、审阅输出并决定哪些部分不能交给 AI。</p></div></li>
              <li><span>03</span><div><strong>咨询项目专家</strong><p>负责目标、范围、项目节奏、跨部门协作和验收安排。</p></div></li>
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
            <p>一步商学</p>
            <h2 id="cta-heading">先看课程是否适合你，或从企业的一项具体工作开始。</h2>
          </div>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaMain} href={experienceProductizationPath}>查看行业专家课程 <span>→</span></Link>
            <Link className={styles.ctaSecondary} href={flagshipPath}>查看企业 AI 服务 <span>→</span></Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMark} aria-hidden="true">一</span>
          <div><strong>一步商学</strong><p>行业经验 AI 产品化与企业 AI 部署</p></div>
        </div>
        <p className={styles.footerNote}>行业专家课程与企业服务使用不同路径。首期课程安排以正式通知为准。</p>
        <nav aria-label="页脚导航">
          <Link href={experienceProductizationPath}>行业专家课程</Link>
          <Link href={flagshipPath}>企业服务</Link>
          <Link href={aboutPath}>创始人万臻</Link>
        </nav>
      </footer>
      <JsonLd data={jsonLd} />
    </div>
  );
}
