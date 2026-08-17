import type { Metadata } from "next";
import "./globals.css";
import { aboutPath } from "./site";

export const metadata: Metadata = {
  title: {
    default: "一步商学｜行业经验 AI 产品化与企业 AI 部署",
    template: "%s｜一步商学",
  },
  description:
    "一步商学由万臻创立，提供面向行业专家的行业经验 AI 产品化课程，以及面向企业的 AI 部署相关服务。",
  authors: [{ name: "万臻", url: aboutPath }],
  creator: "万臻",
  publisher: "一步商学",
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
          title="一步商学更新"
          href="/feed.xml/"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
