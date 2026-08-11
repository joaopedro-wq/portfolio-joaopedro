# 🖥️ Portfólio — João Pedro Bandeira

Portfólio pessoal de um desenvolvedor Full-stack, construído para converter visitas em conversas: proposta de valor clara, prova de trabalho e contato a um clique em qualquer ponto da página.

**🔗 Acesse:** https://joaopedro-wq.github.io/portfolio-joaopedro/

---

## ✨ Destaques

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
npm run build      # build de produção em dist/
npm test           # testes unitários
```

## 📁 Estrutura

```
public/                       imagens e vídeos de demonstração
src/
  index.html                  metatags de SEO/social e bootstrap de tema
  styles.scss                 design tokens (cores, raios, sombras), reset e scroll reveal
  app/
    app/                      componente raiz: layout, estado e navegação
    shared/
      content.model.ts        contratos de todo o conteúdo do site
      content.pt.ts           🇧🇷 conteúdo em português
      content.en.ts           🇺🇸 conteúdo em inglês
      i18n.service.ts         idioma ativo (signal) + persistência
      reveal.directive.ts     animação de entrada no scroll
      count-up.directive.ts   contadores animados das métricas
      contact-form.component.*  formulário de contato
```

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
