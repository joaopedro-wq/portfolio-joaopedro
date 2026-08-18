# Portfólio — João Pedro Bandeira

Portfólio pessoal de João Pedro Bandeira, desenvolvedor Full Stack com mais de 3 anos de experiência na construção de produtos web com Angular, TypeScript, PHP e Laravel.

O site foi criado para apresentar, em um único lugar, minha experiência profissional, meu processo de trabalho, projetos open source e formas de contato.

**Acesse o portfólio:** [portfolio-joaopedro-six.vercel.app](https://portfolio-joaopedro-six.vercel.app/)

## O que o projeto demonstra

- Desenvolvimento de uma aplicação Angular moderna com componentes standalone, Signals e carregamento lazy.
- Organização de conteúdo em português e inglês com serviço de internacionalização próprio.
- Interface responsiva com temas claro e escuro, design tokens e interações acessíveis.
- Formulário de contato com validação, estados de envio e fallback para `mailto:`.
- SEO técnico com metatags, Open Graph, Twitter Cards, sitemap, robots.txt e dados estruturados.
- Animações de entrada, contadores de métricas e reprodução de vídeos sob demanda.
- Uso da biblioteca própria [bandeira-ui](https://bandeira-ui.vercel.app/) para componentes e comportamentos reutilizáveis.

## Projetos em destaque

### Vitality PLUS

Plataforma Full Stack de nutrição personalizada, desenvolvida com Angular 20 e Laravel 11. O produto reúne metas nutricionais, diário alimentar, catálogo de alimentos, planos gerados com Google Gemini e autenticação com Laravel Sanctum.

- [Frontend — Angular](https://github.com/joaopedro-wq/vitality-front)
- [Backend — Laravel](https://github.com/joaopedro-wq/vitality-Back)

### bandeira-ui

Biblioteca de componentes Angular publicada no npm, criada a partir de desafios reais de produto e focada em consistência visual, acessibilidade e reutilização.

- [Documentação](https://bandeira-ui.vercel.app/)
- [Código-fonte](https://github.com/joaopedro-wq/bandeira-ui)
- [Pacote no npm](https://www.npmjs.com/package/bandeira-ui)

## Stack

- Angular 20 — standalone components, Signals, `@if`, `@for` e `OnPush`
- TypeScript
- Reactive Forms
- SCSS e design tokens
- Angular Animations
- RxJS
- bandeira-ui
- ngx-toastr
- Font Awesome
- GitHub Pages / hospedagem estática

## Executando localmente

Requisitos: Node.js e npm.

```bash
npm install
npm start
```

A aplicação ficará disponível em `http://localhost:4200`.

Para gerar o build de produção:

```bash
npm run build
```

O processo de build também gera o arquivo `404.html`, necessário para preservar as rotas do SPA em hospedagens estáticas.

Para executar os testes unitários:

```bash
npm test
```

## Estrutura principal

```text
public/                         imagens, vídeos e arquivos públicos
scripts/spa-fallback.mjs       gera o fallback 404 do SPA
src/
  index.html                    metatags, SEO e bootstrap do tema
  styles.scss                   reset, tokens e estilos globais
  app/
    app.routes.ts               configuração das rotas
    pages/portfolio/             página principal do portfólio
    shared/
      content.model.ts           contratos do conteúdo
      content.pt.ts              conteúdo em português
      content.en.ts              conteúdo em inglês
      i18n.service.ts            idioma ativo e persistência
      contact-form.component.*   formulário de contato
```

## Atualizando o conteúdo

O texto visível do site é centralizado nos arquivos de conteúdo, evitando strings espalhadas pelos templates:

| Conteúdo | Arquivo ou seção |
| --- | --- |
| Hero e apresentação | `hero` em `content.pt.ts` e `content.en.ts` |
| Sobre | `about` |
| Experiência profissional | `experience.items` |
| Processo de trabalho | `process.steps` |
| Projetos | `projects.items` e `projects.designSystem` |
| Habilidades | `skills.groups` |
| Métricas | `metrics` |
| Redes e contato | constantes em `portfolio.component.ts` |
| Currículo | `cvUrl` e `cvDisponivel` em `portfolio.component.ts` |

Ao alterar o conteúdo em português, atualize também a versão em inglês para manter os dois idiomas consistentes.

## Licença

Código do portfólio mantido por João Pedro Bandeira para fins pessoais e profissionais.

© João Pedro Bandeira
