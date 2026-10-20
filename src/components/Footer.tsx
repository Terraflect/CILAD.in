import React, { useState } from "react";
import { Phone, Mail, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CiladLogo } from "./Logos";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfCezV48VCflFwxTZO-zHGbtGkVmk24-TOWLaOOS6nopkXGLw/viewform?usp=sharing&ouid=100960212050274071518";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
    try {
      const opened = window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
      if (!opened) {
        window.location.href = GOOGLE_FORM_URL;
      }
    } catch {
      window.location.href = GOOGLE_FORM_URL;
    }
  };

  return (
    <footer className="w-full bg-[#000000] text-[#ffffff] border-t border-white/15 mt-16">
      <div className="icts-container py-10 md:py-12 bg-[#000000] text-[#ffffff]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Column 1: Institutional Identity & Newsletter Link */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-start gap-3.5">
              <CiladLogo className="w-11 h-11 shrink-0 mt-0.5 border border-white/25 rounded-full" />
              <div>
                <div className="font-serif text-base font-bold text-[#ffffff] leading-snug">
                  Centre for International Law and Allied Disciplines (CILAD)
                </div>
                <div className="font-open text-xs text-[#ffffff]/75 mt-1">
                  Damodaram Sanjivayya National Law University (DSNLU), Visakhapatnam, Andhra Pradesh
                </div>
              </div>
            </div>

            <p className="font-open text-xs leading-relaxed text-[#ffffff]/80 m-0 max-w-md">
              Advancing the study of international law through interdisciplinary research, critical inquiry, and engagement with contemporary global challenges.
            </p>

            {/* Compact Editorial Updates Subscription */}
            <div className="pt-1">
              <div className="font-lato text-[11px] font-bold uppercase tracking-wider text-[#ffffff] mb-2">
                Newsletter
              </div>
              {subscribed ? (
                <div className="inline-flex items-center gap-1.5 text-xs text-[#ffffff] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Subscribed ({email}) for CILAD editorial updates.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  action={GOOGLE_FORM_URL}
                  method="GET"
                  target="_blank"
                  className="flex items-center gap-2 max-w-sm"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Institutional or personal email"
                    aria-label="Email for CILAD editorial updates"
                    className="flex-1 bg-[#ffffff] border border-white/30 px-3 py-1.5 text-xs text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                  />
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubscribe();
                    }}
                    className="bg-[#0e0e2d] text-[#ffffff] font-lato text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 border border-white/40 hover:bg-[#ffffff] hover:text-[#000000] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#ffffff]">
              Navigation
            </div>
            <ul className="list-none m-0 p-0 space-y-1.5 font-open text-xs">
              <li>
                <Link to="/" className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline">
                  About CILAD
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Editorials & Publications */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#ffffff]">
              Editorials &amp; Archive
            </div>
            <ul className="list-none m-0 p-0 space-y-1.5 font-open text-xs">
              <li>
                <Link
                  to="/editorials"
                  className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline"
                >
                  All Editorials
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline"
                >
                  Publications &amp; CILAD Monthly
                </Link>
              </li>
              <li>
                <Link
                  to="/article/call-for-monthly-columns-and-editorial-guidelines"
                  className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline"
                >
                  Editorial Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/submit"
                  className="text-[#ffffff]/85 hover:text-[#ffffff] hover:underline"
                >
                  Contribute / Submit Manuscript
                </Link>
              </li>
              <li>
                <a
                  href="https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#ffffff]/85 hover:text-[#ffffff] hover:underline"
                >
                  <span>DSNLU CILAD Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Institutional Contact */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="font-lato text-xs font-bold uppercase tracking-wider text-[#ffffff]">
              Institutional Contact
            </div>
            <div className="font-open text-xs leading-relaxed text-[#ffffff]/85 space-y-2">
              <p className="m-0">
                Damodaram Sanjivayya National Law University,
                <br />
                Nyayaprastha, Sabbavaram,
                <br />
                Visakhapatnam – 531 035, Andhra Pradesh, India
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ffffff] shrink-0" />
                <a
                  href="mailto:cilad@dsnlu.ac.in"
                  className="text-[#ffffff] font-medium hover:underline"
                >
                  cilad@dsnlu.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3 pt-1 font-lato text-xs font-semibold">
                <a
                  href="https://www.linkedin.com/in/centre-for-international-law-and-allied-disciplines-60462a31a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] hover:underline"
                >
                  LinkedIn
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="https://www.instagram.com/cilad_dsnlu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] hover:underline"
                >
                  Instagram
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="https://dsnlu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] hover:underline"
                >
                  dsnlu.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Notice */}
        <div className="mt-8 pt-5 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-open text-[#ffffff]/75">
          <div>
            &copy; {new Date().getFullYear()} Centre for International Law and Allied Disciplines (CILAD), Damodaram Sanjivayya National Law University. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-[#ffffff] hover:underline">
              Mandate
            </Link>
            <Link to="/submit" className="hover:text-[#ffffff] hover:underline">
              Editorial Policy
            </Link>
            <Link to="/contact" className="hover:text-[#ffffff] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
