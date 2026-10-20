import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RESEARCH_AREAS } from "../data/ciladData";

export function Research() {
  const [selectedCluster, setSelectedCluster] = useState<string>("all");

  const clusters = [
    "all",
    "Public & Governance",
    "Economic & Maritime",
    "Rights & Humanitarian",
  ];

  const filteredAreas =
    selectedCluster === "all"
      ? RESEARCH_AREAS
      : RESEARCH_AREAS.filter((a) => a.cluster === selectedCluster);

  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header with The Great Wave off Kanagawa Artwork Backdrop */}
      <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden border-b border-black">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/great-wave.jpg"
            alt="Katsushika Hokusai, The Great Wave off Kanagawa, c. 1831"
            className="w-full h-full object-cover object-center filter contrast-[1.35] brightness-[0.95] opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/65 via-50% to-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
        </div>

        <div className="icts-container relative z-10 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3.5 text-left">
              <div className="inline-block font-lato text-xs font-bold uppercase tracking-widest text-white/90 border-b border-white/30 pb-1">
                Thematic Inquiry · 08 Core Domains
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight m-0">
                Research Areas &amp; Legal Frameworks
              </h1>
              <p className="font-open text-sm sm:text-base leading-relaxed text-white/90 m-0 max-w-2xl">
                CILAD structures its doctrinal and interdisciplinary scholarship across eight interconnected domains of public and private international law, examining multilateral treaties, international judicial decisions, and evolving state practice.
              </p>
              <div className="pt-2">
                <span className="font-open text-[11px] text-white/70 italic">
                  HISTORICAL PLATE: Katsushika Hokusai, The Great Wave off Kanagawa (c. 1831) — Metropolitan Museum of Art / Public Domain
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {clusters.map((cluster) => (
                <button
                  key={cluster}
                  type="button"
                  onClick={() => setSelectedCluster(cluster)}
                  className={`px-3.5 py-2 font-lato text-xs font-bold uppercase tracking-wider border cursor-pointer transition-colors ${
                    selectedCluster === cluster
                      ? "bg-white text-black border-white"
                      : "bg-black/40 text-white border-white/40 hover:bg-white/20 hover:border-white"
                  }`}
                >
                  {cluster === "all" ? "All Domains (08)" : cluster}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Catalogue */}
      <section className="icts-container py-10">
        <div className="divide-y divide-black/15">
          {filteredAreas.map((area) => (
            <article
              key={area.index}
              id={area.slug}
              className="py-8 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 space-y-2">
                <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                  {area.index} · {area.cluster}
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
                  {area.title}
                </h2>
                <p className="font-open text-sm text-[#000000]/80 m-0 text-justify">
                  {area.desc}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/editorials?category=${encodeURIComponent(area.title)}`}
                    className="inline-flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
                  >
                    <span>Browse Editorials in {area.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-black/15 lg:pl-8">
                <p className="font-open text-base leading-relaxed text-[#000000]/90 m-0 text-justify">
                  {area.focusScope}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <div className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#0e0e2d] mb-1.5">
                      Primary Legal Instruments
                    </div>
                    <ul className="list-disc pl-4 space-y-1 font-open text-xs text-[#000000]/85">
                      {area.keyInstruments.map((inst) => (
                        <li key={inst}>{inst}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#0e0e2d] mb-1.5">
                      International Tribunals &amp; Forums
                    </div>
                    <ul className="list-disc pl-4 space-y-1 font-open text-xs text-[#000000]/85">
                      {area.tribunalsAndForums.map((forum) => (
                        <li key={forum}>{forum}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Thematic Research Scope Briefs Link Strip */}
        <div className="mt-10 pt-8 border-t border-black/15 space-y-4">
          <div>
            <div className="section-header mb-1">Publications &amp; Policy Briefs</div>
            <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
              Thematic Research Scope Briefs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/20 p-6 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              Economic &amp; Maritime Cluster Brief
            </div>
            <h3 className="font-serif text-lg font-bold text-[#000000] m-0">
              Legal Architecture of the Global Economy &amp; Oceanic Commons
            </h3>
            <p className="font-open text-xs leading-relaxed text-[#000000]/80 m-0 text-justify">
              Detailed research brief covering CILAD&apos;s agenda in International Trade Law, Law of the Sea (UNCLOS), and International Dispute Settlement.
            </p>
            <div className="pt-2">
              <Link
                to="/article/international-trade-and-maritime-law-research-programme"
                className="inline-flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
              >
                <span>Read Research Scope Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="border border-black/20 p-6 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              Rights &amp; Humanitarian Cluster Brief
            </div>
            <h3 className="font-serif text-lg font-bold text-[#000000] m-0">
              Protection of the Individual in Peacetime and Armed Conflict
            </h3>
            <p className="font-open text-xs leading-relaxed text-[#000000]/80 m-0 text-justify">
              Detailed research brief examining the convergence of International Humanitarian Law, Refugee Law, and Human Rights Law.
            </p>
            <div className="pt-2">
              <Link
                to="/article/humanitarian-law-refugee-protection-and-human-rights-inquiry"
                className="inline-flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
              >
                <span>Read Research Scope Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}
