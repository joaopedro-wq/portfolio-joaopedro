import { SiteContent } from './content.model';

export const CONTENT_EN: SiteContent = {
  nav: [
    { id: 'inicio', label: 'Home' },
    { id: 'sobre', label: 'About' },
    { id: 'experiencia', label: 'Experience' },
    { id: 'processo', label: 'Process' },
    { id: 'projetos', label: 'Projects' },
    { id: 'habilidades', label: 'Skills' },
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
      "Hi, I'm <span class=\"gradient-text\">João Pedro</span> — <strong>a full-stack developer with a product mindset</strong>.",
    lead:
      '<strong>Full-stack developer</strong> with 3+ years of experience in <strong>Angular</strong> and <strong>Laravel</strong>. I turn business problems into clear, functional and maintainable web products — from <strong>Figma flows to implementation and delivery</strong>.',
    pills: [
      'Angular',
      'TypeScript',
      'Figma',
      'UI/UX',
      'Laravel',
      'Node.js',
      'Cypress',
      'PostgreSQL',
    ],
    ctaTalk: "Let's talk",
    ctaProjects: 'See projects',
    ctaCv: 'Download CV',
    location: 'Espírito Santo, Brazil · Available for remote work',
    photoAlt: 'Photo of João Pedro Bandeira',
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
    title: 'Product, interface and engineering in one flow',
    sub: 'I understand the problem, shape the experience and build the solution with attention to technical detail.',
    paragraphs: [
      'I work across product, UX/UI and engineering: I understand business rules, organise flows and turn product decisions into interfaces that work in practice.',
      'This integrated view helps surface problems early, reduce rework and deliver more consistent experiences — while keeping architecture, performance and maintenance in focus.',
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
    title: 'Professional experience',
    sub: 'Experiences where I turned product needs into interfaces, integrations and software in production.',
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
    title: 'From the problem to a screen in production',
    sub: 'A simple process to align context, validate decisions and deliver with confidence.',
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
    eyebrow: 'Portfolio',
    title: 'Projects and open-source initiatives',
    sub: 'Products and tools I built to solve real problems and deepen my engineering practice.',
    labelProblem: 'Problem',
    labelSolution: 'Solution',
    whyExists: 'Why it exists',
    featured: 'Featured',
    code: 'Frontend',
    backendCode: 'Backend',
    liveDemo: 'Live demo',
    playVideo: 'Watch the demo',
    items: [
      {
        title: 'Vitality PLUS',
        tagline: 'Full-stack platform for personalised nutrition',
        problem:
          'Keeping track of nutrition means organising profile data, goals, foods and meals in different places, making the routine hard to sustain.',
        solution:
          'Full-stack application that brings nutritional goals, a food catalogue, meal plans and a daily diary into one guided experience.',
        highlights: [
          'Guided quiz with goals calculated using the Mifflin–St Jeor equation',
          'Food diary with portions, editable history and intake tracking',
          'Meal plans generated with Google Gemini generative AI',
          'Laravel REST API with Sanctum authentication, food catalogue and admin area',
        ],
        tech: [
          'Angular 20',
          'TypeScript',
          'Laravel 11',
          'PHP',
          'PostgreSQL / MySQL',
          'Google Gemini',
          'Tailwind CSS',
          'bandeira-ui',
          'PHPUnit',
        ],
        video: '/vitality-plus.webm',
        poster: '/vitality-plus-poster.webp',
        github: 'https://github.com/joaopedro-wq/vitality-front',
        backend: 'https://github.com/joaopedro-wq/vitality-Back',
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
      title: 'More projects on GitHub',
      text: 'Experiments, studies and everyday code — always evolving.',
      button: 'Browse repositories',
    },
  },

  skills: {
    eyebrow: 'Stack',
    title: 'Skills & Tools',
    sub: 'Technologies and practices I apply when building web products.',
    tablistLabel: 'Domains',
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
    title: 'Let’s talk',
    text: 'If you would like to talk about product, technology, interface projects or a partnership, write below or pick the channel you prefer. I reply within 24 hours.',
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
