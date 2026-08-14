# nskr.dev

Portfolio site for **nskr.in**, deployed to Cloudflare Workers (static assets).

Currently live at <https://nskr.suryakoushikreddy.workers.dev>. The `nskr.in`
custom domain is **not attached yet** — see *Domain* below.

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

That is 11 files / ~1.7 MB, against a 67 MB working tree. If you add an asset to
the site, **add it to `build.sh`** or it will 404 in production.

```bash
npm run dev      # build + local preview
npm run deploy   # build + deploy
```

## Domain

`nskr.in` is registered at Spaceship. As of the last check its nameservers are
still `launch1/launch2.spaceship.net`, so the domain is **not being served by
Cloudflare yet** regardless of what exists in the Cloudflare dashboard.

To finish:

1. Add `nskr.in` as a zone in Cloudflare; it assigns two nameservers.
2. Replace the Spaceship nameservers with that pair.
3. Uncomment the `routes` block in `wrangler.jsonc` and deploy.

Cloudflare refuses to attach a hostname that already has DNS records
(API error 100117) — delete any leftovers under DNS → Records first.

## Notes

- Default branch is `develop`; `main` is one commit behind.
- `vercel.json` is left over from the previous Vercel deploy and is unused here.
- Serving Babel Standalone (~3 MB) and compiling JSX per page load is slow. If
  the site ever needs to be fast, prebuild the JSX instead.
