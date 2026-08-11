import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
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

/* ------------------------------------------------------------------ */
/* Modelos                                                            */
/* ------------------------------------------------------------------ */

export interface Project {
  title: string;
  tagline: string;
  /** Contexto: qual problema o projeto resolve. */
  problem: string;
  /** O que foi construído e como. */
  solution: string;
  /** Entregas concretas — é o que convence quem contrata. */
  highlights: string[];
  tech: string[];
  video?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  /** Aviso exibido no rodapé do card — ex.: código proprietário. */
  note?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  items: { name: string; level: 'avançado' | 'intermediário' | 'básico' }[];
}

type SectionId = 'inicio' | 'sobre' | 'experiencia' | 'projetos' | 'habilidades' | 'contato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RevealDirective, CountUpDirective],
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

  /* ---------------------------------------------------------------- */
  /* Dados de contato                                                 */
  /* ---------------------------------------------------------------- */

  readonly email = 'joao.bandeiraoliveira@gmail.com';
  readonly telefone = '(28) 99965-8399';
  readonly telefoneRaw = '+5528999658399';
  readonly whatsapp =
    'https://wa.me/5528999658399?text=' +
    encodeURIComponent('Olá João Pedro! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.');
  readonly linkedin = 'https://www.linkedin.com/in/jo%C3%A3o-pedro-bandeira-01b83a205/';
  readonly github = 'https://github.com/joaopedro-wq';
  readonly localizacao = 'Espírito Santo, Brasil · Disponível para remoto';

  /**
   * TODO: coloque o PDF do currículo em `public/curriculo-joao-pedro-bandeira.pdf`
   * e troque `cvDisponivel` para `true` — o botão aparece automaticamente.
   */
  readonly cvUrl = '/curriculo-joao-pedro-bandeira.pdf';
  readonly cvDisponivel = false;

  /* ---------------------------------------------------------------- */
  /* Prova social / números                                           */
  /* ---------------------------------------------------------------- */

  readonly metrics = [
    { value: 3, suffix: '+', label: 'anos de experiência' },
    { value: 4, suffix: '', label: 'APIs de redes sociais integradas' },
    { value: 15, suffix: '+', label: 'tecnologias no stack' },
    { value: 100, suffix: '%', label: 'do protótipo ao deploy' },
  ];

  /* ---------------------------------------------------------------- */
  /* Experiência                                                      */
  /* TODO: ajuste períodos e números reais de cada posição.           */
  /* ---------------------------------------------------------------- */

  readonly experiences: Experience[] = [
    {
      role: 'Desenvolvedor Full-stack & UI/UX',
      company: 'CoCreator Collab',
      period: 'Atual',
      current: true,
      summary:
        'Faço parte do time de desenvolvimento do CoCreator Collab, SaaS que conecta criadores de conteúdo e marcas através de uma estrutura de match e leva as publicações direto para as redes sociais. Atuo nas duas pontas: desenho e construo as telas em Angular e desenvolvo o backend das integrações com as APIs das redes.',
      achievements: [
        'Integração com as APIs de Meta, TikTok, Google e LinkedIn para publicar o conteúdo dos criadores direto nas redes das marcas',
        'Autenticação OAuth e gestão de contas conectadas de cada rede, com tratamento de tokens, limites e erros de publicação',
        'Backend das rotinas de publicação e retorno de status para o painel, em Laravel',
        'Telas do fluxo de match entre criadores e marcas, com foco em usabilidade e leitura imediata dos dados',
        'Design system em componentes Angular reutilizáveis, garantindo consistência visual em todo o produto',
        'Protótipos no Figma alinhados com produto antes do desenvolvimento — menos retrabalho e escopo claro',
        'Testes automatizados end-to-end com Cypress cobrindo os fluxos críticos da plataforma',
      ],
      stack: [
        'Angular',
        'TypeScript',
        'Laravel',
        'PHP',
        'MySQL',
        'Meta API',
        'TikTok API',
        'Google API',
        'LinkedIn API',
        'OAuth 2.0',
        'Figma',
        'Cypress',
      ],
    },
    {
      role: 'Desenvolvedor Full-stack',
      company: 'Sistema Mesur',
      period: 'Anterior',
      summary:
        'Sistema de gestão interna, com responsabilidade sobre o frontend e o backend das funcionalidades entregues.',
      achievements: [
        'Wireframes e protótipos das telas antes do desenvolvimento, alinhados com os usuários do sistema',
        'Modelagem de dados e implementação das regras de negócio no backend',
        'Interfaces reativas em Angular com componentes reutilizáveis',
        'Otimização de consultas e ajustes de performance em telas críticas',
      ],
      stack: ['Angular', 'Laravel', 'PostgreSQL', 'Figma', 'Git'],
    },
  ];

  /* ---------------------------------------------------------------- */
  /* Projetos                                                         */
  /* ---------------------------------------------------------------- */

  readonly projects: Project[] = [
    {
      title: 'Vitality PLUS',
      tagline: 'Registro nutricional e acompanhamento de metas de saúde',
      problem:
        'Quem acompanha dieta precisa somar calorias e macronutrientes manualmente, o que gera erro e abandono.',
      solution:
        'Aplicação full-stack que registra refeições, calcula automaticamente o consumo diário e acompanha a evolução das metas do usuário.',
      highlights: [
        'Cálculo automático de calorias e macros por refeição',
        'Painel de metas com acompanhamento diário',
        'API REST em Laravel com PostgreSQL',
      ],
      tech: ['Angular', 'TypeScript', 'Laravel', 'PostgreSQL'],
      video: '/vitalityPlus.mp4',
      github: 'https://github.com/joaopedro-wq/sakai-ng',
      featured: true,
    },
  ];

  /** Vídeo atualmente carregado (evita baixar MB desnecessários no load). */
  readonly videoAtivo = signal<string | null>(null);

  ativarVideo(src: string) {
    this.videoAtivo.set(src);
  }

  /* ---------------------------------------------------------------- */
  /* Habilidades                                                      */
  /* ---------------------------------------------------------------- */

  readonly skillGroups: SkillGroup[] = [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: 'fas fa-code',
      items: [
        { name: 'Angular (10+ a 20)', level: 'avançado' },
        { name: 'TypeScript / JavaScript ES6+', level: 'avançado' },
        { name: 'RxJS & Signals', level: 'intermediário' },
        { name: 'HTML5, CSS3, SCSS', level: 'avançado' },
        { name: 'Tailwind & Bootstrap', level: 'avançado' },
        { name: 'Angular Animations & Lazy Loading', level: 'intermediário' },
        { name: 'Componentização e design systems', level: 'avançado' },
      ],
    },
    {
      id: 'design',
      label: 'Design & UX',
      icon: 'fas fa-pen-ruler',
      items: [
        { name: 'Figma — protótipos navegáveis', level: 'avançado' },
        { name: 'Wireframes e fluxos de usuário', level: 'avançado' },
        { name: 'Design system e biblioteca de componentes', level: 'avançado' },
        { name: 'Usabilidade e arquitetura de informação', level: 'avançado' },
        { name: 'Interface responsiva e mobile-first', level: 'avançado' },
        { name: 'Levantamento de requisitos com o cliente', level: 'avançado' },
        { name: 'Acessibilidade (WCAG)', level: 'intermediário' },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: 'fas fa-server',
      items: [
        { name: 'Laravel (PHP)', level: 'avançado' },
        { name: 'APIs RESTful', level: 'avançado' },
        { name: 'Node.js', level: 'intermediário' },
        { name: 'PostgreSQL & MySQL', level: 'avançado' },
        { name: 'MongoDB', level: 'básico' },
        { name: 'Arquitetura de microsserviços', level: 'básico' },
      ],
    },
    {
      id: 'integracoes',
      label: 'Integrações',
      icon: 'fas fa-plug',
      items: [
        { name: 'Meta API (Facebook / Instagram)', level: 'avançado' },
        { name: 'TikTok API', level: 'avançado' },
        { name: 'Google API', level: 'intermediário' },
        { name: 'LinkedIn API', level: 'intermediário' },
        { name: 'OAuth 2.0 e gestão de tokens', level: 'avançado' },
        { name: 'Webhooks e tratamento de rate limit', level: 'intermediário' },
      ],
    },
    {
      id: 'qa',
      label: 'Testes & Ferramentas',
      icon: 'fas fa-vial-circle-check',
      items: [
        { name: 'Testes E2E automatizados com Cypress', level: 'avançado' },
        { name: 'Testes unitários (Jasmine/Karma)', level: 'intermediário' },
        { name: 'Git & GitHub', level: 'avançado' },
        { name: 'Postman & Insomnia', level: 'avançado' },
        { name: 'Scrum & Kanban', level: 'avançado' },
        { name: 'Clean Code & Code Review', level: 'avançado' },
      ],
    },
  ];

  readonly selectedTab = signal<string>('frontend');

  selectTab(id: string) {
    this.selectedTab.set(id);
  }

  get activeGroup(): SkillGroup {
    return this.skillGroups.find((g) => g.id === this.selectedTab()) ?? this.skillGroups[0];
  }

  /* ---------------------------------------------------------------- */
  /* Navegação                                                        */
  /* ---------------------------------------------------------------- */

  readonly navItems: { id: SectionId; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contato', label: 'Contato' },
  ];

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
    let atual: SectionId = this.navItems[0].id;
    for (const item of this.navItems) {
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
      this.toastr.success('Copiado para a área de transferência!');
    } catch {
      this.toastr.error('Não foi possível copiar. Selecione o texto manualmente.');
    }
  }

  readonly anoAtual = new Date().getFullYear();
}
