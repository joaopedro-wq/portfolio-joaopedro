# Theme

## Compact token summary

- Framework: Angular 20 standalone components; SCSS; Font Awesome icons; `bandeira-ui` animation/directive and button primitives.
- Font: `Inter`, `Segoe UI`, system-ui, sans-serif. Base 16px / 1.6. Headings use a tight tracking and `clamp()` sizing.
- Dark default: `--bg #0a0c12`, `--bg-elevated #10131c`, `--surface #141824`, `--surface-hover #1b2030`, `--border #232838`, `--border-strong #303751`, `--fg #f2f4f8`, `--fg-muted #9aa3b8`, `--fg-subtle #6b7488`.
- Brand: `--primary #6d8cff`, `--primary-strong #4f6ef7`, `--accent #4fd8c4`, `--gradient linear-gradient(120deg, #6d8cff 0%, #9d7bff 45%, #4fd8c4 100%)`.
- Light theme: `--bg #f7f8fb`, `--surface #ffffff`, `--fg #10131c`, `--primary #3d5ce8`, `--accent #0d9488`.
- Layout: `--container 1120px`, horizontal container padding 1.25rem, header 68px. Radii: .5rem, .875rem, 1.25rem, 999px. Shadows: 1/2px, 8/24px, 24/60px. Primary interaction height 44px.
- Motion: `cubic-bezier(0.16, 1, 0.3, 1)`; `prefers-reduced-motion` suppresses transitions and smooth scroll.

## Raw global source — `src/styles.scss`

```scss
@use "bandeira-ui/styles/animations";
:root {
  --bg: #0a0c12;
  --bg-elevated: #10131c;
  --surface: #141824;
  --surface-hover: #1b2030;
  --border: #232838;
  --border-strong: #303751;
  --fg: #f2f4f8;
  --fg-muted: #9aa3b8;
  --fg-subtle: #6b7488;
  --primary: #6d8cff;
  --primary-strong: #4f6ef7;
  --primary-soft: rgba(109, 140, 255, 0.14);
  --accent: #4fd8c4;
  --accent-soft: rgba(79, 216, 196, 0.14);
  --gradient: linear-gradient(120deg, #6d8cff 0%, #9d7bff 45%, #4fd8c4 100%);
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.45);
  --shadow-lg: 0 24px 60px rgba(0, 0, 0, 0.55);
  --ring: 0 0 0 3px rgba(109, 140, 255, 0.45);
  --glass: rgba(255, 255, 255, 0.035);
  --container: 1120px;
  --radius-sm: 0.5rem;
  --radius: 0.875rem;
  --radius-lg: 1.25rem;
  --radius-full: 999px;
  --header-h: 68px;
  color-scheme: dark;
}
:root[data-theme="light"] {
  --bg: #f7f8fb;
  --bg-elevated: #fff;
  --surface: #fff;
  --surface-hover: #f1f3f9;
  --border: #e3e7f0;
  --border-strong: #cbd2e2;
  --fg: #10131c;
  --fg-muted: #545c70;
  --fg-subtle: #7b8399;
  --primary: #3d5ce8;
  --primary-strong: #2b46c9;
  --primary-soft: rgba(61, 92, 232, 0.1);
  --accent: #0d9488;
  --accent-soft: rgba(13, 148, 136, 0.1);
  --gradient: linear-gradient(120deg, #3d5ce8 0%, #7c4ddb 45%, #0d9488 100%);
  --shadow-sm: 0 1px 2px rgba(16, 19, 28, 0.06);
  --shadow-md: 0 8px 24px rgba(16, 19, 28, 0.08);
  --shadow-lg: 0 24px 60px rgba(16, 19, 28, 0.12);
  --ring: 0 0 0 3px rgba(61, 92, 232, 0.35);
  --glass: rgba(16, 19, 28, 0.025);
  color-scheme: light;
}
:root {
  --bd-bg: var(--bg);
  --bd-bg-elevated: var(--bg-elevated);
  --bd-surface: var(--surface);
  --bd-surface-hover: var(--surface-hover);
  --bd-border: var(--border);
  --bd-border-strong: var(--border-strong);
  --bd-fg: var(--fg);
  --bd-fg-muted: var(--fg-muted);
  --bd-fg-subtle: var(--fg-subtle);
  --bd-primary: var(--primary);
  --bd-primary-strong: var(--primary-strong);
  --bd-primary-soft: var(--primary-soft);
  --bd-primary-contrast: #fff;
  --bd-accent: var(--accent);
  --bd-accent-soft: var(--accent-soft);
  --bd-radius-sm: var(--radius-sm);
  --bd-radius: var(--radius);
  --bd-radius-lg: var(--radius-lg);
  --bd-radius-full: var(--radius-full);
  --bd-shadow-sm: var(--shadow-sm);
  --bd-shadow-md: var(--shadow-md);
  --bd-shadow-lg: var(--shadow-lg);
  --bd-gradient: var(--gradient);
  --bd-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --bd-duration: 0.25s;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--header-h) + 16px);
  -webkit-text-size-adjust: 100%;
}
body {
  min-height: 100%;
  background-color: var(--bg);
  color: var(--fg);
  font-family:
    "Inter",
    "Segoe UI",
    system-ui,
    -apple-system,
    sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  transition:
    background-color 0.35s ease,
    color 0.35s ease;
}
img,
video {
  display: block;
  max-width: 100%;
}
button {
  font: inherit;
  color: inherit;
}
a {
  color: var(--primary);
  text-decoration: none;
}
:focus-visible {
  outline: none;
  box-shadow: var(--ring);
  border-radius: var(--radius-sm);
}
::selection {
  background: var(--primary);
  color: #fff;
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
