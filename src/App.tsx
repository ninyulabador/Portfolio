import { useState } from "react";
import type { Page } from "./types";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const handleSetPage = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #08080C; color: #fff; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        ::-webkit-scrollbar       { width: 4px; }
        ::-webkit-scrollbar-track { background: #08080C; }
        ::-webkit-scrollbar-thumb { background: #C8FF00; border-radius: 2px; }
      `}</style>

      <Nav page={page} setPage={handleSetPage} />

      <PageWrapper pageKey={page}>
        {page === "home"    && <Home    setPage={handleSetPage} />}
        {page === "about"   && <About   />}
        {page === "service" && <Service />}
        {page === "contact" && <Contact />}
      </PageWrapper>

      <Footer />
    </>
  );
}