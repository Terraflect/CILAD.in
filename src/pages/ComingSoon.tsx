import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function ComingSoon() {
  const location = useLocation();
  const is404 = location.pathname !== "/coming-soon";

  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      <section className="icts-container py-12 md:py-16">
        <div className="max-w-3xl border border-black/20 p-6 md:p-10 space-y-5">
          <div className="section-header">
            {is404 ? "Notice · Resource Not Found" : "Workshop Proceedings & Archival Notice"}
          </div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#000000] m-0">
            {is404 ? "Page Not Found or Under Archival Review" : "Proceedings & Archival Update"}
          </h1>
          <blockquote className="icts-blockquote m-0 text-justify">
            {is404
              ? "The requested URL was not found in the current CILAD institutional directory. You may explore our published editorials, analytical bulletins, or return to the homepage."
              : "The international workshop Beyond Borders 2.0: Careers and Trends in International Law concluded successfully on 31 August 2026 at Damodaram Sanjivayya National Law University. Full archival recordings and extended proceedings are being prepared for publication."}
          </blockquote>
          <p className="font-open text-base leading-relaxed text-[#000000]/85 m-0 text-justify">
            {is404
              ? "All active research areas, publication records, and event syntheses are available through the main navigation menu."
              : "In the meantime, you may read the thematic workshop synthesis and session record in the CILAD Editorial Archive or visit the DSNLU portal."}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link to="/" className="btn-icts">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Home</span>
            </Link>
            <Link to="/editorials" className="btn-icts-outline">
              <span>Browse All Editorials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/article/beyond-borders-2-careers-and-trends-in-international-law"
              className="btn-icts-outline"
            >
              <span>Beyond Borders 2.0 Record</span>
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
          </div>
        </div>
      </section>
    </main>
  );
}
