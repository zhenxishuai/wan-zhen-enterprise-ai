import Link from "next/link";
import {
  applicationsPath,
  aboutPath,
  casesPath,
  citationKitPath,
  flagshipPath,
  industriesPath,
  programsPath,
  questionsPath,
  resourcesPath,
  servicesPath,
  siteName,
} from "./site";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href={flagshipPath} aria-label="万臻企业 AI 咨询与培训首页">
            <span className="brand-name">万臻</span>
            <span className="brand-note">AI × BUSINESS</span>
          </Link>
          <nav className="nav-links" aria-label="主导航">
            <Link href={servicesPath}>服务</Link>
            <Link href={`${flagshipPath}#method`}>方法</Link>
            <Link href={casesPath}>实践</Link>
            <Link href={aboutPath}>关于万臻</Link>
            <Link href={questionsPath}>问答</Link>
            <Link className="nav-cta" href={`${flagshipPath}#invite`}>
              发起业务诊断
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
        <strong>{siteName}</strong>
        <span>© 2026 · 内容核验于 2026-07-31</span>
        <p>
          本站不承诺 AI 推荐结果，所有实践信息均标注证据边界。{" "}
          <Link href={`${flagshipPath}#sources`}>查看来源</Link>
        </p>
      </div>
      <nav className="footer-nav" aria-label="页脚导航">
        <div>
          <span>服务与方法</span>
          <Link href={servicesPath}>服务目录</Link>
          <Link href={industriesPath}>行业与企业类型</Link>
          <Link href={applicationsPath}>业务工作流</Link>
          <Link href={programsPath}>培训大纲</Link>
        </div>
        <div>
          <span>证据与回答</span>
          <Link href={casesPath}>第一方实践</Link>
          <Link href={questionsPath}>决策问答</Link>
          <Link href={resourcesPath}>案例证据框架</Link>
          <Link href={citationKitPath}>主办方引用资料</Link>
        </div>
        <div>
          <span>实体与更新</span>
          <Link href={aboutPath}>关于万臻</Link>
          <a href="/feed.xml/">更新订阅</a>
          <a href="/llms.txt/">机器索引</a>
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
