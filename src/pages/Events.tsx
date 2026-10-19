import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Newspaper } from "lucide-react";

export function Events() {
  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header */}
      <section className="icts-container py-10 md:py-12 border-b border-black/15">
        <div className="max-w-3xl space-y-3">
          <div className="section-header">
            Academic Symposia &amp; Workshops · DSNLU Visakhapatnam
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#000000] m-0">
            Events &amp; Academic Programmes
          </h1>
          <p className="font-open text-base leading-relaxed text-[#000000]/80 m-0 text-justify">
            Workshops, guest lectures, and international law symposia convened by the Centre for International Law and Allied Disciplines at Damodaram Sanjivayya National Law University.
          </p>
        </div>
      </section>

      {/* Upcoming Events Notice */}
      <section className="icts-container py-8 border-b border-black/15">
        <div className="border border-black/20 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              Upcoming Events &amp; Colloquia Notice
            </div>
            <p className="font-open text-sm text-[#000000]/85 m-0 text-justify">
              Announcements and registration details for upcoming CILAD guest lectures, roundtables, and workshops will be published here once officially scheduled by the Centre.
            </p>
          </div>
          <Link to="/contact" className="btn-icts-outline shrink-0">
            <span>Contact CILAD Secretariat</span>
          </Link>
        </div>
      </section>

      {/* Concluded Flagship Workshop: Beyond Borders 2.0 */}
      <section className="icts-container py-10 space-y-8">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 font-lato text-xs text-[#000000]/75">
            <span className="font-bold uppercase tracking-wider text-[#0e0e2d]">
              Concluded International Workshop
            </span>
            <span aria-hidden="true">·</span>
            <span>31 August 2026</span>
            <span aria-hidden="true">·</span>
            <span>Hybrid Mode (Webex &amp; Moot Court Hall, DSNLU)</span>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#000000] m-0">
            Beyond Borders 2.0: Careers and Trends in International Law
          </h2>

          <p className="font-open text-base leading-relaxed text-[#000000]/85 m-0 max-w-4xl pt-1 text-justify">
            The international workshop <strong>Beyond Borders 2.0</strong> concluded successfully on 31 August 2026, providing law students, researchers, and legal professionals with direct insights into career pathways, sovereign treaty practice, developments in international trade law, and contemporary issues in International Humanitarian Law.
          </p>
        </div>

        {/* Highlighted Press Coverage: The Hindu (Placed under Point 1 and above Point 2) */}
        <div className="p-5 sm:p-6 border-l-4 border-l-[#0e0e2d] border border-black/20 bg-[#fafafa]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] flex items-center gap-1.5">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Press Coverage · The Hindu</span>
            </span>
            <span className="font-lato text-xs text-[#000000]/60">National Daily · Visakhapatnam</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#000000] m-0 mb-2 leading-snug">
            <a
              href="https://www.thehindu.com/news/cities/Visakhapatnam/workshop-on-international-law-held-at-dsnlu/article71410647.ece"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0e0e2d] hover:underline inline-flex items-center gap-2 group"
            >
              <span>Workshop on International Law held at DSNLU</span>
              <ExternalLink className="w-4 h-4 text-[#0e0e2d] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </h3>
          <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0 mb-3 text-justify">
            Published in <em>The Hindu</em>: Coverage on the international workshop &quot;Beyond Borders 2.0: Careers and Trends in International Law&quot; organized by the Centre for International Law and Allied Disciplines (CILAD) at Damodaram Sanjivayya National Law University (DSNLU).
          </p>
          <a
            href="https://www.thehindu.com/news/cities/Visakhapatnam/workshop-on-international-law-held-at-dsnlu/article71410647.ece"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-open text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
          >
            <span>Read full article on The Hindu</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Chief Guest & Guest Speakers Grid (Point 2: Chief Guest Inaugural Address) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-black/15">
          {/* Chief Guest */}
          <div className="lg:col-span-5 border border-black/20 p-6 space-y-3">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              Chief Guest · Inaugural Address
            </div>
            <h3 className="font-serif text-xl font-bold text-[#000000] m-0">
              Prof. (Dr.) R. Venkata Rao
            </h3>
            <div className="font-open text-xs font-semibold text-[#000000]/75">
              Vice Chancellor (In-Charge), IIULER, Goa · Former Vice Chancellor, NLSIU Bangalore
            </div>
            <p className="font-open text-sm leading-relaxed text-[#000000]/85 m-0 text-justify">
              Distinguished legal academic with over 45 years of teaching and research experience; recipient of the Prof. N.R. Madhava Menon Best Law Teacher Award (2018).
            </p>
          </div>

          {/* Distinguished Guest Speakers */}
          <div className="lg:col-span-7 border border-black/20 p-6 space-y-4">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              Distinguished Guest Speakers &amp; Thematic Sessions
            </div>
            <ul className="list-none m-0 p-0 divide-y divide-black/10 font-open text-sm">
              <li className="py-2.5 first:pt-0">
                <strong className="text-[#000000]">Mr. Uma Shankar Yedla</strong>{" "}
                —{" "}
                <span className="text-[#000000]/75">
                  Former Director (Legal &amp; Treaties), Ministry of External Affairs, Government of India
                </span>
              </li>
              <li className="py-2.5">
                <strong className="text-[#000000]">
                  Dr. Sukhwinder Kaur Virk
                </strong>{" "}
                —{" "}
                <span className="text-[#000000]/75">
                  Assistant Professor of Law, Rajiv Gandhi National University of Law (RGNUL), Punjab
                </span>
              </li>
              <li className="py-2.5">
                <strong className="text-[#000000]">Ms. Vanshika Sulaniya</strong>{" "}
                —{" "}
                <span className="text-[#000000]/75">
                  Young Professional, Centre for Trade and Investment Law (CTIL)
                </span>
              </li>
              <li className="py-2.5 last:pb-0">
                <strong className="text-[#000000]">Ms. Surbhi Gupta</strong> —{" "}
                <span className="text-[#000000]/75">
                  Associate at Trilegal &amp; Founder of CILAD
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-wrap items-center gap-3">
          <Link
            to="/article/beyond-borders-2-careers-and-trends-in-international-law"
            className="btn-icts"
          >
            <span>Read Full Workshop Record &amp; Synthesis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link to="/coming-soon" className="btn-icts-outline">
            <span>Archival Recordings Notice</span>
          </Link>
          <a
            href="https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icts-outline"
          >
            <span>DSNLU CILAD Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.thehindu.com/news/cities/Visakhapatnam/workshop-on-international-law-held-at-dsnlu/article71410647.ece"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icts-outline inline-flex items-center gap-1.5"
          >
            <Newspaper className="w-3.5 h-3.5" />
            <span>The Hindu Report</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </main>
  );
}
