# nskr.dev

Portfolio site for **nskr.in**, deployed to Cloudflare Workers (static assets).

Live at <https://nskr.in> (also `www`, and
`nskr.suryakoushikreddy.workers.dev`).

## How the site works

`index.html` loads React, ReactDOM and Babel Standalone from unpkg, then pulls in
five `.jsx` files as `<script type="text/babel">` and compiles them **in the
browser** on every page load. There is no bundler and no build step for the site
itself.

## Build

`build.sh` stages only what `index.html` actually references into `dist/`:

| Shipped | Not shipped |
| --- | --- |
| `index.html`, `site.css` | `hero-variations.jsx`, `design-canvas.jsx`, `sections.jsx`, `wireframe-primitives.jsx` |
| the 5 loaded `.jsx` modules | `Portfolio Wireframes.html`, `Roots Explorations.html` |
| `avatar.png`, `uploads/logos/*` | the rest of `uploads/` (~30 MB of source images) |
| `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt` | |

That is 15 files / ~1.7 MB, against a 67 MB working tree. If you add an asset to
the site, **add it to `build.sh`** or it will 404 in production.

```bash
npm run dev      # build + local preview
npm run deploy   # build + deploy
```

## Crawlers and AI assistants

The page is rendered client-side, so anything that does not execute JavaScript
sees an empty `<div id="root">`. `llms.txt` and `llms-full.txt` carry the
actual content for search engines and AI assistants; both are transcribed from
`site-data.jsx` and `site-sections.jsx` rather than written separately, so they
say what the site says. Re-run the transcription if that data changes.

**Cloudflare overrides `robots.txt`.** AI Crawl Control injects a managed block
*ahead* of ours at the edge, and that block carries `Disallow: /` for
Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, Google-Extended,
GPTBot and meta-externalagent — the exact crawlers our file allows. The served
file therefore contains both rules for the same agents.

Which one wins is parser-dependent. RFC 9309 says groups with the same
user-agent are merged and, for equally specific paths, `Allow` should win — but
a parser that takes the first matching group and stops will see the `Disallow`.
It is not something to rely on either way.

To make our file authoritative, turn the managed robots.txt off under
**Cloudflare dashboard → the `nskr.in` zone → AI Crawl Control**. The same
setting is on for `narraenterprises.in` and needs turning off per zone.

## Domain

`nskr.in` is registered at Spaceship, with DNS hosted on Cloudflare
(`mary`/`rory.ns.cloudflare.com`). The registrar did not change — only the
nameservers. Both `nskr.in` and `www.nskr.in` are attached as custom domains in
`wrangler.jsonc`.

Cloudflare refuses to attach a hostname that already has DNS records
(API error 100117) — delete any leftovers under DNS → Records first.

## Notes

- GitHub's default branch is `develop`, but production work goes to `main`,
  which is now **ahead** of `develop`. Worth collapsing to one branch — two
  branches where the default is not the deployed one is a trap.
- Workers Builds is **not connected**, so `main` does not auto-deploy. Until it
  is, shipping means running `npm run deploy` locally.
- `vercel.json` is left over from the previous Vercel deploy and is unused here.
- Serving Babel Standalone (~3 MB) and compiling JSX per page load is slow. If
  the site ever needs to be fast, prebuild the JSX instead.
