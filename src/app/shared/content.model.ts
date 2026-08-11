/**
 * Contratos do conteúdo do site.
 * Toda string visível vive em `content.ts`, uma versão por idioma —
 * o template não carrega texto fixo.
 */

export type Lang = 'pt' | 'en';

export type SectionId =
  | 'inicio'
  | 'sobre'
  | 'experiencia'
  | 'processo'
  | 'projetos'
  | 'habilidades'
  | 'contato';

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

export type SkillLevel = 'advanced' | 'intermediate' | 'basic';

export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  items: { name: string; level: SkillLevel }[];
}

export interface MiniCard {
  icon: string;
  title: string;
  text: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  text: string;
}

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

export interface SiteContent {
  /** Rótulos do menu, na ordem em que aparecem. */
  nav: { id: SectionId; label: string }[];

  header: {
    hire: string;
    themeToLight: string;
    themeToDark: string;
    openMenu: string;
    closeMenu: string;
    langLabel: string;
    skipLink: string;
    navLabel: string;
  };

  hero: {
    badge: string;
    /** Aceita HTML — o nome vem destacado com gradiente. */
    title: string;
    /** Aceita HTML. */
    lead: string;
    pills: string[];
    ctaTalk: string;
    ctaProjects: string;
    ctaCv: string;
    location: string;
    photoAlt: string;
  };

  metrics: Metric[];

  about: {
    eyebrow: string;
    title: string;
    sub: string;
    /** Cada item aceita HTML. */
    paragraphs: string[];
    cards: MiniCard[];
  };

  experience: {
    eyebrow: string;
    title: string;
    sub: string;
    items: Experience[];
  };

  process: {
    eyebrow: string;
    title: string;
    sub: string;
    steps: ProcessStep[];
  };

  projects: {
    eyebrow: string;
    title: string;
    /** Aceita HTML — contém link para a seção de experiência. */
    sub: string;
    labelProblem: string;
    labelSolution: string;
    featured: string;
    code: string;
    liveDemo: string;
    playVideo: string;
    items: Project[];
    ctaCard: { title: string; text: string; button: string };
  };

  skills: {
    eyebrow: string;
    title: string;
    sub: string;
    tablistLabel: string;
    levels: Record<SkillLevel, string>;
    groups: SkillGroup[];
  };

  contact: {
    eyebrow: string;
    title: string;
    text: string;
    whatsapp: string;
    email: string;
    linkedin: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      newMessage: string;
      errorText: string;
      required: string;
      invalidEmail: string;
      minLength: string;
      mailtoFallback: string;
    };
  };

  modal: {
    title: string;
    sub: string;
    whatsapp: string;
    close: string;
    copy: string;
    copied: string;
    copyError: string;
  };

  footer: { rights: string };
}
