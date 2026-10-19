import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search, X, RotateCcw } from "lucide-react";
import {
  getPublishedArticles,
  RESEARCH_AREAS,
} from "../data/ciladData";
import { EditorialBannerCard } from "../components/EditorialBannerCard";

const ITEMS_PER_PAGE = 5;

export function Editorials() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const initialCategory =
    searchParams.get("category") || searchParams.get("topic") || "all";
  const initialTag = searchParams.get("tag") || "all";
  const initialAuthor = searchParams.get("author") || "all";
  const initialYear = searchParams.get("year") || "all";
  const initialView = searchParams.get("view") || "all";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [selectedAuthor, setSelectedAuthor] = useState(initialAuthor);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [editorialView, setEditorialView] = useState<"all" | "symposia">(
    initialView === "symposia" ? "symposia" : "all"
  );
  const [currentPage, setCurrentPage] = useState(1);

  const publishedArticles = useMemo(() => getPublishedArticles(), []);

  useEffect(() => {
    const qParam = searchParams.get("q");
    const catParam =
      searchParams.get("category") || searchParams.get("topic");
    const tagParam = searchParams.get("tag");
    const authorParam = searchParams.get("author");
    const yearParam = searchParams.get("year");

    if (qParam !== null) setSearchQuery(qParam);
    if (catParam !== null) setSelectedCategory(catParam);
    if (tagParam !== null) setSelectedTag(tagParam);
    if (authorParam !== null) setSelectedAuthor(authorParam);
    if (yearParam !== null) setSelectedYear(yearParam);
    setCurrentPage(1);
  }, [searchParams]);

  const categories = useMemo(() => {
    const articleCats = publishedArticles.map((p) => p.category);
    const researchCats = RESEARCH_AREAS.map((r) => r.title);
    return Array.from(new Set<string>([...articleCats, ...researchCats]));
  }, [publishedArticles]);

  const allTags = useMemo(() => {
    return Array.from(new Set<string>(publishedArticles.flatMap((p) => p.tags)));
  }, [publishedArticles]);

  const allAuthors = useMemo(() => {
    return Array.from(
      new Set<string>(
        publishedArticles.flatMap((p) => p.authors.map((a) => a.name))
      )
    );
  }, [publishedArticles]);

  const allYears = useMemo(() => {
    return Array.from(
      new Set<string>(publishedArticles.map((p) => p.year))
    ).sort((a, b) => b.localeCompare(a));
  }, [publishedArticles]);

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return publishedArticles.filter((article) => {
      const matchesView =
        editorialView === "all" || Boolean(article.isSymposium);
      const matchesCategory =
        selectedCategory === "all" ||
        article.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesTag =
        selectedTag === "all" ||
        article.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase());
      const matchesAuthor =
        selectedAuthor === "all" ||
        article.authors.some(
          (a) => a.name.toLowerCase() === selectedAuthor.toLowerCase()
        );
      const matchesYear =
        selectedYear === "all" || article.year === selectedYear;
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q)) ||
        article.authors.some((a) => a.name.toLowerCase().includes(q)) ||
        article.keyInstruments.some((inst) => inst.toLowerCase().includes(q));

      return (
        matchesView &&
        matchesCategory &&
        matchesTag &&
        matchesAuthor &&
        matchesYear &&
        matchesQuery
      );
    });
  }, [
    publishedArticles,
    editorialView,
    selectedCategory,
    selectedTag,
    selectedAuthor,
    selectedYear,
    searchQuery,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / ITEMS_PER_PAGE)
  );
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    selectedCategory !== "all" ||
    selectedTag !== "all" ||
    selectedAuthor !== "all" ||
    selectedYear !== "all" ||
    editorialView !== "all";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedTag("all");
    setSelectedAuthor("all");
    setSelectedYear("all");
    setEditorialView("all");
    setCurrentPage(1);
    setSearchParams({});
  };

  return (
    <main id="content" className="flex-grow bg-[#ffffff] text-[#000000]">
      {/* Page Header & Editorial Introduction */}
      <section className="icts-container py-10 md:py-12 border-b border-black/15">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="section-header">
              CILAD Editorial Platform · DSNLU Visakhapatnam
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#000000] m-0">
              Editorials &amp; Scholarly Commentary
            </h1>
            <p className="font-open text-base leading-relaxed text-[#000000]/80 m-0 text-justify">
              The editorial forum of the Centre for International Law and Allied Disciplines publishes analytical essays, international tribunal case briefs, treaty monitors, and workshop syntheses examining contemporary developments in public and private international law.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/submit" className="btn-icts">
              <span>Contribute to CILAD</span>
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
      </section>

      {/* Searchable Editorial Archive & Filters */}
      <section className="icts-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 8 Columns: Search Controls & Banner Article Stream */}
          <div className="lg:col-span-8 space-y-8">
            {/* Search & Filter Bar */}
            <div className="border-b border-black/15 pb-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setEditorialView("all");
                      setCurrentPage(1);
                    }}
                    className={`px-3.5 py-1.5 font-lato text-xs font-bold uppercase tracking-wider border cursor-pointer transition-colors ${
                      editorialView === "all"
                        ? "bg-[#0e0e2d] text-[#ffffff] border-[#0e0e2d]"
                        : "bg-[#ffffff] text-[#000000] border-black/25 hover:border-[#0e0e2d]"
                    }`}
                  >
                    All Editorials ({publishedArticles.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditorialView("symposia");
                      setCurrentPage(1);
                    }}
                    className={`px-3.5 py-1.5 font-lato text-xs font-bold uppercase tracking-wider border cursor-pointer transition-colors ${
                      editorialView === "symposia"
                        ? "bg-[#0e0e2d] text-[#ffffff] border-[#0e0e2d]"
                        : "bg-[#ffffff] text-[#000000] border-black/25 hover:border-[#0e0e2d]"
                    }`}
                  >
                    Symposia &amp; Special Features (
                    {publishedArticles.filter((a) => a.isSymposium).length})
                  </button>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 font-lato text-xs font-bold uppercase tracking-wider text-[#0e0e2d] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                )}
              </div>

              {/* Search Input + Dropdowns for Author, Year */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-6 relative">
                  <Search className="w-4 h-4 text-[#000000]/60 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search by title, text, author, or treaty..."
                    aria-label="Search editorials"
                    className="w-full bg-[#ffffff] border border-black/30 pl-9 pr-8 py-2 text-sm text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setCurrentPage(1);
                      }}
                      aria-label="Clear search query"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#000000]/60 hover:text-[#000000] cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <select
                    value={selectedAuthor}
                    onChange={(e) => {
                      setSelectedAuthor(e.target.value);
                      setCurrentPage(1);
                    }}
                    aria-label="Browse by author"
                    className="w-full bg-[#ffffff] border border-black/30 px-2.5 py-2 text-xs font-open text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                  >
                    <option value="all">All Authors</option>
                    {allAuthors.map((author) => (
                      <option key={author} value={author}>
                        {author}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <select
                    value={selectedYear}
                    onChange={(e) => {
                      setSelectedYear(e.target.value);
                      setCurrentPage(1);
                    }}
                    aria-label="Browse by publication year"
                    className="w-full bg-[#ffffff] border border-black/30 px-2.5 py-2 text-xs font-open text-[#000000] focus:outline-none focus:border-[#0e0e2d]"
                  >
                    <option value="all">All Years</option>
                    {allYears.map((yr) => (
                      <option key={yr} value={yr}>
                        {yr} Archive
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-open text-[#000000]/70">
                <div>
                  Showing <strong className="text-[#000000]">{filteredArticles.length}</strong> of{" "}
                  {publishedArticles.length} published editorials
                  {selectedCategory !== "all" && (
                    <span>
                      {" "}
                      in <strong>{selectedCategory}</strong>
                    </span>
                  )}
                  {selectedTag !== "all" && (
                    <span>
                      {" "}
                      tagged <strong>{selectedTag}</strong>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Article Banner Catalogue List matching ARTICLES.png */}
            {paginatedArticles.length === 0 ? (
              <div className="border border-black/20 p-8 text-center space-y-3">
                <h2 className="font-serif text-xl font-bold text-[#000000] m-0">
                  No Editorials Match Your Current Filter
                </h2>
                <p className="font-open text-sm text-[#000000]/75 m-0 max-w-md mx-auto">
                  No published CILAD articles were found for the selected category, author, or search query. Reset your filters to browse the full editorial catalogue.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="btn-icts"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="sr-only">Editorial Articles Catalogue</h2>
                {paginatedArticles.map((article) => (
                  <EditorialBannerCard key={article.id} article={article} />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <nav
                aria-label="Editorial Archive Pagination"
                className="pt-6 border-t border-black/15 flex items-center justify-between"
              >
                <div className="font-open text-xs text-[#000000]/70">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="px-3 py-1.5 border border-black/25 font-lato text-xs font-semibold disabled:opacity-40 hover:border-[#0e0e2d] cursor-pointer disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1.5 border font-lato text-xs font-semibold cursor-pointer ${
                          currentPage === page
                            ? "bg-[#0e0e2d] text-[#ffffff] border-[#0e0e2d]"
                            : "bg-[#ffffff] text-[#000000] border-black/25 hover:border-[#0e0e2d]"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                  <button
                    type="button"
                    disabled={currentPage >= totalPages}
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    className="px-3 py-1.5 border border-black/25 font-lato text-xs font-semibold disabled:opacity-40 hover:border-[#0e0e2d] cursor-pointer disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </nav>
            )}
          </div>

          {/* Right 4 Columns: Subject Categories, Tags & Contributor Guidelines */}
          <aside className="lg:col-span-4 lg:border-l lg:border-black/15 lg:pl-8 space-y-8">
            {/* Subject Categories */}
            <div className="space-y-3">
              <div className="section-header">Subject Categories</div>
              <ul className="list-none m-0 p-0 divide-y divide-black/10 font-open text-sm">
                <li className="py-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("all");
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left flex items-center justify-between cursor-pointer ${
                      selectedCategory === "all"
                        ? "font-bold text-[#0e0e2d]"
                        : "text-[#000000] hover:text-[#0e0e2d]"
                    }`}
                  >
                    <span>All Subject Categories</span>
                    <span className="text-xs text-[#000000]/60">
                      {publishedArticles.length}
                    </span>
                  </button>
                </li>
                {categories.map((cat) => {
                  const count = publishedArticles.filter(
                    (a) => a.category.toLowerCase() === cat.toLowerCase()
                  ).length;
                  const active =
                    selectedCategory.toLowerCase() === cat.toLowerCase();
                  return (
                    <li key={cat} className="py-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left flex items-center justify-between cursor-pointer ${
                          active
                            ? "font-bold text-[#0e0e2d]"
                            : "text-[#000000] hover:text-[#0e0e2d]"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="text-xs text-[#000000]/60">
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Thematic Tags */}
            <div className="space-y-3 pt-6 border-t border-black/15">
              <div className="section-header">Thematic Index &amp; Tags</div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-open text-xs">
                {allTags.map((tag) => {
                  const active = selectedTag.toLowerCase() === tag.toLowerCase();
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        setSelectedTag(active ? "all" : tag);
                        setCurrentPage(1);
                      }}
                      className={`cursor-pointer text-left transition-colors ${
                        active
                          ? "font-bold text-[#0e0e2d] underline"
                          : "text-[#000000]/80 hover:text-[#0e0e2d] hover:underline"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contributor & Editorial Policy Block */}
            <div className="space-y-3 pt-6 border-t border-black/15">
              <div className="section-header">Information for Contributors</div>
              <p className="font-open text-xs leading-relaxed text-[#000000]/80 m-0 text-justify">
                CILAD accepts original case briefs, treaty monitor notes, and analytical columns on a rolling monthly basis from law students, doctoral candidates, academicians, and legal practitioners.
              </p>
              <div className="space-y-2 pt-1">
                <Link to="/submit" className="btn-icts w-full justify-center">
                  <span>Submit a Manuscript</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/article/call-for-monthly-columns-and-editorial-guidelines"
                  className="btn-icts-outline w-full justify-center"
                >
                  <span>Read Editorial Charter</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
