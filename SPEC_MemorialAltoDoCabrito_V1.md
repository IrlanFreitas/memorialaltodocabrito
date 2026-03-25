# Prompt Completo: Landing Page — Memorial Alto do Cabrito

## Visão Geral do Projeto

Crie uma landing page institucional completa para o **Memorial Alto do Cabrito**, um projeto de memória comunitária do bairro Alto do Cabrito, em Salvador, Bahia. O site é um memorial online que preserva e celebra a história, as figuras notáveis, os marcos culturais e a identidade da comunidade do Alto do Cabrito. O posicionamento central é: **"Um espaço para preservar e celebrar a história da nossa comunidade."**

**NÃO é um e-commerce.** O objetivo é ser um acervo digital interativo, com seções de história, hemeroteca (recortes de jornal/mídia), figuras notáveis da comunidade, projetos do grupo comunitário e notícias locais.

**Público-alvo:** Moradores e ex-moradores do Alto do Cabrito, pesquisadores, educadores, jornalistas e qualquer pessoa interessada na história e cultura periférica de Salvador.

---

## Especificações Técnicas

### Stack Tecnológico

- **Framework**: React 18+ com TypeScript
- **Roteamento**: React Router (Data Mode Pattern) usando `react-router` package
- **Estilização**: Tailwind CSS v4
- **Animações**: Motion (antiga Framer Motion) - importar como `import { motion } from 'motion/react'`
- **Ícones**: lucide-react (estilo line/outline com bordas arredondadas)
- **Abordagem**: Mobile-first (412px base), responsivo e pixel-perfect

### Estrutura de Arquivos

```
/src
  /app
    App.tsx (usa RouterProvider)
    routes.tsx
  /components
    NavBar.tsx
    HeroCarousel.tsx
    HistoriaIntro.tsx
    AcervoSection.tsx
    FigurasNotaveis.tsx
    HemerotecaSection.tsx
    GrupoComunitario.tsx
    NoticiasSection.tsx
    Footer.tsx
    MenuFlutuante.tsx
    BotaoExplore.tsx (componente reutilizável)
    BotaoAcervo.tsx (componente reutilizável)
  /figma
    ImageWithFallback.tsx
  /pages
    Home.tsx
    AcervoPage.tsx
    FigurasNotaveisPage.tsx (Listagem de Figuras Notaveis)FigurasNotaveisDetalhe.tsx (Detalhamento de Figura Notaveis)
    HemerotecaPage.tsx
    ProjetosPage.tsx (Listagem de Projetos)
    ProjetoDetalhe.tsx (Detalhamento de Projeto)
    NoticiaPage.tsx (Listagem de Noticias)
    NoticiaDetalhe.tsx (Detalhamento da Noticia)
    SobrePage.tsx (Quem Somos - Grupo Comunitário)
  /layouts
    RootLayout.tsx
  /styles
    theme.css
    fonts.css
  /assets
    /logos
      memorial-logo.png
      memorial-logo-black.png
    /parceiros
      leu.png
      caza.png
      lugar.png
      periferia.png
      liverpool.png
      yale.png
      fapesb.png
      isc.png
      redcap.png
      mendeley.png
      amaca.png
      e-ao-quadrado.png
      jovens-inovadores.png
```

---

## Sistema de Design (Design Tokens)

### Paleta de Cores

Extraída diretamente do design no Figma:

```css
/* === Cores Principais === */

--laranja: #FF9D00;            /* Cor principal - NavBar, CTAs, botões, destaques */
--laranja-dark: #E68E00;       /* Hover states de botões primários */
--laranja-light: #FFF3E0;      /* Backgrounds sutis, badges */
--laranja-mid: #FFB84D;        /* Variante média para elementos decorativos */

--preto: #000000;              /* Cor de fundo principal das seções, backgrounds escuros */
--preto-soft: #1A1A1A;         /* Fundo alternativo levemente mais claro */
--preto-card: #1E1E1E;         /* Background de cards sobre fundo preto */

/* === Neutros === */

--white: #FFFFFF;              /* Texto principal sobre fundos escuros, títulos */
--off-white: #F5F5F5;          /* Fundos claros alternados */
--cinza-texto: #CCCCCC;        /* Texto secundário, descrições */
--cinza-medio: #999999;        /* Texto terciário, datas antigas (interação) */
--cinza-borda: rgba(255, 255, 255, 0.15); /* Bordas sutis sobre fundo escuro */
--cinza-card-bg: rgba(255, 255, 255, 0.06); /* Background sutil de cards */

/* === Acentos (usados em logos de parceiros) === */
--verde-escuro: #1B4332;       /* Opcional para seções específicas */
```

