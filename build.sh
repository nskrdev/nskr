#!/bin/sh
# Stages only what index.html actually loads into dist/.
#
# The repo root also holds design explorations (hero-variations.jsx,
# design-canvas.jsx, sections.jsx, wireframe-primitives.jsx, the two
# *.html wireframe files) and ~30 MB of source images under uploads/.
# None of that is referenced by the site, so none of it ships.
set -eu

rm -rf dist
mkdir -p dist/uploads/logos

cp index.html site.css avatar.png dist/

# /gym-master-plan — SR Gym drawing set, AES-GCM encrypted at rest (unlock key
# never stored here); the file is the password gate + ciphertext in one page.
cp gym-master-plan.html dist/

# The five JSX modules index.html pulls in, in load order.
cp site-data.jsx anim-utils.jsx hero-canvas.jsx ghibli-character.jsx site-sections.jsx dist/

# Client logos referenced from site-sections.jsx.
cp uploads/logos/nss.png uploads/logos/skinseoul.avif uploads/logos/valari.png dist/uploads/logos/

echo "staged $(find dist -type f | wc -l | tr -d ' ') files, $(du -sh dist | cut -f1) total"
