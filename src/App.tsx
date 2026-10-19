import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Research } from "./pages/Research";
import { Editorials } from "./pages/Editorials";
import { Initiatives } from "./pages/Initiatives";
import { CiladMonthly } from "./pages/CiladMonthly";
import { Events } from "./pages/Events";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { ArticleReader } from "./pages/ArticleReader";
import { SubmitArticle } from "./pages/SubmitArticle";
import { ComingSoon } from "./pages/ComingSoon";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div
        id="top"
        className="min-h-screen flex flex-col overflow-x-hidden bg-[#ffffff] text-[#000000]"
      >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/editorials" element={<Editorials />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/publications" element={<CiladMonthly />} />
          <Route path="/cilad-monthly" element={<CiladMonthly />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:slug" element={<ArticleReader />} />
          <Route path="/editorials/:slug" element={<ArticleReader />} />
          <Route path="/submit" element={<SubmitArticle />} />
          <Route path="/contribute" element={<SubmitArticle />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}
