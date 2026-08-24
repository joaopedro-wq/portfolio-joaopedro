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
import { BdRevealDirective, BdCountUpDirective } from 'bandeira-ui';

import { ContactFormComponent } from '../../shared/contact-form.component';
import { I18nService } from '../../shared/i18n.service';
import type { SectionId } from '../../shared/content.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [BdRevealDirective, BdCountUpDirective, ContactFormComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
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
export class PortfolioComponent {
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
        ? 'Olá João Pedro! Vi seu portfólio e gostaria de conversar sobre um projeto ou colaboração.'
        : 'Hi João Pedro! I saw your portfolio and would like to talk about a project or collaboration.';
    return `https://wa.me/5528999658399?text=${encodeURIComponent(texto)}`;
  });

  /**
   * TODO: coloque o PDF do currículo em `public/curriculo-joao-pedro-bandeira.pdf`
   * e troque `cvDisponivel` para `true` — o botão aparece automaticamente.
   */
  readonly cvUrl = '/curriculo-joao-pedro-bandeira.pdf';
  readonly cvDisponivel = false;


  readonly dsMockRows = [
    { a: 34, b: 22, on: false },
    { a: 44, b: 18, on: true },
    { a: 28, b: 30, on: false },
    { a: 38, b: 20, on: false },
  ] as const;



  readonly activeProjectIndex = signal(0);

  setActiveProject(index: number) {
    this.activeProjectIndex.set(index);
  }

  nextProject() {
    const total = this.c().projects.items.length + 2;
    this.activeProjectIndex.set((this.activeProjectIndex() + 1) % total);
  }

  prevProject() {
    const total = this.c().projects.items.length + 2;
    this.activeProjectIndex.set((this.activeProjectIndex() - 1 + total) % total);
  }

 
  onProjectKeydown(event: KeyboardEvent, total: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const next = (this.activeProjectIndex() + delta + total) % total;
    this.activeProjectIndex.set(next);
    const card = this.document.getElementById(`project-card-${next}`);
    card?.focus();
  }

 
  projectPosition(index: number, total: number): 'center' | 'left' | 'right' | 'hidden' {
    const diff = (index - this.activeProjectIndex() + total) % total;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === total - 1) return 'left';
    return 'hidden';
  }

 
  readonly activeProjectPrimary = computed(() => {
    const idx = this.activeProjectIndex();
    const projects = this.c().projects;
    const items = projects.items;

    if (idx < items.length) {
      const p = items[idx];
      return { href: p.demo, label: p.liveDemoLabel ?? projects.liveDemo };
    }
    if (idx === items.length) {
      const ds = projects.designSystem;
      return { href: ds.docsUrl, label: ds.cta };
    }
    return { href: this.github, label: projects.ctaCard.button };
  });

  /* ---------------------------------------------------------------- */
  /* Modal "ver mais" do card ativo — detalha problema, solução,      */
  /* destaques e links sem inflar o carrossel com um painel fixo.     */
  /* ---------------------------------------------------------------- */

  readonly showProjectDetail = signal(false);

  openProjectDetail() {
    this.showProjectDetail.set(true);
    this.document.body.style.overflow = 'hidden';
  }

  closeProjectDetail() {
    this.showProjectDetail.set(false);
    this.document.body.style.overflow = '';
  }

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
    } else if (this.showProjectDetail()) {
      this.closeProjectDetail();
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

  /* ---------------------------------------------------------------- */
  /* Competências — baralho em leque, sempre todo visível             */
  /* ---------------------------------------------------------------- */

  readonly activeSkillIndex = signal(0);

  /** Uma cor de destaque por frente de trabalho — dá identidade visual a cada carta. */
  private readonly skillGroupColors = [
    '#6d8cff', // Frontend — indigo (marca)
    '#a78bfa', // Design & UX — violeta
    '#4fd8c4', // Backend — mint (marca)
    '#f2b84f', // Integrações — âmbar
    '#f472b6', // Testes & Ferramentas — rosa
  ] as const;

  skillGroupColor(index: number): string {
    return this.skillGroupColors[index % this.skillGroupColors.length];
  }

  /** Em telas estreitas o leque encolhe o espaçamento para não vazar da viewport. */
  private readonly skillDeckCompact = signal(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  @HostListener('window:resize')
  onSkillDeckResize() {
    this.skillDeckCompact.set(window.innerWidth < 640);
  }

  setActiveSkill(index: number) {
    this.activeSkillIndex.set(index);
  }

  nextSkill() {
    const total = this.c().skills.groups.length;
    this.activeSkillIndex.set((this.activeSkillIndex() + 1) % total);
  }

  prevSkill() {
    const total = this.c().skills.groups.length;
    this.activeSkillIndex.set((this.activeSkillIndex() - 1 + total) % total);
  }

  /** Setas do teclado navegam entre as cartas do leque. */
  onSkillTabKeydown(event: KeyboardEvent, total: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const next = (this.activeSkillIndex() + delta + total) % total;
    this.activeSkillIndex.set(next);
    const card = this.document.getElementById(`skill-card-${next}`);
    card?.focus();
  }

  /**
   * Cada carta fica sempre visível em leque; a ativa fica sempre centralizada
   * (a distância é medida pelo caminho mais curto no círculo de grupos, então
   * as outras cartas "dançam" para se reorganizar em vez de empilhar de lado).
   * Posição pura por índice — nada reage ao cursor, então clicar nunca "quebra"
   * o leque, mesmo com o mouse parado em cima da carta.
   */
  skillCardStyle(index: number): string {
    const total = this.c().skills.groups.length;
    let offset = index - this.activeSkillIndex();
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const factor = this.skillDeckCompact() ? 0.6 : 1;
    const x = offset * 56 * factor;
    const y = Math.abs(offset) * 10 * factor;
    const rot = offset * 6;
    const scale = offset === 0 ? 1 : 1 - Math.min(Math.abs(offset), 3) * 0.045;
    const z = 10 - Math.abs(offset);
    return `transform: translateX(${x}px) translateY(${y}px) rotate(${rot}deg) scale(${scale}); z-index: ${z};`;
  }
}
