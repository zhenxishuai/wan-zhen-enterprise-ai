import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "./components";
import { aboutPath, fdeCourseApplicationUrl, flagshipPath, getOrigin } from "./site";
import styles from "./page.module.css";

const coursePath = "/fde-consultant-course/";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}/`;
  const title = "万叔｜把经验做成别人能用的工作";
  const description =
    "万臻（万叔）帮助企业团队和有现场经验的从业者，把一项具体任务或专业判断做成可试用、可复盘的工作方式。";

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
        name: "万叔｜把经验做成别人能用的工作",
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
          <a href="#method">怎么做</a>
          <a href="#routes">从哪里开始</a>
          <Link href={aboutPath}>关于万臻</Link>
          <a className={styles.navCta} href="#routes">选一条路线</a>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroCopy}>
            <div className={styles.heroMeta}>
              <p>01 / 把经验做成能用的工作</p>
              <span>SHENZHEN · CHINA</span>
            </div>
            <div className={styles.heroMain}>
              <p className={styles.eyebrow}>咨询 · FDE · 企业 AI</p>
              <h1 id="hero-heading">
                你已经知道问题在哪。
                <em>现在，把它做出来。</em>
              </h1>
              <p className={styles.lead}>
                有些团队卡在一项反复返工的工作上；有些专业人士已经有一套判断，却交不出一个别人能试用的版本。这里从那件具体的事开始，把它做成能给人用、也经得起复盘的工作。
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href={flagshipPath}>我在解决一项企业里的事</Link>
                <Link className={styles.inlineLink} href={coursePath}>我想把经验做成作品 <span>→</span></Link>
              </div>
            </div>
            <div className={styles.heroFoot}>
              <span>一项任务</span>
              <span>一份材料</span>
              <span>一次试用</span>
              <span>一轮复盘</span>
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

        <section className={styles.ticker} aria-label="工作原则">
          <span>先说清任务</span><i>✦</i><span>再摊开过程</span><i>✦</i><span>做个能试的版本</span><i>✦</i><span>用反馈决定下一步</span><i>✦</i><span>先说清任务</span>
        </section>

        <section className={styles.method} id="method" aria-labelledby="method-heading">
          <div className={styles.sectionLabel}>
            <span>02</span>
            <p>HOW WE START<br />先看手头这件事</p>
          </div>
          <div className={styles.methodBody}>
            <h2 id="method-heading">先别讨论“要不要上 AI”。<br /><em>把那件卡住的事摆到桌上。</em></h2>
            <p className={styles.methodLead}>
              谁在做？交付给谁？用到哪些材料？卡在哪一步？什么结果才算好？这些问题没说清，换什么工具都只是换一种忙法。
            </p>
            <ol className={styles.steps}>
              <li><span>01</span><div><strong>说清任务</strong><p>从一项具体工作开始：它为什么反复发生，为什么值得现在处理。</p></div></li>
              <li><span>02</span><div><strong>摊开过程</strong><p>把材料、判断点、参与者和交接处放在一起看，找出真正的摩擦。</p></div></li>
              <li><span>03</span><div><strong>做个能试的版本</strong><p>把想法做成流程、原型或助手，交给真实使用者，而不是留在汇报里。</p></div></li>
              <li><span>04</span><div><strong>看它有没有用</strong><p>记录哪里省了时间、哪里仍会出错，再决定停下、重做还是扩大。</p></div></li>
            </ol>
          </div>
        </section>

        <section className={styles.routes} id="routes" aria-labelledby="routes-heading">
          <div className={styles.routesHead}>
            <div className={styles.sectionLabel}>
              <span>03</span>
              <p>TWO STARTING POINTS<br />两种责任场景</p>
            </div>
            <h2 id="routes-heading">你要做的不是同一件事。<br /><em>起点也不一样。</em></h2>
            <p>选离你现在更近的那一条。两条路都从真实工作开始，也都要回到真实使用者身上。</p>
          </div>

          <div className={styles.routeGrid}>
            <article className={`${styles.routeCard} ${styles.courseCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>A</span>
                <p>给有现场经验的专业人士</p>
              </div>
              <div className={styles.cardCore}>
                <h3>把经验做成作品</h3>
                <p>
                  你做过咨询、管理、实施、产品或解决方案。现在，挑一个熟悉的场景，把自己的判断拆成工作流，做出一个能让人试用的版本。
                </p>
              </div>
              <div className={styles.cardBottom}>
                <ul>
                  <li>带走问题简报、工作流与可试用 MVP</li>
                  <li>用测试记录，而不是出勤证明，说明你做过什么</li>
                  <li>适合愿意动手、也愿意让真实用户挑毛病的人</li>
                </ul>
                <div className={styles.cardActions}>
                  <Link className={styles.darkButton} href={coursePath}>看课程怎么验收 <span>→</span></Link>
                  <a className={styles.cardTextLink} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表 ↗</a>
                </div>
              </div>
            </article>

            <article className={`${styles.routeCard} ${styles.enterpriseCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>B</span>
                <p>给正带着业务问题的企业团队</p>
              </div>
              <div className={styles.cardCore}>
                <h3>把一项工作改到能跑</h3>
                <p>
                  你不是来找一份 AI 清单。你需要判断：哪一项任务值得先动，谁来负责，拿什么材料开始，又如何知道它真的比原来好。
                </p>
              </div>
              <div className={styles.cardBottom}>
                <ul>
                  <li>从一项任务判断咨询、工作坊、培训或试点是否合适</li>
                  <li>把负责人、材料、人工判断与验收条件先讲明白</li>
                  <li>先确认值不值得做，再讨论怎么投入</li>
                </ul>
                <div className={styles.cardActions}>
                  <Link className={styles.lightButton} href={flagshipPath}>看企业服务如何开始 <span>→</span></Link>
                  <Link className={styles.cardTextLink} href="/start/">用 3 分钟梳理任务 ↗</Link>
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
            <p className={styles.eyebrow}>04 / WORKING AGREEMENT</p>
            <h2 id="proof-heading">先把下一步讲明白。<br /><em>再决定要不要一起做。</em></h2>
            <p>
              课程看的是你能否完成一件有用户、有反馈的作品；企业服务先看任务、负责人和材料是否到位。这里不会替你自动判定，也不会用一张表单给出报价。
            </p>
            <Link className={styles.inlineLink} href={aboutPath}>看万臻的公开身份与事实边界 <span>→</span></Link>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="cta-heading">
          <div>
            <p>05 / YOUR NEXT CONVERSATION</p>
            <h2 id="cta-heading">不用先讲得很漂亮。<br /><em>说说现在最卡的是哪件事。</em></h2>
          </div>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaMain} href={flagshipPath}>我在处理企业里的问题 <span>→</span></Link>
            <Link className={styles.ctaSecondary} href={coursePath}>我想把经验做成作品 <span>→</span></Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMark} aria-hidden="true">W.</span>
          <div><strong>万叔</strong><p>把经验做成别人能用的工作</p></div>
        </div>
        <p className={styles.footerNote}>© 2026 壹步咨询。课程申请与企业服务分开处理；公开信息与尚待核验的信息分开呈现。</p>
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
