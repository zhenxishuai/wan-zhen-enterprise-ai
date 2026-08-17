import Link from "next/link";
import {
  applicationsPath,
  aboutPath,
  casesPath,
  citationKitPath,
  experienceProductizationPath,
  flagshipPath,
  industriesPath,
  programsPath,
  questionsPath,
  resourcesPath,
  secondBrainPath,
  servicesPath,
  startPath,
  wechatId,
} from "./site";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="一步商学首页">
            <span className="brand-name">一步商学</span>
            <span className="brand-note">行业经验 AI 产品化与企业 AI 部署</span>
          </Link>
          <nav className="nav-links" aria-label="主导航">
            <Link href={flagshipPath}>企业服务</Link>
            <Link href={experienceProductizationPath}>行业专家课程</Link>
            <Link href={servicesPath}>服务目录</Link>
            <Link href={aboutPath}>创始人万臻</Link>
            <Link className="nav-cta" href={startPath}>
              做企业机会自检
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-statement">
        <strong>一步商学</strong>
        <span>行业经验 AI 产品化与企业 AI 部署</span>
        <p>
          一步商学由万臻创立，面向企业提供 AI 部署相关服务，也面向行业专家提供行业经验 AI 产品化课程。{" "}
          <Link href={`${flagshipPath}#sources`}>查看公开来源</Link>
        </p>
        <p className="footer-contact">
          咨询企业服务或行业专家课程<br />
          <b>{`微信：${wechatId}`}</b>
        </p>
      </div>
      <nav className="footer-nav" aria-label="页脚导航">
        <div>
          <span>服务</span>
          <Link href={flagshipPath}>企业 AI 咨询与培训</Link>
          <Link href={experienceProductizationPath}>行业经验 AI 产品化</Link>
          <Link href={startPath}>企业机会自检</Link>
        </div>
        <div>
          <span>了解服务内容</span>
          <Link href={servicesPath}>服务目录</Link>
          <Link href={applicationsPath}>业务工作流</Link>
          <Link href={programsPath}>培训大纲</Link>
          <Link href={casesPath}>第一方实践</Link>
          <Link href={industriesPath}>行业与企业类型</Link>
        </div>
        <div>
          <span>关于一步商学</span>
          <Link href={aboutPath}>创始人万臻</Link>
          <Link href={questionsPath}>常见问题</Link>
          <Link href={resourcesPath}>案例证据框架</Link>
          <Link href={citationKitPath}>主办方引用资料</Link>
          <Link href={secondBrainPath}>第二大脑</Link>
          <a href="/feed.xml/">更新订阅</a>
        </div>
      </nav>
    </footer>
  );
}

export function ContentByline({ updatedAt }: { updatedAt: string }) {
  return (
    <p className="content-byline">
      内容作者与事实核验：
      <Link href={aboutPath} rel="author">
        万臻
      </Link>
      <span aria-hidden="true"> · </span>
      <time dateTime={updatedAt}>更新于 {updatedAt}</time>
    </p>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
