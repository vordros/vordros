/* ─── Hero.js ────────────────────────────────────────────────────────────── */

import { IconWA } from "./Icons.js";

const { createElement: h, useState, useEffect } = React;

const SOCIAL_WA = "https://wa.me/5511915954848";

export function Hero({ t }) {
  const [vis, setVis] = useState(false);
  useEffect(() => { const id = setTimeout(() => setVis(true), 80); return () => clearTimeout(id); }, []);

  return h("section", { id: "hero", "aria-label": "Hero", className: "hero" },

    /* Background layers */
    h("div",  { className: "hero-grid",  "aria-hidden": "true" }),
    h("div",  { className: "hero-glow",  "aria-hidden": "true" }),

    /* Corner accents */
    h("svg", { className: "hero-corner tl", viewBox: "0 0 155 155", fill: "none", "aria-hidden": "true" },
      h("line", { x1:"0",   y1:"1",   x2:"105", y2:"1",   stroke:"rgba(198,255,0,0.14)", strokeWidth:"0.5" }),
      h("line", { x1:"1",   y1:"0",   x2:"1",   y2:"105", stroke:"rgba(198,255,0,0.14)", strokeWidth:"0.5" })
    ),
    h("svg", { className: "hero-corner br", viewBox: "0 0 155 155", fill: "none", "aria-hidden": "true" },
      h("line", { x1:"155", y1:"154", x2:"50",  y2:"154", stroke:"rgba(198,255,0,0.14)", strokeWidth:"0.5" }),
      h("line", { x1:"154", y1:"155", x2:"154", y2:"50",  stroke:"rgba(198,255,0,0.14)", strokeWidth:"0.5" })
    ),

    /* Content */
    h("div", { className: "hero-content" },

      /* Pill */
      h("div", { className: "hero-pill" },
        h("div", { className: "hero-pill-dot" }),
        h("span", { className: "hero-pill-text" }, t.hero.pill)
      ),

      /* H1 */
      h("h1", { className: "hero-h1" },
        t.hero.h1[0], h("br"),
        h("span", null, t.hero.h1[1])
      ),

      /* Sub */
      h("p", { className: "hero-p" }, t.hero.p),

      /* Buttons */
      h("div", { className: "hero-btns" },
        h("a", {
          href:      SOCIAL_WA,
          target:    "_blank",
          rel:       "noopener noreferrer",
          className: "btn btn-volt",
        }, h(IconWA, { size: 15, color: "#0D0E12" }), t.hero.primary),

        h("a", {
          href:      "#sobre",
          className: "btn btn-ghost",
        }, t.hero.ghost)
      )
    ),

    /* Scroll hint */
    h("div", { className: "hero-scroll", "aria-hidden": "true" },
      h("span", null, t.hero.scroll),
      h("div",  { className: "hero-scroll-line" })
    )
  );
}
