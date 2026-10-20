import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CILAD_INITIATIVES } from "../data/ciladData";

export function Initiatives() {
  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header with The Charging Chasseur Artwork Backdrop */}
      <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden border-b border-black">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/charging-chasseur.jpg"
            alt="Théodore Géricault, The Charging Chasseur, 1812"
            className="w-full h-full object-cover object-center filter contrast-[1.35] brightness-[0.95] opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/65 via-50% to-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
        </div>

        <div className="icts-container relative z-10 py-12 md:py-16">
          <div className="max-w-3xl space-y-3.5 text-left">
            <div className="inline-block font-lato text-xs font-bold uppercase tracking-widest text-white/90 border-b border-white/30 pb-1">
              Programmes &amp; Academic Outreach · DSNLU Visakhapatnam
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight m-0">
              Initiatives &amp; Academic Programmes
            </h1>
            <p className="font-open text-sm sm:text-base leading-relaxed text-white/90 m-0 max-w-2xl">
              CILAD advances international legal literacy and doctrinal research through structured academic programmes, monthly analytical digests, thematic research clusters, and international workshops.
            </p>
            <div className="pt-2">
              <span className="font-open text-[11px] text-white/70 italic">
                HISTORICAL PLATE: Théodore Géricault, The Charging Chasseur (1812) — Louvre Museum, Paris (Public Domain)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives List */}
      <section className="icts-container py-10">
        <div className="divide-y divide-black/15">
          {CILAD_INITIATIVES.map((item) => (
            <article
              key={item.id}
              className="py-8 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              <div className="lg:col-span-4 space-y-1.5">
                <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                  Initiative {item.index} · {item.scope}
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
                  {item.title}
                </h2>
                <div className="font-serif text-sm italic text-[#000000]/75">
                  {item.subtitle}
                </div>
              </div>

              <div className="lg:col-span-8 lg:border-l lg:border-black/15 lg:pl-8 space-y-4">
                <p className="font-open text-base leading-relaxed text-[#000000]/90 m-0 text-justify">
                  {item.description}
                </p>

                <div>
                  {item.isExternal ? (
                    <a
                      href={item.linkTo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
                    >
                      <span>{item.linkLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={item.linkTo}
                      className="inline-flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
                    >
                      <span>{item.linkLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
