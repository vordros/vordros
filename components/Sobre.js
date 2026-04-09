/* ─── Sobre.js ───────────────────────────────────────────────────────────── */

import { Mark } from "./Mark.js";

const { createElement: h } = React;

export function Sobre({ t }) {
  return h("section", {
    id:               "sobre",
    "aria-labelledby": "sobre-heading",
    className:         "sobre",
  },
    h("div", { className: "container grid-2" },

      /* Text */
      h("div", null,
        h("p",  { className: "eyebrow" }, t.sobre.eyebrow),
        h("h2", { id: "sobre-heading", className: "section-h2" },
          t.sobre.h2[0], h("br"), t.sobre.h2[1]
        ),
        h("p",  { style: { fontFamily: "var(--f-space)", fontSize: 16, color: "var(--ice-dim)", lineHeight: 1.75, marginBottom: 14 } }, t.sobre.p1),
        h("p",  { style: { fontFamily: "var(--f-space)", fontSize: 16, color: "rgba(244,245,247,0.30)", lineHeight: 1.75 } }, t.sobre.p2)
      ),

      /* Visual — concentric rings + mark */
      h("div", { className: "sobre-visual", "aria-hidden": "true" },
        h("div", { className: "ring", style: { width: 290, height: 290, borderColor: "rgba(244,245,247,0.06)"  } }),
        h("div", { className: "ring", style: { width: 204, height: 204, borderColor: "rgba(198,255,0,0.14)"    } }),
        h("div", { className: "ring", style: { width: 116, height: 116, borderColor: "rgba(198,255,0,0.24)"    } }),
        h(Mark, { size: 80 })
      )
    )
  );
}
