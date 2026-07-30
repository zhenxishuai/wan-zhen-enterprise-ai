import Link from "next/link";
import { flagshipPath, siteName } from "./site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={flagshipPath} aria-label="万臻企业 AI 落地培训首页">
          <span className="brand-name">万臻</span>
          <span className="brand-note">企业 AI 落地培训</span>
        </Link>
        <nav className="nav-links" aria-label="主导航">
          <Link href={`${flagshipPath}#method`}>方法</Link>
          <Link href={`${flagshipPath}#cases`}>实践</Link>
          <Link href={`${flagshipPath}#questions`}>问答</Link>
          <Link className="nav-cta" href={`${flagshipPath}#invite`}>
            邀请分享 ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 {siteName} · 内容最后核验：2026-07-31</span>
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
