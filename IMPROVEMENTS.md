# Melhorias Recomendadas — Memorial Alto do Cabrito

## 1. Design & Experiência Visual

### Tipografia Diferenciada (Alta Prioridade)
- **Problema:** Inter é funcional mas genérica para um projeto de identidade cultural forte.
- **Sugestão:** Adicionar uma fonte display para títulos de seção — `Playfair Display` ou `Cormorant Garamond` para transmitir o peso histórico e cultural, mantendo Inter para corpo de texto. Exemplo: `H1: Playfair Display Bold` + `Body: Inter Regular`.
- **Impacto:** Diferenciação visual imediata, estética mais editorial e menos corporativa.

### Texturas e Grain (Média Prioridade)
- **Sugestão:** Adicionar uma sutil textura de grain/ruído sobre os fundos pretos usando CSS `filter: url(#noise)` ou um SVG filter. Cria profundidade e remete à estética periférica analógica.
- **Referência:** Como faz a Pinacoteca (pinacoteca.org.br) com seus planos de fundo.
- **Implementação:** 2-3 linhas de CSS com `background-image: url("data:image/svg+xml...")`

### Animações de Entrada mais Dramáticas
- **Sugestão:** Para o Hero, adicionar um efeito de "reveal" onde o texto aparece com uma máscara que corre da esquerda para a direita (como um curtain reveal), em vez do simples fade-up.
- **Implementação:** `clipPath` animation com Motion: `initial: { clipPath: 'inset(0 100% 0 0)' }` → `animate: { clipPath: 'inset(0 0% 0 0)' }`

### Parallax Suave no Hero
- **Sugestão:** Aplicar um leve efeito parallax nas imagens do carrossel usando `useScroll` e `useTransform` do Motion, fazendo a imagem se mover ligeiramente mais devagar que o scroll.
- **Impacto:** Sensação de profundidade e modernidade no hero.

### Cursor Customizado
- **Sugestão:** Criar um cursor personalizado que muda para um círculo laranja quando hover em links/cards, como fazem sites culturais premium.
- **Implementação:** CSS `cursor: none` + div posicionado via JS que segue o mouse.

---

## 2. Performance

### Imagens Reais com WebP + Tamanhos Responsivos (Alta Prioridade)
- **Problema:** As imagens do Unsplash são placeholders. O site precisa de imagens reais do bairro.
- **Sugestão:**
  - Converter todas as fotos reais para WebP (ferramentas: Squoosh, ImageMagick).
  - Usar `<picture>` com `srcset` para servir tamanhos diferentes por breakpoint.
  - Implementar o componente `ImageWithFallback` para aceitar `srcSet` e `sizes`.
- **Meta:** Fotos ≤ 200KB cada, hero ≤ 400KB.

### Lazy Loading Avançado com Intersection Observer
- **Sugestão:** Substituir o `loading="lazy"` nativo por um hook customizado `useIntersectionObserver` que carrega seções inteiras somente quando entram na viewport, incluindo dados.
- **Impacto:** Redução significativa no tempo de carregamento inicial.

### Code Splitting por Rota
- **Sugestão:** Lazy load das páginas secundárias via `React.lazy()` + `Suspense`:
  ```tsx
  const AcervoPage = React.lazy(() => import('./pages/AcervoPage'))
  ```
- **Impacto:** Bundle inicial reduz de 474KB para ~150KB (apenas Home + NavBar).

### Compressão de Assets
- **Sugestão:** Adicionar plugin `vite-plugin-compression` para gzip/brotli automático.
- **Meta:** Assets CSS/JS gzip abaixo de 50KB.

### Pré-carregamento de Fontes
- **Sugestão:** Mover o `<link>` do Google Fonts para `<head>` com `rel="preload"`:
  ```html
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" as="style" />
  ```
- **Impacto:** Eliminar FOUT (Flash of Unstyled Text).

---

## 3. Acessibilidade (A11y)

### Skip Navigation Link (Alta Prioridade)
- **Sugestão:** Adicionar link "Pular para conteúdo principal" visível apenas no foco (teclado), para usuários de screen reader e navegação por teclado.
  ```html
  <a href="#main-content" class="skip-link">Pular para o conteúdo</a>
  ```

### ARIA Labels e Roles
- **Problemas identificados:**
  - Carrossel precisa de `role="region"` e `aria-roledescription="carrossel"`
  - Dots do carrossel precisam de `role="tab"` com `aria-selected`
  - Cards devem ter `role="article"` (já implementado) e `aria-label` descritivos
- **Impacto:** Compatibilidade com leitores de tela (NVDA, JAWS, VoiceOver).

