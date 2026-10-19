import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getPublishedArticles, parsePublicationDate } from "../data/ciladData";
import { EditorialBannerCard } from "../components/EditorialBannerCard";

interface HeroSlide {
  id: string;
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  secondaryLabel: string;
  secondaryTo: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "institutional-mandate",
    kicker: "Centre for International Law and Allied Disciplines · DSNLU Visakhapatnam",
    title: "Advancing International Legal Scholarship",
    description:
      "CILAD advances the study of international law through interdisciplinary research, critical inquiry, and engagement with contemporary global challenges and connecting legal scholarship with international relations, diplomacy, economics, and public policy",
    ctaLabel: "About CILAD",
    ctaTo: "/about",
    secondaryLabel: "Explore Research Areas",
    secondaryTo: "/research",
  },
  {
    id: "cilad-monthly-bulletin",
    kicker: "Flagship Periodical & Scholarly Repository",
    title: "CILAD Monthly: Analytical Bulletin on International Jurisprudence & Treaties",
    description:
      "Synthesizing landmark judgments from the ICJ, ITLOS, ICC, and WTO Dispute Settlement Body alongside multilateral treaty ratifications, sovereign state practice, and peer-reviewed columns.",
    ctaLabel: "Read CILAD Monthly",
    ctaTo: "/publications",
    secondaryLabel: "Submit Manuscript",
    secondaryTo: "/submit",
  },
  {
    id: "beyond-borders-symposium",
    kicker: "International Workshops & Academic Colloquia",
    title: "Beyond Borders 2.0: Careers and Trends in International Law",
    description:
      "Convening sovereign treaty practitioners, Ministry of External Affairs advisors, trade law specialists, and legal academics to examine contemporary international humanitarian and economic law.",
    ctaLabel: "View Workshop Record",
    ctaTo: "/article/beyond-borders-2-careers-and-trends-in-international-law",
    secondaryLabel: "All Events",
    secondaryTo: "/events",
  },
];

export function Home() {
  const publishedArticles = useMemo(() => {
    return getPublishedArticles()
      .filter(
        (article) =>
          article.id !== "trade-and-maritime-scope" &&
          article.id !== "cilad-monthly-charter" &&
          article.id !== "submission-and-editorial-guidelines"
      )
      .sort((a, b) => {
        const timeA = parsePublicationDate(a);
        const timeB = parsePublicationDate(b);
        return timeB - timeA || b.sortOrder - a.sortOrder;
      });
  }, []);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeSlide];

  const handlePrevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Section 1: Institutional Hero Banner Slider */}
      <section className="w-full border-b border-black/15 bg-[#ffffff]">
        <div className="relative w-full bg-[#fbfbfb] text-[#000000] overflow-hidden border-b border-black/15">
          {/* Subtle Cartographic & Meridian Line Backdrop in Black */}
          <svg
            viewBox="0 0 1200 360"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
            aria-hidden="true"
          >
            <circle
              cx="600"
              cy="180"
              r="240"
              stroke="#000000"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="600"
              cy="180"
              r="175"
              stroke="#000000"
              strokeWidth="0.8"
              strokeDasharray="4 4"
              fill="none"
            />
            <ellipse
              cx="600"
              cy="180"
              rx="240"
              ry="90"
              stroke="#000000"
              strokeWidth="0.8"
              fill="none"
            />
            <ellipse
              cx="600"
              cy="180"
              rx="95"
              ry="240"
              stroke="#000000"
              strokeWidth="0.8"
              fill="none"
            />
            <line
              x1="300"
              y1="180"
              x2="900"
              y2="180"
              stroke="#000000"
              strokeWidth="0.6"
            />
            <line
              x1="600"
              y1="0"
              x2="600"
              y2="360"
              stroke="#000000"
              strokeWidth="0.6"
            />
          </svg>

          <div className="icts-container relative z-10 py-10 md:py-16">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-4">
              <div className="font-lato text-xs font-bold uppercase tracking-widest text-[#000000] flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#000000]" aria-hidden="true" />
                <span>{currentSlide.kicker}</span>
                <span className="inline-block w-2 h-2 bg-[#000000]" aria-hidden="true" />
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] font-bold text-[#000000] leading-[1.2] m-0 text-center">
                {currentSlide.title}
              </h1>

              <p className="font-open text-sm sm:text-base md:text-[17px] leading-[1.75] text-[#000000] m-0 text-center max-w-2xl">
                {currentSlide.description}
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to={currentSlide.ctaTo}
                  className="bg-[#ffffff] text-[#000000] border-2 border-[#000000] font-lato text-xs font-bold uppercase tracking-wider px-6 py-2.5 inline-flex items-center gap-2 hover:bg-[#000000] hover:text-[#ffffff] transition-colors"
                >
                  <span>{currentSlide.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={currentSlide.secondaryTo}
                  className="bg-transparent text-[#000000] border border-black/40 font-lato text-xs font-bold uppercase tracking-wider px-6 py-2.5 inline-flex items-center gap-2 hover:border-[#000000] hover:bg-black/5 transition-colors"
                >
                  <span>{currentSlide.secondaryLabel}</span>
                </Link>
              </div>
            </div>

            {/* Slider Controls & Indicators */}
            <div className="mt-10 pt-4 border-t border-black/15 flex items-center justify-between gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                <span className="font-lato text-xs font-bold text-[#000000] tracking-widest uppercase">
                  0{activeSlide + 1} / 0{HERO_SLIDES.length}
                </span>
                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`View slide ${idx + 1}: ${slide.title}`}
                      className={`h-1.5 transition-all cursor-pointer ${
                        activeSlide === idx
                          ? "w-8 bg-[#000000]"
                          : "w-3 bg-[#000000]/25 hover:bg-[#000000]/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                  className="p-1.5 border border-black/30 text-[#000000] hover:bg-black/5 hover:border-black transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                  className="p-1.5 border border-black/30 text-[#000000] hover:bg-black/5 hover:border-black transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: Latest Editorials — Principal Homepage Feature (JFIEL Banner Stack Style) */}
      <section
        aria-labelledby="latest-editorials-heading"
        className="icts-container py-12 md:py-16"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-black">
          <div>
            <div className="section-header mb-1">Editorial Forum</div>
            <h2
              id="latest-editorials-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#000000] m-0"
            >
              Latest Developments
            </h2>
          </div>

          <div className="flex items-center gap-6 font-lato text-xs font-bold uppercase tracking-wider">
            <Link
              to="/submit"
              className="text-[#000000]/75 hover:text-[#0e0e2d] transition-colors"
            >
              Contribute
            </Link>
            <Link
              to="/editorials"
              className="inline-flex items-center gap-1.5 text-[#0e0e2d] hover:underline"
            >
              <span>View All Editorials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Vertical Stack of Editorial Banner Cards matching ARTICLES.png */}
        <div className="space-y-6 pt-8">
          {publishedArticles.map((article) => (
            <EditorialBannerCard key={article.id} article={article} />
          ))}
        </div>

        {/* Bottom Archive & Submission Action Strip */}
        <div className="mt-12 pt-6 border-t border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="font-open text-sm text-[#000000]/80">
            Browse the full editorial catalogue by subject category, author, or publication series.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/editorials" className="btn-icts">
              <span>View All Editorials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/article/call-for-monthly-columns-and-editorial-guidelines"
              className="btn-icts-outline"
            >
              <span>Editorial Guidelines</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
