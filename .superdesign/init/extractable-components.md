# Extractable components

## ContactForm

- Source: `src/app/shared/contact-form.component.ts`
- Category: basic
- Description: Localized form with fields, validation feedback, pending and success states.
- Extractable props: `t` (localized labels and messages), `email` (fallback target).
- Hardcoded: field structure, accessibility attributes, `bdButton` submit treatment and mailto/Formspree behavior.

## PortfolioHeader

- Source: `src/app/pages/portfolio/portfolio.component.html`
- Category: layout
- Description: Fixed top bar with the João Pedro logo, anchor navigation, language/theme controls and contact CTA.
- Extractable props: active section, menu open, selected language, selected theme.
- Hardcoded: real `logo_sistema.png`, the anchor list comes from localized content, Font Awesome icon choices and visual CSS.

## PortfolioFooter

- Source: `src/app/pages/portfolio/portfolio.component.html`
- Category: layout
- Description: Compact footer with copyright and social links.
- Extractable props: current year and localized copyright.
- Hardcoded: GitHub, LinkedIn and email icon choices.
