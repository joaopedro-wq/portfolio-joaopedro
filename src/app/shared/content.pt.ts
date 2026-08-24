import { SiteContent } from './content.model';

export const CONTENT_PT: SiteContent = {
  nav: [
    { id: 'inicio', label: 'Início' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'contato', label: 'Contato' },
  ],

  header: {
    hire: 'Vamos conversar',
    themeToLight: 'Ativar tema claro',
    themeToDark: 'Ativar tema escuro',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    langLabel: 'Ver em inglês',
    skipLink: 'Pular para o conteúdo',
    navLabel: 'Navegação principal',
  },

  hero: {
    badge: 'Desenvolvedor Full Stack · Angular & Laravel',
    title:
      'Desenvolvo <span class="gradient-text">produtos web claros</span>, do fluxo à entrega.',
    lead:
      'Sou João Pedro, desenvolvedor <strong>Full Stack</strong>. Uno produto, interface e código para transformar regras de negócio em experiências que as pessoas conseguem usar — com <strong>Angular</strong>, <strong>Laravel</strong> e atenção aos detalhes.',
    pills: [
      'Angular',
      'TypeScript',
      'Produto & UX',
      'Laravel',
      'Cypress',
      'APIs',
    ],
    ctaTalk: 'Vamos conversar',
    ctaProjects: 'Conhecer o Vitality',
    ctaCv: 'Baixar CV',
    photoAlt: 'Foto de João Pedro Bandeira',
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
      label: 'anos de experiência',
      detail: 'Angular e Laravel, do desenho da tela ao banco',
    },
    {
      value: 4,
      suffix: '',
      label: 'APIs integradas',
      detail: 'Publicação e autenticação em Meta, TikTok, Google e LinkedIn',
    },
    {
      value: 31,
      suffix: '',
      label: 'componentes publicados',
      detail: 'Biblioteca própria em Angular, aberta sob licença MIT',
    },
    {
      value: 102,
      suffix: '',
      label: 'testes automatizados',
      detail: 'Cobrindo 95% das linhas da biblioteca, rodando a cada push',
    },
  ],

  about: {
    eyebrow: 'Sobre mim',
    title: 'Antes do código, entendo o que precisa funcionar',
    sub: 'Do contexto do negócio à experiência que chega para quem usa.',
    paragraphs: [
      'Trabalho entre produto, UX/UI e engenharia: entendo as regras de negócio, organizo os fluxos e transformo decisões em interfaces que funcionam na prática.',
      'Essa visão integrada ajuda a encontrar problemas cedo e construir entregas mais consistentes, sem deixar arquitetura, performance e manutenção para depois.',
      'Hoje aplico isso no <strong>CoCreator Collab</strong>, atuando nas duas pontas: a interface em <strong>Angular</strong> e o backend em <strong>Laravel</strong>. O detalhe de cada entrega está em <a href="#experiencia">Experiência</a>.',
    ],
    cards: [
      {
        icon: 'fas fa-pen-ruler',
        title: 'Visão de produto',
        text: 'Conecto necessidades do usuário, regras de negócio e decisões técnicas antes de transformar tudo em código.',
      },
      {
        icon: 'fas fa-wand-magic-sparkles',
        title: 'Experiência clara',
        text: 'Interfaces com hierarquia, feedback e fluxos que ajudam o usuário a avançar sem depender de manual.',
      },
      {
        icon: 'fas fa-plug',
        title: 'Integrações que funcionam',
        text: 'OAuth, tokens, limites e erros de publicação tratados de ponta a ponta.',
      },
      {
        icon: 'fas fa-cube',
        title: 'Engenharia sustentável',
        text: 'Componentes reutilizáveis, testes e padrões que tornam o produto mais consistente e simples de evoluir.',
      },
    ],
  },

  experience: {
    eyebrow: 'Trajetória',
    title: 'Uma trajetória construída em problemas reais',
    sub: 'Cada experiência ampliou meu repertório: de sistemas internos a produtos conectados a plataformas que as pessoas usam todos os dias.',
    items: [
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
          'Alinhamento com produto antes de cada entrega, reduzindo mudança de escopo no meio do caminho',
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
          'Levantamento com os usuários internos antes de definir cada tela do sistema',
          'Modelagem de dados e implementação das regras de negócio no backend',
          'Interfaces reativas em Angular com componentes reutilizáveis',
          'Otimização de consultas e ajustes de performance em telas críticas',
        ],
        stack: ['Angular', 'Laravel', 'PostgreSQL', 'Figma', 'Git'],
      },
    ],
  },

  process: {
    eyebrow: 'Como eu trabalho',
    title: 'Como transformo contexto em produto',
    sub: 'Um processo simples para manter necessidade, experiência e qualidade técnica na mesma conversa.',
    steps: [
      {
        icon: 'fas fa-magnifying-glass',
        title: 'Descoberta',
        text: 'Entendo o problema, quem vai usar e as regras de negócio antes de propor qualquer solução. Pergunta errada gera tela errada.',
      },
      {
        icon: 'fas fa-pen-ruler',
        title: 'Protótipo',
        text: 'Wireframe e protótipo navegável no Figma. Todo mundo enxerga e valida a tela antes de existir uma linha de código.',
      },
      {
        icon: 'fas fa-code',
        title: 'Construção',
        text: 'Frontend em Angular sobre a minha própria biblioteca de componentes; backend e integrações em Laravel.',
      },
      {
        icon: 'fas fa-rocket',
        title: 'Testes e deploy',
        text: 'Cypress nos fluxos críticos, revisão de código e entrega em produção acompanhada — sem surpresa depois do deploy.',
      },
    ],
  },

  projects: {
    eyebrow: 'Trabalho selecionado',
    title: 'Projetos que explicam como eu trabalho',
    sub: 'Casos reais de produto, experiência e engenharia — apresentados com contexto, não como uma coleção de tecnologias.',
    labelProblem: 'Problema',
    labelSolution: 'Solução',
    rationaleTitle: 'Por que o Vitality existe',
    rationaleProblem: 'O desafio',
    rationaleSolution: 'Como o Vitality ajuda',
    whyExists: 'Por que existe',
    featured: 'Destaque técnico',
    code: 'Frontend',
    backendCode: 'Backend',
    liveDemo: 'Ver online',
    playVideo: 'Ver demonstração',
    items: [
      {
        title: 'Vitality',
        tagline: 'Plano alimentar com IA, feito para caber na rotina.',
        problem:
          'Acompanhar a alimentação costuma espalhar metas, refeições e informações nutricionais em lugares diferentes, o que torna a rotina difícil de manter.',
        solution:
          'Um app que usa IA para organizar um plano alimentar inicial e deixa a pessoa ajustar refeições, alimentos e porções do seu jeito.',
        highlights: [
          'IA que organiza um plano inicial a partir de metas e preferências',
          'Diário de refeições com calorias, macros e histórico editável',
          'Troca de alimentos para adaptar o plano à rotina',
        ],
        tech: [
          'Angular 20',
          'TypeScript',
          'Laravel 11',
          'PostgreSQL',
          'Google Gemini',
          'IA generativa',
          'bandeira-ui',
        ],
        images: [{ src: '/vitality-dashboard.png', alt: 'Painel do Vitality com resumo de calorias e macros' }],
        github: 'https://github.com/joaopedro-wq/vitality-front',
        backend: 'https://github.com/joaopedro-wq/vitality-Back',
        demo: 'https://vitality-front.vercel.app/',
        liveDemoLabel: 'Criar meu plano',
        featuredLabel: 'Case principal · Plano com IA',
        featured: true,
      },
    ],
    designSystem: {
      name: 'bandeira-ui',
      tagline: 'Design system em Angular, publicado no npm',
      problem:
        'Todo sistema novo recomeça pelo botão, pelo card e pelo modal — e refaz, uma a uma, decisões já tomadas dezenas de vezes.',
      solution:
        'Uma biblioteca que responde de uma vez: 31 componentes, 4 estruturas de tela inteiras e uma paleta onde trocar uma variável muda o sistema todo.',
      highlights: [
        'Tabela virtualizada: dez mil linhas custam o mesmo que trinta',
        'Tour guiado que reporta em que passo o usuário desistiu',
        'Teclado, foco e leitor de tela conferidos componente a componente',
      ],
      chips: ['Angular 20', '102 testes', 'npm', 'MIT'],
      cta: 'Ver documentação',
      ctaCode: 'Código',
      ctaNpm: 'npm',
      docsUrl: 'https://bandeira-ui.vercel.app/',
      githubUrl: 'https://github.com/joaopedro-wq/bandeira-ui',
      npmUrl: 'https://www.npmjs.com/package/bandeira-ui',
    },
    ctaCard: {
      title: 'Este portfólio',
      text: 'Um produto pessoal bilíngue, com temas, navegação acessível e uma narrativa que prioriza trabalho verificável.',
      button: 'Conhecer outros projetos',
    },
  },

  skills: {
    eyebrow: 'Competências',
    title: 'Tecnologia no contexto em que gera valor',
    sub: 'Frentes de trabalho que conecto para construir produtos claros, funcionais e mais simples de evoluir.',
    tablistLabel: 'Domínios de atuação',
    groups: [
      {
        id: 'frontend',
        label: 'Frontend',
        icon: 'fas fa-code',
        summary: 'Interfaces em Angular, componentizadas e sem recomeçar do zero a cada tela.',
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
        summary: 'A tela desenhada e validada antes de virar código.',
        items: [
          'Figma',
          'Wireframes',
          'Fluxos de usuário',
          'Mobile-first',
          'Usabilidade',
          'Acessibilidade (WCAG)',
        ],
      },
      {
        id: 'backend',
        label: 'Backend',
        icon: 'fas fa-server',
        summary: 'API, regra de negócio e banco por trás da interface.',
        items: ['Laravel', 'PHP', 'Node.js', 'APIs REST', 'PostgreSQL', 'MySQL'],
      },
      {
        id: 'integracoes',
        label: 'Integrações',
        icon: 'fas fa-plug',
        summary: 'Publicação e autenticação nas redes, com token, limite e erro tratados.',
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
        label: 'Testes & Ferramentas',
        icon: 'fas fa-vial-circle-check',
        summary: 'O que sustenta a entrega depois que ela sobe.',
        items: ['Cypress', 'Jasmine/Karma', 'Git', 'GitHub Actions', 'Postman', 'Scrum'],
      },
    ],
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar sobre o próximo produto?',
    text: 'Se você procura alguém para transformar contexto de negócio em uma experiência web clara e sustentável, podemos falar.',
    whatsapp: 'Chamar no WhatsApp',
    email: 'Enviar e-mail',
    linkedin: 'LinkedIn',
    form: {
      title: 'Me manda uma mensagem',
      name: 'Seu nome',
      namePlaceholder: 'Como devo te chamar?',
      emailLabel: 'Seu e-mail',
      emailPlaceholder: 'para onde eu respondo',
      subject: 'Assunto',
      subjectPlaceholder: 'Vaga, projeto, parceria…',
      message: 'Mensagem',
      messagePlaceholder: 'Conte um pouco sobre a oportunidade ou o projeto.',
      submit: 'Enviar mensagem',
      sending: 'Enviando…',
      successTitle: 'Mensagem enviada!',
      successText: 'Obrigado pelo contato — respondo em até 24 horas.',
      newMessage: 'Enviar outra mensagem',
      errorText: 'Não consegui enviar agora. Tente novamente ou fale comigo pelo WhatsApp.',
      required: 'Campo obrigatório.',
      invalidEmail: 'Digite um e-mail válido para eu conseguir responder.',
      minLength: 'Escreva um pouco mais para eu entender o contexto.',
      mailtoFallback: 'Abrindo seu aplicativo de e-mail com a mensagem preenchida…',
    },
  },

  modal: {
    title: 'Entre em contato',
    sub: 'Clique para abrir ou use o botão de copiar.',
    whatsapp: 'Chamar no WhatsApp',
    close: 'Fechar',
    copy: 'Copiar',
    copied: 'Copiado para a área de transferência!',
    copyError: 'Não foi possível copiar. Selecione o texto manualmente.',
  },

  footer: {
    rights: 'João Pedro Bandeira. Feito com Angular.',
  },
};
