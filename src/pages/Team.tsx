import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  PATRONS_LIST,
  FACULTY_COMMITTEE,
  STUDENT_EDITORIAL_BOARD,
} from "../data/ciladData";

export function Team() {
  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header */}
      <section className="icts-container py-10 md:py-12 border-b border-black/15">
        <div className="max-w-3xl space-y-3">
          <div className="section-header">
            Institutional Leadership · DSNLU Visakhapatnam
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#000000] m-0">
            Our Team &amp; Governance
          </h1>
          <p className="font-open text-base leading-relaxed text-[#000000]/80 m-0">
            University Patrons, Honorary Chairperson, Faculty Committee Members, Founding Leadership, and Student Editorial &amp; Convening Board of the Centre for International Law and Allied Disciplines at Damodaram Sanjivayya National Law University.
          </p>
        </div>
      </section>

      {/* University Patrons */}
      <section className="icts-container py-10 border-b border-black/15 space-y-6">
        <div>
          <div className="section-header mb-1">Statutory Leadership</div>
          <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
            University Patrons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PATRONS_LIST.map((patron) => (
            <div
              key={patron.name}
              className="border border-black/20 p-6 space-y-1.5"
            >
              <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                {patron.role}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#000000] m-0">
                {patron.name}
              </h3>
              <div className="font-open text-sm text-[#000000]/80">
                {patron.designation}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honorary Chairperson & Faculty Committee */}
      <section className="icts-container py-10 border-b border-black/15 space-y-8">
        <div>
          <div className="section-header mb-1">Academic Governance</div>
          <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
            Honorary Chairperson &amp; Faculty Committee
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Honorary Chairperson */}
          <div className="lg:col-span-4 border border-black/20 p-6 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              {FACULTY_COMMITTEE.chairperson.role}
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#000000] m-0">
              {FACULTY_COMMITTEE.chairperson.name}
            </h3>
            <div className="font-open text-sm text-[#000000]/80">
              {FACULTY_COMMITTEE.chairperson.affiliation}
            </div>
          </div>

          {/* Faculty Committee Members */}
          <div className="lg:col-span-8 border border-black/20 p-6 space-y-4">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              Faculty Committee Members — CILAD
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FACULTY_COMMITTEE.members.map((member) => (
                <div
                  key={member.name}
                  className="border-b border-black/10 pb-3 space-y-0.5"
                >
                  <div className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#000000]/60">
                    {member.index} · {member.role}
                  </div>
                  <div className="font-serif text-lg font-bold text-[#000000]">
                    {member.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding & Student Editorial Board Information */}
      <section className="icts-container py-10 space-y-6">
        <div>
          <div className="section-header mb-1">Founding &amp; Student Wing</div>
          <h2 className="font-serif text-2xl font-bold text-[#000000] m-0">
            Founding Leadership &amp; Student Editorial Board
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 border border-black/20 p-6 space-y-2">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
              Founding Initiative
            </div>
            <h3 className="font-serif text-xl font-bold text-[#000000] m-0">
              Ms. Surbhi Gupta
            </h3>
            <div className="font-open text-sm text-[#000000]/80">
              Founder, CILAD · Associate at Trilegal
            </div>
          </div>

          <div className="lg:col-span-8 border border-black/20 p-6 space-y-4">
            <div className="space-y-1">
              <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d]">
                Student Coordinators &amp; Editorial Board
              </div>
              <h3 className="font-serif text-xl font-bold text-[#000000] m-0">
                Student Research &amp; Editorial Wing
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {STUDENT_EDITORIAL_BOARD.map((member) => (
                <div
                  key={`${member.index}-${member.name}`}
                  className="border-b border-black/10 pb-3 space-y-0.5"
                >
                  <div className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#0e0e2d]">
                    {member.role}
                  </div>
                  <div className="font-serif text-lg font-bold text-[#000000]">
                    {member.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/submit"
                className="inline-flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline"
              >
                <span>Contribute to CILAD Editorial Forum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
