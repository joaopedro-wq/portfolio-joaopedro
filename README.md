# 🖥️ Portfólio — João Pedro Bandeira

Portfólio pessoal de um desenvolvedor Full-stack, construído para converter visitas em conversas: proposta de valor clara, prova de trabalho e contato a um clique em qualquer ponto da página.

**🔗 Acesse:** https://joaopedro-wq.github.io/portfolio-joaopedro/

---

Este repositório é um monorepo com dois projetos:

| Projeto | O que é |
|---|---|
| `portfolio-joaopedro` | O site do portfólio |
| [`jp-ui`](projects/jp-ui/README.md) | Design system em Angular, publicável no npm — showcase em [/design-system](https://joaopedro-wq.github.io/portfolio-joaopedro/design-system) |

## ✨ Destaques

- **Design system próprio** — a biblioteca `jp-ui` alimenta o site e tem página de documentação navegável
- **Bilíngue PT/EN** — alternador no header, sem recarregar a página, com `lang` do documento e preferência persistida
- **Hero orientado a conversão** — proposta de valor, selo de disponibilidade e CTAs diretos (WhatsApp, e-mail, projetos)
- **Timeline de experiência** com entregas concretas por posição
- **Seção "Como eu trabalho"** — o processo em 4 etapas, do descobrimento ao deploy
- **Projetos no formato problema → solução → resultado**
- **Formulário de contato funcional** com validação reativa, estados de envio e fallback para `mailto:`
- **Animação de scroll** — `IntersectionObserver` revelando cada bloco e contadores animados nas métricas
- **Tema claro/escuro** persistido em `localStorage`, sem flash na primeira pintura
- **Vídeos sob demanda** — os MB só são baixados após o clique do usuário
- **SEO completo** — Open Graph, Twitter Card e JSON-LD (`schema.org/Person`)
- **Acessível** — skip link, navegação por teclado, `aria-*` em tabs/menu/modal/formulário, `prefers-reduced-motion`

## 🚀 Stack

Angular 20 (standalone, signals, `@if`/`@for`, `OnPush`) · TypeScript · Reactive Forms · SCSS com design tokens · Angular Animations · ngx-toastr · Font Awesome

## 🛠️ Rodando localmente

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build de produção (gera 404.html para as rotas no GitHub Pages)
npm test           # testes unitários
npm run build:lib  # empacota a jp-ui em dist/jp-ui
npm run deploy     # build + publicação no GitHub Pages
```

## 📁 Estrutura

```
public/                       imagens e vídeos de demonstração
scripts/spa-fallback.mjs      copia index.html → 404.html (rotas no GitHub Pages)
projects/jp-ui/               📦 design system publicável (ver README próprio)
src/
  index.html                  metatags de SEO/social e bootstrap de tema
  styles.scss                 design tokens, reset e ponte para os tokens --jp-*
  app/
    app.component.ts          shell com <router-outlet>
    app.routes.ts             rotas (ambas com lazy loading)
    pages/
      portfolio/              a página principal
      design-system/          showcase da jp-ui
    shared/
      content.model.ts        contratos de todo o conteúdo do site
      content.pt.ts           🇧🇷 conteúdo em português
      content.en.ts           🇺🇸 conteúdo em inglês
      i18n.service.ts         idioma ativo (signal) + persistência
      contact-form.component.*  formulário de contato
```

> As animações de scroll e os contadores vivem na `jp-ui` (`jpReveal`, `jpCountUp`) — o portfólio consome a própria biblioteca.

## ✏️ Como atualizar o conteúdo

**Todo texto visível vive em `content.pt.ts` e `content.en.ts`** — o template não tem string fixa. Editou um, edite o outro: o TypeScript avisa se faltar algum campo.

| O que mudar | Onde |
|---|---|
| Projetos | `projects.items` |
| Experiência profissional | `experience.items` |
| Etapas do processo | `process.steps` |
| Habilidades por aba | `skills.groups` |
| Números da faixa de destaque | `metrics` |
| Contato / redes sociais | constantes em `app.component.ts` |
| Botão de download do CV | coloque o PDF em `public/` e mude `cvDisponivel` para `true` |
| Destino do formulário | `FORMSPREE_ENDPOINT` em `contact-form.component.ts` |

### Ativando o envio do formulário

Sem configuração, o formulário abre o cliente de e-mail com a mensagem preenchida — já funciona. Para receber por e-mail sem sair do site:

1. Crie um formulário gratuito em [formspree.io](https://formspree.io)
2. Substitua `SEU_ID` em `FORMSPREE_ENDPOINT` pelo ID gerado

---

© João Pedro Bandeira
