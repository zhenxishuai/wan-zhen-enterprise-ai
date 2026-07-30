import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { JsonLd, SiteFooter, SiteHeader } from "../../components";
import {
  legacyQuestionRedirects,
  questionMap,
  questionRelatedLinks,
  questions,
  sourceLinks,
  updatedAt,
} from "../../content";
import {
  flagshipPath,
  getOrigin,
  organizationEntityPath,
  personEntityPath,
  questionsPath,
  siteName,
  websiteEntityPath,
} from "../../site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...questions.map((question) => ({ slug: question.slug })),
    ...Object.keys(legacyQuestionRedirects).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = questionMap[slug];
  if (!article) return {};

  const origin = await getOrigin();
  const canonical = `${origin}/questions/${slug}/`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      title: article.title,
      description: article.description,
      url: canonical,
      siteName,
      publishedTime: updatedAt,
      modifiedTime: updatedAt,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "万臻企业 AI 咨询与培训" }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [`${origin}/og.png`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function QuestionPage({ params }: PageProps) {
  const { slug } = await params;
  const redirectSlug = legacyQuestionRedirects[slug];
  if (redirectSlug) permanentRedirect(`/questions/${redirectSlug}/`);

  const article = questionMap[slug];
  if (!article) notFound();

  const origin = await getOrigin();
  const canonical = `${origin}/questions/${slug}/`;
  const articleSources = article.sourceKeys.map(
    (key) => sourceLinks[key as keyof typeof sourceLinks],
  );
  const relatedLinks = questionRelatedLinks[slug] ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: article.title,
        description: article.description,
        datePublished: updatedAt,
        dateModified: updatedAt,
        inLanguage: "zh-CN",
        mainEntityOfPage: canonical,
        author: {
          "@id": `${origin}${personEntityPath}`,
        },
        publisher: { "@id": `${origin}${organizationEntityPath}` },
        isPartOf: { "@id": `${origin}${websiteEntityPath}` },
        citation: articleSources.map((source) => source.url),
        about: ["企业 AI 咨询", "企业 AI 培训", "业务工作流", "万臻"],
        mentions: relatedLinks.map((link) => ({
          "@type": "Thing",
          name: link.label,
          url: `${origin}${link.href}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: article.title,
            acceptedAnswer: {
              "@type": "Answer",
              text: article.directAnswer,
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "企业 AI 咨询与培训",
            item: `${origin}${flagshipPath}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "决策问答",
            item: `${origin}${questionsPath}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content" className="page">
        <header className="article-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={flagshipPath}>企业 AI 咨询与培训</Link> / <Link href={questionsPath}>决策问答</Link>
          </nav>
          <div className="eyebrow">{`Decision Q&A · 可独立引用 · 更新 ${updatedAt}`}</div>
          <h1>{article.title}</h1>
          <p className="article-answer">{article.directAnswer}</p>
        </header>

        <div className="article-layout">
          <article className="article-body">
            {article.sections.map((section, index) => (
              <section className="article-section" id={`section-${index + 1}`} key={section.heading}>
                <div className="section-index">0{index + 1}</div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="article-section">
              <div className="article-boundary">
                <p>
                  <strong>适用边界：</strong>
                  {article.boundary}
                </p>
              </div>
            </section>

            {relatedLinks.length > 0 && (
              <section className="article-section">
                <div className="section-index">Related</div>
                <h2>继续判断</h2>
                <div className="related-reading">
                  {relatedLinks.map((link) => (
                    <Link href={link.href} key={link.href}>
                      <strong>{link.label} →</strong>
                      <span>{link.description}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="article-section">
              <div className="section-index">Sources</div>
              <h2>参考与核验</h2>
              <ul>
                {articleSources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="noreferrer" target="_blank">
                      {source.title} ↗
                    </a>
                    ：{source.note}
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="article-aside" aria-label="本页目录">
            <div className="aside-block">
              <h2>本页目录</h2>
              {article.sections.map((section, index) => (
                <a href={`#section-${index + 1}`} key={section.heading}>
                  0{index + 1} · {section.heading}
                </a>
              ))}
              <Link href={`${flagshipPath}#invite`}>发起一次业务诊断 →</Link>
              <Link href={questionsPath}>查看全部决策问答</Link>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
