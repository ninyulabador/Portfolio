import { useState, useEffect } from "react";
import type { Page } from "../types";

interface NavProps {
  page: Page;
  setPage: (p: Page) => void;
}

const LINKS: Page[] = ["home", "about", "service", "contact"];

export default function Nav({ page, setPage }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
    >
      <button
        onClick={() => setPage("home")}
        className="nav__logo"
      >
        Nin.
      </button>

      <ul className="nav__links">
        {LINKS.map((l) => (
          <li key={l}>
            <button
              onClick={() => setPage(l)}
              className={`nav__link ${page === l ? "nav__link--active" : ""}`}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}