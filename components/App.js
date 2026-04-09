/* ─── App.js — Root component, assembles all sections ────────────────────── */

import { Nav }      from "./Nav.js";
import { Hero }     from "./Hero.js";
import { Stats }    from "./Stats.js";
import { Sobre }    from "./Sobre.js";
import { Servicos } from "./Servicos.js";
import { CTA }      from "./CTA.js";
import { Footer }   from "./Footer.js";

const { createElement: h } = React;

export function App({ t, lang, setLang, scrolled }) {
  return h(React.Fragment, null,
    h(Nav,      { t, lang, setLang, scrolled }),
    h("main",   { id: "main-content" },
      h(Hero,     { t }),
      h(Stats,    { t }),
      h(Sobre,    { t }),
      h(Servicos, { t }),
      h(CTA,      { t })
    ),
    h(Footer, { t })
  );
}
