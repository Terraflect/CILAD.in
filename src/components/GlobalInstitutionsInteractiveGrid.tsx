import React from "react";

interface InstitutionItem {
  id: string;
  name: string;
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  url: string;
}

const FEATURED_ORGANISATIONS: InstitutionItem[] = [
  {
    id: "un",
    name: "United Nations",
    logoSrc: "/images/logos/un.png",
    logoWidth: 181,
    logoHeight: 150,
    url: "https://www.un.org",
  },
  {
    id: "icj",
    name: "International Court of Justice",
    logoSrc: "/images/logos/icj.png",
    logoWidth: 157,
    logoHeight: 154,
    url: "https://www.icj-cij.org",
  },
  {
    id: "wto",
    name: "World Trade Organization",
    logoSrc: "/images/logos/wto.png",
    logoWidth: 146,
    logoHeight: 134,
    url: "https://www.wto.org",
  },
  {
    id: "ilo",
    name: "International Labour Organization",
    logoSrc: "/images/logos/ilo.png",
    logoWidth: 177,
    logoHeight: 150,
    url: "https://www.ilo.org",
  },
  {
    id: "unesco",
    name: "United Nations Educational, Scientific and Cultural Organization",
    logoSrc: "/images/logos/unesco.png",
    logoWidth: 172,
    logoHeight: 139,
    url: "https://www.unesco.org",
  },
  {
    id: "wipo",
    name: "World Intellectual Property Organization",
    logoSrc: "/images/logos/wipo.png",
    logoWidth: 125,
    logoHeight: 171,
    url: "https://www.wipo.int",
  },
  {
    id: "icc",
    name: "International Criminal Court",
    logoSrc: "/images/logos/icc.png",
    logoWidth: 172,
    logoHeight: 139,
    url: "https://www.icc-cpi.int",
  },
  {
    id: "who",
    name: "World Health Organization",
    logoSrc: "/images/logos/who.png",
    logoWidth: 186,
    logoHeight: 165,
    url: "https://www.who.int",
  },
];

export function GlobalInstitutionsInteractiveGrid() {
  const renderOrganisationSequence = (isDuplicate: boolean) => (
    <div
      className="flex items-stretch shrink-0"
      aria-hidden={isDuplicate ? "true" : undefined}
    >
      {FEATURED_ORGANISATIONS.map((org) => (
        <div
          key={`${isDuplicate ? "dup" : "orig"}-${org.id}`}
          className="flex items-stretch shrink-0"
        >
          <a
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isDuplicate ? -1 : 0}
            aria-label={isDuplicate ? undefined : `${org.name} official website`}
            className="group flex flex-col items-center justify-start w-[160px] sm:w-[190px] md:w-[215px] px-4 sm:px-6 py-2 text-center no-underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0e0e2d]/40 transition-opacity duration-200 hover:opacity-85"
          >
            {/* Consistent Logo Height Container preserving original proportions */}
            <div className="h-[68px] sm:h-[78px] md:h-[88px] w-full flex items-center justify-center mb-3.5 sm:mb-4">
              <img
                src={org.logoSrc}
                alt={isDuplicate ? "" : `${org.name} emblem`}
                width={org.logoWidth}
                height={org.logoHeight}
                loading="eager"
                decoding="async"
                className="max-h-full w-auto max-w-[115px] sm:max-w-[130px] md:max-w-[145px] object-contain select-none"
              />
            </div>

            {/* Full Organisation Name in refined dark navy-blue typography */}
            <span className="font-serif text-[11px] sm:text-[12px] leading-[1.35] tracking-[0.04em] uppercase text-[#0e0e2d] font-normal max-w-[175px]">
              {org.name}
            </span>
          </a>

          {/* Subtle Vertical Divider matching reference layout */}
          <div
            className="w-px h-[108px] sm:h-[120px] md:h-[132px] self-center bg-[#0e0e2d]/12 shrink-0"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-16 pt-12 pb-8 border-t border-black/15 bg-[#ffffff] text-center overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Subtle Accent Rule & Introductory Sentence */}
        <div className="px-4 mb-9 sm:mb-11">
          <div
            className="w-16 h-px bg-[#0e0e2d]/45 mx-auto mb-5"
            aria-hidden="true"
          />
          <p className="font-serif text-base sm:text-lg md:text-[21px] text-[#0e0e2d]/90 max-w-3xl mx-auto leading-relaxed m-0 font-normal">
            Covering the institutions shaping international law, governance and cooperation.
          </p>
        </div>

        {/* Continuous Auto-Scrolling Marquee (for standard motion preference) */}
        <div
          className="cilad-marquee-viewport relative w-full overflow-hidden py-2 motion-reduce:hidden"
          role="region"
          aria-label="International institutions shaping international law, governance and cooperation"
        >
          {/* Subtle Edge Fade Masks */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#ffffff] to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#ffffff] to-transparent z-10"
            aria-hidden="true"
          />

          <div className="cilad-marquee-track">
            {renderOrganisationSequence(false)}
            {renderOrganisationSequence(true)}
          </div>
        </div>

        {/* Static Accessible Grid Fallback (when prefers-reduced-motion: reduce is active) */}
        <div
          className="hidden motion-reduce:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-4 px-4 py-4 items-start justify-items-center"
          role="region"
          aria-label="International institutions shaping international law, governance and cooperation"
        >
          {FEATURED_ORGANISATIONS.map((org) => (
            <a
              key={org.id}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${org.name} official website`}
              className="flex flex-col items-center justify-start text-center px-2 no-underline hover:opacity-85 transition-opacity"
            >
              <div className="h-[68px] sm:h-[76px] flex items-center justify-center mb-3">
                <img
                  src={org.logoSrc}
                  alt={`${org.name} emblem`}
                  width={org.logoWidth}
                  height={org.logoHeight}
                  className="max-h-full w-auto max-w-[115px] object-contain"
                />
              </div>
              <span className="font-serif text-[11px] leading-[1.35] tracking-[0.04em] uppercase text-[#0e0e2d] font-normal">
                {org.name}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Understated "AND MORE." Line */}
        <div className="mt-9 sm:mt-11 px-4 flex items-center justify-center gap-4">
          <span
            className="w-8 sm:w-10 h-px bg-[#0e0e2d]/35"
            aria-hidden="true"
          />
          <span className="font-serif text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#0e0e2d]">
            AND MORE.
          </span>
          <span
            className="w-8 sm:w-10 h-px bg-[#0e0e2d]/35"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
