/* ─── CTA.js ─────────────────────────────────────────────────────────────── */

import { Mark }   from "./Mark.js";
import { IconWA, IconIG, IconLI } from "./Icons.js";

const { createElement: h } = React;

const SOCIAL = {
  whatsapp:  "https://wa.me/5511915954848",
  instagram: "https://instagram.com/vordros",
  linkedin:  "https://linkedin.com/company/vordros",
};

export function CTA({ t }) {
  return h("section", {
    id:               "contato",
    "aria-labelledby": "cta-heading",
    className:         "cta",
  },
    h("div", { className: "cta-inner" },
      h(Mark, { size: 50, dark: true }),
      h("h2", { id: "cta-heading", className: "cta-h2" }, t.cta.h2),
      h("p",  { className: "cta-p" }, t.cta.p),
      h("div", { className: "cta-btns" },
        h("a", { href: SOCIAL.whatsapp,  target: "_blank", rel: "noopener noreferrer", className: "btn btn-dark" },
          h(IconWA, { size: 15, color: "#C6FF00" }), t.cta.wa
        ),
        h("a", { href: SOCIAL.instagram, target: "_blank", rel: "noopener noreferrer", className: "btn btn-outline-dark" },
          h(IconIG, { size: 15, color: "#0D0E12" }), t.cta.ig
        ),
        h("a", { href: SOCIAL.linkedin,  target: "_blank", rel: "noopener noreferrer", className: "btn btn-outline-dark" },
          h(IconLI, { size: 15, color: "#0D0E12" }), t.cta.li
        )
      )
    )
  );
}
