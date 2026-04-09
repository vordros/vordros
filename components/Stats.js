/* ─── Stats.js ───────────────────────────────────────────────────────────── */

const { createElement: h } = React;

export function Stats({ t }) {
  return h("section", { "aria-label": "Estatísticas / Statistics", className: "stats" },
    h("div", { className: "container grid-4" },
      ...t.stats.map((s, i) =>
        h("div", { key: i, className: "stat" },
          h("div", { className: "stat-n" }, s.n),
          h("div", { className: "stat-l" }, s.l)
        )
      )
    )
  );
}
