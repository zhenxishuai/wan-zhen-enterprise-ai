import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../components";
import {
  aboutPath,
  experienceProductizationPath,
  flagshipPath,
  getOrigin,
} from "../site";
import styles from "../fde-consultant-course/page.module.css";

const threeDayOutputs = [
  ["01", "产品方向", "选定一个具体客户、一项反复问题和一个暂定服务方向。"],
  ["02", "服务流程", "拆出客户输入、关键判断、AI 步骤、专家复核和交付结果。"],
  ["03", "产品卡", "说清服务谁、交付什么、怎样算合格，以及暂时不做什么。"],
] as const;

const campOutputs = [
  ["01", "原型 v0", "用真实输入和真实输出，让核心服务先跑起来。"],
  ["02", "10 条测试", "记录错误、异常样本和人工接管方式。"],
  ["03", "交付说明", "补齐服务流程、责任、验收标准和边界。"],
  ["04", "一页方案", "准备可演示的方案、视频和测试报价。"],
  ["05", "真实反馈", "向三位潜在用户展示，并据此决定修改、继续或停止。"],
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${experienceProductizationPath}`;
  const title = "行业经验 AI 产品化｜一步商学";
  const description =
    "面向有十年以上行业或职能经验的行业专家：用三天小课和四周实战营，把反复解决的问题做成可演示、可测试、可交付的 AI 服务产品。";

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

export default async function IndustryExpertAiProductizationPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${experienceProductizationPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "行业经验 AI 产品化｜一步商学",
        description:
          "面向有十年以上行业或职能经验的行业专家，把反复解决的问题做成可部署的 AI 服务产品。",
        inLanguage: "zh-CN",
        about: { "@id": `${origin}${aboutPath}#person` },
      },
      {
        "@type": "Course",
        "@id": `${canonical}#course`,
        name: "行业经验 AI 产品化",
        description:
          "三天完成第一张 AI 服务产品卡；四周实战营完成可运行原型、测试、报价、交付说明和真实反馈。",
        provider: { "@id": `${origin}${flagshipPath}#organization` },
        author: { "@id": `${origin}${aboutPath}#person` },
        audience: {
          "@type": "Audience",
          audienceType: "有十年以上行业或职能经验的行业专家",
        },
        teaches: [
          "用客户问题、发生频率、付费能力、经验优势和 AI 放大空间筛选产品方向",
          "拆解客户输入、关键判断、AI 步骤、专家复核和交付结果",
          "制作、测试、报价和交付 AI 服务产品",
        ],
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
          <span>行业经验 AI 产品化与企业 AI 部署</span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          <a href="#three-days">三天小课</a>
          <a href="#camp">四周实战营</a>
          <a href="#fit">适合谁</a>
          <Link href={flagshipPath}>企业服务</Link>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>一步商学首期课程</p>
            <h1>行业经验<br />AI 产品化</h1>
            <p className={styles.lead}>
              面向有十年以上行业或职能经验的行业专家。你不需要从头学一个新行业，也不需要把自己变成程序员。课程要做的，是把你反复解决过的问题整理成客户看得懂、能试用的 AI 服务产品。
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#first-cohort">查看首期安排</a>
              <a className={styles.secondaryButton} href="#three-days">查看课程内容</a>
            </div>
            <dl className={styles.credentials}>
              <div><dt>面向谁</dt><dd>十年以上行业或职能经验的行业专家</dd></div>
              <div><dt>先做什么</dt><dd>把一个反复解决的问题做成产品卡</dd></div>
              <div><dt>接着推进</dt><dd>原型、测试、报价、交付和真实反馈</dd></div>
            </dl>
          </div>
          <figure className={styles.portrait}>
            {/* Static image keeps preview and worker deployments independent of the image optimizer. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wan-zhen-portrait.jpg" alt="万臻" />
            <figcaption>
              <span>创始人和讲师</span>
              <strong>万臻 · 一步商学</strong>
            </figcaption>
          </figure>
        </section>

        <section className={styles.thesis} aria-label="课程说明">
          <span>01 / 课程说明</span>
          <p>
            很多行业专家知道客户在为什么问题付钱，却没有一套能让客户试用、验收和继续购买的服务说明。课程从一个具体问题开始，要求学员把经验、AI 步骤和专家判断拆开。<strong>最后留下的是一项可拿给客户看的产品，而不是一份泛泛的学习笔记。</strong>
          </p>
        </section>

        <section className={styles.section} id="three-days">
          <div className={styles.sectionHead}>
            <span>02 / 99 元三天小课</span>
            <div>
              <p className={styles.kicker}>先完成第一张产品卡</p>
              <h2>三天，把十年经验做成第一个 AI 服务产品。</h2>
            </div>
          </div>
          <div className={styles.outcomeGrid}>
            {threeDayOutputs.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className={styles.boundary}>
            三天小课是独立交付。它帮助学员判断自己的经验能否进入下一步，不以购买四周实战营为前提。
          </p>
        </section>

        <section className={styles.section} id="camp">
          <div className={styles.sectionHead}>
            <span>03 / 4,980 元四周实战营</span>
            <div>
              <p className={styles.kicker}>把产品跑起来</p>
              <h2>做出来，测一遍，包装好，拿给客户看。</h2>
            </div>
          </div>
          <div className={styles.outcomeGrid}>
            {campOutputs.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className={styles.boundary}>
            实战营要求学员本人准备材料、完成作业并安排真实反馈。课程不保证成交、收入、就业或项目机会；成交也不是毕业条件。
          </p>
        </section>

        <section className={styles.fit} id="fit">
          <div className={styles.fitIntro}>
            <span>04 / 适合谁</span>
            <h2>适合已经在行业里做过事，也愿意接受市场检验的人。</h2>
            <p>申请人需要有一个反复解决过的问题，能找到至少三位潜在反馈对象，并能每周投入约六小时完成原型、测试和修改。</p>
          </div>
          <div className={styles.fitLists}>
            <article>
              <h3>更适合</h3>
              <ul>
                <li>HR、组织与人才专家</li>
                <li>制造、质量与供应链专家</li>
                <li>营销、销售与客户经营专家</li>
                <li>咨询、培训与企业服务专家</li>
              </ul>
            </article>
            <article>
              <h3>暂不适合</h3>
              <ul>
                <li>只想收集工具、提示词或证书的人</li>
                <li>没有真实问题、样本或反馈对象的人</li>
                <li>希望课程代做产品或保证订单的人</li>
                <li>暂时无法投入作业和测试时间的人</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.entry} id="first-cohort">
          <div className={styles.sectionHead}>
            <span>05 / 2026 首期计划</span>
            <div>
              <p className={styles.kicker}>课程安排</p>
              <h2>先从三天小课开始，再决定是否进入四周实战营。</h2>
            </div>
          </div>
          <div className={styles.entryFlow} aria-label="首期课程安排">
            <article><span>01</span><strong>9 月 22—24 日</strong><p>99 元三天小课。每晚 20:00—21:30，完成第一张 AI 服务产品卡。</p></article>
            <article><span>02</span><strong>9 月 25—30 日</strong><p>资格沟通。核对经验、问题、样本、反馈对象和可投入时间。</p></article>
            <article><span>03</span><strong>10 月 10 日—11 月 7 日</strong><p>4,980 元四周实战营。五个教学节点，推进原型、测试、交付与反馈。</p></article>
            <article><span>04</span><strong>首期规模</strong><p>正课最多 12 人；不足 8 人付款，课程延期，不硬开。</p></article>
          </div>
        </section>

        <section className={styles.about}>
          <div>
            <span>06 / 企业交付</span>
            <h2>行业专家是企业 AI 部署的一部分。</h2>
          </div>
          <div>
            <p>
              企业端部署通常需要 AI 全栈工程师、行业专家和咨询项目专家协作。行业专家负责问题定义、关键判断和输出复核；课程帮助行业专家把这一部分经验整理成可以与技术和项目团队协作的服务产品。
            </p>
            <Link className={styles.textLink} href={flagshipPath}>查看企业 AI 服务 →</Link>
          </div>
        </section>

        <section className={styles.apply}>
          <p className={styles.kicker}>首期准备中</p>
          <h2>课程安排和意向登记以正式通知为准。</h2>
          <p>
            目前正在完成目标用户访谈、课程试讲和案例核验。正式意向登记、付款方式、隐私与退款规则将在确认后公布。
          </p>
          <div className={styles.actions}>
            <Link className={styles.secondaryOnDark} href="/">返回一步商学首页</Link>
            <Link className={styles.textLinkOnDark} href={flagshipPath}>查看企业 AI 服务 →</Link>
          </div>
          <small>课程不保证成交、收入、就业或项目机会。学员原始经验、材料和产品归学员；公开展示须另行获得许可并完成脱敏。</small>
        </section>
      </main>

      <footer className={styles.footer}>
        <strong>一步商学</strong>
        <p>行业经验 AI 产品化与企业 AI 部署。创始人：万臻。</p>
        <nav aria-label="页脚导航">
          <Link href="/">一步商学首页</Link>
          <Link href={flagshipPath}>企业 AI 服务</Link>
          <Link href={aboutPath}>创始人万臻</Link>
        </nav>
      </footer>
      <JsonLd data={jsonLd} />
    </div>
  );
}
