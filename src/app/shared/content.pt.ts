import { SiteContent } from './content.model';

export const CONTENT_PT: SiteContent = {
  nav: [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'processo', label: 'Processo' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contato', label: 'Contato' },
  ],

  header: {
    hire: 'Contratar',
    themeToLight: 'Ativar tema claro',
    themeToDark: 'Ativar tema escuro',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    langLabel: 'Ver em inglês',
    skipLink: 'Pular para o conteúdo',
    navLabel: 'Navegação principal',
  },

  hero: {
    badge: 'Disponível para novas oportunidades',
    title:
      'Olá, sou <span class="gradient-text">João Pedro</span> — desenho e construo sistemas web completos.',
    lead:
      'Desenvolvedor <strong>Full-stack</strong> com +3 anos de experiência em <strong>Angular</strong> e <strong>Laravel</strong>. Vou do <strong>protótipo no Figma ao deploy</strong>: desenho a interface e construo o backend por trás dela.',
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
    ctaTalk: 'Vamos conversar',
    ctaProjects: 'Ver projetos',
    ctaCv: 'Baixar CV',
    location: 'Espírito Santo, Brasil · Disponível para remoto',
    photoAlt: 'Foto de João Pedro Bandeira',
  },

  metrics: [
    { value: 3, suffix: '+', label: 'anos de experiência' },
    { value: 4, suffix: '', label: 'APIs de redes sociais integradas' },
    { value: 31, suffix: '', label: 'componentes publicados no npm' },
    { value: 102, suffix: '', label: 'testes automatizados na minha lib' },
  ],

  about: {
    eyebrow: 'Sobre mim',
    title: 'Design e código na mesma pessoa',
    sub: 'O que muda quando desenho e código não passam por mãos diferentes.',
    paragraphs: [
      'Na maioria dos times existe uma emenda entre quem desenha e quem programa. O que foi pensado de um lado chega deformado do outro, e a diferença aparece no prazo. <strong>Comigo essa emenda não existe</strong>: a mesma pessoa decide a interface e a constrói.',
      'Isso muda o que chega ao usuário. A interface é discutida e corrigida enquanto mudar ainda é barato — não depois de pronta. O que sobra é uma <strong>interface que se explica sozinha</strong>: hierarquia clara, poucos cliques, nenhum manual.',
      'Hoje aplico isso no <strong>CoCreator Collab</strong>, atuando nas duas pontas: a interface em <strong>Angular</strong> e o backend em <strong>Laravel</strong>. O detalhe de cada entrega está em <a href="#experiencia">Experiência</a>.',
    ],
    cards: [
      {
        icon: 'fas fa-pen-ruler',
        title: 'Uma cabeça só',
        text: 'Quem desenha a interface é quem a constrói. Nada se perde na passagem entre uma etapa e outra.',
      },
      {
        icon: 'fas fa-wand-magic-sparkles',
        title: 'Interfaces que se explicam',
        text: 'Hierarquia clara, poucos cliques e nenhum manual necessário.',
      },
      {
        icon: 'fas fa-plug',
        title: 'Integrações que funcionam',
        text: 'OAuth, tokens, limites e erros de publicação tratados de ponta a ponta.',
      },
      {
        icon: 'fas fa-cube',
        title: 'Código que sobrevive ao projeto',
        text: 'O que se repete vira biblioteca. A bandeira-ui nasceu assim e hoje é um pacote público.',
      },
    ],
  },

  experience: {
    eyebrow: 'Trajetória',
    title: 'Experiência profissional',
    sub: 'Onde apliquei design, código e testes — e o que ficou entregue.',
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
    title: 'Do problema à tela em produção',
    sub: 'O mesmo processo em todo projeto — é o que mantém o prazo previsível e o retrabalho baixo.',
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
    eyebrow: 'Portfólio',
    title: 'Projetos pessoais',
    sub: 'O que construí por conta própria, do primeiro traço até o ar. O trabalho em equipe está em <a href="#experiencia">Experiência</a>.',
    labelProblem: 'Problema',
    labelSolution: 'Solução',
    whyExists: 'Por que existe',
    featured: 'Destaque',
    code: 'Código',
    liveDemo: 'Ver online',
    playVideo: 'Ver demonstração',
    items: [
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
        video: '/vitality-plus.webm',
        poster: '/vitality-plus-poster.webp',
        github: 'https://github.com/joaopedro-wq/sakai-ng',
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
      title: 'Mais projetos no GitHub',
      text: 'Experimentos, estudos e código do dia a dia — sempre em evolução.',
      button: 'Ver repositórios',
    },
  },

  skills: {
    eyebrow: 'Stack',
    title: 'Habilidades & Ferramentas',
    sub: 'O que uso no dia a dia, por área.',
    tablistLabel: 'Áreas de habilidade',
    levels: {
      advanced: 'avançado',
      intermediate: 'intermediário',
      basic: 'básico',
    },
    groups: [
      {
        id: 'frontend',
        label: 'Frontend',
        icon: 'fas fa-code',
        items: [
          { name: 'Angular (10+ a 20)', level: 'advanced' },
          { name: 'TypeScript / JavaScript ES6+', level: 'advanced' },
          { name: 'RxJS & Signals', level: 'intermediate' },
          { name: 'HTML5, CSS3, SCSS', level: 'advanced' },
          { name: 'Tailwind & Bootstrap', level: 'advanced' },
          { name: 'Angular Animations & Lazy Loading', level: 'intermediate' },
          { name: 'Componentização e design systems', level: 'advanced' },
        ],
      },
      {
        id: 'design',
        label: 'Design & UX',
        icon: 'fas fa-pen-ruler',
        items: [
          { name: 'Figma — protótipos navegáveis', level: 'advanced' },
          { name: 'Wireframes e fluxos de usuário', level: 'advanced' },
          { name: 'Design system e biblioteca de componentes', level: 'advanced' },
          { name: 'Usabilidade e arquitetura de informação', level: 'advanced' },
          { name: 'Interface responsiva e mobile-first', level: 'advanced' },
          { name: 'Acessibilidade (WCAG)', level: 'intermediate' },
        ],
      },
      {
        id: 'backend',
        label: 'Backend',
        icon: 'fas fa-server',
        items: [
          { name: 'Laravel (PHP)', level: 'advanced' },
          { name: 'APIs RESTful', level: 'advanced' },
          { name: 'Node.js', level: 'intermediate' },
          { name: 'PostgreSQL & MySQL', level: 'advanced' },
          { name: 'MongoDB', level: 'basic' },
          { name: 'Arquitetura de microsserviços', level: 'basic' },
        ],
      },
      {
        id: 'integracoes',
        label: 'Integrações',
        icon: 'fas fa-plug',
        items: [
          { name: 'Meta API (Facebook / Instagram)', level: 'advanced' },
          { name: 'TikTok API', level: 'advanced' },
          { name: 'Google API', level: 'intermediate' },
          { name: 'LinkedIn API', level: 'intermediate' },
          { name: 'OAuth 2.0 e gestão de tokens', level: 'advanced' },
          { name: 'Webhooks e tratamento de rate limit', level: 'intermediate' },
        ],
      },
      {
        id: 'qa',
        label: 'Testes & Ferramentas',
        icon: 'fas fa-vial-circle-check',
        items: [
          { name: 'Testes E2E automatizados com Cypress', level: 'advanced' },
          { name: 'Testes unitários (Jasmine/Karma)', level: 'intermediate' },
          { name: 'Git & GitHub', level: 'advanced' },
          { name: 'Postman & Insomnia', level: 'advanced' },
          { name: 'Scrum & Kanban', level: 'advanced' },
          { name: 'Clean Code & Code Review', level: 'advanced' },
        ],
      },
    ],
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Vamos construir algo juntos?',
    text: 'Estou aberto a vagas full-stack, projetos de interface e parcerias. Respondo em até 24 horas — escreva abaixo ou escolha o canal que preferir.',
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
