import { SiteContent } from './content.model';

export const CONTENT_EN: SiteContent = {
  nav: [
    { id: 'inicio', label: 'Home' },
    { id: 'projetos', label: 'Projects' },
    { id: 'sobre', label: 'About' },
    { id: 'experiencia', label: 'Experience' },
    { id: 'contato', label: 'Contact' },
  ],

  header: {
    hire: "Let's talk",
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langLabel: 'Ver em português',
    skipLink: 'Skip to content',
    navLabel: 'Main navigation',
  },

  hero: {
    badge: 'Full-stack developer · Angular & Laravel',
    title:
      'I build <span class="gradient-text">clear web products</span>, from flow to delivery.',
    lead:
      'I’m João Pedro, a <strong>full-stack developer</strong>. I bring product, interface and code together to turn business rules into experiences people can actually use — with <strong>Angular</strong>, <strong>Laravel</strong> and attention to detail.',
    pills: [
      'Angular',
      'TypeScript',
      'Product & UX',
      'Laravel',
      'Cypress',
      'APIs',
    ],
    ctaTalk: "Let's talk",
    ctaProjects: 'Explore Vitality',
    ctaCv: 'Download CV',
    photoAlt: 'Photo of João Pedro Bandeira',
    socialLinks: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      whatsapp: 'WhatsApp',
    },
  },

  metrics: [
    {
      value: 3,
      suffix: '+',
      label: 'years of experience',
      detail: 'Angular and Laravel, from the screen design to the database',
    },
    {
      value: 4,
      suffix: '',
      label: 'APIs integrated',
      detail: 'Publishing and authentication on Meta, TikTok, Google and LinkedIn',
    },
    {
      value: 31,
      suffix: '',
      label: 'components published',
      detail: 'My own Angular library, open under the MIT licence',
    },
    {
      value: 102,
      suffix: '',
      label: 'automated tests',
      detail: 'Covering 95% of the library’s lines, running on every push',
    },
  ],

  about: {
    eyebrow: 'About me',
    title: 'Before code, I understand what needs to work',
    sub: 'From business context to an experience that reaches the people using it.',
    paragraphs: [
      'I work across product, UX/UI and engineering: I understand business rules, organise flows and turn product decisions into interfaces that work in practice.',
      'This integrated view helps surface problems early and create more consistent deliveries, without leaving architecture, performance and maintenance for later.',
      'I apply this today at <strong>CoCreator Collab</strong>, working on both ends: the interface in <strong>Angular</strong> and the backend in <strong>Laravel</strong>. The detail of each delivery is under <a href="#experiencia">Experience</a>.',
    ],
    cards: [
      {
        icon: 'fas fa-pen-ruler',
        title: 'Product mindset',
        text: 'I connect user needs, business rules and technical decisions before turning them into code.',
      },
      {
        icon: 'fas fa-wand-magic-sparkles',
        title: 'Clear experiences',
        text: 'Interfaces with hierarchy, feedback and flows that help users move forward without a manual.',
      },
      {
        icon: 'fas fa-plug',
        title: 'Integrations that hold up',
        text: 'OAuth, tokens, rate limits and publishing errors handled end to end.',
      },
      {
        icon: 'fas fa-cube',
        title: 'Sustainable engineering',
        text: 'Reusable components, tests and patterns that make products more consistent and easier to evolve.',
      },
    ],
  },

  experience: {
    eyebrow: 'Career',
    title: 'A career built around real problems',
    sub: 'Each experience broadened my craft: from internal systems to products connected to platforms people use every day.',
    items: [
      {
        role: 'Full-stack Developer & UI/UX',
        company: 'CoCreator Collab',
        period: 'Current',
        current: true,
        summary:
          'I am part of the development team at CoCreator Collab, a SaaS that connects content creators and brands through a matching structure and delivers publications straight to social networks. I work on both ends: I design and build the screens in Angular and develop the backend for the social network API integrations.',
        achievements: [
          'Integration with the Meta, TikTok, Google and LinkedIn APIs to publish creator content directly to the brands’ networks',
          'OAuth authentication and management of connected accounts per network, handling tokens, rate limits and publishing errors',
          'Backend for the publishing routines and status feedback to the dashboard, in Laravel',
          'Screens for the creator–brand matching flow, focused on usability and immediate readability of the data',
          'Design system of reusable Angular components, keeping visual consistency across the product',
          'Alignment with product ahead of each delivery, cutting mid-flight scope changes',
          'Automated end-to-end tests with Cypress covering the platform’s critical flows',
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
        role: 'Full-stack Developer',
        company: 'Mesur System',
        period: 'Previous',
        summary:
          'Internal management system, owning both the frontend and the backend of the features delivered.',
        achievements: [
          'Research with the internal users before defining each screen of the system',
          'Data modelling and implementation of business rules on the backend',
          'Reactive interfaces in Angular with reusable components',
          'Query optimization and performance tuning on critical screens',
        ],
        stack: ['Angular', 'Laravel', 'PostgreSQL', 'Figma', 'Git'],
      },
    ],
  },

  process: {
    eyebrow: 'How I work',
    title: 'How I turn context into product',
    sub: 'A simple process that keeps need, experience and technical quality in the same conversation.',
    steps: [
      {
        icon: 'fas fa-magnifying-glass',
        title: 'Discovery',
        text: 'I understand the problem, who will use it and the business rules before proposing any solution. The wrong question produces the wrong screen.',
      },
      {
        icon: 'fas fa-pen-ruler',
        title: 'Prototype',
        text: 'Wireframe and clickable prototype in Figma. Everyone sees and validates the screen before a single line of code exists.',
      },
      {
        icon: 'fas fa-code',
        title: 'Build',
        text: 'Angular frontend on top of my own component library; backend and integrations in Laravel.',
      },
      {
        icon: 'fas fa-rocket',
        title: 'Testing and deployment',
        text: 'Cypress on the critical flows, code review and a monitored release — no surprises after deployment.',
      },
    ],
  },

  projects: {
    eyebrow: 'Selected work',
    title: 'Projects that explain how I work',
    sub: 'Real product, experience and engineering cases — presented with context, not as a collection of technologies.',
    labelProblem: 'Problem',
    labelSolution: 'Solution',
    rationaleTitle: 'Why Vitality exists',
    rationaleProblem: 'The challenge',
    rationaleSolution: 'How Vitality helps',
    whyExists: 'Why it exists',
    featured: 'Technical highlight',
    code: 'Frontend',
    backendCode: 'Backend',
    liveDemo: 'Live demo',
    playVideo: 'Watch the demo',
    prevLabel: 'Previous project',
    nextLabel: 'Next project',
    detailsCta: 'See more about this project',
    items: [
      {
        title: 'Vitality',
        tagline: 'An AI-powered meal plan made to fit everyday life.',
        problem:
          'Keeping track of nutrition can spread goals, meals and nutritional information across different places, making the routine hard to sustain.',
        solution:
          'An app that uses AI to organise an initial meal plan and lets people adjust meals, foods and portions their own way.',
        highlights: [
          'AI-organised starting plan based on goals and preferences',
          'Meal diary with calories, macros and editable history',
          'Food swaps to adapt the plan to everyday life',
        ],
        tech: [
          'Angular 20',
          'TypeScript',
          'Laravel 11',
          'PostgreSQL',
          'Google Gemini',
          'Generative AI',
          'bandeira-ui',
        ],
        images: [{ src: '/vitality-dashboard.png', alt: 'Vitality dashboard with calorie and macro summary' }],
        github: 'https://github.com/joaopedro-wq/vitality-front',
        backend: 'https://github.com/joaopedro-wq/vitality-Back',
        demo: 'https://vitality-front.vercel.app/',
        liveDemoLabel: 'Access Vitality',
        featuredLabel: 'Primary case · AI meal plan',
        featured: true,
      },
    ],
    designSystem: {
      name: 'bandeira-ui',
      tagline: 'An Angular design system, published to npm',
      problem:
        'Every new system starts over with the button, the card and the modal — redoing, one by one, decisions already made dozens of times.',
      solution:
        'A library that answers it once: 31 components, 4 whole screen structures and a palette where changing one variable changes the entire system.',
      highlights: [
        'Virtualised table: ten thousand rows cost the same as thirty',
        'Guided tour that reports which step the user dropped off at',
        'Keyboard, focus and screen reader checked component by component',
      ],
      chips: ['Angular 20', '102 tests', 'npm', 'MIT'],
      cta: 'Read the docs',
      ctaCode: 'Source',
      ctaNpm: 'npm',
      docsUrl: 'https://bandeira-ui.vercel.app/',
      githubUrl: 'https://github.com/joaopedro-wq/bandeira-ui',
      npmUrl: 'https://www.npmjs.com/package/bandeira-ui',
    },
    ctaCard: {
      title: 'This portfolio',
      text: 'A bilingual personal product with theming, accessible navigation and a narrative that prioritises verifiable work.',
      button: 'Explore other projects',
    },
  },

  skills: {
    eyebrow: 'Capabilities',
    title: 'Technology in the context where it creates value',
    sub: 'The practices I connect to build clear, functional products that are easier to evolve.',
    tablistLabel: 'Domains',
    prevLabel: 'Previous skill',
    nextLabel: 'Next skill',
    groups: [
      {
        id: 'frontend',
        label: 'Frontend',
        icon: 'fas fa-code',
        summary: 'Angular interfaces, componentized so no screen starts from scratch.',
        items: [
          'Angular',
          'TypeScript',
          'RxJS',
          'Signals',
          'SCSS',
          'Tailwind',
          'Design systems',
        ],
      },
      {
        id: 'design',
        label: 'Design & UX',
        icon: 'fas fa-pen-ruler',
        summary: 'The screen designed and validated before it becomes code.',
        items: [
          'Figma',
          'Wireframes',
          'User flows',
          'Mobile-first',
          'Usability',
          'Accessibility (WCAG)',
        ],
      },
      {
        id: 'backend',
        label: 'Backend',
        icon: 'fas fa-server',
        summary: 'The API, the business rules and the database behind the interface.',
        items: ['Laravel', 'PHP', 'Node.js', 'REST APIs', 'PostgreSQL', 'MySQL'],
      },
      {
        id: 'integracoes',
        label: 'Integrations',
        icon: 'fas fa-plug',
        summary: 'Publishing and authentication on the networks, with tokens, limits and errors handled.',
        items: [
          'Meta API',
          'TikTok API',
          'Google API',
          'LinkedIn API',
          'OAuth 2.0',
          'Webhooks',
        ],
      },
      {
        id: 'qa',
        label: 'Testing & Tools',
        icon: 'fas fa-vial-circle-check',
        summary: 'What holds the delivery up after it ships.',
        items: ['Cypress', 'Jasmine/Karma', 'Git', 'GitHub Actions', 'Postman', 'Scrum'],
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about the next product?",
    text: 'If you need someone to turn business context into a clear and sustainable web experience, we can talk.',
    whatsapp: 'Message on WhatsApp',
    email: 'Send an email',
    linkedin: 'LinkedIn',
    form: {
      title: 'Send me a message',
      name: 'Your name',
      namePlaceholder: 'What should I call you?',
      emailLabel: 'Your email',
      emailPlaceholder: 'where I should reply',
      subject: 'Subject',
      subjectPlaceholder: 'Role, project, partnership…',
      message: 'Message',
      messagePlaceholder: 'Tell me a bit about the opportunity or the project.',
      submit: 'Send message',
      sending: 'Sending…',
      successTitle: 'Message sent!',
      successText: 'Thanks for reaching out — I reply within 24 hours.',
      newMessage: 'Send another message',
      errorText: 'I could not send it right now. Please try again or reach me on WhatsApp.',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email so I can reply.',
      minLength: 'Write a bit more so I can understand the context.',
      mailtoFallback: 'Opening your email app with the message pre-filled…',
    },
  },

  modal: {
    title: 'Get in touch',
    sub: 'Click to open, or use the copy button.',
    whatsapp: 'Message on WhatsApp',
    close: 'Close',
    copy: 'Copy',
    copied: 'Copied to clipboard!',
    copyError: 'Could not copy. Please select the text manually.',
  },

  footer: {
    rights: 'João Pedro Bandeira. Built with Angular.',
  },
};
