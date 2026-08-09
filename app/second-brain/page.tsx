import type { Metadata } from "next";
import Link from "next/link";
import {
  chatGPTSignOutPath,
  requireChatGPTUser,
} from "../chatgpt-auth";
import { SiteFooter, SiteHeader } from "../components";
import { flagshipPath, secondBrainPath } from "../site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "万叔第二大脑｜内容工作台",
  description: "万叔私用的知识召回与内容工作台。",
  robots: { index: false, follow: false },
};

const remoteUrl = "https://pro.tail487e3a.ts.net/";

export default async function SecondBrainPage() {
  const user = await requireChatGPTUser(secondBrainPath);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page" id="main-content">
        <section className="hub-hero compact brain-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 第二大脑
          </nav>
          <p className="section-kicker">PRIVATE WORKSPACE · TAILSCALE</p>
          <h1>万叔第二大脑</h1>
          <p className="hub-answer">
            已用 ChatGPT 登录，并通过 Tailscale 私网连接这台 Mac
            上的文章库。远程设备也要登录同一个 Tailnet。
          </p>
          <div className="brain-session" aria-label="当前登录信息">
            <span>当前用户：{user.displayName}</span>
            <a href={remoteUrl} rel="noreferrer" target="_blank">
              单独打开工作台 ↗
            </a>
            <a href={chatGPTSignOutPath(flagshipPath)}>退出站点登录</a>
          </div>
        </section>

        <section className="brain-console" aria-label="第二大脑工作台">
          <iframe
            allow="clipboard-write"
            src={remoteUrl}
            title="万叔第二大脑内容工作台"
          />
          <noscript>
            <p>
              浏览器未启用 JavaScript，请
              <a href={remoteUrl}>单独打开第二大脑</a>。
            </p>
          </noscript>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
