import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "../components";
import { aboutPath, fdeCourseApplicationUrl, flagshipPath, getOrigin, wechatId } from "../site";
import styles from "./page.module.css";

const coursePath = "/fde-consultant-course/";

const outcomes = [
  ["01", "问题简报", "说明要处理的业务问题、相关岗位、现状和预期变化。"],
  ["02", "现状工作流", "整理现有材料、参与人员、工具和关键判断点。"],
  ["03", "可试用版本", "完成一个流程、原型或助手，供真实用户试用。"],
  ["04", "测试记录", "记录试用过程、反馈、问题和仍需人工处理的部分。"],
  ["05", "下一轮计划", "根据试用结果，决定后续修改、采用或暂停的安排。"],
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${coursePath}`;
  const title = "FDE 顾问课程｜一步商学";
  const description =
    "一步商学 FDE 顾问课程面向有行业经验的顾问、管理者、实施和解决方案人员。学员围绕一个业务问题完成工作流、可试用版本和测试记录。";

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
        name: "FDE 顾问课程｜一步商学",
        description:
          "面向有行业经验的顾问、管理者、实施和解决方案人员的 FDE 顾问课程。",
        inLanguage: "zh-CN",
        about: { "@id": `${origin}${aboutPath}#person` },
      },
      {
        "@type": "Course",
        "@id": `${canonical}#course`,
        name: "一步商学 FDE 顾问课程",
        description:
          "围绕一个业务问题，完成问题简报、现状工作流、可试用版本、测试记录和下一轮计划。",
        provider: { "@id": `${origin}${flagshipPath}#organization` },
        author: { "@id": `${origin}${aboutPath}#person` },
        audience: {
          "@type": "Audience",
          audienceType: "有行业经验的顾问、管理者、实施和解决方案人员",
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
        <Link className={styles.brand} href="/" aria-label="一步商学首页">
          <strong>一步商学</strong>
          <span>企业 AI 咨询、培训与 FDE 课程</span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          <a href="#outcomes">课程内容</a>
          <a href="#fit">适合谁</a>
          <Link href={aboutPath}>创始人万臻</Link>
          <Link href={flagshipPath}>企业服务</Link>
          <a className={styles.navCta} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写申请表</a>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>一步商学课程</p>
            <h1>FDE 顾问课程</h1>
            <p className={styles.lead}>
              课程面向有行业经验的顾问、管理者、实施人员、产品人员和解决方案人员。学员选择一个熟悉的业务问题，完成问题简报、工作流、可试用版本和测试记录。
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表</a>
              <a className={styles.secondaryButton} href="#outcomes">查看课程内容</a>
            </div>
            <dl className={styles.credentials}>
              <div><dt>适合对象</dt><dd>有行业和业务经验的从业者</dd></div>
              <div><dt>课程重点</dt><dd>把一个业务问题做成可试用版本</dd></div>
              <div><dt>申请方式</dt><dd>填写课程申请表，由人工联系</dd></div>
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
              <span>创始人和讲师</span>
              <strong>万臻 · 企业 AI 顾问</strong>
            </figcaption>
          </figure>
        </section>

        <section className={styles.thesis} aria-label="课程说明">
          <span>01 / 课程说明</span>
          <p>
            课程不以工具数量或出勤次数作为主要内容。学员需要围绕一个具体业务问题，完成一套可供他人查看和试用的材料。<strong>最终是否采用，由实际使用情况决定。</strong>
          </p>
        </section>

        <section className={styles.section} id="outcomes">
          <div className={styles.sectionHead}>
            <span>02 / 课程内容</span>
            <div>
              <p className={styles.kicker}>学员需要完成的内容</p>
              <h2>课程结束时，您会有以下材料。</h2>
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
            上述内容是课程中的完成要求，不是对就业、收入、客户项目或经营结果的承诺。课程成果取决于学员提供的问题、投入时间和实际试用条件。
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <span>03 / 课程过程</span>
            <div>
              <p className={styles.kicker}>围绕一个具体问题开展</p>
              <h2>课程按以下四步进行。</h2>
            </div>
          </div>
          <ol className={styles.path}>
            <li><span>第一步</span><strong>选择问题</strong><p>选择一个熟悉的岗位任务、流程问题或客户问题。</p></li>
            <li><span>第二步</span><strong>整理现状</strong><p>梳理已有材料、参与人员、工作步骤和判断点。</p></li>
            <li><span>第三步</span><strong>完成版本</strong><p>制作一个可供真实用户试用的流程、原型或助手。</p></li>
            <li><span>第四步</span><strong>记录反馈</strong><p>记录试用结果，并据此安排下一轮修改或采用。</p></li>
          </ol>
        </section>

        <section className={styles.fit} id="fit">
          <div className={styles.fitIntro}>
            <span>04 / 适合谁</span>
            <h2>适合有业务经验，并希望整理一项具体工作的人。</h2>
            <p>不要求编程背景。申请人需要能说明自己熟悉的行业、岗位或客户问题，并能够投入时间完成材料和试用。</p>
          </div>
          <div className={styles.fitLists}>
            <article>
              <h3>适合</h3>
              <ul>
                <li>顾问、管理者、实施人员、产品人员和专业服务人员</li>
                <li>有一个需要整理或改进的业务问题</li>
                <li>愿意准备材料，并安排真实用户试用</li>
              </ul>
            </article>
            <article>
              <h3>暂不适合</h3>
              <ul>
                <li>只想收集提示词、工具清单或证书</li>
                <li>暂时没有可投入时间的业务问题</li>
                <li>希望课程保证接单、就业或收入结果</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.entry}>
          <div className={styles.sectionHead}>
            <span>05 / 申请信息</span>
            <div>
              <p className={styles.kicker}>填写申请表前可先准备</p>
              <h2>申请表会收集以下信息。</h2>
            </div>
          </div>
          <div className={styles.entryFlow} aria-label="课程申请信息">
            <article><span>01</span><strong>所在行业和岗位</strong><p>说明您目前服务的行业、岗位或客户类型。</p></article>
            <article><span>02</span><strong>相关经验</strong><p>简要说明您做过的咨询、管理、实施或解决方案工作。</p></article>
            <article><span>03</span><strong>业务问题</strong><p>说明希望在课程中处理的一项具体工作。</p></article>
            <article><span>04</span><strong>可投入时间</strong><p>说明可用于准备材料、学习和试用的时间。</p></article>
          </div>
        </section>

        <section className={styles.about}>
          <div>
            <span>06 / 讲师</span>
            <h2>万臻</h2>
          </div>
          <div>
            <p>
              万臻是一步商学创始人、CMC 国际注册管理咨询师和《认知势能》作者，长期从事企业咨询、组织管理和培训。公开履历、作品和身份信息可在人物页面查看。
            </p>
            <Link className={styles.textLink} href={aboutPath}>查看万臻介绍 →</Link>
          </div>
        </section>

        <section className={styles.apply} id="apply">
          <p className={styles.kicker}>课程申请</p>
          <h2>填写 FDE 课程申请表</h2>
          <p>
            申请表会收集您的行业、相关经验、业务问题和可投入时间。记录只进入独立课程线索表，由万臻人工阅读后决定是否进一步联系。
          </p>
          <div className={styles.actions}>
            <a className={styles.secondaryOnDark} href={fdeCourseApplicationUrl} target="_blank" rel="noreferrer">填写课程申请表</a>
            <Link className={styles.textLinkOnDark} href={flagshipPath}>查看企业 AI 服务 →</Link>
          </div>
          <div className={styles.contact}>
            <span>补充申请材料</span>
            <strong>{wechatId}</strong>
          </div>
          <small>系统不会自动判定合格、自动报价或自动联系。课程时间、规模与价格以双方确认的信息为准。</small>
        </section>
      </main>

      <footer className={styles.footer}>
        <strong>一步商学</strong>
        <p>企业 AI 咨询、培训与 FDE 顾问课程。创始人：万臻。</p>
        <nav aria-label="页脚导航">
          <Link href="/">一步商学首页</Link>
          <Link href={aboutPath}>创始人万臻</Link>
          <Link href={flagshipPath}>企业 AI 服务</Link>
        </nav>
      </footer>
      <JsonLd data={jsonLd} />
    </div>
  );
}
