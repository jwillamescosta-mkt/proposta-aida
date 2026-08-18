# Proposta comercial para Aida — landing page one-page

Página única em pt-BR, estética editorial quente (terracota, blush, bege, marfim), tipografia serifada para títulos e sans-serif limpa no corpo, muito respiro e fade-in suave ao rolar.

## Estrutura da página

1. **Hero** — eyebrow "Proposta de Consultoria & Comunicação", título serifado grande "Para Aida — cada clique guarda uma infância inteira.", citação em destaque sobre os 7 anos, com filete/regra fina e fundo marfim texturizado.
2. **Introdução** — dois parágrafos em coluna estreita de leitura confortável, com a frase-chave ("não é sobre postar mais") em ênfase tipográfica.
3. **O que percebo hoje** — lista de observações com marcadores discretos; o terceiro item é um bloco de observação personalizada claramente editável (borda tracejada + rótulo "observação personalizada").
4. **Como posso ajudar** — três blocos elegantes numerados: Posicionamento, Estratégia de conteúdo, Gestão de redes sociais.
5. **Caminhos possíveis** — três cards comparativos (R$ 400 único · R$ 650/mês · R$ 1.100/mês), o terceiro em destaque visual (borda terracota + selo "Recomendado").
6. **Como vamos trabalhar** — timeline de 4 passos: vertical no mobile, horizontal no desktop, com numeração serifada grande.
7. **Fechamento** — "Vamos conversar?", texto dos 20 minutos, botão principal "Agendar conversa" apontando para o Instagram (instagram.com/willamesscosta), e contatos: jwillamescosta@gmail.com · instagram.com/willamesscosta.

## Detalhes visuais

- Paleta e tipografia entram como tokens semânticos no design system (nada de cor fixa nos componentes); tema claro/quente como padrão.
- Fontes carregadas via `<link>` na raiz: uma serifada editorial para títulos e uma sans-serif neutra para corpo.
- Micro-animações: fade-in/translate suave por seção via IntersectionObserver, desativado quando o usuário pede menos movimento.
- Modo impressão/PDF: estilos `@media print` que removem animações, fixam fundo claro, evitam quebra dentro dos cards e mantêm as cores essenciais.
- Sem backend, sem formulário; conteúdo estático.

## Técnico

- Reescrever `src/routes/index.tsx` como a proposta (a página abre em `/`), sem novas rotas.
- Tokens de cor/raio/tipografia em `src/styles.css`; fontes no `head` de `src/routes/__root.tsx`.
- Componentes de seção em `src/components/proposta/*` para manter o arquivo de rota legível.
- `head()` da rota com título e descrição próprios da proposta (ex. "Proposta de Comunicação — Aida Fotografia").
- Campos entre colchetes ficam isolados em constantes no topo do conteúdo, marcados com comentário `// EDITÁVEL`, para troca rápida de texto.
