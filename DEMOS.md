# Skill Demos

Every tracked skill has a portable demo and the exact prompt needed to recreate or remix it.

## Folder contract

```text
agent-skills/<category>/<skill-name>/
  SKILL.md
  demo/
    index.html
    PROMPT.md
    assets/              # only when local assets are required
    input.md             # workflow skills
    expected-output.md   # workflow skills
```

- Keep HTML, CSS, and JavaScript in demo/index.html.
- Keep images, fonts, models, textures, and vendored files inside demo/assets/.
- Use relative paths and no build step.
- Keep the exact recreation prompt and a shorter remix prompt in demo/PROMPT.md.
- Use fictional portable data in workflow examples.

Run any demo with:

```bash
python3 -m http.server 4173 -d agent-skills/<category>/<skill-name>/demo
```

## Library coverage

- Total: 78
- codex: 12
- media: 2
- ui: 1
- web-design: 63

## Demo index

| Skill | Category | Demo | Prompt |
| --- | --- | --- | --- |
| audit-verify-explain-grade-5 | codex | [Open](agent-skills/codex/audit-verify-explain-grade-5/demo/index.html) | [Prompt](agent-skills/codex/audit-verify-explain-grade-5/demo/PROMPT.md) |
| browser-video-recording | codex | [Open](agent-skills/codex/browser-video-recording/demo/index.html) | [Prompt](agent-skills/codex/browser-video-recording/demo/PROMPT.md) |
| customer-email-draft-threads | codex | [Open](agent-skills/codex/customer-email-draft-threads/demo/index.html) | [Prompt](agent-skills/codex/customer-email-draft-threads/demo/PROMPT.md) |
| customer-support-verification | codex | [Open](agent-skills/codex/customer-support-verification/demo/index.html) | [Prompt](agent-skills/codex/customer-support-verification/demo/PROMPT.md) |
| daily-ui-inspiration-capture | codex | [Open](agent-skills/codex/daily-ui-inspiration-capture/demo/index.html) | [Prompt](agent-skills/codex/daily-ui-inspiration-capture/demo/PROMPT.md) |
| elevenlabs-tts | codex | [Open](agent-skills/codex/elevenlabs-tts/demo/index.html) | [Prompt](agent-skills/codex/elevenlabs-tts/demo/PROMPT.md) |
| html-to-interaction-prompts | codex | [Open](agent-skills/codex/html-to-interaction-prompts/demo/index.html) | [Prompt](agent-skills/codex/html-to-interaction-prompts/demo/PROMPT.md) |
| optimize-web-animations | codex | [Open](agent-skills/codex/optimize-web-animations/demo/index.html) | [Prompt](agent-skills/codex/optimize-web-animations/demo/PROMPT.md) |
| performance-profiling | codex | [Open](agent-skills/codex/performance-profiling/demo/index.html) | [Prompt](agent-skills/codex/performance-profiling/demo/PROMPT.md) |
| stitched-full-page-capture | codex | [Open](agent-skills/codex/stitched-full-page-capture/demo/index.html) | [Prompt](agent-skills/codex/stitched-full-page-capture/demo/PROMPT.md) |
| video-to-superprompt | codex | [Open](agent-skills/codex/video-to-superprompt/demo/index.html) | [Prompt](agent-skills/codex/video-to-superprompt/demo/PROMPT.md) |
| x-bookmark-quote-posts | codex | [Open](agent-skills/codex/x-bookmark-quote-posts/demo/index.html) | [Prompt](agent-skills/codex/x-bookmark-quote-posts/demo/PROMPT.md) |
| aura-asset-images | media | [Open](agent-skills/media/aura-asset-images/demo/index.html) | [Prompt](agent-skills/media/aura-asset-images/demo/PROMPT.md) |
| unsplash-asset-images | media | [Open](agent-skills/media/unsplash-asset-images/demo/index.html) | [Prompt](agent-skills/media/unsplash-asset-images/demo/PROMPT.md) |
| design-first-ui-prompting | ui | [Open](agent-skills/ui/design-first-ui-prompting/demo/index.html) | [Prompt](agent-skills/ui/design-first-ui-prompting/demo/PROMPT.md) |
| agency-grid-layout-minimal | web-design | [Open](agent-skills/web-design/agency-grid-layout-minimal/demo/index.html) | [Prompt](agent-skills/web-design/agency-grid-layout-minimal/demo/PROMPT.md) |
| animation-on-scroll | web-design | [Open](agent-skills/web-design/animation-on-scroll/demo/index.html) | [Prompt](agent-skills/web-design/animation-on-scroll/demo/PROMPT.md) |
| animation-systems | web-design | [Open](agent-skills/web-design/animation-systems/demo/index.html) | [Prompt](agent-skills/web-design/animation-systems/demo/PROMPT.md) |
| atmosphere-background | web-design | [Open](agent-skills/web-design/atmosphere-background/demo/index.html) | [Prompt](agent-skills/web-design/atmosphere-background/demo/PROMPT.md) |
| background-grid-webgl | web-design | [Open](agent-skills/web-design/background-grid-webgl/demo/index.html) | [Prompt](agent-skills/web-design/background-grid-webgl/demo/PROMPT.md) |
| beautiful-shadows | web-design | [Open](agent-skills/web-design/beautiful-shadows/demo/index.html) | [Prompt](agent-skills/web-design/beautiful-shadows/demo/PROMPT.md) |
| blue-cloudy-clean-modern | web-design | [Open](agent-skills/web-design/blue-cloudy-clean-modern/demo/index.html) | [Prompt](agent-skills/web-design/blue-cloudy-clean-modern/demo/PROMPT.md) |
| blue-laser-clean-glass-layout | web-design | [Open](agent-skills/web-design/blue-laser-clean-glass-layout/demo/index.html) | [Prompt](agent-skills/web-design/blue-laser-clean-glass-layout/demo/PROMPT.md) |
| book-serif-index | web-design | [Open](agent-skills/web-design/book-serif-index/demo/index.html) | [Prompt](agent-skills/web-design/book-serif-index/demo/PROMPT.md) |
| bright-green-tech-system-webgl | web-design | [Open](agent-skills/web-design/bright-green-tech-system-webgl/demo/index.html) | [Prompt](agent-skills/web-design/bright-green-tech-system-webgl/demo/PROMPT.md) |
| cinematic-gsap-lenis-motion-system | web-design | [Open](agent-skills/web-design/cinematic-gsap-lenis-motion-system/demo/index.html) | [Prompt](agent-skills/web-design/cinematic-gsap-lenis-motion-system/demo/PROMPT.md) |
| cinematic-scroll-storytelling | web-design | [Open](agent-skills/web-design/cinematic-scroll-storytelling/demo/index.html) | [Prompt](agent-skills/web-design/cinematic-scroll-storytelling/demo/PROMPT.md) |
| clean-minimal-beige-light-mode | web-design | [Open](agent-skills/web-design/clean-minimal-beige-light-mode/demo/index.html) | [Prompt](agent-skills/web-design/clean-minimal-beige-light-mode/demo/PROMPT.md) |
| cobejs | web-design | [Open](agent-skills/web-design/cobejs/demo/index.html) | [Prompt](agent-skills/web-design/cobejs/demo/PROMPT.md) |
| company-logos | web-design | [Open](agent-skills/web-design/company-logos/demo/index.html) | [Prompt](agent-skills/web-design/company-logos/demo/PROMPT.md) |
| container-lines | web-design | [Open](agent-skills/web-design/container-lines/demo/index.html) | [Prompt](agent-skills/web-design/container-lines/demo/PROMPT.md) |
| corner-diagonals | web-design | [Open](agent-skills/web-design/corner-diagonals/demo/index.html) | [Prompt](agent-skills/web-design/corner-diagonals/demo/PROMPT.md) |
| corner-lasers | web-design | [Open](agent-skills/web-design/corner-lasers/demo/index.html) | [Prompt](agent-skills/web-design/corner-lasers/demo/PROMPT.md) |
| css-alpha-masking | web-design | [Open](agent-skills/web-design/css-alpha-masking/demo/index.html) | [Prompt](agent-skills/web-design/css-alpha-masking/demo/PROMPT.md) |
| css-border-gradient | web-design | [Open](agent-skills/web-design/css-border-gradient/demo/index.html) | [Prompt](agent-skills/web-design/css-border-gradient/demo/PROMPT.md) |
| dark-blue-contrasting-clean | web-design | [Open](agent-skills/web-design/dark-blue-contrasting-clean/demo/index.html) | [Prompt](agent-skills/web-design/dark-blue-contrasting-clean/demo/PROMPT.md) |
| dark-glass-clean-layout | web-design | [Open](agent-skills/web-design/dark-glass-clean-layout/demo/index.html) | [Prompt](agent-skills/web-design/dark-glass-clean-layout/demo/PROMPT.md) |
| dither-background | web-design | [Open](agent-skills/web-design/dither-background/demo/index.html) | [Prompt](agent-skills/web-design/dither-background/demo/PROMPT.md) |
| dither-laser-dark-mode | web-design | [Open](agent-skills/web-design/dither-laser-dark-mode/demo/index.html) | [Prompt](agent-skills/web-design/dither-laser-dark-mode/demo/PROMPT.md) |
| editorial-tech | web-design | [Open](agent-skills/web-design/editorial-tech/demo/index.html) | [Prompt](agent-skills/web-design/editorial-tech/demo/PROMPT.md) |
| framed-grid-layout | web-design | [Open](agent-skills/web-design/framed-grid-layout/demo/index.html) | [Prompt](agent-skills/web-design/framed-grid-layout/demo/PROMPT.md) |
| framed-tech-dark-border-gradient | web-design | [Open](agent-skills/web-design/framed-tech-dark-border-gradient/demo/index.html) | [Prompt](agent-skills/web-design/framed-tech-dark-border-gradient/demo/PROMPT.md) |
| funky-purple-container-tech | web-design | [Open](agent-skills/web-design/funky-purple-container-tech/demo/index.html) | [Prompt](agent-skills/web-design/funky-purple-container-tech/demo/PROMPT.md) |
| glass-dark-mode-clock | web-design | [Open](agent-skills/web-design/glass-dark-mode-clock/demo/index.html) | [Prompt](agent-skills/web-design/glass-dark-mode-clock/demo/PROMPT.md) |
| glass-dark-ui | web-design | [Open](agent-skills/web-design/glass-dark-ui/demo/index.html) | [Prompt](agent-skills/web-design/glass-dark-ui/demo/PROMPT.md) |
| globe-gl | web-design | [Open](agent-skills/web-design/globe-gl/demo/index.html) | [Prompt](agent-skills/web-design/globe-gl/demo/PROMPT.md) |
| globe-particles | web-design | [Open](agent-skills/web-design/globe-particles/demo/index.html) | [Prompt](agent-skills/web-design/globe-particles/demo/PROMPT.md) |
| gooey-blob-system | web-design | [Open](agent-skills/web-design/gooey-blob-system/demo/index.html) | [Prompt](agent-skills/web-design/gooey-blob-system/demo/PROMPT.md) |
| gsap-scrolltrigger-storytelling | web-design | [Open](agent-skills/web-design/gsap-scrolltrigger-storytelling/demo/index.html) | [Prompt](agent-skills/web-design/gsap-scrolltrigger-storytelling/demo/PROMPT.md) |
| gsap | web-design | [Open](agent-skills/web-design/gsap/demo/index.html) | [Prompt](agent-skills/web-design/gsap/demo/PROMPT.md) |
| high-contrast-skeuomorphic-clean | web-design | [Open](agent-skills/web-design/high-contrast-skeuomorphic-clean/demo/index.html) | [Prompt](agent-skills/web-design/high-contrast-skeuomorphic-clean/demo/PROMPT.md) |
| image-first-grid-layout | web-design | [Open](agent-skills/web-design/image-first-grid-layout/demo/index.html) | [Prompt](agent-skills/web-design/image-first-grid-layout/demo/PROMPT.md) |
| landing-page | web-design | [Open](agent-skills/web-design/landing-page/demo/index.html) | [Prompt](agent-skills/web-design/landing-page/demo/PROMPT.md) |
| light-mode-paper-technical | web-design | [Open](agent-skills/web-design/light-mode-paper-technical/demo/index.html) | [Prompt](agent-skills/web-design/light-mode-paper-technical/demo/PROMPT.md) |
| marquee-loop | web-design | [Open](agent-skills/web-design/marquee-loop/demo/index.html) | [Prompt](agent-skills/web-design/marquee-loop/demo/PROMPT.md) |
| masked-reveal | web-design | [Open](agent-skills/web-design/masked-reveal/demo/index.html) | [Prompt](agent-skills/web-design/masked-reveal/demo/PROMPT.md) |
| matterjs | web-design | [Open](agent-skills/web-design/matterjs/demo/index.html) | [Prompt](agent-skills/web-design/matterjs/demo/PROMPT.md) |
| mesh-gradient-dark-blue-clean | web-design | [Open](agent-skills/web-design/mesh-gradient-dark-blue-clean/demo/index.html) | [Prompt](agent-skills/web-design/mesh-gradient-dark-blue-clean/demo/PROMPT.md) |
| nested-container-clean-agency | web-design | [Open](agent-skills/web-design/nested-container-clean-agency/demo/index.html) | [Prompt](agent-skills/web-design/nested-container-clean-agency/demo/PROMPT.md) |
| nested-container-frames | web-design | [Open](agent-skills/web-design/nested-container-frames/demo/index.html) | [Prompt](agent-skills/web-design/nested-container-frames/demo/PROMPT.md) |
| number-details | web-design | [Open](agent-skills/web-design/number-details/demo/index.html) | [Prompt](agent-skills/web-design/number-details/demo/PROMPT.md) |
| orange-clean-paper-saas | web-design | [Open](agent-skills/web-design/orange-clean-paper-saas/demo/index.html) | [Prompt](agent-skills/web-design/orange-clean-paper-saas/demo/PROMPT.md) |
| pricing-page | web-design | [Open](agent-skills/web-design/pricing-page/demo/index.html) | [Prompt](agent-skills/web-design/pricing-page/demo/PROMPT.md) |
| progressive-blur | web-design | [Open](agent-skills/web-design/progressive-blur/demo/index.html) | [Prompt](agent-skills/web-design/progressive-blur/demo/PROMPT.md) |
| reveal-hover-effect | web-design | [Open](agent-skills/web-design/reveal-hover-effect/demo/index.html) | [Prompt](agent-skills/web-design/reveal-hover-effect/demo/PROMPT.md) |
| skeuomorphic-ui | web-design | [Open](agent-skills/web-design/skeuomorphic-ui/demo/index.html) | [Prompt](agent-skills/web-design/skeuomorphic-ui/demo/PROMPT.md) |
| solar-duotone-bold | web-design | [Open](agent-skills/web-design/solar-duotone-bold/demo/index.html) | [Prompt](agent-skills/web-design/solar-duotone-bold/demo/PROMPT.md) |
| split-layout-technical | web-design | [Open](agent-skills/web-design/split-layout-technical/demo/index.html) | [Prompt](agent-skills/web-design/split-layout-technical/demo/PROMPT.md) |
| staggered-word-reveal | web-design | [Open](agent-skills/web-design/staggered-word-reveal/demo/index.html) | [Prompt](agent-skills/web-design/staggered-word-reveal/demo/PROMPT.md) |
| tailwindcss | web-design | [Open](agent-skills/web-design/tailwindcss/demo/index.html) | [Prompt](agent-skills/web-design/tailwindcss/demo/PROMPT.md) |
| tech-green-dark-mode-modern | web-design | [Open](agent-skills/web-design/tech-green-dark-mode-modern/demo/index.html) | [Prompt](agent-skills/web-design/tech-green-dark-mode-modern/demo/PROMPT.md) |
| technical-wireframe-info-layout | web-design | [Open](agent-skills/web-design/technical-wireframe-info-layout/demo/index.html) | [Prompt](agent-skills/web-design/technical-wireframe-info-layout/demo/PROMPT.md) |
| threejs | web-design | [Open](agent-skills/web-design/threejs/demo/index.html) | [Prompt](agent-skills/web-design/threejs/demo/PROMPT.md) |
| unicorn-studio | web-design | [Open](agent-skills/web-design/unicorn-studio/demo/index.html) | [Prompt](agent-skills/web-design/unicorn-studio/demo/PROMPT.md) |
| vantajs | web-design | [Open](agent-skills/web-design/vantajs/demo/index.html) | [Prompt](agent-skills/web-design/vantajs/demo/PROMPT.md) |
| webgl-3d-object | web-design | [Open](agent-skills/web-design/webgl-3d-object/demo/index.html) | [Prompt](agent-skills/web-design/webgl-3d-object/demo/PROMPT.md) |
| webgl-landing-steering | web-design | [Open](agent-skills/web-design/webgl-landing-steering/demo/index.html) | [Prompt](agent-skills/web-design/webgl-landing-steering/demo/PROMPT.md) |
| webgl-laser | web-design | [Open](agent-skills/web-design/webgl-laser/demo/index.html) | [Prompt](agent-skills/web-design/webgl-laser/demo/PROMPT.md) |
