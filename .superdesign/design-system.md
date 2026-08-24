# João Pedro Bandeira — landing de portfólio

## Objetivo e público

Uma landing bilíngue para gestores de produto, líderes de engenharia e pessoas recrutando desenvolvimento web. Em poucos segundos ela precisa estabelecer que João Pedro trabalha entre produto, interface e engenharia full stack; em seguida, provar isso com trabalho público e verificável.

O tom é claro, maduro e próximo. Evite linguagem de agência, superlativos sem prova, métricas inventadas e qualquer frase genérica sobre “transformar ideias”. A página é pessoal, mas se comporta como uma apresentação de produto bem editada.

## Direção visual — Product-led editorial

Use apenas a cadência editorial, a composição cinematográfica e o espaço negativo de `serene-find-my-dream` como referência primária. Não copie sua fonte serifada, vídeo, botões pretos ou estética de luxo. A identidade deste portfólio permanece própria:

- Fonte: Inter e a pilha de sistema existente em todo o site.
- Tema: dark-first navy; preservar a equivalência clara já definida pelos tokens.
- Cores: `--bg`, `--bg-elevated`, `--surface`, `--fg`, `--fg-muted`, indigo `--primary` e mint `--accent`; não criar novas cores, gradientes, fontes ou ícones.
- Composição: contêiner máximo de 1120px, bastante respiro vertical, bordas discretas e superfícies com pouca elevação. Evite mosaicos de cards equivalentes.
- Logo: usar visivelmente o Brand Asset `public/logo_sistema.png` junto ao wordmark João Pedro; nunca substituir por iniciais, emoji ou marca inventada.

## Estrutura e hierarquia

1. **Cabeçalho fixo:** logo/wordmark, navegação curta (Projetos, Sobre, Experiência, Contato), idioma, tema e CTA de conversa. Manter skip link, âncoras e menu mobile.
2. **Hero:** badge de atuação, a mensagem “Desenvolvo produtos web claros, do fluxo à entrega.”, apoio concreto, CTA para o case Vitality e CTA de contato. À direita, retrato sereno e um painel de produto/interface baseado em imagens reais do Vitality — tecnologia como evidência, não decoração.
3. **Trabalho selecionado:** começar pelo Vitality como case editorial amplo. Mostrar o contexto, solução, três entregas relevantes, stack e CTA “Criar meu plano”/demo. `bandeira-ui` entra em seguida como prova técnica, com composição feita pelos próprios elementos do design system. O próprio portfólio aparece como um case compacto de produto pessoal e links públicos, sem alegar dados não fornecidos.
4. **Atuação e competências:** explicar a interseção produto/interface/engenharia com poucos pontos fortes e grupos de habilidades com uma frase de contexto — não uma parede de ícones.
5. **Processo e experiência:** processo curto de quatro passos seguido por uma linha do tempo condensada, com foco em regras de negócio, integrações, qualidade e evolução.
6. **Contato:** encerramento direto com formulário, WhatsApp, e-mail, LinkedIn e GitHub.

## Conteúdo e UX

- Todos os textos devem sair de `content.pt.ts` e `content.en.ts`, com traduções naturais equivalentes.
- Cada case precisa responder: para quem/qual problema, o que foi construído, principais decisões/entregas, stack e próximo passo real.
- Vitality nunca faz promessa clínica: IA organiza um ponto de partida e a pessoa mantém o controle.
- Exibir links externos com `target="_blank"` e `rel="noopener noreferrer"`; repositórios são secundários a demos/documentação.
- Manter temas, formulário com fallback `mailto:`, modal de contato e controles atuais quando ainda contribuírem para conversão.

## Movimento, responsividade e performance

- Uma coluna legível no mobile; nenhuma versão mobile paralela.
- Entradas `fade-and-rise` de 16–20px, 520–680ms e `cubic-bezier(0.16, 1, 0.3, 1)` apenas em grupos relacionados; hover de botão/card até 2–4px.
- Respeitar `prefers-reduced-motion`; sem loops contínuos, marquee, parallax, digitação ou autoplay.
- Imagens reais têm dimensões, `decoding="async"` e carregamento preguiçoso fora da dobra. Sem vídeo no hero; a mídia de produto pode usar o dashboard já existente.
- Preservar semântica, foco visível, controles de texto, contraste e áreas de toque mínimas de 44px.
