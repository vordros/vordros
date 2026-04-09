# Vordros — Landing Page

Zero dependências locais. Funciona com qualquer servidor estático.

---

## Estrutura

```
vordros/
├── index.html                  ← Detector de idioma → redireciona para pt-br/ ou en-us/
├── pt-br/
│   └── index.html              ← Versão Português Brasil (PT-BR)
├── en-us/
│   └── index.html              ← Versão Inglês EUA (EN-US)
├── core/
│   ├── app.js                  ← Bootstrap React, detecção de idioma, render
│   ├── seo.js                  ← Injeção dinâmica de todas as metatags
│   └── i18n.js                 ← Todo o conteúdo PT-BR e EN-US
├── components/
│   ├── App.js                  ← Componente raiz, monta todas as seções
│   ├── Nav.js                  ← Navbar com LangToggle
│   ├── Hero.js                 ← Seção Hero
│   ├── Stats.js                ← Faixa de estatísticas
│   ├── Sobre.js                ← Seção Sobre
│   ├── Servicos.js             ← Grid de serviços
│   ├── CTA.js                  ← Call to action
│   ├── Footer.js               ← Rodapé
│   ├── Mark.js                 ← Logo SVG (compartilhado)
│   └── Icons.js                ← Ícones WA, IG, LI (compartilhados)
├── styles/
│   └── main.css                ← Tokens, reset, componentes, responsivo
└── images/
    ├── og-image.png            ← Imagem Open Graph (1200×630px) — ADICIONAR
    └── logo.png                ← Logo para JSON-LD — ADICIONAR
```

---

## Stack (100% CDN — sem instalação)

| Camada       | Tecnologia             | Fonte            |
|-------------|------------------------|------------------|
| UI          | React 18               | unpkg.com        |
| Módulos     | ES Modules nativos     | browser nativo   |
| Fontes      | Exo 2 + Space Grotesk  | Google Fonts CDN |
| Estilo      | CSS customizado        | local            |

> **Sem Babel Standalone.** Todos os componentes usam `React.createElement`
> diretamente — compatível com qualquer browser moderno sem transpilação.

---

## Como usar

### Opção 1 — Arrastar para Netlify Drop
1. Descompacte o arquivo
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arraste a pasta `vordros/` para a área de drop
4. Pronto — URL gerada instantaneamente

### Opção 2 — GitHub Pages
1. Crie um repositório no GitHub
2. Suba todos os arquivos
3. Vá em Settings → Pages → Source: `main` / `root`
4. Acesse `https://seu-usuario.github.io/vordros/`

### Opção 3 — Vercel
```bash
# Sem instalar nada localmente:
# 1. Suba para um repositório GitHub
# 2. Importe no vercel.com
# 3. Framework: Other, Root: /, Output: /
```

### Opção 4 — Servidor próprio (Apache/Nginx)
Copie todos os arquivos para o `public_html` ou `www`.

---

## Configurações obrigatórias antes do deploy

### 1. Microsoft Clarity
Em `pt-br/index.html` e `en-us/index.html`, localize o bloco comentado:
```html
<!-- INSTRUÇÃO: Substitua CLARITY_PROJECT_ID pelo seu Project ID real -->
```
Descomente e substitua `CLARITY_PROJECT_ID` pelo ID obtido em:
https://clarity.microsoft.com

### 2. Domínio real
Em `core/seo.js`, linha 4:
```js
const SITE_URL = "https://vordros.com"; // ← substitua pelo domínio real
```
Faça o mesmo nos arquivos `pt-br/index.html` e `en-us/index.html` nas tags
canonical, hreflang e JSON-LD.

### 3. Imagens OG
Adicione em `images/`:
- `og-image.png` — 1200×630px — imagem de preview para redes sociais
- `logo.png` — mínimo 112×112px — logo para JSON-LD/Google

---

## SEO — O que está implementado

| Recurso                     | Status |
|-----------------------------|--------|
| `<title>` otimizado         | ✅     |
| `<meta description>`        | ✅     |
| `<meta keywords>`           | ✅     |
| `<meta robots>`             | ✅     |
| Open Graph completo         | ✅     |
| Twitter Card                | ✅     |
| `<link canonical>`          | ✅     |
| `<link hreflang>` pt/en/x-default | ✅ |
| JSON-LD Organization        | ✅     |
| JSON-LD WebSite             | ✅     |
| JSON-LD WebPage             | ✅     |
| Microsoft Clarity (mapeamento) | ✅ (configurar) |
| `<html lang>` correto       | ✅     |
| Favicon inline SVG          | ✅     |
| `theme-color`               | ✅     |

---

## Idioma

| Condição                          | Destino       |
|-----------------------------------|---------------|
| Browser `pt`, `pt-BR`, `pt-PT`   | `/pt-br/`     |
| Qualquer outro idioma             | `/en-us/`     |
| `localStorage` vordros_lang = pt-BR | `/pt-br/`  |
| `localStorage` vordros_lang = en-US | `/en-us/`  |

O usuário pode trocar de idioma a qualquer momento pelo toggle **PT | EN** na navbar.
A escolha é salva em `localStorage` e persiste nas visitas seguintes.

---

## Identidade visual

| Token    | Hex       | Uso                       |
|----------|-----------|---------------------------|
| Obsidian | `#0D0E12` | Fundo principal           |
| Volt     | `#C6FF00` | Acento, CTAs, destaques   |
| Ice      | `#F4F5F7` | Textos sobre fundo escuro |

Fontes: **Exo 2** (identidade/títulos) + **Space Grotesk** (corpo/UI)

---

## Links sociais

Configurados em `components/CTA.js` e `components/Footer.js`:

- WhatsApp: `https://wa.me/5511915954848`
- Instagram: `https://instagram.com/vordros`
- LinkedIn: `https://linkedin.com/company/vordros`
