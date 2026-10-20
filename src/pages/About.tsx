import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { RESEARCH_AREAS, PATRONS_LIST, FACULTY_COMMITTEE } from "../data/ciladData";

export function About() {
  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header with The Last Supper Artwork Backdrop */}
      <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden border-b border-black">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/last-supper.jpg"
            alt="Leonardo da Vinci, The Last Supper, c. 1495–1498"
            className="w-full h-full object-cover object-center filter contrast-[1.35] brightness-[0.95] opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/65 via-50% to-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
        </div>

        <div className="icts-container relative z-10 py-12 md:py-16">
          <div className="max-w-3xl space-y-3.5 text-left">
            <div className="inline-block font-lato text-xs font-bold uppercase tracking-widest text-white/90 border-b border-white/30 pb-1">
              Institutional Identity · DSNLU Visakhapatnam
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight m-0">
              About CILAD
            </h1>
            <p className="font-open text-sm sm:text-base leading-relaxed text-white/90 m-0 max-w-2xl">
              Centre for International Law and Allied Disciplines (CILAD) at Damodaram Sanjivayya National Law University (DSNLU), Visakhapatnam, Andhra Pradesh.
            </p>
            <div className="pt-2">
              <span className="font-open text-[11px] text-white/70 italic">
                HISTORICAL PLATE: Leonardo da Vinci, The Last Supper (c. 1495–1498) — Santa Maria delle Grazie, Milan (Public Domain / Masterpiece Heritage)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Mandate & Vision */}
      <section className="icts-container py-10 border-b border-black/15 space-y-8">
        <blockquote className="icts-blockquote max-w-4xl">
          “Advancing research, dialogue, and practice in international law and its intersecting disciplines at Damodaram Sanjivayya National Law University, Visakhapatnam.”
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-open text-base leading-relaxed text-[#000000]/90 text-justify">
          <div className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-[#000000] m-0">
              Mandate &amp; Vision
            </h2>
            <p className="m-0">
              The Centre for International Law and Allied Disciplines (CILAD) operates at the forefront of global legal scholarship. Founded within Damodaram Sanjivayya National Law University (DSNLU), Visakhapatnam, our mission is to rigorously examine the legal and institutional frameworks that govern state and non-state actors in an increasingly complex international order.
            </p>
            <p className="m-0">
              We bring together legal scholars, diplomatic practitioners, policymakers, and student researchers to debate, challenge, and advance the doctrinal and practical understanding of public and private international law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-[#000000] m-0">
              Interdisciplinary Approach
            </h2>
            <p className="m-0">
              By fostering interdisciplinary inquiry, CILAD connects international legal scholarship with international relations, sovereign diplomacy, global economic governance, maritime policy, environmental sustainability, and humanitarian protection.
            </p>
            <p className="m-0">
              Through our flagship periodical (<strong>CILAD Monthly</strong>), thematic research briefs, international workshops such as <em>Beyond Borders</em>, and rolling editorial columns, the Centre cultivates the next generation of jurists prepared to navigate and shape the global legal order.
            </p>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="icts-container py-10 border-b border-black/15 space-y-6">
        <div className="space-y-1">
          <div className="section-header">Core Objectives</div>
          <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
            Academic &amp; Research Priorities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-black/15 p-6 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              01. Doctrinal &amp; Treaty Research
            </div>
            <h3 className="font-serif text-lg font-bold text-[#000000] m-0">
              International Jurisprudence &amp; State Practice
            </h3>
            <p className="font-open text-sm leading-relaxed text-[#000000]/80 m-0 text-justify">
              Synthesizing decisions of the ICJ, ITLOS, ICC, WTO Dispute Settlement Body, and arbitral tribunals alongside Indian and comparative sovereign treaty practice across {RESEARCH_AREAS.length} core domains.
            </p>
          </div>

          <div className="border border-black/15 p-6 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              02. Scholarly Publishing
            </div>
            <h3 className="font-serif text-lg font-bold text-[#000000] m-0">
              Editorial Platform &amp; CILAD Monthly
            </h3>
            <p className="font-open text-sm leading-relaxed text-[#000000]/80 m-0 text-justify">
              Maintaining an open, rigorous editorial forum and monthly analytical bulletin for case briefs, treaty monitors, and peer-reviewed commentary by students, scholars, and practitioners.
            </p>
          </div>

          <div className="border border-black/15 p-6 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              03. Dialogue &amp; Capacity Building
            </div>
            <h3 className="font-serif text-lg font-bold text-[#000000] m-0">
              Symposia, Workshops &amp; Colloquia
            </h3>
            <p className="font-open text-sm leading-relaxed text-[#000000]/80 m-0 text-justify">
              Convening international workshops, guest lectures, and practitioner panels connecting academic inquiry with treaty negotiation, trade law, and humanitarian practice.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Governance Summary */}
      <section className="icts-container py-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="section-header mb-1">University Governance</div>
            <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
              DSNLU Affiliation &amp; Leadership
            </h2>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
          >
            <span>View Full Team &amp; Committee</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PATRONS_LIST.map((patron) => (
            <div
              key={patron.name}
              className="border-t border-black/20 pt-4 space-y-1"
            >
              <div className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#0e0e2d]">
                {patron.role}
              </div>
              <div className="font-serif text-base font-bold text-[#000000]">
                {patron.name}
              </div>
              <div className="font-open text-xs text-[#000000]/75">
                {patron.designation}
              </div>
            </div>
          ))}

          <div className="border-t border-black/20 pt-4 space-y-1">
            <div className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#0e0e2d]">
              {FACULTY_COMMITTEE.chairperson.role}
            </div>
            <div className="font-serif text-base font-bold text-[#000000]">
              {FACULTY_COMMITTEE.chairperson.name}
            </div>
            <div className="font-open text-xs text-[#000000]/75">
              {FACULTY_COMMITTEE.chairperson.affiliation}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-black/15 flex flex-wrap items-center gap-3">
          <Link to="/research" className="btn-icts">
            <span>Explore Research Areas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link to="/editorials" className="btn-icts-outline">
            <span>Browse Editorials</span>
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
      </section>
    </main>
  );
}
