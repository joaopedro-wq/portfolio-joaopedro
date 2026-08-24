# Layouts

## AppComponent

- Source: `src/app/app.component.ts`
- Description: Minimal application shell that renders the routed portfolio page.

```ts
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<router-outlet />`,
})
export class AppComponent {}
```

## Portfolio page shell

- Source: `src/app/pages/portfolio/portfolio.component.html`
- Description: The only route owns the fixed top navigation, footer, language/theme controls, anchor navigation and contact modal. Those layout regions are intentionally page-local rather than reusable components.
- Header: fixed translucent navigation with the real `logo_sistema.png`, anchor links, language, theme and contact controls.
- Footer: copyright and social links.
