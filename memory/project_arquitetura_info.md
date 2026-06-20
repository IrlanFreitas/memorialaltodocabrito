---
name: project_arquitetura_info
description: Arquitetura de informação e estrutura do CMS WordPress para o Memorial Alto do Cabrito — CPTs, ACF, tags e endpoints REST
metadata:
  type: project
---

Reorganização de informação concluída em 2026-06-07. Guia para setup do CMS WordPress.

**Why:** O projeto precisava separar claramente conteúdo textual/impresso (Acervo) de conteúdo audiovisual (Mídia), usando tags do WordPress para filtrar via REST API.

**How to apply:** Usar este documento como spec técnica ao configurar o WordPress (CPTs, ACF, tags, endpoints).

---

## Estrutura de Páginas e Rotas

| Página | Rota | Subcategorias |
|--------|------|---------------|
| Acervo | `/acervo` | Hemeroteca, Biblioteca |
| Mídia | `/midia` | Fototeca, Videoteca, Audioteca |

---

## CPT: `acervo`

**Duas categorias (ACF field `categoria`):**
- `hemeroteca` — Jornais, revistas, recortes de notícias, boletins antigos
- `biblioteca` — Livros, teses, livretos, e-books, documentos textuais digitais

**WP Tags (para filtro via REST API):**
- `acervo-hemeroteca`
- `acervo-biblioteca`

**ACF fields — Hemeroteca:**
- `tipo`: `jornal | revista | recorte | boletim`
- `veiculo`: nome do jornal/revista
- `data_publicacao`: Y-m-d
- `transcricao`: texto do recorte digitalizado

**ACF fields — Biblioteca:**
- `tipo`: `livro | tese | livreto | ebook | documento-textual`
- `autor`: string
- `ano_publicacao`: string
- `editora`: string
- `arquivo_pdf_url`: URL do PDF

**ACF fields comuns:**
- `descricao`, `imagem_principal`, `galeria`
- `data_aproximada`, `data_exata`, `local`, `doador`, `palavras_chave`
- `ordem`, `destaque`, `ativo`

**REST endpoint:**
```
GET /wp-json/wp/v2/acervo?_embed&status=publish&per_page=100
GET /wp-json/wp/v2/acervo?tags=<tag_id>&_embed (filtro por tag WP)
```

---

## CPT: `midia` (NOVO — criar no WordPress)

**Três subcategorias (ACF field `subcategoria`):**
- `fototeca` — Fotos históricas, registros de eventos, imagens da comunidade
- `videoteca` — Documentários, entrevistas gravadas, registros de espetáculos, reportagens
- `audioteca` — Podcasts, depoimentos em áudio, gravações de história oral, trilhas sonoras

**WP Tags (para filtro via REST API):**
- `midia-fototeca`
- `midia-videoteca`
- `midia-audioteca`

**ACF fields — Fototeca:**
- `tipo`: `foto-historica | registro-evento | imagem-comunidade`
- `creditos_foto`: string
- `local`: string
- `pessoas`: string

**ACF fields — Videoteca:**
- `tipo`: `documentario | entrevista | espetaculo | reportagem`
- `url_media`: URL YouTube/Vimeo
- `duracao`: string (ex: "18:42")
- `diretor_credito`: string

**ACF fields — Audioteca:**
- `tipo`: `podcast | depoimento-audio | historia-oral | trilha-sonora`
- `url_media`: URL do arquivo de áudio
- `duracao`: string
- `diretor_credito`: apresentador/locutor

**ACF fields comuns:**
- `descricao`, `imagem_principal`, `galeria`
- `data_registro`, `data_aproximada`, `palavras_chave`, `creditos`
- `destaque`, `ativo`

**REST endpoint:**
```
GET /wp-json/wp/v2/midia?_embed&status=publish&per_page=100
GET /wp-json/wp/v2/midia?tags=<tag_id>&_embed (filtro por tag WP)
```

---

