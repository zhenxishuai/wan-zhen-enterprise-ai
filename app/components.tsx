import Link from "next/link";
import {
  applicationsPath,
  aboutPath,
  casesPath,
  citationKitPath,
  coursePath,
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
          <Link className="brand" href="/" aria-label="万叔个人品牌首页">
            <span className="brand-name">万叔</span>
            <span className="brand-note">把经验做成能用的工作</span>
          </Link>
          <nav className="nav-links" aria-label="主导航">
            <Link href={coursePath}>FDE 课程</Link>
            <Link href={flagshipPath}>企业服务</Link>
            <Link href={`${flagshipPath}#method`}>怎么做</Link>
            <Link href={aboutPath}>关于万臻</Link>
            <Link className="nav-cta" href={startPath}>
              梳理一项任务
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
        <strong>万叔</strong>
        <span>把经验做成别人能用的工作</span>
        <p>
          从一项具体任务出发，把材料、判断与使用者放在同一张工作台上；先做出能试的版本，再决定下一步。{" "}
          <Link href={`${flagshipPath}#sources`}>查看公开来源</Link>
        </p>
        <p className="footer-contact">
          企业服务或课程申请<br />
          <b>{`微信：${wechatId}`}</b>
        </p>
      </div>
      <nav className="footer-nav" aria-label="页脚导航">
        <div>
          <span>从哪里开始</span>
          <Link href={coursePath}>把经验做成作品</Link>
          <Link href={flagshipPath}>处理企业里的问题</Link>
          <Link href={startPath}>用 3 分钟梳理任务</Link>
        </div>
        <div>
          <span>了解工作方式</span>
          <Link href={servicesPath}>服务目录</Link>
          <Link href={applicationsPath}>业务工作流</Link>
          <Link href={programsPath}>培训大纲</Link>
          <Link href={casesPath}>第一方实践</Link>
          <Link href={industriesPath}>行业与企业类型</Link>
        </div>
        <div>
          <span>了解万叔</span>
          <Link href={aboutPath}>公开身份与事实边界</Link>
          <Link href={questionsPath}>决策问答</Link>
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
