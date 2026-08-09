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

const remoteUrl = "http://pro.tail487e3a.ts.net:8765/";

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

        <section className="brain-console" aria-label="第二大脑工作台入口">
          <div className="brain-launch">
            <p className="section-kicker">TAILNET ONLY · 已启动</p>
            <h2>从这台设备打开私有工作台</h2>
            <p>
              先确认设备已连接万叔自己的 Tailscale，再打开第二大脑。文章库仍留在
              Mac 上，不复制到公开站点。
            </p>
            <a
              className="button-primary"
              href={remoteUrl}
              rel="noreferrer"
              target="_blank"
            >
              打开第二大脑 ↗
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
