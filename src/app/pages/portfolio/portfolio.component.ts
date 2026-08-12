import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

import { RevealDirective } from '../shared/reveal.directive';
import { CountUpDirective } from '../shared/count-up.directive';
import { ContactFormComponent } from '../shared/contact-form.component';
import { I18nService } from '../shared/i18n.service';
import type { SectionId, SkillGroup } from '../shared/content.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RevealDirective, CountUpDirective, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('staggerIn', [
      transition(':enter', [
        query(
          '.stagger-item',
          [
            style({ opacity: 0, transform: 'translateY(18px)' }),
            stagger(90, [
              animate('560ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'none' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('listStagger', [
      transition(':enter', [
        query(
          'li',
          [
            style({ opacity: 0, transform: 'translateX(-10px)' }),
            stagger(55, [
              animate('380ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'none' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('320ms ease-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
    trigger('modalAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(24px) scale(0.97)' }),
        animate('280ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'none' })),
      ]),
      transition(':leave', [
        animate('180ms ease-in', style({ opacity: 0, transform: 'translateY(12px) scale(0.98)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  private readonly toastr = inject(ToastrService);
  private readonly document = inject(DOCUMENT);
  private readonly i18n = inject(I18nService);

  /* ---------------------------------------------------------------- */
  /* Idioma — todo texto visível vem daqui                            */
  /* ---------------------------------------------------------------- */

  /** Conteúdo do idioma ativo. */
  readonly c = this.i18n.content;
  readonly lang = this.i18n.lang;

  toggleLang() {
    this.i18n.toggle();
    this.closeMenu();
  }

  /* ---------------------------------------------------------------- */
  /* Contato                                                          */
  /* ---------------------------------------------------------------- */

  readonly email = 'joao.bandeiraoliveira@gmail.com';
  readonly telefone = '(28) 99965-8399';
  readonly telefoneRaw = '+5528999658399';
  readonly linkedin = 'https://www.linkedin.com/in/jo%C3%A3o-pedro-bandeira-01b83a205/';
  readonly github = 'https://github.com/joaopedro-wq';

  /** A mensagem inicial do WhatsApp acompanha o idioma escolhido. */
  readonly whatsapp = computed(() => {
    const texto =
      this.lang() === 'pt'
        ? 'Olá João Pedro! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.'
        : 'Hi João Pedro! I saw your portfolio and would like to talk about an opportunity.';
    return `https://wa.me/5528999658399?text=${encodeURIComponent(texto)}`;
  });

  /**
   * TODO: coloque o PDF do currículo em `public/curriculo-joao-pedro-bandeira.pdf`
   * e troque `cvDisponivel` para `true` — o botão aparece automaticamente.
   */
  readonly cvUrl = '/curriculo-joao-pedro-bandeira.pdf';
  readonly cvDisponivel = false;

  /* ---------------------------------------------------------------- */
  /* Vídeo dos projetos                                               */
  /* ---------------------------------------------------------------- */

  /** Vídeo já liberado (evita baixar MB antes do usuário pedir). */
  readonly videoAtivo = signal<string | null>(null);

  ativarVideo(src: string) {
    this.videoAtivo.set(src);
  }

  /* ---------------------------------------------------------------- */
  /* Habilidades                                                      */
  /* ---------------------------------------------------------------- */

  readonly selectedTab = signal<string>('frontend');

  selectTab(id: string) {
    this.selectedTab.set(id);
  }

  readonly activeGroup = computed<SkillGroup>(() => {
    const grupos = this.c().skills.groups;
    return grupos.find((g) => g.id === this.selectedTab()) ?? grupos[0];
  });

  /* ---------------------------------------------------------------- */
  /* Navegação                                                        */
  /* ---------------------------------------------------------------- */

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal<SectionId>('inicio');
  readonly scrollProgress = signal(0);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll() {
    const doc = this.document.documentElement;
    const top = doc.scrollTop;

    this.scrolled.set(top > 12);

    const max = doc.scrollHeight - doc.clientHeight;
    this.scrollProgress.set(max > 0 ? Math.min(100, (top / max) * 100) : 0);

    // Seção ativa: a última cujo topo já passou de 40% da viewport.
    const linha = top + doc.clientHeight * 0.4;
    const itens = this.c().nav;
    let atual: SectionId = itens[0].id;
    for (const item of itens) {
      const el = this.document.getElementById(item.id);
      if (el && el.offsetTop <= linha) {
        atual = item.id;
      }
    }
    this.activeSection.set(atual);
  }

  /* ---------------------------------------------------------------- */
  /* Tema                                                             */
  /* ---------------------------------------------------------------- */

  readonly isDark = signal(
    (this.document.documentElement.getAttribute('data-theme') ?? 'dark') !== 'light'
  );

  toggleTheme() {
    this.isDark.update((v) => !v);
    const theme = this.isDark() ? 'dark' : 'light';
    this.document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* modo privado: apenas ignora a persistência */
    }
  }

  /* ---------------------------------------------------------------- */
  /* Modal de contato                                                 */
  /* ---------------------------------------------------------------- */

  readonly showModalContato = signal(false);

  abrirModalContato() {
    this.showModalContato.set(true);
    this.closeMenu();
    this.document.body.style.overflow = 'hidden';
  }

  fecharModalContato() {
    this.showModalContato.set(false);
    this.document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.showModalContato()) {
      this.fecharModalContato();
    } else if (this.menuOpen()) {
      this.closeMenu();
    }
  }

  /* ---------------------------------------------------------------- */
  /* Utilidades                                                       */
  /* ---------------------------------------------------------------- */

  async copiarTexto(texto: string, event: Event) {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(texto);
      this.toastr.success(this.c().modal.copied);
    } catch {
      this.toastr.error(this.c().modal.copyError);
    }
  }

  readonly anoAtual = new Date().getFullYear();
}
