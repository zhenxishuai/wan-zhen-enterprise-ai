import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "万臻｜企业 AI 咨询与培训",
    template: "%s｜万臻企业 AI 咨询与培训",
  },
  description:
    "面向企业负责人、管理团队与业务部门的 AI 咨询和培训：从经营目标、真实场景和业务工作流出发，找到值得落地的 AI 任务。",
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
