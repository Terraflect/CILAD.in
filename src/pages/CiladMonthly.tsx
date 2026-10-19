import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  BookOpen,
  FileText,
  ChevronDown,
  ChevronUp,
  Download,
  Users,
  Calendar,
} from "lucide-react";
import {
  getPublishedArticles,
  calculateReadingTime,
  parsePublicationDate,
  CILAD_MONTHLY_ISSUE_1_DATA,
} from "../data/ciladData";

export function CiladMonthly() {
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"articles" | "board" | "note">("articles");
  const [showFullDetails, setShowFullDetails] = useState<boolean>(true);
  const [selectedArticleNum, setSelectedArticleNum] = useState<number | null>(null);

  const publishedRecords = useMemo(() => getPublishedArticles(), []);

  // Section 2: Issue 1 articles sorted chronologically newest to oldest (newest at top)
  const issueArticlesChronological = useMemo(() => {
    return [...CILAD_MONTHLY_ISSUE_1_DATA.articles].sort((a, b) => {
      const timeA = a.isoDate ? new Date(a.isoDate).getTime() : a.number;
      const timeB = b.isoDate ? new Date(b.isoDate).getTime() : b.number;
      return timeB - timeA;
    });
  }, []);

  const formats = [
    "all",
    "Scholarly Article",
    "Periodical Digest",
    "Workshop Proceedings",
    "Research Scope Brief",
    "Editorial Charter",
  ];

  const filteredPublications = useMemo(() => {
    const list =
      selectedFormat === "all"
        ? [...publishedRecords]
        : publishedRecords.filter((p) => p.format === selectedFormat);

    // Chronological order from latest to oldest (newest first by default)
    return list.sort((a, b) => {
      const timeA = parsePublicationDate(a);
      const timeB = parsePublicationDate(b);
      return timeB - timeA || b.sortOrder - a.sortOrder;
    });
  }, [publishedRecords, selectedFormat]);

  const handlePrintDownload = () => {
    const pdfUrl = "https://mega.nz/file/hQECES4K#Xy19MInSkyk8jTPMFm6qePz91__MPFDDblvnM5-P8Xs";
    const win = window.open(pdfUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header */}
      <section className="icts-container py-10 md:py-12 border-b border-black/15">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="section-header">
              Institutional Repository · DSNLU Visakhapatnam
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#000000] m-0">
              Publications &amp; CILAD Monthly
            </h1>
            <p className="font-open text-base leading-relaxed text-[#000000]/80 m-0 text-justify">
              The formal academic repository of the Centre for International Law and Allied Disciplines, featuring the flagship <strong>CILAD Monthly</strong> analytical bulletin, research scope briefs, workshop proceedings, and institutional charters.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icts"
            >
              <span>DSNLU CILAD Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link to="/submit" className="btn-icts-outline">
              <span>Submit Manuscript</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED INAUGURAL PUBLICATION: CILAD MONTHLY ISSUE 1 (PDF EDITION) */}
      <section className="icts-container py-10 border-b-2 border-[#0e0e2d] bg-[#ffffff] space-y-6">
        <div className="border-2 border-[#0e0e2d] p-6 md:p-8 space-y-6 bg-[#ffffff]">
          {/* Header Row: Badges & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/15 pb-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 bg-[#0e0e2d] text-[#ffffff] font-lato text-xs font-bold uppercase tracking-wider">
                Featured Publication
              </span>
              <span className="px-2.5 py-1 border border-black/25 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                Issue 1 · November 2025
              </span>
              <span className="font-open text-xs text-[#000000]/70">
                28 Pages · 5 Scholarly Articles + Editorial Note
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://mega.nz/file/hQECES4K#Xy19MInSkyk8jTPMFm6qePz91__MPFDDblvnM5-P8Xs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icts"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Full Issue</span>
              </a>
              <button
                type="button"
                onClick={handlePrintDownload}
                className="btn-icts-outline inline-flex items-center gap-1.5 cursor-pointer"
                title="Print or save as PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>

          {/* Title & Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-3">
              <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                Damodaram Sanjivayya National Law University, Visakhapatnam
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#000000] m-0 leading-tight">
                CILAD Monthly — Issue 1 (Inaugural Edition)
              </h2>
              <p className="font-serif text-base italic text-[#000000]/80 m-0 text-justify">
                A dedicated peer-reviewed academic periodical chronicling international trade jurisprudence, WTO SPS safeguards, comparative uniform civil codes, algorithmic trade barriers, and the Nelson Mandela Rules in extradition law.
              </p>
              <p className="font-open text-xs text-[#000000]/70 m-0 pt-1">
                <strong>Honorary Editor:</strong> {CILAD_MONTHLY_ISSUE_1_DATA.editorialBoard.honoraryEditor} ·{" "}
                <strong>Honorary Chairperson:</strong> {CILAD_MONTHLY_ISSUE_1_DATA.editorialBoard.honoraryChairperson} ·{" "}
                <strong>Managing Editor:</strong> {CILAD_MONTHLY_ISSUE_1_DATA.managingEditor}
              </p>
            </div>

            {/* Visual Cover Preview Card */}
            <div className="lg:col-span-4 border border-black/20 p-5 bg-[#ffffff] space-y-3">
              <div className="flex items-center justify-between border-b border-black/15 pb-2">
                <span className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#0e0e2d]">
                  Periodical Details
                </span>
                <span className="font-mono text-xs text-[#000000]/60">ISSN / DSNLU</span>
              </div>
              <div className="space-y-1.5 font-open text-xs text-[#000000]/85">
                <div>
                  <strong>Volume:</strong> Issue 1 (November 2025)
                </div>
                <div>
                  <strong>Format:</strong> Digital Periodical &amp; Formal PDF
                </div>
                <div>
                  <strong>Publisher:</strong> Centre for International Law and Allied Disciplines (CILAD)
                </div>
                <div>
                  <strong>Institution:</strong> DSNLU Visakhapatnam
                </div>
              </div>
              <div className="pt-2 border-t border-black/10 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setShowFullDetails(!showFullDetails)}
                  className="inline-flex items-center gap-1 font-lato font-bold text-[#0e0e2d] uppercase tracking-wider hover:underline cursor-pointer"
                >
                  <span>{showFullDetails ? "Hide Table of Contents" : "View Table of Contents"}</span>
                  {showFullDetails ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Collapsible Tabs: Table of Contents, Editorial Board, Editor's Note */}
          {showFullDetails && (
            <div className="pt-4 border-t border-black/15 space-y-5">
              {/* Tabs */}
              <div className="flex flex-wrap items-center gap-2 border-b border-black/15 pb-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("articles")}
                  className={`px-4 py-2 font-lato text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    activeTab === "articles"
                      ? "bg-[#0e0e2d] text-[#ffffff] border-[#0e0e2d]"
                      : "bg-[#ffffff] text-[#000000] border-black/20 hover:border-[#0e0e2d]"
                  }`}
                >
                  Table of Contents (5 Articles)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("note")}
                  className={`px-4 py-2 font-lato text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    activeTab === "note"
                      ? "bg-[#0e0e2d] text-[#ffffff] border-[#0e0e2d]"
                      : "bg-[#ffffff] text-[#000000] border-black/20 hover:border-[#0e0e2d]"
                  }`}
                >
                  Editor&apos;s Note (p. iv)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("board")}
                  className={`px-4 py-2 font-lato text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    activeTab === "board"
                      ? "bg-[#0e0e2d] text-[#ffffff] border-[#0e0e2d]"
                      : "bg-[#ffffff] text-[#000000] border-black/20 hover:border-[#0e0e2d]"
                  }`}
                >
                  Editorial Board &amp; Governance
                </button>
              </div>

              {/* Tab 1: Articles Index */}
              {activeTab === "articles" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-open text-[#000000]/70 gap-1">
                    <span>Articles arranged in chronological order from newest to oldest:</span>
                    <span className="font-mono">PDF Pages 1–28</span>
                  </div>

                  <div className="divide-y divide-black/15 border border-black/20">
                    {issueArticlesChronological.map((art) => {
                      const isExpanded = selectedArticleNum === art.number;
                      return (
                        <div key={art.number} className="p-4 bg-[#ffffff] hover:bg-black/[0.015] transition-colors">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                            <div className="space-y-1 flex-1">
                              <div className="flex flex-wrap items-center gap-2 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                                <span>Article {art.number}</span>
                                <span aria-hidden="true">·</span>
                                <span className="text-[#000000]/70">{art.category}</span>
                                <span aria-hidden="true">·</span>
                                <span className="font-mono text-[#000000]/60">pp. {art.pages}</span>
                                {art.date && (
                                  <>
                                    <span aria-hidden="true">·</span>
                                    <span className="inline-flex items-center gap-1 font-open text-xs font-semibold text-[#000000]/85 lowercase">
                                      <Calendar className="w-3.5 h-3.5 text-[#0e0e2d]" />
                                      <span>{art.date}</span>
                                    </span>
                                  </>
                                )}
                              </div>
                              <h3 className="font-serif text-lg font-bold text-[#000000] m-0 leading-snug">
                                <Link
                                  to={`/article/${art.slug}`}
                                  className="text-[#000000] hover:text-[#0e0e2d] hover:underline transition-colors"
                                >
                                  {art.title}
                                </Link>
                              </h3>
                              <div className="font-open text-xs text-[#000000]/80">
                                <strong>By:</strong> {art.author}{" "}
                                <span className="text-[#000000]/60">({art.authorAffiliation})</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0 pt-1">
                              <Link
                                to={`/article/${art.slug}`}
                                className="inline-flex items-center gap-1 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
                              >
                                <span>Read Blog</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                              <span className="text-black/30" aria-hidden="true">·</span>
                              <button
                                type="button"
                                onClick={() => setSelectedArticleNum(isExpanded ? null : art.number)}
                                className="font-lato text-xs font-bold uppercase tracking-wider text-[#000000]/70 hover:text-[#0e0e2d] hover:underline cursor-pointer"
                              >
                                {isExpanded ? "Hide Abstract" : "Abstract"}
                              </button>
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="mt-3 pt-3 border-t border-black/10 font-open text-xs leading-relaxed text-[#000000]/85 bg-black/[0.02] p-3 space-y-2">
                              <p className="m-0 text-justify">
                                <strong>Abstract:</strong> {art.abstract}
                              </p>
                              <div className="pt-1 flex items-center gap-4">
                                <Link
                                  to={`/article/${art.slug}`}
                                  className="inline-flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
                                >
                                  <span>Read Full Article Blog</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                                <span className="text-black/30" aria-hidden="true">·</span>
                                <Link
                                  to="/article/cilad-monthly-issue-1-november-2025"
                                  className="inline-flex items-center gap-1 font-open text-xs text-[#000000]/70 hover:text-[#0e0e2d] hover:underline"
                                >
                                  <span>View in Complete Issue 1 Dossier</span>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab 2: Editor's Note */}
              {activeTab === "note" && (
                <div className="border border-black/20 p-6 bg-[#ffffff] space-y-3 font-serif">
                  <div className="flex items-center gap-2 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                    <FileText className="w-4 h-4" />
                    <span>Inaugural Editor&apos;s Note · Page iv</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#000000] m-0">
                    Notes from the Editor — S. Phanitawya
                  </h3>
                  <p className="text-sm leading-relaxed text-[#000000]/85 italic m-0 text-justify">
                    &ldquo;{CILAD_MONTHLY_ISSUE_1_DATA.editorNote}&rdquo;
                  </p>
                  <div className="pt-2 font-lato text-xs font-bold uppercase tracking-wider text-[#000000]">
                    — S. Phanitawya, Managing Editor, CILAD Monthly Issue 1
                  </div>
                </div>
              )}

              {/* Tab 3: Editorial Board */}
              {activeTab === "board" && (
                <div className="border border-black/20 p-6 bg-[#ffffff] space-y-4">
                  <div className="flex items-center gap-2 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                    <Users className="w-4 h-4" />
                    <span>Editorial Board of CILAD Monthly — Issue 1</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-open text-xs">
                    <div className="space-y-1.5">
                      <div className="font-lato font-bold uppercase tracking-wider text-[#0e0e2d]">
                        Statutory Leadership
                      </div>
                      <div className="font-serif font-bold text-sm text-[#000000]">
                        {CILAD_MONTHLY_ISSUE_1_DATA.editorialBoard.honoraryEditor}
                      </div>
                      <div className="font-serif font-bold text-sm text-[#000000] pt-2">
                        {CILAD_MONTHLY_ISSUE_1_DATA.editorialBoard.honoraryChairperson}
                      </div>
                      <div className="text-[#000000]/70">Honorary Chairperson, CILAD</div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="font-lato font-bold uppercase tracking-wider text-[#0e0e2d]">
                        Faculty Members
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-[#000000]/85">
                        {CILAD_MONTHLY_ISSUE_1_DATA.editorialBoard.facultyMembers.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1.5">
                      <div className="font-lato font-bold uppercase tracking-wider text-[#0e0e2d]">
                        Student Editorial Board
                      </div>
                      <div>
                        <strong>Convenor:</strong> {CILAD_MONTHLY_ISSUE_1_DATA.editorialBoard.convenor}
                      </div>
                      <div>
                        <strong>Co-Convenor:</strong> {CILAD_MONTHLY_ISSUE_1_DATA.editorialBoard.coConvenor}
                      </div>
                      <div>
                        <strong>Managing Editor:</strong> {CILAD_MONTHLY_ISSUE_1_DATA.editorialBoard.managingEditor}
                      </div>
                      <div className="text-[#000000]/70 pt-1">
                        And 18 Junior &amp; Senior Student Editors at DSNLU
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Flagship Periodical Overview: CILAD Monthly (Preserved Content) */}
      <section className="icts-container py-10 border-b border-black/15 space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="section-header">Flagship Periodical</div>
          <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
            CILAD Monthly — Analytical Bulletin
          </h2>
          <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0 text-justify">
            Published under the aegis of CILAD at Damodaram Sanjivayya National Law University, <strong>CILAD Monthly</strong> chronicles pivotal developments in public and private international law, multilateral treaty ratifications, and international tribunal decisions across three permanent analytical departments:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="border border-black/15 p-5 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              01. Global Jurisprudence
            </div>
            <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0 text-justify">
              Digests of landmark judgments, provisional measures, and advisory opinions from the ICJ, ICC, ITLOS, WTO Dispute Settlement Body, and arbitral tribunals.
            </p>
          </div>

          <div className="border border-black/15 p-5 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              02. Treaty &amp; Policy Monitor
            </div>
            <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0 text-justify">
              Systematic tracking of bilateral and multilateral conventions, state ratifications, reservations, and Ministry of External Affairs (Legal &amp; Treaties) practice.
            </p>
          </div>

          <div className="border border-black/15 p-5 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              03. Peer-Review Columns
            </div>
            <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0 text-justify">
              Curated scholarly essays and case briefs authored by faculty members, legal practitioners, and student researchers at DSNLU.
            </p>
          </div>
        </div>
      </section>

      {/* Categorized Publications Repository (Preserved Content) */}
      <section className="icts-container py-10 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-black/15">
          <div>
            <div className="section-header mb-1">Catalogued Outputs</div>
            <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
              Published Reports, Digests &amp; Proceedings
            </h2>
            <div className="font-open text-xs text-[#000000]/70 mt-1">
              Arranged in chronological order from latest to oldest
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Format Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              {formats.map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setSelectedFormat(fmt)}
                  className={`px-3 py-1.5 font-lato text-xs font-bold uppercase tracking-wider border cursor-pointer transition-colors ${
                    selectedFormat === fmt
                      ? "bg-[#0e0e2d] text-[#ffffff] border-[#0e0e2d]"
                      : "bg-[#ffffff] text-[#000000] border-black/25 hover:border-[#0e0e2d]"
                  }`}
                >
                  {fmt === "all" ? "All Formats" : fmt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="divide-y divide-black/15">
          {filteredPublications.map((pub) => (
            <article
              key={pub.id}
              className="py-6 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              <div className="lg:col-span-3 space-y-1.5">
                <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                  {pub.format}
                </div>
                <div className="flex items-center gap-1.5 font-open text-xs font-semibold text-[#000000]/85">
                  <Calendar className="w-3.5 h-3.5 text-[#0e0e2d] shrink-0" />
                  <span>{pub.date}</span>
                </div>
                <div className="font-open text-xs text-[#000000]/65">
                  {pub.category} · {calculateReadingTime(pub)} min read
                </div>
              </div>

              <div className="lg:col-span-9 space-y-2.5">
                <h3 className="font-serif text-xl font-bold text-[#000000] leading-snug m-0">
                  <Link
                    to={`/article/${pub.slug}`}
                    className="hover:text-[#0e0e2d] transition-colors"
                  >
                    {pub.title}
                  </Link>
                </h3>

                {pub.subtitle && (
                  <div className="font-serif text-sm italic text-[#000000]/75">
                    {pub.subtitle}
                  </div>
                )}

                <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0 text-justify">
                  {pub.excerpt}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-open">
                  <div className="text-[#000000]/80">
                    <strong>Author(s):</strong>{" "}
                    {pub.authors.map((a) => a.name).join("; ")}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      to={`/article/${pub.slug}`}
                      className="inline-flex items-center gap-1.5 font-lato font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
                    >
                      <span>Read Document</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {pub.externalUrl && (
                      <a
                        href={pub.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-lato font-bold uppercase tracking-wider text-[#000000] hover:text-[#0e0e2d] hover:underline"
                      >
                        <span>DSNLU Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
