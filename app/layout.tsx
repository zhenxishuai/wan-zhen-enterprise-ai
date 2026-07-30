import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "万臻｜企业 AI 落地培训",
    template: "%s｜万臻企业 AI 培训",
  },
  description:
    "面向商协会与会员企业的 AI 落地培训资料：从业务场景、真实问题和工作流出发，把 AI 变成可执行的组织能力。",
  icons: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
