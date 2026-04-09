/* ─── Servicos.js ─────────────────────────────────────────────────────────── */

const { createElement: h, useState } = React;

function ServiceCard({ item }) {
  const [hov, setHov] = useState(false);
  return h("article", {
    className:    "scard",
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
  },
    h("p",  { className: "scard-tag"   }, item.tag),
    h("h3", { className: "scard-title" }, item.title),
    h("p",  { className: "scard-desc"  }, item.desc)
  );
}

export function Servicos({ t }) {
  return h("section", {
    id:               "servicos",
    "aria-labelledby": "servicos-heading",
    className:         "servicos",
  },
    h("div", { className: "container" },
      /* Header */
      h("div", { style: { marginBottom: 60 } },
        h("p",  { className: "eyebrow" }, t.servicos.eyebrow),
        h("h2", { id: "servicos-heading", className: "section-h2" }, t.servicos.h2)
      ),
      /* Grid */
      h("div", { className: "grid-3 serv-grid" },
        ...t.servicos.items.map((item, i) =>
          h(ServiceCard, { key: i, item })
        )
      )
    )
  );
}
