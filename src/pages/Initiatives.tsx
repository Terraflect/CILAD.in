import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CILAD_INITIATIVES } from "../data/ciladData";

export function Initiatives() {
  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header */}
      <section className="icts-container py-10 md:py-12 border-b border-black/15">
        <div className="max-w-3xl space-y-3">
          <div className="section-header">
            Programmes &amp; Academic Outreach · DSNLU Visakhapatnam
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#000000] m-0">
            Initiatives &amp; Academic Programmes
          </h1>
          <p className="font-open text-base leading-relaxed text-[#000000]/80 m-0 text-justify">
            CILAD advances international legal literacy and doctrinal research through structured academic programmes, monthly analytical digests, thematic research clusters, and international workshops.
          </p>
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
