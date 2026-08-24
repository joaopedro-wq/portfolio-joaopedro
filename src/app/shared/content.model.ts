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
  problem: string;
  solution: string;
  highlights: string[];
  tech: string[];
  images?: { src: string; alt: string }[];
  github?: string;
  backend?: string;
  demo?: string;
  liveDemoLabel?: string;
  featuredLabel?: string;
  featured?: boolean;
  
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

/**
 * Domínio de atuação e as tecnologias dele. Sem escala de proficiência:
 * autoavaliação não é verificável, e "intermediário" só levanta dúvida —
 * a profundidade real está nos projetos e no GitHub.
 */
export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  /** Resume o que a pessoa faz nesse domínio. */
  summary: string;
  items: string[];
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
  /** Linha de contexto: o número sozinho não diz o que foi feito. */
  detail?: string;
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
    photoAlt: string;
    socialLinks: {
      github: string;
      linkedin: string;
      whatsapp: string;
    };
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
    rationaleTitle: string;
    rationaleProblem: string;
    rationaleSolution: string;
    /** Rótulo do bloco recolhível que abre Problema e Solução. */
    whyExists: string;
    featured: string;
    code: string;
    backendCode: string;
    liveDemo: string;
    playVideo: string;
    items: Project[];
    /**
     * Card da bandeira-ui: o projeto de maior peso técnico, exibido antes dos
     * demais. Os três links saem para fora — a documentação é um site próprio.
     */
    designSystem: {
      name: string;
      tagline: string;
      problem: string;
      solution: string;
      highlights: string[];
      chips: string[];
      cta: string;
      ctaCode: string;
      ctaNpm: string;
      docsUrl: string;
      githubUrl: string;
      npmUrl: string;
    };
    ctaCard: { title: string; text: string; button: string };
  };

  skills: {
    eyebrow: string;
    title: string;
    sub: string;
    tablistLabel: string;
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
