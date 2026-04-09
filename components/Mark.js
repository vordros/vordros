/* ─── Mark.js — Vordros logo mark SVG ───────────────────────────────────── */

const { createElement: h } = React;

export function Mark({ size = 32, dark = false }) {
  const c  = dark ? "#0D0E12" : "#C6FF00";
  const cx = size * 0.68;
  const cy = size * 0.50;

  return h("svg", {
    width: size, height: size,
    viewBox: `0 0 ${size} ${size}`,
    fill: "none",
    "aria-hidden": "true",
  },
    h("line", { x1: size*0.07, y1: size*0.15, x2: cx, y2: cy, stroke: c, strokeWidth: size*0.050, strokeLinecap: "round" }),
    h("line", { x1: size*0.07, y1: size*0.85, x2: cx, y2: cy, stroke: c, strokeWidth: size*0.050, strokeLinecap: "round" }),
    h("line", { x1: size*0.30, y1: size*0.15, x2: cx, y2: cy, stroke: c, strokeWidth: size*0.025, strokeLinecap: "round", opacity: "0.28" }),
    h("line", { x1: size*0.30, y1: size*0.85, x2: cx, y2: cy, stroke: c, strokeWidth: size*0.025, strokeLinecap: "round", opacity: "0.28" })
  );
}
