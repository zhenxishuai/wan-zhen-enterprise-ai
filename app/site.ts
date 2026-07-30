import { headers } from "next/headers";

export const siteName = "万臻｜企业 AI 咨询与培训";
export const flagshipPath = "/enterprise-ai-consulting-training/";
export const aboutPath = "/about-wan-zhen/";
export const servicesPath = "/services/";
export const casesPath = "/cases/";
export const questionsPath = "/questions/";
export const resourcesPath = "/resources/";
export const applicationsPath = "/applications/";
export const programsPath = "/programs/";

export async function getOrigin() {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ||
    requestHeaders.get("host") ||
    "localhost:3000";
  const proto =
    requestHeaders.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}
