import {
  DOCUMENT,
  Directive,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  inject,
  input,
} from '@angular/core';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale';

/**
 * Revela o elemento quando ele entra na viewport.
 *
 * Aplica a classe `reveal reveal--{direção}` imediatamente (estado inicial
 * escondido) e acrescenta `is-visible` no momento da interseção — a transição
 * fica toda no CSS, o que mantém a animação na thread de composição.
 *
 * Uso:
 *   <div appReveal></div>
 *   <div appReveal="left" [revealDelay]="120"></div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Direção de entrada do elemento. */
  readonly appReveal = input<RevealDirection | ''>('up');

  /** Atraso em milissegundos — use `i * 80` dentro de listas para cascata. */
  readonly revealDelay = input(0);

  /** Quando falso, o elemento volta a esconder ao sair da viewport. */
  readonly revealOnce = input(true);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    const el = this.host.nativeElement;
    const semMovimento = this.document.defaultView?.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Sem IntersectionObserver ou com movimento reduzido: mostra tudo direto.
    if (semMovimento || typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal', 'is-visible');
      return;
    }

    el.classList.add('reveal', `reveal--${this.appReveal() || 'up'}`);

    if (this.revealDelay() > 0) {
      el.style.transitionDelay = `${this.revealDelay()}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            if (this.revealOnce()) {
              this.observer?.disconnect();
            }
          } else if (!this.revealOnce()) {
            el.classList.remove('is-visible');
          }
        }
      },
      {
        threshold: 0.12,
        // Dispara um pouco antes da borda inferior para o movimento parecer natural.
        rootMargin: '0px 0px -60px 0px',
      }
    );

    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