**Regras de uso de cor:**

- **Tema predominantemente escuro:** O site inteiro utiliza fundos escuros (#000000 / #1A1A1A), remetendo à estética de preservação/memorial com identidade periférica forte
- Texto sobre fundo preto: `var(--white)` para títulos, `var(--cinza-texto)` para corpo
- Texto sobre fundo laranja (#FF9D00): `var(--preto)` — NUNCA usar texto branco sobre laranja
- NavBar: fundo `var(--laranja)`, logo e ícones em `var(--preto)`
- CTAs primários: fundo `var(--laranja)`, texto `var(--preto)`, ícone seta à direita
- Links e interações: `var(--laranja)` com transição 200ms
- Linhas divisórias horizontais: `var(--cinza-borda)` (branco 15% opacidade)

### Tipografia

- **Fonte principal**: SF Pro (sistema) — Fallback: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
- **Alternativa web segura**: Inter (Google Fonts) como substituto cross-platform do SF Pro

```css
/* fonts.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --font-primary: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}
```

**Escala tipográfica:**

| Elemento | Fonte | Peso | Mobile | Desktop | Clamp |
|----------|-------|------|--------|---------|-------|
| H1 Hero / Título Seção | Inter | 700-800 | 28px | 48px | `clamp(28px, 6vw, 48px)` |
| H2 Subtítulo Seção | Inter | 700 | 22px | 36px | `clamp(22px, 5vw, 36px)` |
| H3 Card/Sub | Inter | 600 | 18px | 22px | `clamp(18px, 3vw, 22px)` |
| Body | Inter | 400 | 16px | 17px | `clamp(16px, 2vw, 17px)` |
| Body Small | Inter | 400 | 14px | 15px | — |
| CTA Button | Inter | 700 | 18px | 20px | — |
| Caption/Label | Inter | 500 | 12px | 13px | — |
| Eyebrow | Inter | 600 | 10px | 11px | — |

### Border Radius

```css
--radius-sm: 4px;     /* Botões menores, inputs */
--radius-md: 8px;     /* Cards, badges */
--radius-lg: 12px;    /* Cards de conteúdo */
--radius-xl: 15px;    /* Carrossel de imagens, cards grandes */
--radius-2xl: 20px;   /* Elementos decorativos */
--radius-full: 999px; /* Pills, avatares, indicadores de carrossel */
```

### Espaçamento e Layout

- **Sistema baseado em múltiplos de 4px**:
  - Extra pequeno: 4px
  - Pequeno: 8px
  - Médio: 16px
  - Grande: 24px
  - Extra grande: 32px
  - Seções: 40-48px

- **Grid Mobile** (base 412px):
  - Container: 100% width com padding
  - Gutters: 16px entre colunas
  - Paddings laterais: `px-4` (16px)

- **Breakpoints**:
  - Mobile: até 768px
  - Tablet: 769px – 1024px
  - Desktop: 1025px+

- Container máximo: `max-w-[1200px]` centralizado com `mx-auto`
- Espaçamento entre seções: `py-10 sm:py-12 md:py-16`
- Espaçamento entre parágrafos: 16-20px
- Espaçamento entre elementos dentro de seção: `gap-4 sm:gap-6`

### Sombras

```css
--shadow-card: 0 2px 8px rgba(0, 0, 0, 0.3);
--shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.5);
--shadow-navbar: 0 2px 8px rgba(0, 0, 0, 0.25);
--shadow-float: 0 4px 16px rgba(0, 0, 0, 0.4);
```

### Botões

```css
/* Botão Primário "explore →" */
// Fundo: var(--laranja) (#FF9D00)
// Texto: var(--preto) (#000000)
// Font: Inter 700, 18-20px
// Border-radius: var(--radius-xl) (15px)
// Padding: py-4 px-8 (16px 32px)
// Min-height: 56px
// Ícone: seta → (ArrowRight lucide-react) à direita do texto
// Hover: var(--laranja-dark), scale(1.02)
// Full-width em mobile

/* Botão Secundário "ACERVO" */
// Fundo: var(--laranja) com opacidade ou outline
// Texto: var(--preto)
// Border-radius: var(--radius-md)
// Usado para CTAs secundários de navegação
```

---

## Componentes Globais

### 1. NavBar (Header)

#### Layout

- Background: `var(--laranja)` (#FF9D00)
- Position: `fixed`, top: 0, z-index: 50
- Altura: **80px** mobile, 80px desktop
- Width: 412px mobile (100%)
- Drop shadow: `var(--shadow-navbar)`
- Auto layout horizontal, gap 49px, padding vertical 8px

#### Conteúdo

- **Esquerda:** Ícone hamburguer (3 linhas) — cor `var(--preto)`, ~24px
- **Centro:** Logo "Memorial Alto do Cabrito" — imagem com o logo estilizado (casas/skyline + texto)
- **Direita:** (sem elemento visível no mobile)

#### Mobile (< 768px)

- Menu hamburguer à esquerda
- Logo centralizado
- Ao clicar hamburguer: abre drawer/tela de menu

#### Desktop (> 1024px)

- Logo à esquerda
- Links de navegação centralizados: Início | Nossa História | Acervo | Figuras Notáveis | Hemeroteca | Projetos | Notícias
- CTA à direita: "Explorar Acervo" — botão com fundo `var(--preto)`, texto `var(--white)`

### 2. Menu Flutuante (Floating Action)

**Presente em TODAS as páginas.** Botão de acesso rápido ao acervo ou menu.

- Posição: `fixed` canto inferior (posicionamento a definir)
- Z-index: `z-[9999]`
- Background: `var(--laranja)` ou `var(--preto)`
- Border-radius: `var(--radius-full)`
- Sombra: `var(--shadow-float)`

### 3. Footer Global

#### Layout

- Background: `var(--preto)` (#000000)
- Texto: `var(--white)` para títulos, `var(--cinza-texto)` para links
- Borda superior: `1px solid var(--cinza-borda)`

#### Conteúdo

- **Endereço:** Localização do projeto / comunidade Alto do Cabrito, Salvador, Bahia
- **Redes Sociais:** Instagram, YouTube, links de parceiros
- **Links:** Projetos realizados pelo Grupo Comunitário
- **Parceiros/Apoiadores:** Grid de logos (LEU, CAZA, LUGAR, Periferia em Todos os Cantos, Liverpool, Yale, FAPESB, ISC, RedCap, Mendeley, AMACA, É ao Quadrado, Jovens Inovadores, Associação Crianças)
- **Copyright:** "© 2026 Memorial Alto do Cabrito. Todos os direitos reservados."

#### Responsividade

- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
- Logos de parceiros: `grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4`

---

## Páginas e Seções — Home Page

A Home é uma landing page longa (5089px mobile) dividida em **dobras** (seções) sequenciais. Cada seção tem identidade visual própria mas mantém coerência com o tema escuro + acentos laranja.

---

### Dobra 1 — NavBar + Hero Carrossel de Imagens

#### Layout

- **NavBar fixa** no topo (80px, fundo laranja #FF9D00)
- Abaixo: **Carrossel de imagens** full-width
- Imagens em scroll horizontal com snap
- Border-radius nas imagens: `var(--radius-xl)` (15px)
- Espaçamento entre imagens: 15px (spacing do carrossel)

#### Carrossel

- Imagens reais da comunidade do Alto do Cabrito (fotos panorâmicas, ruas, casas, paisagens do bairro)
- Indicadores de paginação (dots) abaixo do carrossel — `var(--laranja)` para ativo, `var(--cinza-medio)` para inativo
- Auto-play sutil (5s intervalo) com pause on hover
- Aspect-ratio: ~16:9 ou 4:3

#### Título sobreposto

- **H1:** "Memorial online do Alto do Cabrito" — Inter Bold, branco, sobre fundo escuro/overlay
- O título pode estar abaixo do carrossel sobre fundo preto

#### Background

- Fundo geral: `var(--preto)` (#000000)
- Overlay gradiente no carrossel (de baixo para cima): `linear-gradient(transparent 60%, #000000 100%)`

---

### Dobra 2 — Nossa História (Introdução)

#### Layout

- Background: `var(--preto)` (#000000)
- Seção com título + parágrafo + botão CTA
- Centralizado, max-width: ~362px mobile (full container com padding)

#### Conteúdo

- **H2:** "Nossa história" — Inter Bold, `var(--white)`, centralizado
- **Parágrafo:** "Uma breve história do Alto do Cabrito, destacando seus principais marcos, desafios e conquistas. Inclua informações sobre a formação da comunidade, suas tradições culturais e sua importância para a cidade de Salvador."
  - Font: Inter Regular, 16px
  - Cor: `var(--white)` (ou `var(--cinza-texto)`)
  - Line-height: 1.5
- **CTA:** Botão **"explore →"**
  - Fundo: `var(--laranja)` (#FF9D00)
  - Texto: `var(--preto)`, Inter Bold, ~20px
  - Ícone: seta → (ArrowRight) à direita
  - Border-radius: `var(--radius-xl)` (15px)
  - Full-width no mobile
  - Hover: `var(--laranja-dark)` com leve scale

---

### Dobra 3 — Acervo (Seção Destaque)

#### Layout

- Background: `var(--preto)` ou `var(--preto-soft)`
- Separada por linhas horizontais finas (`var(--cinza-borda)`)
- Grid de cards com imagens do acervo

#### Conteúdo

- **H2:** "Acervo" — Inter Bold, `var(--white)`
- Cards de acervo com:
  - Imagem (foto histórica ou documento), aspect-ratio 16:9, border-radius `var(--radius-lg)`
  - Título do item
  - Breve descrição
  - Data/período
- **Botão:** "ACERVO" — CTA para ver acervo completo

#### Responsividade

- Mobile: cards empilhados (1 coluna)
- Tablet: grid 2 colunas
- Desktop: grid 3 colunas, gap-6

---

### Dobra 4 — Figuras Notáveis

#### Layout

- Background: `var(--preto)`
- Seção com cards de personalidades da comunidade
- Separada por linhas horizontais

#### Conteúdo

- **H2:** "Descubra [Pessoas Notáveis + Mídias]" — Inter Bold, `var(--white)`
- Cards de figuras com:
  - Foto circular (avatar), border-radius `var(--radius-full)`
  - Nome da pessoa — Inter SemiBold, `var(--white)`
  - Breve bio / contribuição — Inter Regular, `var(--cinza-texto)`
- Existem variações: "figuras notáveis", "figuras notáveis 2", "figuras notáveis 3" — indicando iterações/expansão

#### Responsividade

- Mobile: cards em scroll horizontal ou empilhados
- Desktop: grid 3-4 colunas

---

### Dobra 5 — Hemeroteca (Recortes de Mídia)

#### Layout

- Background: `var(--preto)`
- Seção com imagens de recortes de jornal e mídia
- Existem 4 variações no Figma (Hemeroteca, Hemeroteca 2, 3, 4)

#### Conteúdo

- **H2:** "Hemeroteca" — Inter Bold, `var(--white)`
- Cards de mídia com:
  - Imagem do recorte de jornal/notícia (scan), border-radius `var(--radius-md)`
  - Título da notícia
  - Fonte/Jornal
  - Data de publicação
- Organização cronológica

#### Responsividade

- Mobile: carrossel horizontal ou lista vertical
- Desktop: grid 2-3 colunas

---

### Dobra 6 — Grupo Comunitário (Quem Somos)

#### Layout

- Background: `var(--preto)` ou variação
- Seção "Gc - quem somos"

#### Conteúdo

- **H2:** "Grupo Comunitário" — Inter Bold, `var(--white)`
- Descrição do grupo que mantém o memorial
- Fotos da equipe/comunidade
- Missão e valores do projeto
- CTA: "Conheça o grupo" ou "Saiba mais"

---

### Dobra 7 — Sessão Grupo Comunitário (Projetos)

#### Layout

- Background: `var(--preto)`
- Destaque de projetos realizados pelo grupo comunitário

#### Conteúdo

- **Texto identificado:** "Projetos Realizados pelo Grupo Comunitário"
- Cards de projetos com:
  - Imagem do projeto
  - Título
  - Breve descrição
  - Link para detalhamento
- **Logos de parceiros** em grid horizontal:
  - LEU, CAZA (Projeto Juventude Permanente), LUGAR, Periferia em Todos os Cantos
  - Liverpool, Yale, FAPESB, ISC, RedCap, Mendeley
  - AMACA, É ao Quadrado, Jovens Inovadores, Associação Crianças

---

### Dobra 8 — Notícias

#### Layout

- Background: `var(--preto)`
- Seção "Sessão - Notícias"

#### Conteúdo

- **H2:** "Notícias" — Inter Bold, `var(--white)`
- Cards de notícias com:
  - Imagem de capa (aspect 16:9), border-radius `var(--radius-lg)`
  - "Título da Notícia" — Inter SemiBold
  - Excerpt/preview
  - Data
- **Nota de interação (do Figma):** "Vai ter duas formas de interações na lista, datas anteriores serão de uma fonte cinza, e poderá ser acessadas para resumo de como foi o evento, se for no dia que estiver olhando e as próximas com as informações de como será."
  - **Eventos passados:** fonte `var(--cinza-medio)`, clicável para ver resumo
  - **Eventos futuros/atuais:** fonte `var(--white)`, com informações de como será

#### Responsividade

- Mobile: cards empilhados, 1 coluna
- Desktop: grid 2 colunas, gap-6

---

### Dobra 9 — Footer

#### Layout

- Background: `var(--preto)` (#000000)
- Borda superior: `1px solid var(--cinza-borda)`
- Padding: `py-10 sm:py-12`

#### Conteúdo

- Endereço, redes sociais, projetos do grupo
- Footer: texto "Endereço Redes Sociais Projetos" (conforme layer name)
- Grid de logos de parceiros/apoiadores
- Copyright e links institucionais
- Link para referência: pinacoteca.org.br (inspiração/parceiro acadêmico)

---

## Páginas Secundárias

### Tela Menu (Mobile Drawer)

- Overlay escurecido sobre a página
- Lista de links de navegação empilhados verticalmente
- Font: Inter Bold, 18-20px, `var(--white)`
- Background do drawer: `var(--preto)` ou `var(--preto-soft)`
- CTA "Explorar Acervo" no final
- Animação: slide da esquerda, 300ms

### Tela - Listagem de Projetos

- Header com breadcrumb
- Grid de cards de projetos
- Filtros por categoria/ano
- Cada card com imagem, título, descrição, data

### Tela - Detalhamento de Projeto

- Hero com imagem do projeto
- Título e descrição completa
- Galeria de fotos
- Informações de parceiros envolvidos
- CTA para voltar à listagem

### Tela Exemplo (Template genérico de conteúdo)

- Layout padrão para páginas de conteúdo interno
- Header, corpo de texto, imagens, CTAs

---

## Animações

### Motion/React

```tsx
// Fade up padrão (entrada de seções)
initial={{ opacity: 0, y: 28 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}

// Delays escalonados para listas/cards
// Item 1: delay 0.15s
// Item 2: delay 0.30s
// Item 3: delay 0.45s
// Item 4: delay 0.60s
```

### Hover States

- Botões: mudança de cor de fundo + leve scale (200ms)
- Cards: `translateY(-4px)` com sombra ampliada (300ms)
- Imagens: `scale(1.04)` (500ms)
- Links: cor muda para `var(--laranja)` (200ms)

### Carrossel Hero

- Transição entre slides: 500ms ease-in-out
- Auto-play: 5s por slide
- Indicadores de paginação: transição de opacidade 300ms
- Scroll-snap: `scroll-snap-type: x mandatory`

### Interações de Notícias

- Eventos passados: opacity 0.6, hover revela overlay com resumo
- Eventos futuros: opacity 1.0, com destaque visual

---

## Imagens

### Usar ImageWithFallback component para todas as imagens

```tsx
interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ImageWithFallback({ src, alt, className, style }: ImageWithFallbackProps) {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: 'var(--preto-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--cinza-medio)',
          fontFamily: 'var(--font-primary)',
          fontSize: '14px',
        }}
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
```

### Sugestões de busca Unsplash (placeholders):

- Hero: "salvador bahia favela community aerial view"
- Bairro: "brazilian neighborhood community houses hill"
- Pessoas: "brazilian community leader portrait"
- Hemeroteca: "old newspaper clipping brazil"
- Projetos: "community project meeting brazil"
- Acervo: "historical photos brazil community"

---

## Package.json Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router": "^7.1.3",
    "motion": "^11.15.0",
    "lucide-react": "^0.468.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "typescript": "^5.7.3",
    "tailwindcss": "^4.0.0"
  }
}
```

---

## Checklist de Implementação

- [ ] Configurar projeto React + TypeScript
- [ ] Instalar dependências (react-router, motion, lucide-react)
- [ ] Configurar Tailwind CSS v4
- [ ] Criar theme.css com todos os design tokens (cores, sombras, radius)
- [ ] Criar fonts.css e importar Inter do Google Fonts
- [ ] Criar estrutura de pastas conforme especificado
- [ ] Copiar assets (logo memorial, logos de parceiros)
- [ ] Implementar NavBar (header laranja com menu mobile drawer)
- [ ] Implementar Menu Flutuante (botão floating)
- [ ] Criar Hero Carrossel de Imagens (scroll-snap, auto-play, indicadores)
- [ ] Criar seção Nossa História (intro + botão explore)
- [ ] Criar seção Acervo (grid de cards com fotos históricas)
- [ ] Criar seção Figuras Notáveis (cards com avatares circulares)
- [ ] Criar seção Hemeroteca (recortes de mídia em grid)
- [ ] Criar seção Grupo Comunitário (quem somos + missão)
- [ ] Criar seção Projetos (cards + logos parceiros)
- [ ] Criar seção Notícias (cards com lógica passado/futuro)
- [ ] Implementar Footer (endereço, redes, parceiros, copyright)
- [ ] Criar Tela Menu (drawer mobile)
- [ ] Criar Tela - Listagem de Projetos
- [ ] Criar Tela - Detalhamento de Projeto
- [ ] Criar Tela - Listagem de Noticias
- [ ] Criar Tela - Detalhamento de Noticias
- [ ] Criar Tela - Listagem de Figuras Notáveis
- [ ] Criar Tela - Detalhamento de Figuras Notáveis.
- [ ] Implementar animações Motion (fade up, hover states, carrossel)
- [ ] Adicionar Schema Markup JSON-LD (Organization, WebSite, Article)
- [ ] Configurar meta tags SEO por página
- [ ] Testar responsividade em todos os breakpoints (mobile 412px, tablet, desktop)
- [ ] Testar acessibilidade (contraste, keyboard nav, alt texts, focus states)
- [ ] Performance audit (lazy loading, WebP, Core Web Vitals)
- [ ] Deploy

---

## Observações Finais

1. **Estética periférica:** Design escuro (dark mode total) com acentos em laranja vibrante (#FF9D00) — identidade visual forte que remete à cultura periférica de Salvador
2. **Mobile-first:** Base 412px. O frame principal do Figma é 412 × 5089px
3. **Fotos reais obrigatórias:** Placeholders Unsplash são temporários. Fotos reais do bairro, pessoas e documentos são críticas para autenticidade
4. **Acervo é o CTA #1:** O botão de acesso ao acervo deve estar acessível em todos os momentos (NavBar, hero, seções, footer)
5. **Tom comunitário:** Design que transmite pertencimento, orgulho e memória coletiva. Nunca corporativo ou genérico
6. **Interação temporal nas notícias:** Eventos passados em cinza (resumo do que foi), eventos futuros em branco (informações de como será)
7. **Parceiros acadêmicos:** O projeto tem parcerias com universidades internacionais (Liverpool, Yale) e instituições de pesquisa (FAPESB, ISC, RedCap, Mendeley) — evidenciar essa credibilidade
8. **Consistência:** Reutilizar componentes (BotaoExplore, BotaoAcervo, ImageWithFallback, cards)
9. **Acessibilidade:** Verificar contrastes (texto branco sobre preto = ✓, texto preto sobre laranja = ✓), touch targets mínimos de 44px, semântica HTML
10. **Performance:** Otimizar imagens (WebP), lazy loading, carregamento < 3s
11. **Referência cultural:** A pinacoteca.org.br aparece como referência/inspiração no Figma
12. **Anti-patterns a evitar:** layout genérico corporativo, fundos brancos predominantes (o memorial é escuro por identidade), fotos stock sem contexto, CTAs enterrados, site que não funciona no celular

---

**Este prompt está completo e pronto para ser usado em qualquer ferramenta de IA para gerar o projeto Memorial Alto do Cabrito do zero.**
