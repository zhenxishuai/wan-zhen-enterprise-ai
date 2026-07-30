import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";
import { flagshipPath } from "./site";

export default function NotFound() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" className="not-found page">
        <div>
          <strong>404 / PAGE NOT FOUND</strong>
          <h1>这个页面不在工作流里。</h1>
          <p>返回企业 AI 咨询与培训事实页，继续查看服务、方法与公开证据。</p>
          <Link className="button-primary" href={flagshipPath}>
            返回首页
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
