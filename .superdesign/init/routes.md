# Routes

## `/`

- Entry: `src/app/pages/portfolio/portfolio.component.ts`
- Layout: `AppComponent` router outlet; fixed header and footer live within the portfolio page.
- Summary: one-page bilingual portfolio with hero, about, experience, process, projects, skills, contact form and contact modal.

## Router source

```ts
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", title: "João Pedro Bandeira — Design e código na mesma pessoa", loadComponent: () => import("./pages/portfolio/portfolio.component").then((m) => m.PortfolioComponent) },
  { path: "**", redirectTo: "" },
];
```
