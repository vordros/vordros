/* ─── seo.js — Dynamic meta tag injection ────────────────────────────────── */
/* Called every time language changes. Updates all tags in <head> without reload */

const SITE_URL    = "https://vordros.com";
const OG_IMAGE    = `${SITE_URL}/images/og-image.png`;
const OG_W        = "1200";
const OG_H        = "630";
const TWITTER_HDL = "@vordros";
const CLARITY_ID  = "REPLACE_WITH_YOUR_CLARITY_ID"; // ← substitua pelo seu Project ID do Microsoft Clarity

export function applyMeta(copy) {
  const { meta, lang, htmlLang, locale } = copy;
  const altLang = lang === "pt-BR" ? "en-US" : "pt-BR";
  const curUrl  = `${SITE_URL}/${lang === "pt-BR" ? "pt-br" : "en-us"}/`;
  const altUrl  = `${SITE_URL}/${lang === "pt-BR" ? "en-us" : "pt-br"}/`;

  /* ── html[lang] ────────────────────────────────────────────────────────── */
  document.documentElement.lang = htmlLang;
  document.documentElement.dir  = copy.dir || "ltr";

  /* ── <title> ───────────────────────────────────────────────────────────── */
  document.title = meta.title;

  /* ── Basic meta ────────────────────────────────────────────────────────── */
  setMeta("description",     meta.description);
  setMeta("keywords",        meta.keywords);
  setMeta("robots",          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
  setMeta("author",          "Vordros");
  setMeta("theme-color",     "#0D0E12");
  setMeta("rating",          "general");
  setMeta("revisit-after",   "7 days");
  setMeta("language",        lang);

  /* ── Open Graph ────────────────────────────────────────────────────────── */
  setProp("og:type",              "website");
  setProp("og:site_name",         "Vordros");
  setProp("og:title",             meta.ogTitle);
  setProp("og:description",       meta.ogDesc);
  setProp("og:url",               curUrl);
  setProp("og:image",             OG_IMAGE);
  setProp("og:image:width",       OG_W);
  setProp("og:image:height",      OG_H);
  setProp("og:image:alt",         meta.ogTitle);
  setProp("og:locale",            locale);
  setProp("og:locale:alternate",  lang === "pt-BR" ? "en_US" : "pt_BR");

  /* ── Twitter / X Card ──────────────────────────────────────────────────── */
  setMeta("twitter:card",         "summary_large_image");
  setMeta("twitter:site",         TWITTER_HDL);
  setMeta("twitter:creator",      TWITTER_HDL);
  setMeta("twitter:title",        meta.twTitle);
  setMeta("twitter:description",  meta.twDesc);
  setMeta("twitter:image",        OG_IMAGE);
  setMeta("twitter:image:alt",    meta.twTitle);

  /* ── Canonical ─────────────────────────────────────────────────────────── */
  setLink("canonical", curUrl);

  /* ── hreflang ──────────────────────────────────────────────────────────── */
  setHreflang(htmlLang,                        curUrl);
  setHreflang(lang === "pt-BR" ? "en" : "pt",  altUrl);
  setHreflang("x-default",                     `${SITE_URL}/`);

  /* ── JSON-LD: Organization ─────────────────────────────────────────────── */
  setJsonLd("org", {
    "@context":   "https://schema.org",
    "@type":      "Organization",
    name:          "Vordros",
    url:           SITE_URL,
    logo:          `${SITE_URL}/images/logo.png`,
    description:   meta.description,
    foundingDate:  "2024",
    sameAs: [
      "https://instagram.com/vordros",
      "https://linkedin.com/company/vordros",
      "https://wa.me/5511915954848",
    ],
    contactPoint: {
      "@type":           "ContactPoint",
      telephone:         "+55-11-91595-4848",
      contactType:       "customer service",
      availableLanguage: ["Portuguese", "English"],
      areaServed:        ["BR", "US", "PT"],
    },
    inLanguage: lang,
  });

  /* ── JSON-LD: WebSite (enables sitelinks search box) ───────────────────── */
  setJsonLd("website", {
    "@context":  "https://schema.org",
    "@type":     "WebSite",
    url:          SITE_URL,
    name:         "Vordros",
    description:  meta.description,
    inLanguage:   lang,
    potentialAction: {
      "@type":       "SearchAction",
      target:        `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });

  /* ── JSON-LD: WebPage ───────────────────────────────────────────────────── */
  setJsonLd("webpage", {
    "@context":         "https://schema.org",
    "@type":            "WebPage",
    url:                 curUrl,
    name:                meta.title,
    description:         meta.description,
    inLanguage:          lang,
    isPartOf:           { "@type": "WebSite", url: SITE_URL },
    about:              { "@type": "Organization", name: "Vordros" },
    datePublished:       "2024-01-01",
    dateModified:        new Date().toISOString().split("T")[0],
  });

  /* ── Microsoft Clarity (injected once) ─────────────────────────────────── */
  injectClarity(CLARITY_ID);
}

/* ─── DOM helpers ────────────────────────────────────────────────────────── */
function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setProp(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setHreflang(hreflang, href) {
  let el = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = "alternate";
    el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(id, data) {
  let el = document.querySelector(`script[data-ld="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-ld", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data, null, 2);
}

function injectClarity(id) {
  if (!id || id === "REPLACE_WITH_YOUR_CLARITY_ID") return;
  if (document.querySelector("script[data-clarity]")) return;
  const s = document.createElement("script");
  s.setAttribute("data-clarity", "true");
  s.textContent = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${id}");`;
  document.head.appendChild(s);
}
