import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, SiteFooter, SiteHeader } from "../../components";
import { updatedAt } from "../../content";
import { programMap, programs } from "../../programs";
import { flagshipPath, getOrigin, programsPath, siteName } from "../../site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programMap[slug];
  if (!program) return {};
  const origin = await getOrigin();
  const canonical = `${origin}${programsPath}${slug}/`;
  return {
    title: program.name,
    description: program.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      title: program.name,
      description: program.description,
      url: canonical,
      siteName,
      modifiedTime: updatedAt,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = programMap[slug];
  if (!program) notFound();
  const origin = await getOrigin();
  const canonical = `${origin}${programsPath}${slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${canonical}#course`,
        name: program.name,
        description: program.directAnswer,
        provider: {
          "@type": "Person",
          name: "万臻",
          url: `${origin}/about-wan-zhen/`,
        },
        audience: { "@type": "BusinessAudience", audienceType: program.audience },
        teaches: program.takeaways,
        inLanguage: "zh-CN",
        url: canonical,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "企业 AI 咨询与培训", item: `${origin}${flagshipPath}` },
          { "@type": "ListItem", position: 2, name: "参考大纲", item: `${origin}${programsPath}` },
          { "@type": "ListItem", position: 3, name: program.name, item: canonical },
        ],
      },
    ],
  };

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content" className="page">
        <header className="detail-hero">
          <nav className="breadcrumbs" aria-label="面包屑">
            <Link href={programsPath}>参考大纲</Link> / {program.format}
          </nav>
          <div className="eyebrow">Training program · 参考结构 · 更新 {updatedAt}</div>
          <h1>{program.name}</h1>
          <p className="detail-answer">{program.directAnswer}</p>
          <div className="program-facts">
            <div><span>形式</span><strong>{program.format}</strong></div>
            <div><span>适合</span><strong>{program.audience}</strong></div>
          </div>
        </header>

        <section className="prework-section">
          <header>
            <p className="section-kicker">Before the room</p>
            <h2>会前准备</h2>
          </header>
          <ol>
            {program.prework.map((item, index) => (
              <li key={item}><span>0{index + 1}</span><p>{item}</p></li>
            ))}
          </ol>
        </section>

        <section className="agenda-section">
          <header>
            <p className="section-kicker">Reference agenda</p>
            <h2>现场模块</h2>
          </header>
          <div>
            {program.agenda.map((item) => (
              <article key={`${item.time}-${item.title}`}>
                <time>{item.time}</time>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="takeaway-section">
          <div>
            <p className="section-kicker">Leave with work</p>
            <h2>不只带走课件</h2>
          </div>
          <div>
            {program.takeaways.map((item, index) => <span key={item}>0{index + 1} / {item}</span>)}
          </div>
        </section>

        <aside className="case-boundary">
          <span>适用边界</span>
          <p>{program.boundary}</p>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
