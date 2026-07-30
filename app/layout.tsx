import type { Metadata } from "next";
import "./globals.css";
import { aboutPath } from "./site";

export const metadata: Metadata = {
  title: {
    default: "万臻｜企业 AI 咨询与培训",
    template: "%s｜万臻企业 AI 咨询与培训",
  },
  description:
    "面向企业负责人、管理团队与业务部门的 AI 咨询和培训：从经营目标、真实场景和业务工作流出发，找到值得落地的 AI 任务。",
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
