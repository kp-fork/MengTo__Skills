# Gooey Blob System Demo Prompts

## Minimal prompt

Use $gooey-blob-system to create a polished standalone HTML example that clearly demonstrates the skill.

## Recreate the demo

Use $gooey-blob-system to build a responsive reference demo for this capability:

> Create a gooey blob system using SVG filters where multiple shapes merge into a single fluid form. Use overlapping circles combined with a Gaussian blur and color matrix filter to produce a continuous, organic mass. The forms should visually fuse and separate based on proximity. Focus on filter-driven merging (blur + threshold effect), soft organic boundaries with no hard edges, multiple independent shapes behaving as one system, and smooth continuous motion that feels fluid and cohesive.

### Direction

Make the central scene visibly responsive, fluid, and continuously simulated.

Use an art-directed composition with one clear focal point, restrained supporting copy, and enough surrounding interface to show how the technique behaves in a real product or landing page.

### Canonical example

- Merge three animated circles with an SVG blur-and-threshold filter.
- Include a reset control and keep the fluid mass contained inside the stage.

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
- Keep the simulation contained and provide a reset control.
- Avoid trapping pointer or keyboard input.

## Remix prompt

Use $gooey-blob-system and keep the same implementation contract, but change the subject, copy, palette, and content hierarchy. Preserve the core technique, accessibility behavior, responsive rules, and performance constraints demonstrated by the reference.
