/* ─── app.js — React root, language detection, app bootstrap ─────────────── */

import CONTENT   from "./i18n.js";
import { applyMeta } from "./seo.js";
import { App }   from "../components/App.js";

const { useState, useEffect } = React;
const { createRoot }          = ReactDOM;

/* ─── Language detection ──────────────────────────────────────────────────── */
export function detectLang() {
  // 1. URL param ?lang=
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "pt-BR" || param === "en-US") return param;

  // 2. localStorage (user previously chose via toggle)
  const stored = localStorage.getItem("vordros_lang");
  if (stored === "pt-BR" || stored === "en-US") return stored;

  // 3. Page-level hint set by each index.html (window.__VORDROS_LANG__)
  if (window.__VORDROS_LANG__ === "pt-BR" || window.__VORDROS_LANG__ === "en-US") {
    return window.__VORDROS_LANG__;
  }

  // 4. Browser language auto-detect: pt-* → pt-BR, everything else → en-US
  const langs = Array.from(navigator.languages || [navigator.language || "en"]);
  for (const l of langs) {
    if (l.toLowerCase().startsWith("pt")) return "pt-BR";
  }
  return "en-US";
}

/* ─── Persist and sync lang ───────────────────────────────────────────────── */
export function syncLang(lang) {
  localStorage.setItem("vordros_lang", lang);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());
}

/* ─── Root component ──────────────────────────────────────────────────────── */
function Root() {
  const [lang,     setLang]     = useState(() => detectLang());
  const [scrolled, setScrolled] = useState(false);

  const t = CONTENT[lang];

  // Apply SEO + sync URL on every lang change
  useEffect(() => {
    applyMeta(t);
    syncLang(lang);
  }, [lang]);

  // Scroll watcher for sticky nav
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return React.createElement(App, { t, lang, setLang, scrolled });
}

/* ─── Mount ───────────────────────────────────────────────────────────────── */
createRoot(document.getElementById("root")).render(
  React.createElement(React.StrictMode, null,
    React.createElement(Root)
  )
);
