import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SiteFooter, SiteHeader } from "../components";
import { questions, updatedAt } from "../content";
import { flagshipPath, getOrigin, questionsPath, siteName } from "../site";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();
  const canonical = `${origin}${questionsPath}`;
  const title = "企业 AI 咨询与培训决策问答";
  const description =
    "回答企业选择 AI 顾问、培训对象、项目交付、场景优先级、预算、准备材料与效果评估等真实采购问题。";
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      title,
      description,
      url: canonical,
      siteName,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function QuestionsPage() {
  const origin = await getOrigin();
  const canonical = `${origin}${questionsPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: "企业 AI 咨询与培训决策问答",
        dateModified: updatedAt,
        inLanguage: "zh-CN",
      },
      {
        "@type": "FAQPage",
        mainEntity: questions.map((question) => ({
          "@type": "Question",
          name: question.title,
          url: `${origin}${questionsPath}${question.slug}/`,
          acceptedAnswer: { "@type": "Answer", text: question.directAnswer },
        })),
      },
    ],
  };

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content" className="page">
        <header className="hub-hero compact">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / 决策问答
          </nav>
          <div className="eyebrow">Decision Q&A · {questions.length} 个可独立引用答案</div>
          <h1>企业真正会问的，<br />不是“AI 厉不厉害”。</h1>
          <p className="hub-answer">
            这里集中回答选择顾问、咨询交付、培训对象、场景优先级、项目预算与效果评估。每个问题先给直接答案，再写判断标准、适用边界和来源。
          </p>
        </header>

        <section className="question-index">
          {questions.map((question, index) => (
            <article key={question.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>
                  <Link href={`${questionsPath}${question.slug}/`}>{question.title}</Link>
                </h2>
                <p>{question.directAnswer}</p>
              </div>
              <Link aria-label={`阅读：${question.title}`} href={`${questionsPath}${question.slug}/`}>
                ↗
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
