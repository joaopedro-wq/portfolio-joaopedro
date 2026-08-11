# 🖥️ Portfólio — João Pedro Bandeira

Portfólio pessoal de um desenvolvedor Full-stack, construído para converter visitas em conversas: proposta de valor clara, prova de trabalho e contato a um clique em qualquer ponto da página.

**🔗 Acesse:** https://joaopedro-wq.github.io/portfolio-joaopedro/

---

## ✨ Destaques

- **Hero orientado a conversão** — proposta de valor, selo de disponibilidade e CTAs diretos (WhatsApp, e-mail, projetos)
- **Timeline de experiência** com entregas concretas por posição
- **Projetos no formato problema → solução → resultado**
- **Tema claro/escuro** persistido em `localStorage`, sem flash na primeira pintura
- **Vídeos sob demanda** — os MB só são baixados após o clique do usuário
- **SEO completo** — Open Graph, Twitter Card e JSON-LD (`schema.org/Person`)
- **Acessível** — skip link, navegação por teclado, `aria-*` em tabs/menu/modal, `prefers-reduced-motion`

## 🚀 Stack

Angular 20 (standalone, signals, `@if`/`@for`, `OnPush`) · TypeScript · SCSS com design tokens · Angular Animations · ngx-toastr · Font Awesome

## 🛠️ Rodando localmente

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build de produção em dist/
npm test           # testes unitários
```

## 📁 Estrutura

```
public/                    imagens e vídeos de demonstração
src/
  index.html               metatags de SEO/social e bootstrap de tema
  styles.scss              design tokens (cores, raios, sombras) + reset
  app/app/
    app.component.ts       dados do portfólio, estado (signals) e animações
    app.component.html     seções da página
    app.component.scss     estilos construídos sobre os tokens
```

## ✏️ Como atualizar o conteúdo

Todo o conteúdo vive em `src/app/app/app.component.ts` — não é preciso mexer no HTML:

| O que mudar | Onde |
|---|---|
| Projetos | array `projects` |
| Experiência profissional | array `experiences` |
| Habilidades por aba | array `skillGroups` |
| Números da faixa de destaque | array `metrics` |
| Contato / redes | constantes no topo da classe |
| Botão de download do CV | coloque o PDF em `public/` e mude `cvDisponivel` para `true` |

---

© João Pedro Bandeira
