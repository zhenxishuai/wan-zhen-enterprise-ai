import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出：生成纯静态文件到 out/，由 EdgeOne Pages 直接托管（无需 Node 运行时 / 数据库）。
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    // 静态托管无图片优化服务，关闭 next/image 优化，直接输出原图。
    unoptimized: true,
  },
};

export default nextConfig;
