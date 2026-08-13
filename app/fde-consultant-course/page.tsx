import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "../components";
import { aboutPath, fdeCourseApplicationUrl, flagshipPath, getOrigin, wechatId } from "../site";
import styles from "./page.module.css";

const coursePath = "/fde-consultant-course/";

const outcomes = [
  ["01", "问题简报", "把一个真实业务痛点写清楚：谁在做、卡在哪里、怎样才算改善。"],
  ["02", "现状工作流", "把人、信息、工具、判断点和风险边界画出来，而不是先挑 AI 工具。"],
  ["03", "可运行 MVP", "做出能被真实用户操作的小版本；可以粗糙，但不能只停在方案和截图。"],
  ["04", "测试与证据", "记录谁试过、哪里失败、哪些判断仍需人工负责，以及下一轮改什么。"],
  ["05", "采用与扩展计划", "说明如何进入岗位、如何复盘，以及何时该停、该试、该扩大。"],
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${coursePath}`;
    const title = "咨询顾问如何转型为 FDE｜万叔 FDE 顾问课程";
  const description =
    "面向有多年行业经验的顾问、管理者、实施与解决方案人员：带一个真实业务问题，完成工作流、可运行 MVP、测试证据与采用计划。";

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

export default async function FdeConsultantCoursePage() {
  const origin = await getOrigin();
  const canonical = `${origin}${coursePath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "咨询顾问如何转型为 FDE",
        description:
          "面向有多年行业经验的顾问、管理者、实施与解决方案人员的 FDE 型顾问共创计划。",
        inLanguage: "zh-CN",
        about: { "@id": `${origin}${aboutPath}#person` },
      },
      {
        "@type": "Course",
        "@id": `${canonical}#course`,
        name: "咨询顾问如何转型为 FDE",
        description:
          "从真实业务问题出发，完成问题简报、现状工作流、可运行 MVP、测试证据和采用计划。",
        provider: { "@id": `${origin}${flagshipPath}#organization` },
        author: { "@id": `${origin}${aboutPath}#person` },
        audience: {
          "@type": "Audience",
          audienceType: "有多年行业经验的顾问、管理者、实施与解决方案人员",
        },
        teaches: outcomes.map(([, title, description]) => `${title}：${description}`),
        inLanguage: "zh-CN",
        url: canonical,
      },
    ],
  };

  return (
    <div className={styles.shell}>
      <a className={styles.skip} href="#main-content">
        跳到主要内容
      </a>
      <header className={styles.header}>
        <Link className={styles.brand} href={coursePath} aria-label="万叔 FDE 顾问共创计划首页">
          <strong>万叔</strong>
          <span>CONSULTING × FDE</span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          <a href="#outcomes">毕业证据</a>
          <a href="#fit">适合谁</a>
          <Link href={aboutPath}>关于万臻</Link>
          <Link href={flagshipPath}>企业服务</Link>
          <a className={styles.navCta} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表</a>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>FOR EXPERIENCED PROFESSIONALS · FDE 顾问课程申请</p>
            <h1>
              咨询顾问的下一次交付，
              <em>不该还是一份 PPT。</em>
            </h1>
            <p className={styles.lead}>
              你不需要丢掉十年的行业经验，从零变成程序员。你需要学会把判断变成工作流，把方案变成能运行、能测试、能被业务使用的东西。
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表</a>
              <a className={styles.secondaryButton} href="#outcomes">先看怎么验收</a>
            </div>
            <dl className={styles.credentials}>
              <div><dt>身份</dt><dd>CMC 国际注册管理咨询师</dd></div>
              <div><dt>经历</dt><dd>十余年企业咨询与组织管理经验</dd></div>
              <div><dt>作品</dt><dd>《认知势能》作者</dd></div>
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

        <section className={styles.thesis} aria-label="课程主张">
          <span>01 / 主张</span>
          <p>
            未来更稀缺的，不是会演示 AI 的人，而是能进入现场、理解业务、做出原型并推动采用的人。<strong>这就是我们所说的 FDE 型顾问。</strong>
          </p>
        </section>

        <section className={styles.section} id="outcomes">
          <div className={styles.sectionHead}>
            <span>02 / 验收</span>
            <div>
              <p className={styles.kicker}>GRADUATION EVIDENCE</p>
              <h2>不以听完多少节课毕业。<br />以你做出了什么毕业。</h2>
            </div>
          </div>
          <div className={styles.outcomeGrid}>
            {outcomes.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className={styles.boundary}>
            上述是课程的验收目标，不是就业、收入、客户项目或经营结果承诺。真实成果取决于学员带来的问题、投入和现场验证条件。
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <span>03 / 路径</span>
            <div>
              <p className={styles.kicker}>DIAGNOSE → DESIGN → DEPLOY</p>
              <h2>先带一个真问题进来。<br />再把它做成一个可用闭环。</h2>
            </div>
          </div>
          <ol className={styles.path}>
            <li><span>第一步</span><strong>诊断</strong><p>从岗位、流程和经营结果定位问题，不从工具菜单找需求。</p></li>
            <li><span>第二步</span><strong>设计</strong><p>拆开现状流程，找到 AI、人和系统各自该负责的部分。</p></li>
            <li><span>第三步</span><strong>部署</strong><p>做出小型 MVP，交给真实用户使用，记录失败和反馈。</p></li>
            <li><span>第四步</span><strong>采用</strong><p>把验证过的做法写进岗位动作、复盘节奏和扩展条件。</p></li>
          </ol>
        </section>

        <section className={styles.fit} id="fit">
          <div className={styles.fitIntro}>
            <span>04 / 适合谁</span>
            <h2>经验不是包袱。<br />没有现场，才是。</h2>
            <p>这不是零基础编程班，也不是泛泛的 AI 工具课。我们更关心你是否理解一个行业、一个岗位或一类客户问题。</p>
          </div>
          <div className={styles.fitLists}>
            <article>
              <h3>更适合</h3>
              <ul>
                <li>有多年行业经验，正在寻找第二增长曲线的咨询顾问</li>
                <li>做过管理、实施、解决方案或专业服务的人</li>
                <li>愿意带一个真实问题，并接受真实用户检验的人</li>
              </ul>
            </article>
            <article>
              <h3>暂不适合</h3>
              <ul>
                <li>只想收集提示词、工具清单或证书</li>
                <li>不愿接触业务现场，只想靠包装转型</li>
                <li>期待课程保证接单、就业或收入结果</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.entry}>
          <div className={styles.sectionHead}>
            <span>05 / 怎样进入</span>
            <div>
              <p className={styles.kicker}>ONE OWNED HUB, MANY ENTRANCES</p>
              <h2>你可以从一篇内容认识我。<br />但要在这里决定是否同行。</h2>
            </div>
          </div>
          <div className={styles.entryFlow} aria-label="内容到课程与企业服务的路径">
            <article><span>被发现</span><strong>书 · 社媒 · 演讲 · 转介</strong><p>提出判断，呈现真实问题和实践过程。</p></article>
            <article><span>建立信任</span><strong>本网站</strong><p>集中说明方法、身份、边界和验收标准。</p></article>
            <article><span>互相筛选</span><strong>申请 · 资格沟通</strong><p>确认经验、问题、投入和共创条件是否匹配。</p></article>
            <article><span>形成结果</span><strong>共创计划 · 企业项目</strong><p>以作品、真实试用和采用证据作为下一步依据。</p></article>
          </div>
        </section>

        <section className={styles.about}>
          <div>
            <span>06 / 为什么是万叔</span>
            <h2>我不是从代码走向业务。<br />我是从咨询现场走向可运行交付。</h2>
          </div>
          <div>
            <p>
              万臻是壹步咨询创始人、CMC 国际注册管理咨询师、《认知势能》作者，长期从事企业咨询、组织管理与培训。现在，他把企业问题诊断、工作流设计和 AI 原型交付合在一起，探索咨询顾问如何成为 FDE 型顾问。
            </p>
            <Link className={styles.textLink} href={aboutPath}>查看公开身份与证据 →</Link>
          </div>
        </section>

        <section className={styles.apply} id="apply">
          <p className={styles.kicker}>COURSE · APPLICATION</p>
          <h2>别先问要学多少工具。<br />先说你想改掉哪个真实问题。</h2>
          <p>
            请先填写独立课程申请表：说明你的行业、相关经验、真实问题与可投入时间。申请将进入私有课程线索表，由万臻人工审核后再决定是否联系。
          </p>
          <div className={styles.actions}>
            <a className={styles.secondaryOnDark} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表</a>
            <Link className={styles.textLinkOnDark} href={flagshipPath}>我是企业决策者，查看企业服务 →</Link>
          </div>
          <div className={styles.contact}>
            <span>补充材料或更新申请信息</span>
            <strong>{wechatId}</strong>
          </div>
          <small>申请记录仅进入独立课程线索表。系统不会自动判定合格、自动报价或自动联系；具体时间、规模与价格以双方确认的信息为准。</small>
        </section>
      </main>

      <footer className={styles.footer}>
        <strong>万叔 · CONSULTING × FDE</strong>
        <p>© 2026 壹步咨询。课程入口与企业服务分开呈现，所有公开履历均保留证据边界。</p>
        <nav aria-label="页脚导航">
          <Link href={aboutPath}>关于万臻</Link>
          <Link href={flagshipPath}>企业 AI 咨询与培训</Link>
        </nav>
      </footer>
      <JsonLd data={jsonLd} />
    </div>
  );
}