### Contraste de Cores
- **Atenção:** `var(--cinza-medio)` (#999999) sobre `var(--preto)` (#000000) tem ratio 5.74:1 (passa AA mas não AAA).
- **Sugestão:** Para textos importantes, usar no mínimo `var(--cinza-texto)` (#CCCCCC) que tem ratio 9.73:1 (passa AAA).

### Focus States Visíveis
- **Sugestão:** Os botões e links têm `focus-visible` configurado em CSS, mas os cards precisam de estados de foco explícitos com borda laranja visível.

### Redução de Movimento
- **Sugestão:** Respeitar `prefers-reduced-motion`:
  ```tsx
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  // Passar transition: prefersReducedMotion ? {} : { duration: 0.7 }
  ```

---

## 4. SEO e Descoberta

### Meta Tags Dinâmicas por Página (Alta Prioridade)
- **Problema:** Todas as páginas compartilham o mesmo `<title>` e `<meta description>` do index.html.
- **Sugestão:** Instalar `react-helmet-async` e criar um componente `<PageMeta>` para definir título e descrição por página.
  ```tsx
  // Em NoticiaDetalhe.tsx:
  <PageMeta
    title={`${noticia.titulo} | Memorial Alto do Cabrito`}
    description={noticia.excerpt}
    image={noticia.imagem}
  />
  ```

### Open Graph e Twitter Cards
- **Sugestão:** Adicionar meta tags OG dinâmicas para cada página, especialmente noticias e figuras notáveis, para melhorar o compartilhamento em redes sociais.

### Sitemap XML
- **Sugestão:** Gerar sitemap.xml estático ou dinâmico com todas as rotas para facilitar indexação.

### Schema Markup Expandido
- **Sugestão:** Adicionar Schema.org específico para tipos de conteúdo:
  - `Article` para notícias
  - `Person` para figuras notáveis
  - `Event` para eventos futuros/passados
  - `LocalBusiness`/`CivicStructure` para o projeto em si

---

## 5. Funcionalidades

### Busca Global (Alta Prioridade)
- **Sugestão:** Criar uma busca global que indexa acervo, figuras notáveis, hemeroteca, projetos e notícias simultaneamente.
- **Implementação:** Hook `useSearch` com fuzzy matching usando `fuse.js` ou filtro simples em memória.
- **UI:** Modal de busca acessível via `⌘K` / `Ctrl+K` (command palette pattern).

### Modo de Alto Contraste
- **Sugestão:** Botão para ativar modo de alto contraste, aumentando opacidade dos textos secundários e bordas.

### Compartilhamento Social
- **Sugestão:** Botões de compartilhamento nas páginas de notícias, figuras notáveis e projetos — Twitter/X, WhatsApp e link copiado.

### Galeria Lightbox
- **Sugestão:** Para o Acervo e galerias de projetos, implementar um lightbox (visualização em tela cheia) usando `motion` para a transição. Biblioteca leve: `yet-another-react-lightbox`.

### Filtros Avançados no Acervo
- **Sugestão:** Filtros por período/década (1960s, 1970s, etc.), categoria e tags, com URL params para compartilhar filtros ativos.

### Newsletter/Mailing List
- **Sugestão:** Formulário simples de inscrição para receber novidades do memorial via e-mail, integrado com Mailchimp ou similar.

### Modo Offline / PWA
- **Sugestão:** Registrar um Service Worker para cache de assets e conteúdo básico, permitindo acesso offline ao acervo já visitado. Vite tem plugin `vite-plugin-pwa`.

---

## 6. Infraestrutura e Deploy

### CMS Headless (Médio Prazo)
- **Problema:** Conteúdo está hardcoded em `mockData.ts`. Para um memorial real, isso é inviável.
- **Sugestão:** Integrar com um CMS headless como **Sanity.io** (gratuito até 10k docs) ou **Contentful**.
- **Benefício:** Comunidade pode adicionar itens ao acervo, figuras e notícias sem programação.

### Autenticação para Contribuições
- **Sugestão:** Área de contribuição autenticada (Auth.js/Clerk) onde moradores podem submeter fotos, documentos e depoimentos para aprovação do grupo.

### CDN para Imagens
- **Sugestão:** Hospedar imagens em Cloudflare Images ou imgix para otimização automática de formato e tamanho.

### Monitoramento
- **Sugestão:** Adicionar Web Vitals monitoring com Sentry ou Vercel Analytics para acompanhar performance real em campo.
- **Métricas alvo:** LCP < 2.5s, FID < 100ms, CLS < 0.1.

---

## 7. Conteúdo e Editorial

### Fotos Reais (Crítico)
- Substituir TODOS os placeholders Unsplash por fotos reais do bairro, moradores e documentos.
- Organizar arquivo fotográfico com metadados: data, local, fotógrafo, pessoas presentes.

### Transcrição de Depoimentos
- Adicionar seção de "Memórias Orais" com depoimentos em texto e áudio de moradores antigos.

### Linha do Tempo Interativa
- A página "Nossa História" poderia ter uma timeline visual interativa e exploratória, com imagens e documentos vinculados a cada marco histórico.

### Mapa do Bairro
- Integrar um mapa interativo (Leaflet.js ou Mapbox) com pontos marcados de locais históricos do bairro.

---

## Resumo de Prioridades

| Prioridade | Item | Impacto |
|------------|------|---------|
| 🔴 Alta | Fotos reais do bairro | Autenticidade |
| 🔴 Alta | Code splitting + lazy load | Performance |
| 🔴 Alta | Meta tags dinâmicas (SEO) | Descoberta |
| 🔴 Alta | Skip navigation link | Acessibilidade |
| 🟡 Média | CMS headless | Sustentabilidade |
| 🟡 Média | Busca global | Usabilidade |
| 🟡 Média | Tipografia display | Identidade visual |
| 🟢 Baixa | Cursor customizado | Diferenciação |
| 🟢 Baixa | PWA/offline | Resiliência |
| 🟢 Baixa | Galeria lightbox | Experiência |
