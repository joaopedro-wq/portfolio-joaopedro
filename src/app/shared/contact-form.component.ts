import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  type AbstractControl,
} from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { firstValueFrom } from 'rxjs';
import { BdButtonComponent } from 'bandeira-ui';
import { SiteContent } from './content.model';

/**
 * Endpoint do Formspree (https://formspree.io — plano gratuito resolve).
 *
 * TODO: crie o formulário, copie o ID gerado e troque abaixo.
 * Enquanto o placeholder estiver aqui, o envio cai automaticamente no
 * `mailto:` com a mensagem preenchida — o formulário funciona desde já.
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_ID';

type FormState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, BdButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('swap', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('340ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ],
})
export class ContactFormComponent {
  /** Textos do idioma ativo. */
  readonly t = input.required<SiteContent['contact']['form']>();
  /** Destino do fallback por e-mail. */
  readonly email = input.required<string>();

  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly state = signal<FormState>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  /** Só mostra erro depois que o campo foi tocado — não agride quem está digitando. */
  invalido(campo: string): boolean {
    const c = this.form.get(campo);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  erro(campo: string): string {
    const c = this.form.get(campo) as AbstractControl | null;
    if (!c?.errors) return '';
    if (c.errors['required']) return this.t().required;
    if (c.errors['email']) return this.t().invalidEmail;
    if (c.errors['minlength']) return this.t().minLength;
    return '';
  }

  async enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const dados = this.form.getRawValue();
    this.state.set('sending');

    // Sem endpoint configurado: entrega a mensagem pelo cliente de e-mail.
    if (FORMSPREE_ENDPOINT.includes('SEU_ID')) {
      this.abrirMailto(dados);
      this.state.set('success');
      this.form.reset();
      return;
    }

    try {
      await firstValueFrom(
        this.http.post(
          FORMSPREE_ENDPOINT,
          {
            name: dados.name,
            email: dados.email,
            _subject: dados.subject,
            message: dados.message,
          },
          { headers: { Accept: 'application/json' } }
        )
      );
      this.state.set('success');
      this.form.reset();
    } catch {
      this.state.set('error');
    }
  }

  private abrirMailto(dados: { name: string; email: string; subject: string; message: string }) {
    const corpo = `${dados.message}\n\n—\n${dados.name}\n${dados.email}`;
    const url = `mailto:${this.email()}?subject=${encodeURIComponent(
      dados.subject
    )}&body=${encodeURIComponent(corpo)}`;
    window.location.href = url;
  }

  novaMensagem() {
    this.state.set('idle');
  }
}
