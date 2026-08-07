import type { Metadata } from "next";
import "./globals.css";
import { aboutPath } from "./site";

export const metadata: Metadata = {
  title: {
    default: "万臻｜企业 AI 咨询与培训",
    template: "%s｜万臻企业 AI 咨询与培训",
  },
  description:
    "万臻面向企业负责人、管理团队与业务部门提供企业 AI 讲课、内训、咨询和 FDE 工作流试点：从真实业务问题出发，形成可运行、可复盘的 AI 交付。",
  authors: [{ name: "万臻", url: aboutPath }],
  creator: "万臻",
  publisher: "壹步咨询",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="author" href={aboutPath} />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="万臻企业 AI 咨询与培训更新"
          href="/feed.xml/"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
