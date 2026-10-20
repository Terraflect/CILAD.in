import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getPublishedArticles, parsePublicationDate } from "../data/ciladData";
import { EditorialBannerCard } from "../components/EditorialBannerCard";
import { GlobalInstitutionsInteractiveGrid } from "../components/GlobalInstitutionsInteractiveGrid";

interface HeroSlide {
  id: string;
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  secondaryLabel: string;
  secondaryTo: string;
  imageSrc: string;
  imageAlt: string;
  historicalPlate: {
    label: string;
    work: string;
    institution: string;
  };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "institutional-mandate",
    kicker: "CENTRE FOR INTERNATIONAL LAW AND ALLIED DISCIPLINES · DSNLU VISAKHAPATNAM",
    title: "Advancing International Legal Scholarship",
    description:
      "CILAD advances the study of international law through interdisciplinary research, critical inquiry, and engagement with contemporary global challenges, connecting legal scholarship with international relations, diplomacy, economics, and public policy.",
    ctaLabel: "ABOUT CILAD",
    ctaTo: "/about",
    secondaryLabel: "EXPLORE RESEARCH AREAS",
    secondaryTo: "/research",
    imageSrc: "/images/treaty-of-munster.jpg",
    imageAlt: "Gerard ter Borch, The Ratification of the Treaty of Münster, 15 May 1648",
    historicalPlate: {
      label: "HISTORICAL PLATE",
      work: "Gerard ter Borch, The Ratification of the Treaty of Münster, 15 May 1648 (1648)",
      institution: "Rijksmuseum, Amsterdam / National Gallery, London (Public Domain)",
    },
  },
  {
    id: "cilad-monthly-bulletin",
    kicker: "FLAGSHIP PERIODICAL & SCHOLARLY REPOSITORY",
    title: "CILAD Monthly: Analytical Bulletin on International Jurisprudence",
    description:
      "Synthesizing landmark judgments from the ICJ, ITLOS, ICC, and WTO Dispute Settlement Body alongside multilateral treaty ratifications, sovereign state practice, and peer-reviewed columns.",
    ctaLabel: "READ CILAD MONTHLY",
    ctaTo: "/publications",
    secondaryLabel: "SUBMIT MANUSCRIPT",
    secondaryTo: "/submit",
    imageSrc: "/images/international-jurisprudence.jpg",
    imageAlt: "Classical jurisprudence library, Lady Justice and multilateral treaty repository",
    historicalPlate: {
      label: "SCHOLARLY REPOSITORY",
      work: "Classical Jurisprudence & Treaty Archive — International Law & Comparative Jurisprudence",
      institution: "Damodaram Sanjivayya National Law University, Visakhapatnam",
    },
  },
  {
    id: "beyond-borders-symposium",
    kicker: "INTERNATIONAL WORKSHOPS & ACADEMIC COLLOQUIA",
    title: "Beyond Borders 2.0: Careers and Trends in International Law",
    description:
      "Convening sovereign treaty practitioners, Ministry of External Affairs advisors, trade law specialists, and legal academics to examine contemporary international humanitarian and economic law.",
    ctaLabel: "VIEW WORKSHOP RECORD",
    ctaTo: "/article/beyond-borders-2-careers-and-trends-in-international-law",
    secondaryLabel: "ALL EVENTS",
    secondaryTo: "/events",
    imageSrc: "/images/beyond-borders-symposium.jpg",
    imageAlt: "Academic international conference auditorium and diplomatic plenary assembly",
    historicalPlate: {
      label: "COLLOQUIUM RECORD",
      work: "Beyond Borders 2.0: Careers & Trends in International Law — Moot Court & Plenary Hall",
      institution: "Centre for International Law and Allied Disciplines, DSNLU",
    },
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
    if (HERO_SLIDES.length <= 1) return;
    // Slide 0 lasts 25 seconds, slides 1 and 2 last 7 seconds
    const duration = activeSlide === 0 ? 25000 : 7000;
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  const currentSlide = HERO_SLIDES[activeSlide] || HERO_SLIDES[0];

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
      {/* Section 1: Institutional Hero Banner Carousel */}
      <section className="relative w-full bg-[#020512] text-white overflow-hidden border-b border-black">
        {/* Background Image Layer corresponding to current slide */}
        <div className="absolute inset-0 w-full h-full">
          <img
            key={currentSlide.imageSrc}
            src={currentSlide.imageSrc}
            alt={currentSlide.imageAlt}
            className="w-full h-full object-cover object-right md:object-center transition-all duration-700 ease-in-out"
          />
          {/* Deep Navy/Black Scrim Overlay for Typographic Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020512] via-[#020512]/92 via-45% sm:via-50% to-[#020512]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020512] via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        <div className="icts-container relative z-10 pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12">
          {/* Main Left-Aligned Text Content */}
          <div className="max-w-2xl text-left">
            <div className="font-lato text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white">
              {currentSlide.kicker}
            </div>
            <div className="w-full border-b border-white/20 mt-3 mb-6" />

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] tracking-tight m-0 mb-4 text-left">
              {currentSlide.title}
            </h1>

            <p className="font-open text-sm sm:text-base md:text-[16px] leading-relaxed text-white/90 m-0 mb-8 max-w-2xl text-left">
              {currentSlide.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-14">
              <Link
                to={currentSlide.ctaTo}
                className="bg-white text-black font-lato text-xs font-bold uppercase tracking-wider px-6 py-3 inline-flex items-center gap-2 hover:bg-white/90 transition-colors shadow-sm"
              >
                <span>{currentSlide.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to={currentSlide.secondaryTo}
                className="bg-transparent text-white border border-white font-lato text-xs font-bold uppercase tracking-wider px-6 py-3 inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <span>{currentSlide.secondaryLabel}</span>
              </Link>
            </div>
          </div>

          {/* Bottom Bar: Slide Controls & Historical Plate Citation */}
          <div className="pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="font-lato text-xs font-bold text-white tracking-widest leading-none">
                <div>0{activeSlide + 1} /</div>
                <div className="mt-1">0{HERO_SLIDES.length}</div>
              </div>
              <div className="flex items-center gap-1.5">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                    className={`h-1.5 transition-all cursor-pointer ${
                      activeSlide === idx
                        ? "w-8 bg-white"
                        : "w-3 bg-white/30 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 ml-2">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                  className="p-1.5 border border-white/30 text-white/80 hover:bg-white/10 hover:border-white hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                  className="p-1.5 border border-white/30 text-white/80 hover:bg-white/10 hover:border-white hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="font-open text-[11px] sm:text-xs text-white/70 sm:text-right max-w-xl">
              <span className="font-bold tracking-wider uppercase text-white/90">
                {currentSlide.historicalPlate.label}:
              </span>{" "}
              <span className="italic">{currentSlide.historicalPlate.work}</span>{" "}
              — {currentSlide.historicalPlate.institution}
            </div>
          </div>
        </div>
      </section>

      {/* Section C: Latest Editorials — Principal Homepage Feature (JFIEL Banner Stack Style) */}
      <section
        aria-labelledby="latest-editorials-heading"
        className="icts-container py-12 md:py-16 animate-fade-in-section"
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

          <div className="flex items-center gap-4 sm:gap-6 font-lato text-xs font-bold uppercase tracking-wider">
            <Link
              to="/submit"
              className="px-4 py-2 bg-[#000000] text-[#ffffff] hover:bg-[#1a1a1a] border border-black transition-all inline-flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Contribute</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/editorials"
              className="inline-flex items-center gap-1.5 text-[#000000]/80 hover:text-[#000000] hover:underline"
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

        {/* Interactive Global Institutions Code Component */}
        <GlobalInstitutionsInteractiveGrid />
      </section>
    </main>
  );
}
