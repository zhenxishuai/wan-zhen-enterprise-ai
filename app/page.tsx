import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "./components";
import { aboutPath, flagshipPath, getOrigin } from "./site";
import styles from "./page.module.css";

const coursePath = "/fde-consultant-course/";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}/`;
  const title = "万臻｜咨询、FDE 与企业 AI";
  const description =
    "万臻（万叔）的个人品牌入口：面向资深从业者的 FDE 顾问课程，以及面向企业决策者的 AI 咨询、培训、工作坊与 FDE 试点。";

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
        name: "万臻｜咨询、FDE 与企业 AI",
        inLanguage: "zh-CN",
        publisher: { "@id": `${origin}${flagshipPath}#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "万臻｜咨询、FDE 与企业 AI",
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
        <Link className={styles.brand} href="/" aria-label="万臻个人品牌首页">
          <strong>万叔</strong>
          <span>CONSULTING × FDE × AI</span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          <Link href={coursePath}>FDE 顾问课程</Link>
          <Link href={flagshipPath}>企业 AI 服务</Link>
          <Link href={aboutPath}>关于万臻</Link>
          <a className={styles.navCta} href="#choose">
            选择入口
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>ONE PERSON · TWO PATHS · ONE STANDARD</p>
            <h1>
              把咨询经验，
              <em>做成可运行的交付。</em>
            </h1>
            <p className={styles.lead}>
              这里不是把两种客户塞进同一套话术。对有现场经验的从业者，入口是 FDE 型顾问课程；对企业决策者，入口是从真实业务问题出发的 AI 咨询、培训与试点。
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#choose">
                我想找对入口
              </a>
              <Link className={styles.textLink} href={aboutPath}>
                先核验万臻是谁 →
              </Link>
            </div>
            <dl className={styles.credentials}>
              <div>
                <dt>身份</dt>
                <dd>CMC 国际注册管理咨询师</dd>
              </div>
              <div>
                <dt>经历</dt>
                <dd>十余年企业咨询与组织管理经验</dd>
              </div>
              <div>
                <dt>方法</dt>
                <dd>从问题、工作流到真实采用</dd>
              </div>
            </dl>
          </div>
          <figure className={styles.portrait}>
            <Image
              src="/wan-zhen-portrait.jpg"
              alt="万臻"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 38vw"
            />
            <figcaption>
              <span>万臻 / 万叔</span>
              <strong>壹步咨询创始人 · 企业 AI 顾问</strong>
            </figcaption>
          </figure>
        </section>

        <section className={styles.statement} aria-label="共同原则">
          <span>共同标准</span>
          <p>
            不从工具清单开始。<strong>先把真实问题、工作流、人工责任和验收证据说清楚。</strong>
          </p>
        </section>

        <section className={styles.choose} id="choose" aria-labelledby="choose-heading">
          <div className={styles.chooseHead}>
            <span>选择入口</span>
            <div>
              <p className={styles.kicker}>TWO AUDIENCES · TWO CONVERSATIONS</p>
              <h2 id="choose-heading">你带来的问题不同，<br />下一步也不同。</h2>
            </div>
          </div>
          <div className={styles.routeGrid}>
            <article className={styles.routeCard}>
              <div>
                <span>01 / FOR EXPERIENCED PROFESSIONALS</span>
                <h3>FDE 顾问课程</h3>
                <p>
                  面向已有行业、咨询、管理、产品、售前、实施或解决方案经验的人。带一个真实问题进来，把判断做成工作流、可运行 MVP、测试记录和采用计划。
                </p>
              </div>
              <ul>
                <li>不是零经验就业班</li>
                <li>不以听完课，而以做出什么验收</li>
                <li>不承诺就业、接单或收入结果</li>
              </ul>
              <Link className={styles.routeLink} href={coursePath}>
                了解课程与验收方式 <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article className={`${styles.routeCard} ${styles.enterpriseCard}`}>
              <div>
                <span>02 / FOR BUSINESS DECISION MAKERS</span>
                <h3>企业 AI 服务</h3>
                <p>
                  面向需要判断、设计和推动 AI 落地的企业决策者。先确认具体任务、负责人、现状证据和验收责任，再进入诊断、工作坊、培训或 FDE 试点。
                </p>
              </div>
              <ul>
                <li>企业 AI 咨询、培训与工作坊</li>
                <li>从业务问题到可用工作流</li>
                <li>不自动报价，不代替人工判断</li>
              </ul>
              <div className={styles.routeActions}>
                <Link className={styles.routeLink} href={flagshipPath}>
                  了解企业服务 <span aria-hidden="true">→</span>
                </Link>
                <Link className={styles.secondaryLink} href="/start/">
                  先做 3 分钟机会自检
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.boundary} aria-labelledby="boundary-heading">
          <div>
            <span>边界</span>
            <h2 id="boundary-heading">入口分开，判断不外包。</h2>
          </div>
          <div>
            <p>
              课程申请与企业咨询应使用不同的线索状态和人工沟通路径。网站可以帮助你理解方法、边界与下一步，但不会自动判定资格、自动报价或替你作出项目承诺。
            </p>
            <Link className={styles.lightLink} href={aboutPath}>
              查看公开身份与事实边界 →
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>万叔 · CONSULTING × FDE × AI</strong>
          <p>© 2026 壹步咨询。课程与企业服务分开呈现，公开信息保留证据边界。</p>
        </div>
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