## CPT Legado: `hemeroteca`

O CPT `hemeroteca` existia antes da reorganização. Seu conteúdo deve ser **migrado** para o CPT `acervo` com `categoria: hemeroteca`. O tipo TypeScript `ACFHemeroteca`/`WPHemeroteca` foi marcado como legado no código.

---

## CPT: `campanha` (slides do Hero Carousel)

**ACF fields:**
- `imagem`: ACFImage — imagem de fundo do slide. Tem prioridade sobre o `thumbnail` nativo (featured image); o frontend usa `acf.imagem` e cai para `_embedded['wp:featuredmedia']` como fallback (ver `HeroCarousel.tsx`)
- `subtitulo`: texto exibido abaixo do título no slide
- `cta_texto`: texto do botão CTA
- `cta_url`: URL do botão CTA
- `ordem`: número — define a posição no carrossel
- `ativo`: boolean — oculta do carrossel sem excluir

O título do slide usa o campo nativo `title` do WordPress.

**REST endpoint:**
```
GET /wp-json/wp/v2/campanha?_embed&status=publish&per_page=100&orderby=meta_value_num&meta_key=ordem
```
Filtro client-side por `acf.ativo` (ver `src/services/campanhas.ts`).

---

## CPT: `grupo_comunitario` (página "Quem Somos")

Post único (singleton) — apenas um registro publicado é esperado.

**ACF fields:**
- `descricao`: texto principal da seção
- `missao`: texto curto
- `visao`: texto curto
- `valores`: repeater `{ texto }`
- `membros`: repeater `{ nome, papel, foto (ACFImage) }`

A foto de capa usa o `thumbnail` nativo (featured image).

**REST endpoint:**
```
GET /wp-json/wp/v2/grupo_comunitario?_embed&status=publish&per_page=1
```
Ver `src/services/grupoComunitario.ts` — usa `results[0]` (lança erro se nenhum post existir).

---

## Arquivos do frontend

| Tipo | Arquivo |
|------|---------|
| Tipos TS | `src/types/cms.ts` — `ACFAcervo`, `ACFMidia`, `WPMidia` |
| Mock acervo | `src/data/mocks/acervo.ts` |
| Mock mídia | `src/data/mocks/midia.ts` |
| Service acervo | `src/services/acervo.ts` |
| Service mídia | `src/services/midia.ts` |
| Hook acervo | `src/hooks/useAcervo.ts` — `useAcervo`, `useAcervoHemeroteca`, `useAcervoBiblioteca` |
| Hook mídia | `src/hooks/useMidia.ts` — `useMidia`, `useMidiaFototeca`, `useMidiaVideoteca`, `useMidiaAudioteca` |
| Página Acervo | `src/pages/AcervoPage.tsx` — abas: todas / hemeroteca / biblioteca |
| Página Mídia | `src/pages/MidiaPage.tsx` — abas: todas / fototeca / videoteca / audioteca |
| Seção Home | `src/components/MidiaSection.tsx` — substituiu HemerotecaSection |
| Hook campanha | `src/hooks/useCampanhas.ts` — `useCampanhas` |
| Hook grupo comunitário | `src/hooks/useGrupoComunitario.ts` — `useGrupoComunitario` |
| Service campanha | `src/services/campanhas.ts` |
| Service grupo comunitário | `src/services/grupoComunitario.ts` |
| Componente Grupo Comunitário | `src/components/GrupoComunitario.tsx` |

---

## Filtro client-side vs WP API

Atualmente o filtro é **client-side**: o frontend busca todos os items (`fetchAcervo()`, `fetchMidia()`) e filtra pelo campo ACF.
Quando WP estiver configurado, pode-se otimizar usando tags WP via REST API (`?tags=<id>`).
Para isso, é necessário conhecer os IDs numéricos das tags — fazer uma query prévia em `/wp-json/wp/v2/tags?slug=acervo-hemeroteca` para obter o ID.
