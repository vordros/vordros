/* ─── Nav.js — Sticky navigation with language toggle ────────────────────── */

import { Mark }      from "./Mark.js";

const { createElement: h } = React;

const SOCIAL_WA = "https://wa.me/5511915954848";

function LangToggle({ lang, setLang }) {
  const isPT = lang === "pt-BR";
  return h("button", {
    className:   "lang-toggle",
    "aria-label": isPT ? "Switch to English" : "Mudar para Português",
  },
    h("span", {
      className: `lang-seg ${isPT ? "active" : ""}`,
      onClick:   () => setLang("pt-BR"),
      role:      "button",
      "aria-pressed": isPT,
    }, "PT"),
    h("span", { className: "lang-div" }),
    h("span", {
      className: `lang-seg ${!isPT ? "active" : ""}`,
      onClick:   () => setLang("en-US"),
      role:      "button",
      "aria-pressed": !isPT,
    }, "EN")
  );
}

export function Nav({ t, lang, setLang, scrolled }) {
  return h("nav", {
    role:        "navigation",
    "aria-label": "Main navigation",
    className:   `nav${scrolled ? " scrolled" : ""}`,
  },
    /* Logo */
    h("a", { href: "/", "aria-label": "Vordros — home", className: "nav-logo" },
      h(Mark, { size: 26 }),
      h("span", { className: "nav-wordmark" }, "VORDROS")
    ),

    /* Links */
    h("div", { className: "nav-links" },
      h("a", { href: "#sobre",    className: "nav-link" }, t.nav.sobre),
      h("a", { href: "#servicos", className: "nav-link" }, t.nav.servicos),
      h("a", { href: "#contato",  className: "nav-link" }, t.nav.contato),
      h(LangToggle, { lang, setLang }),
      h("a", {
        href:     SOCIAL_WA,
        target:   "_blank",
        rel:      "noopener noreferrer",
        className: "nav-cta",
      }, t.nav.cta)
    )
  );
}
