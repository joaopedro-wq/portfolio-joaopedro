# Shared components

## ContactFormComponent

- Source: `src/app/shared/contact-form.component.ts`
- Description: Reactive contact form with Formspree request and safe mailto fallback.
- Key inputs: `t` (localized form copy), `email` (fallback recipient).

```ts
import { ChangeDetectionStrategy, Component, inject, input, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, ReactiveFormsModule, Validators, type AbstractControl } from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";
import { firstValueFrom } from "rxjs";
import { BdButtonComponent } from "bandeira-ui";
import { SiteContent } from "./content.model";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/SEU_ID";
type FormState = "idle" | "sending" | "success" | "error";

@Component({
  selector: "app-contact-form",
  standalone: true,
  imports: [ReactiveFormsModule, BdButtonComponent],
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger("swap", [transition(":enter", [style({ opacity: 0, transform: "translateY(12px)" }), animate("340ms cubic-bezier(0.16, 1, 0.3, 1)", style({ opacity: 1, transform: "none" }))])])],
})
export class ContactFormComponent {
  readonly t = input.required<SiteContent["contact"]["form"]>();
  readonly email = input.required<string>();
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  readonly state = signal<FormState>("idle");
  readonly form = this.fb.nonNullable.group({ name: ["", [Validators.required, Validators.minLength(2)]], email: ["", [Validators.required, Validators.email]], subject: ["", [Validators.required, Validators.minLength(3)]], message: ["", [Validators.required, Validators.minLength(20)]] });
  invalido(campo: string): boolean {
    const c = this.form.get(campo);
    return !!c && c.invalid && (c.dirty || c.touched);
  }
  erro(campo: string): string {
    const c = this.form.get(campo) as AbstractControl | null;
    if (!c?.errors) return "";
    if (c.errors["required"]) return this.t().required;
    if (c.errors["email"]) return this.t().invalidEmail;
    if (c.errors["minlength"]) return this.t().minLength;
    return "";
  }
  async enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const dados = this.form.getRawValue();
    this.state.set("sending");
    if (FORMSPREE_ENDPOINT.includes("SEU_ID")) {
      this.abrirMailto(dados);
      this.state.set("success");
      this.form.reset();
      return;
    }
    try {
      await firstValueFrom(this.http.post(FORMSPREE_ENDPOINT, { name: dados.name, email: dados.email, _subject: dados.subject, message: dados.message }, { headers: { Accept: "application/json" } }));
      this.state.set("success");
      this.form.reset();
    } catch {
      this.state.set("error");
    }
  }
  private abrirMailto(dados: { name: string; email: string; subject: string; message: string }) {
    const corpo = `${dados.message}\n\n—\n${dados.name}\n${dados.email}`;
    window.location.href = `mailto:${this.email()}?subject=${encodeURIComponent(dados.subject)}&body=${encodeURIComponent(corpo)}`;
  }
  novaMensagem() {
    this.state.set("idle");
  }
}
```

```html
@if (state() === 'success') {
<div class="form-success" role="status" [@swap]>
  <span class="success-icon"><i class="fas fa-check"></i></span>
  <h3>{{ t().successTitle }}</h3>
  <p>{{ t().successText }}</p>
  <button type="button" class="btn btn-ghost btn-sm" (click)="novaMensagem()">{{ t().newMessage }}</button>
</div>
} @else {
<form class="contact-form" [formGroup]="form" (ngSubmit)="enviar()" novalidate [@swap]>
  <h3 class="form-title">{{ t().title }}</h3>
  <div class="field-row">
    <div class="field"><label for="cf-name">{{ t().name }}</label><input id="cf-name" type="text" formControlName="name" autocomplete="name" [placeholder]="t().namePlaceholder" [class.invalid]="invalido('name')" /></div>
    <div class="field"><label for="cf-email">{{ t().emailLabel }}</label><input id="cf-email" type="email" formControlName="email" autocomplete="email" [placeholder]="t().emailPlaceholder" [class.invalid]="invalido('email')" /></div>
  </div>
  <div class="field"><label for="cf-subject">{{ t().subject }}</label><input id="cf-subject" type="text" formControlName="subject" [placeholder]="t().subjectPlaceholder" [class.invalid]="invalido('subject')" /></div>
  <div class="field"><label for="cf-message">{{ t().message }}</label><textarea id="cf-message" rows="5" formControlName="message" [placeholder]="t().messagePlaceholder" [class.invalid]="invalido('message')"></textarea></div>
  @if (state() === 'error') {
  <p class="form-alert" role="alert"><i class="fas fa-triangle-exclamation"></i> {{ t().errorText }}</p>
  }
  <button bdButton type="submit" size="lg" block class="form-submit" [loading]="state() === 'sending'">@if (state() === 'sending') { {{ t().sending }} } @else { <i class="fas fa-paper-plane"></i> {{ t().submit }} }</button>
</form>
}
```

```scss
:host {
  display: block;
  text-align: left;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.form-title {
  font-size: 1.15rem;
  font-weight: 650;
  color: var(--fg);
  text-align: center;
  margin-bottom: 0.25rem;
}
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--fg-muted);
  }
  input,
  textarea {
    width: 100%;
    padding: 0.75rem 0.95rem;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    color: var(--fg);
    font: inherit;
  }
  textarea {
    resize: vertical;
    min-height: 120px;
  }
}
.form-alert {
  padding: 0.75rem 1rem;
  background: rgba(248, 113, 113, 0.1);
  border: 1px solid rgba(248, 113, 113, 0.35);
  border-radius: var(--radius-sm);
  color: #f87171;
}
.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 2.5rem 1rem;
  text-align: center;
}
@media (max-width: 600px) {
  .field-row {
    grid-template-columns: 1fr;
  }
}
```
