import {
  DOCUMENT,
  Directive,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  inject,
  input,
} from '@angular/core';

/**
 * Anima um número de 0 até o valor final quando o elemento entra na viewport.
 * Usa `requestAnimationFrame` com easing de saída, sem disparar change detection.
 *
 * Uso: <span [appCountUp]="3" suffix="+"></span>
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  readonly appCountUp = input.required<number>();
  readonly prefix = input('');
  readonly suffix = input('');
  readonly duration = input(1400);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private observer?: IntersectionObserver;
  private frame?: number;

  ngAfterViewInit() {
    const el = this.host.nativeElement;
    const semMovimento = this.document.defaultView?.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (semMovimento || typeof IntersectionObserver === 'undefined') {
      this.render(this.appCountUp());
      return;
    }

    this.render(0);

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.observer?.disconnect();
          this.animar();
        }
      },
      { threshold: 0.4 }
    );

    this.observer.observe(el);
  }

  private animar() {
    const alvo = this.appCountUp();
    const total = this.duration();
    const inicio = performance.now();

    const passo = (agora: number) => {
      const t = Math.min(1, (agora - inicio) / total);
      // easeOutExpo: rápido no começo, assenta suave no valor final.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      this.render(Math.round(alvo * eased));

      if (t < 1) {
        this.frame = requestAnimationFrame(passo);
      }
    };

    this.frame = requestAnimationFrame(passo);
  }

  private render(valor: number) {
    this.host.nativeElement.textContent = `${this.prefix()}${valor}${this.suffix()}`;
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }
  }
}
