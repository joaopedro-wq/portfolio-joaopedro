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
    hire: 'Hire me',
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
      '<strong>Full-stack developer</strong> with 3+ years of experience in <strong>Angular</strong> and <strong>Laravel</strong>. I take products <strong>from the Figma prototype to deployment</strong>: I build interfaces that are easy to use and the backend behind them — including <strong>integrations with the Meta, TikTok, Google and LinkedIn APIs</strong>.',
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
    { value: 3, suffix: '+', label: 'years of experience' },
    { value: 4, suffix: '', label: 'social media APIs integrated' },
    { value: 15, suffix: '+', label: 'technologies in the stack' },
    { value: 100, suffix: '%', label: 'from prototype to deployment' },
  ],

  about: {
    eyebrow: 'About me',
    title: 'Design and code in the same person',
    sub: 'A developer who designs the screen before coding it — and thinks about who will use it.',
    paragraphs: [
      'I am a Full-stack Developer with <strong>3+ years of experience</strong>, specialized in <strong>Angular</strong> and <strong>Laravel</strong>, building complete systems <strong>from prototype to deployment</strong>.',
      'What sets me apart is combining <strong>design and development</strong>. Before writing the first line, I prototype the screen in <strong>Figma</strong> — which avoids rework and keeps the scope clear for everyone. Then I shape the interface around <strong>usability</strong>: the screen has to explain by itself what the user should do.',
      'I am currently part of the <strong>CoCreator Collab</strong> team, a SaaS that connects content creators and brands through a matching structure and publishes content straight to social networks. There I work on both ends: I build the screens in Angular and the backend for the <strong>integrations with the Meta, TikTok, Google and LinkedIn APIs</strong> that deliver each publication to its network.',
      'Before that I delivered the <strong>Mesur System</strong>, also from prototype to deployment. Across every project, deliveries are backed by <strong>automated tests</strong> on the critical flows.',
    ],
    cards: [
      {
        icon: 'fas fa-pen-ruler',
        title: 'From prototype to deployment',
        text: 'Wireframe, clickable Figma prototype, code and delivery — the whole cycle without handing the problem to someone else.',
      },
      {
        icon: 'fas fa-wand-magic-sparkles',
        title: 'Interfaces that explain themselves',
        text: 'Screens designed for usability: clear hierarchy, few clicks and no manual required.',
      },
      {
        icon: 'fas fa-plug',
        title: 'Integrations that hold up',
        text: 'Meta, TikTok, Google and LinkedIn APIs: OAuth, tokens, rate limits and publishing errors handled end to end.',
      },
      {
        icon: 'fas fa-vial-circle-check',
        title: 'Automated quality',
        text: 'Cypress E2E tests on the critical flows, so releases reach production without surprises.',
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
          'Figma prototypes aligned with product before development — less rework and a clearer scope',
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
          'Wireframes and screen prototypes before development, aligned with the system’s users',
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
        text: 'Angular frontend on top of a design system, backend and integrations in Laravel. Reusable components from day one.',
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
    sub: 'Ideas I took off the ground on my own — from the first sketch to deployment. Team work is under <a href="#experiencia">Experience</a>.',
    labelProblem: 'Problem',
    labelSolution: 'Solution',
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
        video: '/vitalityPlus.mp4',
        github: 'https://github.com/joaopedro-wq/sakai-ng',
        featured: true,
      },
    ],
    ctaCard: {
      title: 'More projects on GitHub',
      text: 'Experiments, studies and everyday code — always evolving.',
      button: 'Browse repositories',
    },
  },

  skills: {
    eyebrow: 'Stack',
    title: 'Skills & Tools',
    sub: 'What I use day to day, by area.',
    tablistLabel: 'Skill areas',
    levels: {
      advanced: 'advanced',
      intermediate: 'intermediate',
      basic: 'basic',
    },
    groups: [
      {
        id: 'frontend',
        label: 'Frontend',
        icon: 'fas fa-code',
        items: [
          { name: 'Angular (10+ through 20)', level: 'advanced' },
          { name: 'TypeScript / JavaScript ES6+', level: 'advanced' },
          { name: 'RxJS & Signals', level: 'intermediate' },
          { name: 'HTML5, CSS3, SCSS', level: 'advanced' },
          { name: 'Tailwind & Bootstrap', level: 'advanced' },
          { name: 'Angular Animations & Lazy Loading', level: 'intermediate' },
          { name: 'Componentization and design systems', level: 'advanced' },
        ],
      },
      {
        id: 'design',
        label: 'Design & UX',
        icon: 'fas fa-pen-ruler',
        items: [
          { name: 'Figma — clickable prototypes', level: 'advanced' },
          { name: 'Wireframes and user flows', level: 'advanced' },
          { name: 'Design system and component library', level: 'advanced' },
          { name: 'Usability and information architecture', level: 'advanced' },
          { name: 'Responsive, mobile-first interfaces', level: 'advanced' },
          { name: 'Accessibility (WCAG)', level: 'intermediate' },
        ],
      },
      {
        id: 'backend',
        label: 'Backend',
        icon: 'fas fa-server',
        items: [
          { name: 'Laravel (PHP)', level: 'advanced' },
          { name: 'RESTful APIs', level: 'advanced' },
          { name: 'Node.js', level: 'intermediate' },
          { name: 'PostgreSQL & MySQL', level: 'advanced' },
          { name: 'MongoDB', level: 'basic' },
          { name: 'Microservices architecture', level: 'basic' },
        ],
      },
      {
        id: 'integracoes',
        label: 'Integrations',
        icon: 'fas fa-plug',
        items: [
          { name: 'Meta API (Facebook / Instagram)', level: 'advanced' },
          { name: 'TikTok API', level: 'advanced' },
          { name: 'Google API', level: 'intermediate' },
          { name: 'LinkedIn API', level: 'intermediate' },
          { name: 'OAuth 2.0 and token management', level: 'advanced' },
          { name: 'Webhooks and rate limit handling', level: 'intermediate' },
        ],
      },
      {
        id: 'qa',
        label: 'Testing & Tools',
        icon: 'fas fa-vial-circle-check',
        items: [
          { name: 'Automated E2E testing with Cypress', level: 'advanced' },
          { name: 'Unit testing (Jasmine/Karma)', level: 'intermediate' },
          { name: 'Git & GitHub', level: 'advanced' },
          { name: 'Postman & Insomnia', level: 'advanced' },
          { name: 'Scrum & Kanban', level: 'advanced' },
          { name: 'Clean Code & Code Review', level: 'advanced' },
        ],
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
