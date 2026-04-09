/* ─── Footer.js ──────────────────────────────────────────────────────────── */

import { Mark }               from "./Mark.js";
import { IconWA, IconIG, IconLI } from "./Icons.js";

const { createElement: h } = React;

const SOCIAL = [
  { href: "https://wa.me/5511915954848",          Icon: IconWA, label: "WhatsApp"  },
  { href: "https://instagram.com/vordros",         Icon: IconIG, label: "Instagram" },
  { href: "https://linkedin.com/company/vordros",  Icon: IconLI, label: "LinkedIn"  },
];

export function Footer({ t }) {
  return h("footer", { className: "footer" },
    h("div", { className: "footer-inner" },

      /* Logo */
      h("div", { className: "footer-logo" },
        h(Mark, { size: 18 }),
        h("span", { className: "footer-wm" }, "VORDROS")
      ),

      /* Tagline */
      h("span", { className: "footer-tag" }, t.footer.tagline),

      /* Social */
      h("div", { className: "footer-social" },
        ...SOCIAL.map(({ href, Icon, label }) =>
          h("a", {
            key:    href,
            href,
            target: "_blank",
            rel:    "noopener noreferrer",
            "aria-label": label,
            className: "social-link",
          },
            h(Icon, { size: 15, color: "currentColor" })
          )
        )
      ),

      /* Copyright */
      h("p", { className: "footer-copy" }, t.footer.copy)
    )
  );
}
