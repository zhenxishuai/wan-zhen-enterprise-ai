import { headers } from "next/headers";

export const siteName = "万臻企业 AI 落地培训";
export const flagshipPath = "/wan-zhen-enterprise-ai-training/";

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
