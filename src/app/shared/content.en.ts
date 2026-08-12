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
    badge: 'Open to new opportunities',
    title:
      "Hi, I'm <span class=\"gradient-text\">João Pedro</span> — I design and build complete web systems.",
    lead:
      '<strong>Full-stack developer</strong> with 3+ years of experience in <strong>Angular</strong> and <strong>Laravel</strong>. I take products <strong>from the Figma prototype to deployment</strong>: I design the interface and build the backend behind it.',
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
    ctaTalk: 'Talk about an opportunity',
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
    title: 'Design and code in the same person',
    sub: 'What changes when design and code do not pass through different hands.',
    paragraphs: [
      'In most teams there is a seam between whoever designs and whoever codes. What was intended on one side arrives distorted on the other, and the gap shows up in the schedule. <strong>With me that seam does not exist</strong>: the same person decides the interface and builds it.',
      'That changes what reaches the user. The interface is discussed and corrected while changing it is still cheap — not once it is finished. What is left is an <strong>interface that explains itself</strong>: clear hierarchy, few clicks, no manual.',
      'I apply this today at <strong>CoCreator Collab</strong>, working on both ends: the interface in <strong>Angular</strong> and the backend in <strong>Laravel</strong>. The detail of each delivery is under <a href="#experiencia">Experience</a>.',
    ],
    cards: [
      {
        icon: 'fas fa-pen-ruler',
        title: 'One head, not two',
        text: 'Whoever designs the interface is the one who builds it. Nothing is lost in the handover between steps.',
      },
      {
        icon: 'fas fa-wand-magic-sparkles',
        title: 'Interfaces that explain themselves',
        text: 'Clear hierarchy, few clicks and no manual required.',
      },
      {
        icon: 'fas fa-plug',
        title: 'Integrations that hold up',
        text: 'OAuth, tokens, rate limits and publishing errors handled end to end.',
      },
      {
        icon: 'fas fa-cube',
        title: 'Code that outlives the project',
        text: 'Whatever repeats becomes a library. bandeira-ui started that way and is a public package today.',
      },
    ],
  },

  experience: {
    eyebrow: 'Career',
    title: 'Professional experience',
    sub: 'Where I applied design, code and testing — and what actually shipped.',
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
    sub: 'The same process on every project — it is what keeps deadlines predictable and rework low.',
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
    title: 'Personal projects',
    sub: 'What I built on my own, from the first stroke to going live. Team work is under <a href="#experiencia">Experience</a>.',
    labelProblem: 'Problem',
    labelSolution: 'Solution',
    whyExists: 'Why it exists',
    featured: 'Featured',
    code: 'Source code',
    liveDemo: 'Live demo',
    playVideo: 'Watch the demo',
    items: [
      {
        title: 'Vitality PLUS',
        tagline: 'Nutrition tracking and health goal monitoring',
        problem:
          'People following a diet have to add up calories and macronutrients by hand, which leads to mistakes and abandonment.',
        solution:
          'Full-stack application that logs meals, automatically calculates daily intake and tracks the progress of the user’s goals.',
        highlights: [
          'Automatic calculation of calories and macros per meal',
          'Goal dashboard with daily tracking',
          'REST API in Laravel with PostgreSQL',
        ],
        tech: ['Angular', 'TypeScript', 'Laravel', 'PostgreSQL'],
        video: '/vitality-plus.webm',
        poster: '/vitality-plus-poster.webp',
        github: 'https://github.com/joaopedro-wq/sakai-ng',
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
    sub: 'What I use day to day, by domain. The depth is in the projects.',
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
    title: 'Shall we build something together?',
    text: 'I am open to full-stack roles, interface projects and partnerships. I reply within 24 hours — write below or pick the channel you prefer.',
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
