import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "./components";
import { aboutPath, fdeCourseApplicationUrl, flagshipPath, getOrigin } from "./site";
import styles from "./page.module.css";

const coursePath = "/fde-consultant-course/";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}/`;
  const title = "万叔｜把判断做成可运行的交付";
  const description =
    "万臻（万叔）的个人品牌入口：为有现场经验的从业者提供 FDE 顾问课程，为企业决策者提供从真实业务问题出发的 AI 咨询、培训与试点。";

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
          alt: "万臻，CMC 国际注册管理咨询师与企业 AI 顾问",
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
        name: "万叔｜咨询、FDE 与企业 AI",
        inLanguage: "zh-CN",
        publisher: { "@id": `${origin}${flagshipPath}#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "万叔｜把判断做成可运行的交付",
        description:
          "万臻（万叔）的个人品牌入口：分别通向 FDE 顾问课程与企业 AI 服务。",
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
        <Link className={styles.brand} href="/" aria-label="万叔个人品牌首页">
          <span className={styles.brandMark} aria-hidden="true">W.</span>
          <span className={styles.brandText}>
            <strong>万叔</strong>
            <small>CONSULTING / FDE / AI</small>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          <a href="#method">方法</a>
          <a href="#routes">服务入口</a>
          <Link href={aboutPath}>关于万臻</Link>
          <a className={styles.navCta} href="#routes">开始判断</a>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroCopy}>
            <div className={styles.heroMeta}>
              <p>01 / 真实问题的工作台</p>
              <span>SHENZHEN · CHINA</span>
            </div>
            <div className={styles.heroMain}>
              <p className={styles.eyebrow}>万叔 · 咨询、FDE 与企业 AI</p>
              <h1 id="hero-heading">
                别把判断，
                <em>停在一份报告里。</em>
              </h1>
              <p className={styles.lead}>
                我做的事情很简单：把你已经看见的问题，拆成可以交付、可以验证、也有人愿意使用的工作方式。
              </p>
              <div className={styles.actions}>
                <a className={styles.primaryButton} href="#routes">我带着一个真实问题来</a>
                <Link className={styles.inlineLink} href={aboutPath}>先了解万臻是谁 <span>↗</span></Link>
              </div>
            </div>
            <div className={styles.heroFoot}>
              <span>不从工具清单开始</span>
              <span>从任务、责任与证据开始</span>
            </div>
          </div>

          <figure className={styles.portrait}>
            {/* The static hero image bypasses the worker image optimizer so the page also works in preview deployments. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.portraitImage}
              src="/wan-zhen-portrait.jpg"
              alt="万臻"
            />
            <div className={styles.photoGrid} aria-hidden="true" />
            <figcaption>
              <span>万臻 / 万叔</span>
              <strong>CMC 国际注册管理咨询师<br />企业 AI 顾问</strong>
            </figcaption>
            <span className={styles.photoIndex} aria-hidden="true">01—26</span>
          </figure>
        </section>

        <section className={styles.ticker} aria-label="服务原则">
          <span>真实任务</span><i>✦</i><span>清晰责任</span><i>✦</i><span>可运行交付</span><i>✦</i><span>复盘证据</span><i>✦</i><span>真实任务</span>
        </section>

        <section className={styles.method} id="method" aria-labelledby="method-heading">
          <div className={styles.sectionLabel}>
            <span>02</span>
            <p>METHOD<br />不是多学一个工具。</p>
          </div>
          <div className={styles.methodBody}>
            <h2 id="method-heading">先把事情说清楚，<br /><em>再谈 AI 能做什么。</em></h2>
            <p className={styles.methodLead}>
              任何一项课程、工作坊或试点，都从一个足够具体的问题开始：谁在做、卡在何处、什么算完成、出了偏差由谁承担。工具只是后面的事。
            </p>
            <ol className={styles.steps}>
              <li><span>01</span><div><strong>定位场景</strong><p>不谈“赋能”，先找到一个正在消耗时间或影响判断的任务。</p></div></li>
              <li><span>02</span><div><strong>重写工作流</strong><p>把经验、输入、判断节点与人工责任摆在同一张工作台上。</p></div></li>
              <li><span>03</span><div><strong>做出交付</strong><p>报告、原型或助手必须能被实际使用，而不是只在演示里成立。</p></div></li>
              <li><span>04</span><div><strong>留下证据</strong><p>用测试、反馈与采用计划判断下一步，不用漂亮话替代验收。</p></div></li>
            </ol>
          </div>
        </section>

        <section className={styles.routes} id="routes" aria-labelledby="routes-heading">
          <div className={styles.routesHead}>
            <div className={styles.sectionLabel}>
              <span>03</span>
              <p>CHOOSE A<br />WORKING PATH</p>
            </div>
            <h2 id="routes-heading">同一套标准，<br />两条不同的路。</h2>
            <p>你不必先证明自己“适不适合 AI”。先选你此刻真正需要解决的问题。</p>
          </div>

          <div className={styles.routeGrid}>
            <article className={`${styles.routeCard} ${styles.courseCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>A</span>
                <p>FOR EXPERIENCED PROFESSIONALS</p>
              </div>
              <div className={styles.cardCore}>
                <h3>FDE 顾问课程</h3>
                <p>
                  给已经在行业、咨询、管理、产品、售前、实施或解决方案一线的人。带一个真问题进来，把自己的判断做成工作流、可运行 MVP、测试记录和采用计划。
                </p>
              </div>
              <div className={styles.cardBottom}>
                <ul>
                  <li>以完成什么验收，不以听了多少课</li>
                  <li>不是零经验就业班</li>
                  <li>不承诺就业、接单或收入结果</li>
                </ul>
                <div className={styles.cardActions}>
                  <Link className={styles.darkButton} href={coursePath}>看课程与验收方式 <span>→</span></Link>
                  <a className={styles.cardTextLink} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表 ↗</a>
                </div>
              </div>
            </article>

            <article className={`${styles.routeCard} ${styles.enterpriseCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>B</span>
                <p>FOR BUSINESS DECISION MAKERS</p>
              </div>
              <div className={styles.cardCore}>
                <h3>企业 AI 服务</h3>
                <p>
                  给需要把 AI 从讨论推到真实业务现场的企业。先确认任务、负责人、现状证据与验收责任，再进入诊断、工作坊、培训或 FDE 试点。
                </p>
              </div>
              <div className={styles.cardBottom}>
                <ul>
                  <li>咨询、培训、工作坊与试点分开判断</li>
                  <li>从业务问题走到可用工作流</li>
                  <li>不自动报价，不代替人工判断</li>
                </ul>
                <div className={styles.cardActions}>
                  <Link className={styles.lightButton} href={flagshipPath}>看企业服务怎么开始 <span>→</span></Link>
                  <Link className={styles.cardTextLink} href="/start/">先做 3 分钟机会自检 ↗</Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.proof} aria-labelledby="proof-heading">
          <div className={styles.proofArt} aria-hidden="true">
            <span>?</span><i /> <b>!</b>
          </div>
          <div className={styles.proofCopy}>
            <p className={styles.eyebrow}>04 / THE WORK IS IN THE DETAILS</p>
            <h2 id="proof-heading">网站可以帮你<br />厘清下一步，<em>不能替你下结论。</em></h2>
            <p>
              这里不会自动判定谁合格，不会用一张表单替你报价，也不会把尚未核验的信息包装成案例。课程申请与企业服务使用不同入口，由人来做后续判断。
            </p>
            <Link className={styles.inlineLink} href={aboutPath}>查看公开身份与事实边界 <span>↗</span></Link>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="cta-heading">
          <div>
            <p>05 / START WITH THE REAL THING</p>
            <h2 id="cta-heading">不用准备一套漂亮说辞。<br /><em>带着你现在的问题来。</em></h2>
          </div>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaMain} href={flagshipPath}>我是企业决策者 <span>→</span></Link>
            <Link className={styles.ctaSecondary} href={coursePath}>我是资深从业者 <span>→</span></Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMark} aria-hidden="true">W.</span>
          <div><strong>万叔</strong><p>CONSULTING / FDE / AI</p></div>
        </div>
        <p className={styles.footerNote}>© 2026 壹步咨询。公开信息、第一方实践与尚待核验的内容，分开呈现。</p>
        <nav aria-label="页脚导航">
          <Link href={coursePath}>FDE 顾问课程</Link>
          <Link href={flagshipPath}>企业 AI 服务</Link>
          <Link href={aboutPath}>关于万臻</Link>
        </nav>
      </footer>
      <JsonLd data={jsonLd} />
    </div>
  );
}
