# Pages and dependencies

## `/` — Portfolio home

Entry: `src/app/pages/portfolio/portfolio.component.ts`

Dependencies:

- `src/app/pages/portfolio/portfolio.component.ts`
  - `src/app/pages/portfolio/portfolio.component.html`
  - `src/app/pages/portfolio/portfolio.component.scss`
  - `src/app/shared/contact-form.component.ts`
    - `src/app/shared/contact-form.component.html`
    - `src/app/shared/contact-form.component.scss`
    - `src/app/shared/content.model.ts`
  - `src/app/shared/i18n.service.ts`
    - `src/app/shared/content.pt.ts`
    - `src/app/shared/content.en.ts`
    - `src/app/shared/content.model.ts`
  - global: `src/styles.scss`

The page renders a fixed navigation shell, hero with portrait/metrics, about, experience timeline, process cards, project cards (including the Vitality Plus poster/video on demand), skill tabs, contact form and modal, and a footer. It renders the same branch on desktop and mobile; SCSS changes the grid responsively.
