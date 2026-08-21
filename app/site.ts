// 静态导出场景：站点域名在构建时由 SITE_ORIGIN 环境变量注入（见 getOrigin），不再依赖请求头。
export const siteName = "一步商学｜行业经验 AI 产品化与企业 AI 部署";
export const flagshipPath = "/enterprise-ai-consulting-training/";
export const experienceProductizationPath = "/industry-expert-ai-productization/";
export const legacyFdeCoursePath = "/fde-consultant-course/";
export const aboutPath = "/about-wan-zhen/";
export const servicesPath = "/services/";
export const casesPath = "/cases/";
export const questionsPath = "/questions/";
export const resourcesPath = "/resources/";
export const applicationsPath = "/applications/";
export const programsPath = "/programs/";
export const citationKitPath = "/citation-kit/";
export const industriesPath = "/industries/";
export const secondBrainPath = "/second-brain/";
export const startPath = "/start/";
export const personEntityPath = `${aboutPath}#person`;
export const organizationEntityPath = `${flagshipPath}#organization`;
export const websiteEntityPath = "/#website";
export const wechatId = "xituzhilu11";

export async function getOrigin() {
  // 静态导出场景：域名在构建时由 SITE_ORIGIN 注入，部署后在 EdgeOne 控制台设置该环境变量。
  return process.env.SITE_ORIGIN || "https://wan-zhen-enterprise-ai.example.com";
}
