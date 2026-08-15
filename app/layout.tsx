import type { Metadata } from "next";
import "./globals.css";
import { aboutPath } from "./site";

export const metadata: Metadata = {
  title: {
    default: "一步商学｜企业 AI 咨询、培训与 FDE 课程",
    template: "%s｜一步商学",
  },
  description:
    "一步商学由万臻创立，提供企业 AI 咨询、培训、工作流试点和 FDE 顾问课程。",
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
