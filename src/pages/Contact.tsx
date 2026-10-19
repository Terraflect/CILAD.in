import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header */}
      <section className="icts-container py-10 md:py-12 border-b border-black/15">
        <div className="max-w-3xl space-y-3">
          <div className="section-header">
            Institutional Correspondence · DSNLU Visakhapatnam
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#000000] m-0">
            Contact CILAD
          </h1>
          <p className="font-open text-base leading-relaxed text-[#000000]/80 m-0 text-justify">
            For academic inquiries, research collaborations, workshop participation, or manuscript submissions to <strong>CILAD Monthly</strong>, please reach the Centre through the verified institutional channels below.
          </p>
        </div>
      </section>

      {/* Contact Details Grid */}
      <section className="icts-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="border border-black/20 p-6 space-y-3">
            <div className="flex items-center gap-2 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>University Address</span>
            </div>
            <h2 className="font-serif text-lg font-bold text-[#000000] m-0">
              Centre for International Law and Allied Disciplines (CILAD)
            </h2>
            <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0">
              Damodaram Sanjivayya National Law University (DSNLU),
              <br />
              Nyayaprastha, Sabbavaram,
              <br />
              Visakhapatnam – 531 035,
              <br />
              Andhra Pradesh, India
            </p>
          </div>

          {/* Electronic Mail & Telephone */}
          <div className="border border-black/20 p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                <Mail className="w-4 h-4 shrink-0" />
                <span>Official Electronic Mail</span>
              </div>
              <p className="font-open text-sm text-[#000000]/85 m-0">
                Editorial &amp; General Inquiries:
              </p>
              <a
                href="mailto:cilad@dsnlu.ac.in"
                className="font-serif text-lg font-bold text-[#0e0e2d] hover:underline block"
              >
                cilad@dsnlu.ac.in
              </a>
            </div>

            <div className="pt-3 border-t border-black/15 space-y-1.5">
              <div className="flex items-center gap-2 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                <Phone className="w-4 h-4 shrink-0" />
                <span>University Telephone</span>
              </div>
              <p className="font-open text-sm text-[#000000]/85 m-0">
                +91 8924 248216 (DSNLU Exchange)
              </p>
            </div>
          </div>

          {/* Official Portals & Social Media */}
          <div className="border border-black/20 p-6 space-y-4">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              Official Portals &amp; Channels
            </div>
            <ul className="list-none m-0 p-0 space-y-2.5 font-open text-sm">
              <li>
                <a
                  href="https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#000000] font-semibold hover:text-[#0e0e2d] hover:underline"
                >
                  <span>CILAD on Official DSNLU Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0e0e2d]" />
                </a>
              </li>
              <li>
                <a
                  href="https://dsnlu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#000000] hover:text-[#0e0e2d] hover:underline"
                >
                  <span>Damodaram Sanjivayya National Law University</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0e0e2d]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/centre-for-international-law-and-allied-disciplines-60462a31a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#000000] hover:text-[#0e0e2d] hover:underline"
                >
                  <span>CILAD Official LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0e0e2d]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cilad_dsnlu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#000000] hover:text-[#0e0e2d] hover:underline"
                >
                  <span>CILAD Official Instagram (@cilad_dsnlu)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0e0e2d]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Editorial Submission Callout */}
        <div className="mt-10 pt-8 border-t border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-serif text-xl font-bold text-[#000000] m-0">
              Submitting a Manuscript or Case Brief?
            </h2>
            <p className="font-open text-sm text-[#000000]/80 m-0">
              Use our online submission dossier formatter or review the editorial guidelines before emailing your manuscript.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/submit" className="btn-icts">
              <span>Prepare Manuscript Submission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/article/call-for-monthly-columns-and-editorial-guidelines"
              className="btn-icts-outline"
            >
              <span>Editorial Charter</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
