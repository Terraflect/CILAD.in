import React, { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiladLogo } from "./Logos";

interface NavItem {
  label: string;
  to: string;
  matchPrefixes?: string[];
  children?: { label: string; to: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About CILAD",
    to: "/about",
  },
  {
    label: "Research",
    to: "/research",
  },
  {
    label: "Editorials",
    to: "/editorials",
    matchPrefixes: ["/editorials", "/article", "/submit"],
    children: [
      { label: "All Editorials & Archive", to: "/editorials" },
      {
        label: "Editorial Charter & Guidelines",
        to: "/article/call-for-monthly-columns-and-editorial-guidelines",
      },
      { label: "Contribute / Submit Manuscript", to: "/submit" },
    ],
  },
  {
    label: "Initiatives",
    to: "/initiatives",
  },
  {
    label: "Publications",
    to: "/publications",
    matchPrefixes: ["/publications", "/cilad-monthly"],
  },
  {
    label: "Events",
    to: "/events",
    matchPrefixes: ["/events", "/coming-soon"],
  },
  {
    label: "Our Team",
    to: "/team",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isItemActive = (item: NavItem) => {
    if (item.to === "/") {
      return location.pathname === "/";
    }
    if (item.matchPrefixes) {
      return item.matchPrefixes.some((prefix) =>
        location.pathname.startsWith(prefix)
      );
    }
    return location.pathname.startsWith(item.to);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    setSearchOpen(false);
    setMobileMenuOpen(false);
    navigate(`/editorials?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="w-full bg-[#ffffff] text-[#000000] border-b border-black/15">
      {/* Institutional Branding Row */}
      <div className="icts-container py-5 md:py-6">
        <div className="flex items-center justify-between gap-6">
          {/* Left: CILAD Logo + Full Name + DSNLU Affiliation */}
          <div className="flex items-center gap-4 min-w-0">
            <Link
              to="/"
              aria-label="Centre for International Law and Allied Disciplines Home"
              className="shrink-0"
            >
              <CiladLogo className="w-16 h-16 md:w-[72px] md:h-[72px]" />
            </Link>
            <div className="min-w-0">
              <Link to="/" className="block group">
                <div className="font-serif text-lg sm:text-xl md:text-[23px] font-bold text-[#000000] leading-tight group-hover:text-[#0e0e2d] transition-colors">
                  Centre for International Law and Allied Disciplines (CILAD)
                </div>
              </Link>
              <div className="font-open text-xs sm:text-[13px] text-[#000000]/75 mt-1">
                Damodaram Sanjivayya National Law University (DSNLU), Visakhapatnam, Andhra Pradesh
              </div>
            </div>
          </div>

          {/* Right: Mobile Menu Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Mobile Search & Menu Buttons */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Toggle editorial search"
                className="p-2 text-[#000000] hover:text-[#0e0e2d] cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-[#000000] hover:text-[#0e0e2d] cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav
        aria-label="Primary Navigation"
        className="w-full bg-[#000000] text-[#ffffff] border-t border-black"
      >
        <div className="icts-container bg-[#000000]">
          <div className="hidden lg:flex items-center justify-between min-h-[46px] bg-[#000000]">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                const hasChildren = Boolean(item.children?.length);

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      hasChildren ? setOpenDropdown(item.label) : undefined
                    }
                    onMouseLeave={() =>
                      hasChildren ? setOpenDropdown(null) : undefined
                    }
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpenDropdown(null)}
                      className={`inline-flex items-center gap-1 px-3.5 py-3 font-lato text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors border-b-2 ${
                        active
                          ? "bg-[#0e0e2d] border-[#ffffff] text-[#ffffff]"
                          : "border-transparent text-[#ffffff]/90 hover:text-[#ffffff] hover:bg-[#0e0e2d]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasChildren && (
                        <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                      )}
                    </Link>

                    {hasChildren && openDropdown === item.label && (
                      <ul className="absolute left-0 top-full min-w-[240px] bg-[#000000] border border-white/20 py-1.5 m-0 list-none z-50">
                        {item.children!.map((child) => (
                          <li key={child.to}>
                            <Link
                              to={child.to}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2 font-lato text-[13px] text-[#ffffff] hover:bg-[#0e0e2d] hover:text-[#ffffff] transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Search Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search editorials and publications"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 font-lato text-xs font-semibold text-[#ffffff]/90 hover:text-[#ffffff] cursor-pointer whitespace-nowrap"
              >
                <Search className="w-3.5 h-3.5 text-[#ffffff]" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Search Bar */}
        {searchOpen && (
          <div className="w-full bg-[#ffffff] border-t border-black/10 py-3">
            <div className="icts-container">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center gap-2 max-w-xl"
              >
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search editorials, authors, treaties, or subjects..."
                  aria-label="Search editorials, authors, treaties, or subjects"
                  className="flex-1 bg-[#ffffff] text-[#000000] text-sm px-3.5 py-2 border border-black/30 focus:outline-none focus:border-[#0e0e2d]"
                />
                <button type="submit" className="btn-icts">
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="p-2 text-[#000000]/70 hover:text-[#000000] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Responsive Tablet & Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#ffffff] border-t border-black/15">
            <div className="icts-container py-3">
              <ul className="list-none m-0 p-0 divide-y divide-black/10">
                {NAV_ITEMS.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <li key={item.label} className="py-1">
                      <Link
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 font-lato text-sm font-semibold ${
                          active ? "text-[#0e0e2d]" : "text-[#000000]"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <ul className="list-none pl-4 pb-1 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 font-open text-xs text-[#000000]/80 hover:text-[#0e0e2d]"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
