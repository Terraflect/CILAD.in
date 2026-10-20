import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Mail,
  ArrowRight,
  FileText,
} from "lucide-react";

const SCOPE_OF_CONTRIBUTIONS = [
  "Public and private international law",
  "International trade, investment, and taxation",
  "International arbitration and dispute settlement",
  "International human rights and humanitarian law",
  "International environmental law and climate governance",
  "Cross-border transactions, banking and finance, and corporate regulation",
  "Technology, intellectual property, and emerging regulatory frameworks",
  "International institutions, global governance, and international relations",
  "Comparative legal developments and best practices across jurisdictions",
];

interface SubmissionFormState {
  authorName: string;
  email: string;
  affiliation: string;
  authorBio: string;
  coAuthorDetails: string;
  title: string;
  category: string;
  originalityConfirmed: boolean;
}

export function SubmitArticle() {
  const [form, setForm] = useState<SubmissionFormState>({
    authorName: "",
    email: "",
    affiliation: "",
    authorBio: "",
    coAuthorDetails: "",
    title: "",
    category: SCOPE_OF_CONTRIBUTIONS[0],
    originalityConfirmed: false,
  });

  const [error, setError] = useState<string | null>(null);
  const [submittedPacket, setSubmittedPacket] = useState<{
    referenceId: string;
    mailtoUrl: string;
    bodyText: string;
  } | null>(null);
  const [copiedPacket, setCopiedPacket] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !form.authorName.trim() ||
      !form.email.trim() ||
      !form.affiliation.trim()
    ) {
      setError(
        "Please complete your full name, contact email, and current designation or affiliation."
      );
      return;
    }
    if (!form.title.trim() || form.authorBio.trim().length < 15) {
      setError(
        "Please provide the title of your contribution and a short author biography of one or two lines."
      );
      return;
    }
    if (!form.originalityConfirmed) {
      setError(
        "Please confirm that the submission is your original work and complies with the CILAD Blog Submission Guidelines."
      );
      return;
    }

    const refId = `CILAD-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    const bodyLines = [
      `Submission | CILAD Blog | ${form.title.trim()}`,
      `Reference ID: ${refId}`,
      `--------------------------------------------------`,
      `1. Author Name: ${form.authorName.trim()}`,
      `   Email: ${form.email.trim()}`,
      `   Designation / Affiliation: ${form.affiliation.trim()}`,
      ``,
      `2. Short Author Biography (1–2 lines):`,
      `   ${form.authorBio.trim()}`,
      ``,
      `3. Co-Author Name(s) & Affiliation(s) (maximum of two authors per contribution):`,
      `   ${form.coAuthorDetails.trim() || "None (Single Author)"}`,
      ``,
      `   Thematic Scope: ${form.category}`,
      ``,
      `4. Attached Document:`,
      `   Please find attached the complete contribution (ordinarily 1,200–1,800 words in English, with relevant hyperlinks embedded in the text and no footnotes/endnotes) in Microsoft Word (.docx) format.`,
      ``,
      `Declaration: The author(s) confirm that this contribution is original work, does not infringe upon the intellectual property rights of any third party, and has been reviewed and approved by all co-authors.`,
    ].join("\n");

    const subject = encodeURIComponent(
      `Submission | CILAD Blog | ${form.title.trim()}`
    );
    const body = encodeURIComponent(bodyLines);
    const mailtoUrl = `mailto:cilad@dsnlu.ac.in?subject=${subject}&body=${body}`;

    try {
      const saved = JSON.parse(
        localStorage.getItem("cilad_submissions") || "[]"
      );
      saved.unshift({
        refId,
        ...form,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem(
        "cilad_submissions",
        JSON.stringify(saved.slice(0, 10))
      );
    } catch {
      // Ignore storage quota errors
    }

    setSubmittedPacket({
      referenceId: refId,
      mailtoUrl,
      bodyText: bodyLines,
    });
  };

  const handleCopyPacket = () => {
    if (!submittedPacket) return;
    navigator.clipboard?.writeText(submittedPacket.bodyText);
    setCopiedPacket(true);
    setTimeout(() => setCopiedPacket(false), 2000);
  };

  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header with Guernica Historical Artwork Backdrop */}
      <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden border-b border-black">
        {/* Background Image: Pablo Picasso's Guernica (1937) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/aistudio/xl_d0a36b6e1947-guernica-feature_44a332aa.jpg"
            alt="Pablo Picasso, Guernica, 1937 — Artistic reflection on international humanitarian law and civilian protection"
            className="w-full h-full object-cover object-center filter contrast-[1.2] brightness-[0.7] opacity-65"
          />
          {/* Deep Dark Protective Scrim Overlay to ensure 100% typographic clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/88 via-45% sm:via-55% to-[#000000]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
        </div>

        <div className="icts-container relative z-10 py-12 md:py-16">
          <div className="max-w-3xl space-y-3.5 text-left">
            <div className="inline-block font-lato text-xs font-bold uppercase tracking-widest text-white/90 border-b border-white/30 pb-1">
              Contribute to CILAD Blog · DSNLU Visakhapatnam
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight m-0">
              Manuscript Submission Portal
            </h1>
            <p className="font-open text-sm sm:text-base leading-relaxed text-white/90 m-0 max-w-2xl">
              The Centre for International Law and Allied Disciplines (CILAD), Damodaram Sanjivayya National Law University (DSNLU), invites original, analytical, and accessible contributions from practitioners, academicians, researchers, and PhD scholars working in international law and allied disciplines.
            </p>

            <div className="pt-2">
              <span className="font-open text-[11px] text-white/70 italic">
                HISTORICAL PLATE: Pablo Picasso, Guernica (1937) — Museo Nacional Centro de Arte Reina Sofía, Madrid (Public Domain / Art for Peace &amp; Humanitarian Law)
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="icts-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 5 Columns: Highlighted Summary & Direct Link to Full Guidelines Page */}
          <div className="lg:col-span-5 space-y-6">
            {/* Highlighted Callout Box Forwarding to the Full Guidelines Page */}
            <div className="border-2 border-[#0e0e2d] p-6 bg-[#ffffff] space-y-4">
              <div className="flex items-center gap-2 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                <FileText className="w-4 h-4 shrink-0" />
                <span>Mandatory Pre-Submission Reading</span>
              </div>
              <h2 className="font-serif text-xl font-bold text-[#000000] m-0 leading-snug">
                CILAD Blog | Call for Blogs: Submission Guidelines
              </h2>
              <p className="font-open text-xs leading-relaxed text-[#000000]/80 m-0 text-justify">
                Before preparing your dispatch, please review the complete nine-part Editorial Charter covering thematic scope, quality standards, hyperlink citation rules, publication ethics, and editorial review procedures.
              </p>
              <div className="pt-1">
                <Link
                  to="/article/call-for-monthly-columns-and-editorial-guidelines"
                  className="btn-icts w-full justify-center"
                >
                  <span>Read Full Submission Guidelines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Key Submission Highlights (At-a-Glance) */}
            <div className="border border-black/20 p-6 space-y-4">
              <div className="section-header">Key Submission Highlights</div>
              <dl className="space-y-3 font-open text-xs m-0">
                <div className="border-b border-black/10 pb-2.5">
                  <dt className="font-lato font-bold uppercase tracking-wider text-[#0e0e2d]">
                    Word Limit &amp; Language
                  </dt>
                  <dd className="m-0 mt-1 text-[#000000]/85 leading-relaxed">
                    Ordinarily <strong>1,200 to 1,800 words</strong> in{" "}
                    <strong>English</strong> (inclusive of headings, exclusive of author biography).
                  </dd>
                </div>

                <div className="border-b border-black/10 pb-2.5">
                  <dt className="font-lato font-bold uppercase tracking-wider text-[#0e0e2d]">
                    Citations &amp; Hyperlinks
                  </dt>
                  <dd className="m-0 mt-1 text-[#000000]/85 leading-relaxed">
                    Cite all sources via{" "}
                    <strong>relevant hyperlinks embedded in the text</strong>.{" "}
                    <strong>Footnotes and endnotes should not be used.</strong>
                  </dd>
                </div>

                <div className="border-b border-black/10 pb-2.5">
                  <dt className="font-lato font-bold uppercase tracking-wider text-[#0e0e2d]">
                    Co-Authorship
                  </dt>
                  <dd className="m-0 mt-1 text-[#000000]/85 leading-relaxed">
                    Permitted up to a maximum of{" "}
                    <strong>two authors per contribution</strong> (all co-authors must be copied on the submission email).
                  </dd>
                </div>

                <div className="border-b border-black/10 pb-2.5">
                  <dt className="font-lato font-bold uppercase tracking-wider text-[#0e0e2d]">
                    Required Format &amp; Attachments
                  </dt>
                  <dd className="m-0 mt-1 text-[#000000]/85 leading-relaxed">
                    Complete article in editable{" "}
                    <strong>Microsoft Word (.docx)</strong> format (abstracts are not considered in place of full submissions) + a{" "}
                    <strong>1–2 line author biography</strong>.
                  </dd>
                </div>

                <div>
                  <dt className="font-lato font-bold uppercase tracking-wider text-[#0e0e2d]">
                    Required Email Subject Line
                  </dt>
                  <dd className="m-0 mt-1 font-serif font-bold text-[#000000]">
                    Submission | CILAD Blog | [Title of Contribution]
                  </dd>
                </div>
              </dl>
            </div>

            {/* Direct Editorial Correspondence */}
            <div className="border border-black/20 p-6 space-y-2.5 font-open text-xs">
              <div className="section-header">
                Topic Pitches &amp; Editorial Correspondence
              </div>
              <p className="m-0 text-[#000000]/80 leading-relaxed text-justify">
                Authors uncertain whether a proposed topic falls within the scope of the CILAD Blog may share a brief topic description with the Editorial Board at:
              </p>
              <div className="pt-1">
                <a
                  href="mailto:cilad@dsnlu.ac.in?subject=Submission%20%7C%20CILAD%20Blog%20%7C%20%5BTitle%20of%20Contribution%5D"
                  className="text-[#0e0e2d] font-bold hover:underline text-sm"
                >
                  cilad@dsnlu.ac.in
                </a>
              </div>
              <div className="pt-1">
                <a
                  href="https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#0e0e2d] hover:underline font-semibold"
                >
                  <span>DSNLU CILAD Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Submission Email Formatter */}
          <div className="lg:col-span-7">
            <div className="border border-black/20 p-6 md:p-8">
              <h2 className="font-serif text-2xl font-bold text-[#000000] m-0 mb-1">
                Submission
              </h2>
              <p className="font-open text-xs text-[#000000]/75 mb-6 text-justify">
                Complete the fields below to format your official submission email for{" "}
                <strong>cilad@dsnlu.ac.in</strong> with the subject line{" "}
                <strong>Submission | CILAD Blog | [Title of Contribution]</strong>.
              </p>

              {submittedPacket ? (
                <div className="space-y-4">
                  <div className="p-4 border border-black/25 space-y-1">
                    <div className="flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>
                        Submission Email Ready ({submittedPacket.referenceId})
                      </span>
                    </div>
                    <p className="font-open text-xs text-[#000000]/85 m-0">
                      Click below to open your email client addressed to{" "}
                      <strong>cilad@dsnlu.ac.in</strong>, copy any co-author on the email, and attach your complete <strong>.docx</strong> contribution before sending.
                    </p>
                  </div>

                  <pre className="p-4 bg-[#ffffff] border border-black/25 text-xs font-mono text-[#000000] overflow-x-auto whitespace-pre-wrap">
                    {submittedPacket.bodyText}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3">
                    <a href={submittedPacket.mailtoUrl} className="btn-icts">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Email Client to Send</span>
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf8NG6Vq0iXMQk5lh1FGkRTWYs9kRTXRqWdsjPnwTTPq4qBLA/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icts-outline inline-flex items-center gap-1.5"
                    >
                      <span>Google Form</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyPacket}
                      className="btn-icts-outline"
                    >
                      {copiedPacket ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied Text</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Formatted Text</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmittedPacket(null)}
                      className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline cursor-pointer"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {error && (
                    <div
                      role="alert"
                      className="p-3 border border-[#0e0e2d] text-xs text-[#000000] flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 text-[#0e0e2d] shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="authorName"
                        className="block font-lato text-xs font-bold uppercase tracking-wider text-[#000000] mb-1.5"
                      >
                        Author Full Name *
                      </label>
                      <input
                        id="authorName"
                        type="text"
                        required
                        value={form.authorName}
                        onChange={(e) =>
                          setForm({ ...form, authorName: e.target.value })
                        }
                        placeholder="e.g. Ananya Sharma"
                        className="w-full bg-[#ffffff] border border-black/30 px-3 py-2 text-sm text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-lato text-xs font-bold uppercase tracking-wider text-[#000000] mb-1.5"
                      >
                        Contact Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="author@university.edu.in"
                        className="w-full bg-[#ffffff] border border-black/30 px-3 py-2 text-sm text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="affiliation"
                        className="block font-lato text-xs font-bold uppercase tracking-wider text-[#000000] mb-1.5"
                      >
                        Current Designation &amp; Affiliation *
                      </label>
                      <input
                        id="affiliation"
                        type="text"
                        required
                        value={form.affiliation}
                        onChange={(e) =>
                          setForm({ ...form, affiliation: e.target.value })
                        }
                        placeholder="e.g. PhD Scholar, DSNLU Visakhapatnam"
                        className="w-full bg-[#ffffff] border border-black/30 px-3 py-2 text-sm text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="coAuthorDetails"
                        className="block font-lato text-xs font-bold uppercase tracking-wider text-[#000000] mb-1.5"
                      >
                        Co-Author &amp; Affiliation (Max 2 Authors)
                      </label>
                      <input
                        id="coAuthorDetails"
                        type="text"
                        value={form.coAuthorDetails}
                        onChange={(e) =>
                          setForm({ ...form, coAuthorDetails: e.target.value })
                        }
                        placeholder="Optional — copy co-author on email"
                        className="w-full bg-[#ffffff] border border-black/30 px-3 py-2 text-sm text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="title"
                      className="block font-lato text-xs font-bold uppercase tracking-wider text-[#000000] mb-1.5"
                    >
                      Title of Contribution *
                    </label>
                    <input
                      id="title"
                      type="text"
                      required
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                      placeholder="Enter title of your blog contribution"
                      className="w-full bg-[#ffffff] border border-black/30 px-3 py-2 text-sm text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block font-lato text-xs font-bold uppercase tracking-wider text-[#000000] mb-1.5"
                    >
                      Primary Thematic Scope
                    </label>
                    <select
                      id="category"
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                      className="w-full bg-[#ffffff] border border-black/30 px-3 py-2 text-sm text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                    >
                      {SCOPE_OF_CONTRIBUTIONS.map((scope) => (
                        <option key={scope} value={scope}>
                          {scope}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="authorBio"
                      className="block font-lato text-xs font-bold uppercase tracking-wider text-[#000000] mb-1.5"
                    >
                      Short Author Biography (1–2 Lines) *
                    </label>
                    <textarea
                      id="authorBio"
                      rows={3}
                      required
                      value={form.authorBio}
                      onChange={(e) =>
                        setForm({ ...form, authorBio: e.target.value })
                      }
                      placeholder="Indicate current designation or affiliation and relevant area of interest or expertise for each author..."
                      className="w-full bg-[#ffffff] border border-black/30 p-3 text-sm text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#000000]/85">
                    <input
                      type="checkbox"
                      checked={form.originalityConfirmed}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          originalityConfirmed: e.target.checked,
                        })
                      }
                      className="mt-0.5 accent-[#0e0e2d]"
                    />
                    <span>
                      I have reviewed the{" "}
                      <Link
                        to="/article/call-for-monthly-columns-and-editorial-guidelines"
                        className="text-[#0e0e2d] font-semibold underline"
                      >
                        CILAD Blog Submission Guidelines
                      </Link>{" "}
                      and confirm that this contribution is original work (ordinarily 1,200–1,800 words in English, with embedded hyperlinks and no footnotes/endnotes) and will attach the complete <strong>.docx</strong> file to the email.
                    </span>
                  </label>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button type="submit" className="btn-icts">
                      <span>Submission</span>
                    </button>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf8NG6Vq0iXMQk5lh1FGkRTWYs9kRTXRqWdsjPnwTTPq4qBLA/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icts-outline inline-flex items-center gap-1.5"
                    >
                      <span>Google Form</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
