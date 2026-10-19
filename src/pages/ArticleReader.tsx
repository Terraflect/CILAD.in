import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Check,
  Copy,
  Newspaper,
} from "lucide-react";
import {
  getPublishedArticles,
  calculateReadingTime,
} from "../data/ciladData";

export function ArticleReader() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const publishedArticles = getPublishedArticles();
  const currentIndex = publishedArticles.findIndex((p) => p.slug === slug);
  const article =
    currentIndex >= 0 ? publishedArticles[currentIndex] : publishedArticles[0];

  const prevArticle =
    currentIndex > 0 ? publishedArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < publishedArticles.length - 1
      ? publishedArticles[currentIndex + 1]
      : null;

  const relatedArticles = publishedArticles
    .filter((p) => p.id !== article.id)
    .slice(0, 3);

  const readingTime = calculateReadingTime(article);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Top Breadcrumb & Archive Navigation */}
      <div className="border-b border-black/15">
        <div className="icts-container py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs font-lato">
          <div className="flex items-center gap-2">
            <Link
              to="/editorials"
              className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Editorial Archive</span>
            </Link>
            <span aria-hidden="true" className="text-[#000000]/40">
              /
            </span>
            <Link
              to={`/editorials?category=${encodeURIComponent(
                article.category
              )}`}
              className="text-[#000000]/75 hover:text-[#0e0e2d] hover:underline"
            >
              {article.category}
            </Link>
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1 border border-black/25 bg-[#ffffff] text-[#000000] hover:border-[#0e0e2d] hover:text-[#0e0e2d] cursor-pointer font-semibold"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#0e0e2d]" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Permalink</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="editorial-container pt-10 md:pt-14 pb-8 border-b border-black/15 space-y-5">
        <div className="flex flex-wrap items-center gap-2 font-lato text-xs text-[#000000]/75">
          <Link
            to={`/editorials?category=${encodeURIComponent(article.category)}`}
            className="font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
          >
            {article.category}
          </Link>
          <span aria-hidden="true">·</span>
          <span>{article.format}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          {article.updatedDate && (
            <>
              <span aria-hidden="true">·</span>
              <span>Updated {article.updatedDate}</span>
            </>
          )}
          <span aria-hidden="true">·</span>
          <span>{readingTime} min read</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#000000] leading-[1.22] m-0">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="font-serif text-lg md:text-xl italic text-[#000000]/80 m-0">
            {article.subtitle}
          </p>
        )}

        {/* Author & Institutional Affiliation */}
        <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            {article.authors.map((a, idx) => (
              <div key={idx} className="font-open text-sm">
                <Link
                  to={`/editorials?author=${encodeURIComponent(a.name)}`}
                  className="font-bold text-[#000000] hover:text-[#0e0e2d] hover:underline"
                >
                  {a.name}
                </Link>
                <span className="text-[#000000]/75"> — {a.affiliation}</span>
              </div>
            ))}
          </div>

          {article.externalUrl && (
            <a
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icts-outline shrink-0"
            >
              <span>DSNLU CILAD Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* Long-Form Editorial Body */}
      <article className="editorial-container py-10 space-y-8">
        {/* Abstract */}
        <div className="border-t border-b border-black/15 py-5">
          <div className="font-lato text-[11px] font-bold uppercase tracking-widest text-[#0e0e2d] mb-2">
            Abstract
          </div>
          <p className="font-serif text-base md:text-[17px] italic leading-relaxed text-[#000000]/90 m-0 text-justify">
            {article.excerpt}
          </p>
        </div>

        {/* Cover Image & Caption (if available) */}
        {article.coverImage && (
          <figure className="my-6 space-y-2">
            <img
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto border border-black/15"
            />
            {article.coverCaption && (
              <figcaption className="font-serif text-xs italic text-[#000000]/70">
                {article.coverCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Article Sections */}
        {article.sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="space-y-4 pt-2">
            <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
              {sec.heading}
            </h2>

            {sec.paragraphs.length > 0 && (
              <div className="space-y-4 font-serif text-[17px] leading-[1.8] text-[#000000] text-justify">
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx} className="m-0">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {sec.highlightBox && (
              <div className="my-6 p-5 sm:p-6 border-l-4 border-l-[#0e0e2d] border border-black/20 bg-[#fafafa]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>{sec.highlightBox.tag || "Press Coverage"}</span>
                    {sec.highlightBox.source && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{sec.highlightBox.source}</span>
                      </>
                    )}
                  </span>
                  <span className="font-lato text-xs text-[#000000]/60">National Daily</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#000000] m-0 mb-2 leading-snug">
                  <a
                    href={sec.highlightBox.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0e0e2d] hover:underline inline-flex items-center gap-2 group"
                  >
                    <span>{sec.highlightBox.title}</span>
                    <ExternalLink className="w-4 h-4 text-[#0e0e2d] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </h3>
                {sec.highlightBox.description && (
                  <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0 mb-3 text-justify">
                    {sec.highlightBox.description}
                  </p>
                )}
                <a
                  href={sec.highlightBox.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-open text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
                >
                  <span>Read full coverage on The Hindu</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {sec.listItems && sec.listItems.length > 0 && (
              <ul
                className={`${
                  sec.orderedList ? "list-decimal" : "list-disc"
                } pl-6 space-y-2 font-serif text-[16px] leading-[1.75] text-[#000000] text-justify`}
              >
                {sec.listItems.map((item, idx) => {
                  const colonIdx = item.indexOf(":");
                  if (colonIdx > 0 && colonIdx < 60) {
                    const prefix = item.slice(0, colonIdx + 1);
                    const rest = item.slice(colonIdx + 1);
                    return (
                      <li key={idx}>
                        <strong className="font-bold text-[#000000]">
                          {prefix}
                        </strong>
                        {rest}
                      </li>
                    );
                  }
                  return <li key={idx}>{item}</li>;
                })}
              </ul>
            )}

            {sec.closingParagraphs && sec.closingParagraphs.length > 0 && (
              <div className="space-y-4 font-serif text-[17px] leading-[1.8] text-[#000000] text-justify">
                {sec.closingParagraphs.map((p, idx) => (
                  <p key={idx} className="m-0">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {sec.quote && (
              <blockquote className="icts-blockquote my-6">
                “{sec.quote.text}”
                <footer className="font-lato text-xs not-italic font-bold uppercase tracking-wider text-[#0e0e2d] mt-2">
                  — {sec.quote.attribution}
                </footer>
              </blockquote>
            )}

            {sec.table && (
              <div className="my-6 overflow-x-auto">
                {sec.table.caption && (
                  <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] mb-2">
                    {sec.table.caption}
                  </div>
                )}
                <table className="w-full border-collapse border border-black/20 text-left font-open text-xs">
                  <thead>
                    <tr className="border-b border-black/25 bg-[#ffffff]">
                      {sec.table.headers.map((th, i) => (
                        <th
                          key={i}
                          className="p-2.5 font-lato font-bold uppercase tracking-wider text-[#0e0e2d] border-r border-black/15 last:border-r-0"
                        >
                          {th}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/15">
                    {sec.table.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="p-2.5 text-[#000000] border-r border-black/10 last:border-r-0"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {/* Primary Legal Instruments */}
        {article.keyInstruments.length > 0 && (
          <div className="pt-6 border-t border-black/15 space-y-2">
            <div className="section-header">
              Primary Legal Instruments &amp; Authorities Cited
            </div>
            <ul className="list-disc pl-5 space-y-1 font-open text-sm text-[#000000]/85">
              {article.keyInstruments.map((inst, idx) => (
                <li key={idx}>{inst}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Footnotes & Institutional References */}
        {article.footnotes.length > 0 && (
          <div
            id="references"
            className="pt-6 border-t border-black/15 space-y-3"
          >
            <div className="section-header">
              Footnotes &amp; Institutional References
            </div>
            <ol className="list-decimal pl-5 space-y-2 font-open text-xs leading-relaxed text-[#000000]/85 text-justify">
              {article.footnotes.map((fn, idx) => (
                <li key={idx}>{fn}</li>
              ))}
            </ol>
          </div>
        )}

        {/* After the Article: Author Biography */}
        <div className="pt-6 border-t border-black/15 space-y-3">
          <div className="section-header">About the Author(s)</div>
          <div className="space-y-3">
            {article.authors.map((a, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-serif text-base font-bold text-[#000000]">
                  {a.name}
                </div>
                <div className="font-open text-xs text-[#000000]/75">
                  {a.affiliation}
                </div>
                {a.bio && (
                  <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0 text-justify">
                    {a.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Article Tags & Share */}
        <div className="pt-6 border-t border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 font-open text-xs">
            <span className="font-lato font-bold uppercase tracking-wider text-[#0e0e2d] mr-1">
              Tags:
            </span>
            {article.tags.map((tag, i) => (
              <span key={tag}>
                {i > 0 && <span className="mr-2 text-[#000000]/40">·</span>}
                <Link
                  to={`/editorials?tag=${encodeURIComponent(tag)}`}
                  className="text-[#000000]/80 hover:text-[#0e0e2d] hover:underline"
                >
                  {tag}
                </Link>
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="btn-icts-outline self-start sm:self-auto"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Permalink Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Share / Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Previous / Next Article Links */}
        <nav
          aria-label="Adjacent Editorials"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-black/15"
        >
          {prevArticle ? (
            <Link
              to={`/article/${prevArticle.slug}`}
              className="block border border-black/20 p-5 hover:border-[#0e0e2d] transition-colors group"
            >
              <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#000000]/60">
                &larr; Previous Editorial
              </div>
              <div className="font-serif text-base font-bold text-[#000000] group-hover:text-[#0e0e2d] mt-1.5 leading-snug">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <Link
              to={`/article/${nextArticle.slug}`}
              className="block border border-black/20 p-5 text-left md:text-right hover:border-[#0e0e2d] transition-colors group"
            >
              <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#000000]/60">
                Next Editorial &rarr;
              </div>
              <div className="font-serif text-base font-bold text-[#000000] group-hover:text-[#0e0e2d] mt-1.5 leading-snug">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* Related Editorials */}
        <section
          aria-labelledby="related-editorials-heading"
          className="pt-8 border-t border-black/15 space-y-5"
        >
          <div className="flex items-center justify-between">
            <h2
              id="related-editorials-heading"
              className="section-header m-0"
            >
              Related Editorials
            </h2>
            <Link
              to="/editorials"
              className="inline-flex items-center gap-1 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
            >
              <span>Back to Editorial Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <article
                key={rel.id}
                className="border-t border-black/15 pt-4 space-y-2"
              >
                <div className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#0e0e2d]">
                  {rel.category}
                </div>
                <h3 className="font-serif text-base font-bold text-[#000000] leading-snug m-0">
                  <Link
                    to={`/article/${rel.slug}`}
                    className="hover:text-[#0e0e2d] transition-colors"
                  >
                    {rel.title}
                  </Link>
                </h3>
                <div className="font-open text-xs text-[#000000]/70">
                  {rel.date} · {calculateReadingTime(rel)} min read
                </div>
              </article>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
