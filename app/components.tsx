import Link from "next/link";
import {
  aboutPath,
  casesPath,
  flagshipPath,
  questionsPath,
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
      <span>© 2026 {siteName} · 内容核验于 2026-07-31</span>
      <span>
        本站不承诺 AI 推荐结果，所有实践信息均标注证据边界。{" "}
        <Link href={`${flagshipPath}#sources`}>查看来源</Link>
      </span>
    </footer>
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
