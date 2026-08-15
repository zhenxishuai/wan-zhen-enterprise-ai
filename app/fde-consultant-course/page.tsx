import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "../components";
import { aboutPath, fdeCourseApplicationUrl, flagshipPath, getOrigin, wechatId } from "../site";
import styles from "./page.module.css";

const coursePath = "/fde-consultant-course/";

const outcomes = [
  ["01", "问题简报", "说清楚你要改的是哪一项工作：谁在做，哪里卡住，什么变化才算值得。"],
  ["02", "现状工作流", "把人、信息、工具和判断点摊开，看到经验到底在哪一步起作用。"],
  ["03", "可试用版本", "做出一个真实用户能操作的流程、原型或助手；不必华丽，但要能被用。"],
  ["04", "测试记录", "记下谁试过、哪里不顺、哪些判断仍要由人负责，而不是只留一张演示截图。"],
  ["05", "下一轮计划", "决定它该继续打磨、放进一个岗位，还是暂时停下；每个选择都要有理由。"],
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${coursePath}`;
  const title = "从经验到可用作品｜万叔 FDE 顾问课程";
  const description =
    "面向有行业与业务经验的顾问、管理者、实施与解决方案人员：带一项熟悉工作进来，做成可试用版本、测试记录与下一轮计划。";

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
        name: "从经验到可用作品｜万叔 FDE 顾问课程",
        description:
          "面向有行业经验的顾问、管理者、实施与解决方案人员：带一项熟悉工作进来，做成可试用版本、测试记录与下一轮计划。",
        inLanguage: "zh-CN",
        about: { "@id": `${origin}${aboutPath}#person` },
      },
      {
        "@type": "Course",
        "@id": `${canonical}#course`,
        name: "从经验到可用作品｜万叔 FDE 顾问课程",
        description:
          "从一项熟悉工作出发，完成问题简报、现状工作流、可试用版本、测试记录与下一轮计划。",
        provider: { "@id": `${origin}${flagshipPath}#organization` },
        author: { "@id": `${origin}${aboutPath}#person` },
        audience: {
          "@type": "Audience",
          audienceType: "有行业经验的顾问、管理者、实施与解决方案人员",
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
        <Link className={styles.brand} href="/" aria-label="万叔个人品牌首页">
          <strong>万叔</strong>
          <span>把经验做成能用的工作</span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          <a href="#outcomes">你会完成什么</a>
          <a href="#fit">适合谁</a>
          <Link href={aboutPath}>关于万臻</Link>
          <Link href={flagshipPath}>企业服务</Link>
          <a className={styles.navCta} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表</a>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>FDE 顾问课程 · 面向有现场经验的专业人士</p>
            <h1>
              你不缺一套新话术。<em>你缺一次把经验交出去的机会。</em>
            </h1>
            <p className={styles.lead}>
              你做过咨询、管理、实施、产品或解决方案，知道事情为什么会卡住。课程不是让你从零学编程，而是陪你把一项熟悉工作拆开，做成真实用户能试用的版本。
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表</a>
              <a className={styles.secondaryButton} href="#outcomes">先看你会完成什么</a>
            </div>
            <dl className={styles.credentials}>
              <div><dt>带来的</dt><dd>一项你熟悉、也想改好的工作</dd></div>
              <div><dt>做出的</dt><dd>别人能试用的工作流、原型或助手</dd></div>
              <div><dt>留下的</dt><dd>测试记录和下一轮行动计划</dd></div>
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
          <span>01 / 这门课要解决什么</span>
          <p>
            专业经验最难的地方，不是你知道得不够多，而是它常常只留在脑子里、会议里、PPT 里。这里做的是另一件事：<strong>让别人看得见、用得上，也能提出意见。</strong>
          </p>
        </section>

        <section className={styles.section} id="outcomes">
          <div className={styles.sectionHead}>
            <span>02 / 你会完成什么</span>
            <div>
              <p className={styles.kicker}>不是听完课程，是带走一套做过的东西</p>
              <h2>结束时，桌上应该有这些。<br />每一项都能回到你的真实场景。</h2>
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
            这些是课程中的完成标准，不是对就业、收入、客户项目或经营结果的承诺。你带来的问题、投入程度和现场验证条件，会决定作品最后长成什么样。
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <span>03 / 这几步怎么走</span>
            <div>
              <p className={styles.kicker}>先做一件小而具体的事</p>
              <h2>不赶着把它说得很大。<br />先把一个能用的版本做出来。</h2>
            </div>
          </div>
          <ol className={styles.path}>
            <li><span>第一步</span><strong>挑一项工作</strong><p>选你熟悉、反复出现，而且真的有人会用到的任务。</p></li>
            <li><span>第二步</span><strong>看清它现在怎么做</strong><p>找到材料从哪来、谁在判断、哪里最容易返工或漏掉信息。</p></li>
            <li><span>第三步</span><strong>做出能试的版本</strong><p>可以是流程、原型或助手。重点不是功能有多全，而是有人愿意上手。</p></li>
            <li><span>第四步</span><strong>根据反馈改一次</strong><p>用真实使用中的问题决定下一轮，而不是用一场漂亮演示结束项目。</p></li>
          </ol>
        </section>

        <section className={styles.fit} id="fit">
          <div className={styles.fitIntro}>
            <span>04 / 谁更适合来</span>
            <h2>经验不是门槛。<br />愿意把它拿出来检验，才是。</h2>
            <p>你不必把自己变成程序员。但你需要对一个行业、岗位或客户问题有自己的判断，也愿意接受真实用户的反馈。</p>
          </div>
          <div className={styles.fitLists}>
            <article>
              <h3>更适合</h3>
              <ul>
                <li>已经做过行业咨询、管理、实施、产品或专业服务</li>
                <li>手上有一项想重新做一遍的工作，或一类反复遇到的客户问题</li>
                <li>愿意动手，愿意让使用者告诉你哪里不好用</li>
              </ul>
            </article>
            <article>
              <h3>暂时别急着来</h3>
              <ul>
                <li>只想收集提示词、工具清单或证书</li>
                <li>还没有任何愿意花时间琢磨的业务场景</li>
                <li>希望课程保证接单、就业或收入结果</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.entry}>
          <div className={styles.sectionHead}>
            <span>05 / 申请以前，先想三件事</span>
            <div>
              <p className={styles.kicker}>让问题先说话</p>
              <h2>申请表不考你懂多少工具。<br />它帮我判断，我们该不该聊下一步。</h2>
            </div>
          </div>
          <div className={styles.entryFlow} aria-label="课程申请准备事项">
            <article><span>01</span><strong>你在哪个场景里工作</strong><p>行业、岗位或服务对象是什么？不用包装，说明白就好。</p></article>
            <article><span>02</span><strong>你想改哪一件事</strong><p>挑一个具体任务，别写“全面拥抱 AI”这类大题目。</p></article>
            <article><span>03</span><strong>你能投入什么</strong><p>时间、材料、真实使用者，哪些条件现在已经具备？</p></article>
            <article><span>04</span><strong>接下来怎么联系</strong><p>我会人工阅读申请；是否继续沟通，以双方确认的信息为准。</p></article>
          </div>
        </section>

        <section className={styles.about}>
          <div>
            <span>06 / 为什么由万叔来带</span>
            <h2>我关心的不是把 AI 讲得多新。<br />而是它放进工作里以后，谁会真的用。</h2>
          </div>
          <div>
            <p>
              万臻是壹步咨询创始人、CMC 国际注册管理咨询师、《认知势能》作者。长期做企业咨询、组织管理与培训，让他更在意一件事：一份方案离开会议室后，能不能进入真实岗位、经得起一次次使用。
            </p>
            <Link className={styles.textLink} href={aboutPath}>查看公开身份与证据 →</Link>
          </div>
        </section>

        <section className={styles.apply} id="apply">
          <p className={styles.kicker}>COURSE APPLICATION</p>
          <h2>如果你有一项不想再只靠口头讲清的经验，<br />就从申请表开始。</h2>
          <p>
            表单会问你的行业、相关经验、那件想改的事，以及你能投入的时间。记录只进入独立课程线索表；我会人工阅读，确认是否需要进一步沟通。
          </p>
          <div className={styles.actions}>
            <a className={styles.secondaryOnDark} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表</a>
            <Link className={styles.textLinkOnDark} href={flagshipPath}>我在处理企业里的问题 →</Link>
          </div>
          <div className={styles.contact}>
            <span>需要补充材料</span>
            <strong>{wechatId}</strong>
          </div>
          <small>系统不会自动判定合格、自动报价或自动联系。课程时间、规模与价格以双方确认的信息为准。</small>
        </section>
      </main>

      <footer className={styles.footer}>
        <strong>万叔 · 把经验做成能用的工作</strong>
        <p>© 2026 壹步咨询。课程申请与企业服务分开处理，公开履历均保留证据边界。</p>
        <nav aria-label="页脚导航">
          <Link href="/">品牌首页</Link>
          <Link href={aboutPath}>关于万臻</Link>
          <Link href={flagshipPath}>企业 AI 服务</Link>
        </nav>
      </footer>
      <JsonLd data={jsonLd} />
    </div>
  );
}
