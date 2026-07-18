# Aura Asset Images Demo Prompts

## Minimal prompt

Use $aura-asset-images to create a polished standalone HTML example that clearly demonstrates the skill.

## Recreate the demo

Use $aura-asset-images to build a responsive reference demo for this capability:

> Use when you need high-quality stock-style images from Aura Assets (aura.build/assets) similar to Unsplash for design mockups and marketing: backgrounds, abstract wallpapers, architecture, portraits, and headshots. Includes a workflow for searching by tag on aura.build/assets and returns 5 real image URLs per category plus practical guidance for using different resolutions and aspect ratios.

### Direction

Present a curated contact sheet with crop, ratio, and intended-use annotations.

Use an art-directed composition with one clear focal point, restrained supporting copy, and enough surrounding interface to show how the technique behaves in a real product or landing page.

### Canonical example

- Show a 16:9 atmospheric landscape, 4:5 editorial portrait, and 1:1 abstract surface.
- Label the ratio and intended use beneath every selection.

### Deliverable

- Create demo/index.html as a standalone document.
- Keep CSS and JavaScript inline.
- Put any required images, fonts, models, textures, or vendor files in demo/assets/.
- Do not add a framework, package manager, build step, or node_modules.
- Add controls only when they help inspect or replay the technique.

### Acceptance checks

- Keep the demo responsive from 390px through 1440px.
- Use semantic HTML, visible focus states, and reduced-motion handling.
- Keep all HTML, CSS, and JavaScript inside demo/index.html.
- Use only relative local asset paths.
- Label aspect ratio, crop, and use case for each selection.
- Treat placeholder source URLs as placeholders, never verified links.

## Remix prompt

Use $aura-asset-images and keep the same implementation contract, but change the subject, copy, palette, and content hierarchy. Preserve the core technique, accessibility behavior, responsive rules, and performance constraints demonstrated by the reference.
