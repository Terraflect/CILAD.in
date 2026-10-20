import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CiladPublication } from "../data/ciladData";

/**
 * Contextual Real-World Background Images for CILAD Publications.
 * Tailored specifically to the subject matter and title of each editorial piece:
 * 1. Beyond Borders 2.0 Workshop -> Academic auditorium conference hall with delegates
 * 2. Humanitarian & Refugee Protection -> Humanitarian relief, civilian protection & care
 * 3. Nelson Mandela Rules & Extradition -> Courtroom bench, judicial gavel & scales of justice
 * 4. Algorithmic Trade Barriers & AI Era -> Global digital networks & artificial intelligence infrastructure
 * 5. Uniform Civil Codes Comparative Models -> Classical Supreme Court & constitutional architecture
 * 6. WTO SPS Risk Assessment Synergies -> International commercial shipping port & cargo inspection
 * 7. WTO Palm Oil Panel Reports -> Tropical oil palm agriculture & rainforest canopy
 * 8. CILAD Monthly Issue 1 -> Classical law library with leather-bound legal treatises
 */
const REAL_WORLD_BANNER_IMAGES: Record<
  string,
  { src: string; position?: string; alt: string }
> = {
  "beyond-borders-2-proceedings": {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_35%]",
    alt: "Beyond Borders 2.0 International Law Workshop auditorium and academic delegates",
  },
  "humanitarian-refugee-human-rights-scope": {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_30%]",
    alt: "Humanitarian protection, refugee relief and human rights assistance",
  },
  "nelson-mandela-rules-extradition": {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_40%]",
    alt: "Judicial courtroom bench, judge gavel and scales of justice",
  },
  "algorithmic-trade-barriers-ai-era": {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_50%]",
    alt: "Global digital networks and AI data systems in digital trade governance",
  },
  "uniform-civil-codes-comparative-models": {
    src: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_35%]",
    alt: "Classical Supreme Court and parliamentary constitutional architecture",
  },
  "wto-sps-risk-assessment-synergies": {
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_45%]",
    alt: "International shipping cargo port, freight containers and trade inspection",
  },
  "wto-palm-oil-panel-reports": {
    src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_30%]",
    alt: "Tropical palm oil plantation and lush agricultural rainforest canopy",
  },
  "cilad-monthly-issue-1": {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_40%]",
    alt: "Grand classical law library with legal treatises and scholarly archives",
  },
  "trade-and-maritime-scope": {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_45%]",
    alt: "International maritime container vessel navigating ocean trade corridors",
  },
  "cilad-monthly-charter": {
    src: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_40%]",
    alt: "Classical jurisprudence leather-bound volumes and institutional charters",
  },
  "submission-and-editorial-guidelines": {
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    position: "object-[center_40%]",
    alt: "Scholarly drafting manuscript and editorial guidelines",
  },
};

export function EditorialBannerCard({
  article,
}: {
  article: CiladPublication;
  key?: string | number;
}) {
  const authorNames = article.authors.map((a) => a.name).join(" and ");
  const [imageError, setImageError] = useState(false);

  const realWorldConfig = REAL_WORLD_BANNER_IMAGES[article.id];
  const imageUrl =
    article.coverImage ||
    realWorldConfig?.src ||
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80";
  const imageAlt = realWorldConfig?.alt || article.title;
  const imagePosition = realWorldConfig?.position || "object-center";

  return (
    <article className="relative w-full overflow-hidden border-2 border-black/35 hover:border-black transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] bg-[#f7f5f0] group my-4">
      {/* Real-World Background Image Layer — Contextual to Title with High Visibility & Contrast */}
      {!imageError && (
        <img
          src={imageUrl}
          alt={imageAlt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImageError(true)}
          className={`absolute inset-0 w-full h-full object-cover ${imagePosition} filter contrast-[1.3] saturate-[1.25] brightness-[1.05] transition-transform duration-700 ease-out group-hover:scale-105`}
        />
      )}

      {/* Balanced Protective Gradient Scrim: Crisp White on Left for Text, Clear High-Visibility Image on Right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-35% sm:via-42% to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Editorial Content Overlay with Black Font */}
      <div className="relative z-10 px-6 py-6 md:px-9 md:py-7 min-h-[168px] flex flex-col justify-center items-start text-left max-w-2xl sm:max-w-xl md:max-w-2xl">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-lato text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-white/95 text-[#000000] border border-black/30 shadow-xs">
            {article.category}
          </span>
          <span className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#000000]/80">
            {article.date}
          </span>
        </div>

        <h3 className="font-pt text-lg sm:text-xl md:text-[22px] font-bold text-[#000000] leading-snug m-0">
          <Link
            to={`/article/${article.slug}`}
            className="text-[#000000] hover:underline"
          >
            {article.title}
          </Link>
        </h3>

        <div className="font-open text-xs sm:text-[13px] text-[#000000]/85 mt-2 font-medium">
          {authorNames}
        </div>

        <Link
          to={`/article/${article.slug}`}
          className="font-open text-xs font-bold text-[#000000] hover:underline mt-3.5 inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
        >
          <span>Continue reading</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
