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
      'Desenvolvedor <strong>Full-stack</strong> com +3 anos de experiência em <strong>Angular</strong> e <strong>Laravel</strong>. Vou do <strong>protótipo no Figma ao deploy</strong>: crio interfaces fáceis de usar e o backend por trás delas — incluindo <strong>integrações com as APIs de Meta, TikTok, Google e LinkedIn</strong>.',
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
    { value: 15, suffix: '+', label: 'tecnologias no stack' },
    { value: 100, suffix: '%', label: 'do protótipo ao deploy' },
  ],

  about: {
    eyebrow: 'Sobre mim',
    title: 'Design e código na mesma pessoa',
    sub: 'Um desenvolvedor que desenha a tela antes de codificar — e pensa em quem vai usá-la.',
    paragraphs: [
      'Sou Desenvolvedor Full-stack com <strong>+3 anos de experiência</strong>, especializado em <strong>Angular</strong> e <strong>Laravel</strong>, construindo sistemas completos do <strong>protótipo ao deploy</strong>.',
      'Meu diferencial é unir <strong>design e desenvolvimento</strong>. Antes de escrever a primeira linha, prototipo a tela no <strong>Figma</strong> — o que evita retrabalho e deixa o escopo claro para todo mundo. Depois trabalho a interface pela <strong>usabilidade</strong>: a tela precisa explicar sozinha o que o usuário deve fazer.',
      'Hoje integro o time do <strong>CoCreator Collab</strong>, SaaS que conecta criadores de conteúdo e marcas por uma estrutura de match e publica o conteúdo direto nas redes. Ali eu atuo nas duas pontas: construo as telas em Angular e o backend das <strong>integrações com as APIs de Meta, TikTok, Google e LinkedIn</strong>, que levam a publicação até cada rede.',
      'Antes disso entreguei o <strong>Sistema Mesur</strong>, também do protótipo ao deploy. Em todos os projetos as entregas são sustentadas por <strong>testes automatizados</strong> nos fluxos críticos.',
    ],
    cards: [
      {
        icon: 'fas fa-pen-ruler',
        title: 'Do protótipo ao deploy',
        text: 'Wireframe, protótipo navegável no Figma, código e entrega — o ciclo inteiro sem passar o problema adiante.',
      },
      {
        icon: 'fas fa-wand-magic-sparkles',
        title: 'Interfaces que se explicam',
        text: 'Telas pensadas para usabilidade: hierarquia clara, poucos cliques e nenhum manual necessário.',
      },
      {
        icon: 'fas fa-plug',
        title: 'Integrações que funcionam',
        text: 'APIs de Meta, TikTok, Google e LinkedIn: OAuth, tokens, limites e erros de publicação tratados de ponta a ponta.',
      },
      {
        icon: 'fas fa-vial-circle-check',
        title: 'Qualidade automatizada',
        text: 'Testes E2E com Cypress nos fluxos críticos: a entrega chega em produção sem sustos.',
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
        text: 'Frontend em Angular sobre um design system, backend e integrações em Laravel. Componentes reutilizáveis desde o primeiro dia.',
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
    sub: 'Ideias que tirei do papel sozinho — do primeiro rascunho ao deploy. O trabalho em equipe está em <a href="#experiencia">Experiência</a>.',
    labelProblem: 'Problema',
    labelSolution: 'Solução',
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
        video: '/vitalityPlus.mp4',
        github: 'https://github.com/joaopedro-wq/sakai-ng',
        featured: true,
      },
    ],
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
