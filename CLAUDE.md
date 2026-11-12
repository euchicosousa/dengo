# Diretrizes do link app (CNVT)

Este projeto é um **link app**: a página de links (link na bio) de um cliente da agência CNVT, publicada em `<cliente>.cnvt.link` pela Vercel. Ele nasce do modelo `cnvt.link/_modelo` e segue estas diretrizes.

**Leia como diretriz, não como regra.** Os exemplos do modelo são peças combináveis. Cada cliente usa o que precisa, do jeito que precisa. Se um pedido do usuário foge de uma recomendação abaixo, siga o pedido; se achar que vale avisar de um risco, avise em uma linha e faça. Só a **Base** é fixa.

**Tudo que está no modelo é exemplo a adaptar ao app do cliente**, conforme o pedido do usuário ou a análise do próprio agente sobre o que o cliente precisa: use, troque, duplique ou apague. Isso vale para visual, cores, peças, rodapé, rotas e textos de exemplo. Quando um app criar uma peça nova e reutilizável (como `data-dias` e `--respiro-bloco`, que nasceram no app do Park), leve-a de volta para o `_modelo`.

## Particularidades da Dengo

- **Sem rastreamento**: não há `tracking.js`, `data-track` nem `modelos/rota-rastreada.html`. Se um dia houver, recrie a partir do `_modelo`.
- **4 paletas da marca** sorteadas na visita (carinho, abraço, alegria, serenidade); as originais estão em `PALETAS.md`.
- **Rotas**: uma por especialista (`/slug` → WhatsApp), mais `/pesquisa`. Endereço inexistente vai para `/`. Detalhes no `ROTAS.md`.
- Ao adicionar uma especialista: card no `index.html`, foto 96x96 em `public/especialistas/`, redirect no `vercel.json` (antes do catch-all) e linha no `ROTAS.md`.
- `og.jpg` (1080x1080) é a versão leve de `originais/og.png` (a pasta `originais/` não vai para o git).

## Base (fixo)

- **HTML, CSS e JS puros.** Sem framework, sem `package.json`/npm, sem build, sem Tailwind, sem bibliotecas (nem de animação, nem de ícones). Animações em CSS.
- **Scripts externos só de rastreamento** (Google e Meta), carregados pelo `public/tracking.js` e só quando o ID estiver preenchido.
- **Tudo que é publicado fica em `public/`.** O `vercel.json` define `"framework": null`, `"outputDirectory": "public"` e `"cleanUrls": true`. Arquivos fora de `public/` (este, `README.md`, `ROTAS.md`, `modelos/`) não vão para o site.
- **Mobile primeiro** (a maioria abre pelo Instagram, no celular) e **acessível** (ver Recomendações).

## Estrutura

```
public/index.html        a página: <head>, identidade (:root), itens, rodapé, animação
public/tracking.js       Google Analytics 4 e Pixel da Meta (IDs no topo)
public/arquivos/         PDFs e arquivos para abrir ou baixar
public/imagens/          artes (botão imagem, og:image, fotos)
vercel.json              redirects das rotas curtas sem rastreamento
modelos/rota-rastreada.html  modelo de rota com rastreamento (copiar para public/<rota>.html)
ROTAS.md                 registro de todas as rotas
README.md                guia para pessoas (passo a passo de cliente novo, deploy)
```

## Peças disponíveis

Visual e destino são independentes. Qualquer visual aceita qualquer destino, e qualquer item aceita validade e rastreamento.

**Visuais:** botão `.item`, botão claro `.item.item-claro`, destaque `.item.destaque` (selo `.selo` opcional, brilho pulsando), botão imagem `.item-imagem` (a arte inteira é o botão), bloco imagem + legenda `.item-bloco` (arte com título e frase embaixo, no mesmo link), com foto `.item.item-foto`, título de seção `h2.secao`. Ícone `<svg>` e subtítulo `<small>` são opcionais.

**Destinos:**
- rota curta: `href="/rota"` (destino no `vercel.json` ou em `public/rota.html`);
- link externo: `href="https://..." target="_blank" rel="noopener"`;
- arquivo abrindo: `href="/arquivos/x.pdf" target="_blank" rel="noopener"`;
- arquivo baixando: `href="/arquivos/x.pdf" download` (nome salvo opcional: `download="nome.pdf"`);
- mesma aba: qualquer `href` sem `target`.

Abrir ou baixar um arquivo é escolha por item. O botão imagem pode ir para campanha, site externo, PDF ou o que for.

**Extras em qualquer elemento:**
- `data-de="AAAA-MM-DD"` / `data-ate="AAAA-MM-DD"`: o item só aparece no período (o último dia conta; pode usar só um). Um script inline logo após a lista remove o item antes da pintura, pela data do aparelho do visitante.
- `data-dias="3"`: o item só aparece nos dias da semana listados (0=domingo … 6=sábado; vários: `"3,4"`), pelo dia do aparelho. Combina com `data-de`/`data-ate`.
- `data-track="nome"`: nome do item no rastreamento.

Se o cliente precisar de algo que não está aqui (carrossel, vídeo, mapa embutido, formulário), crie com HTML/CSS/JS puros, no mesmo estilo dos blocos existentes, com comentário de onde editar.

## Temas (claro e escuro, sorteados na visita)

A página inteira usa um tema por vez, escolhido por sorteio quando a pessoa entra: ou tudo claro, ou tudo escuro (nunca seções misturadas). Funciona assim:

- Um script no `<head>` do `index.html` (lista `TEMAS`) sorteia o tema e grava em `<html data-tema="...">` antes da pintura, sem piscar. Também ajusta o `theme-color`.
- As cores do tema padrão ficam em `:root`; cada outro tema só redefine o que muda em `:root[data-tema="nome"]`. Use sempre variáveis (`var(--fundo)`, `var(--texto)`), nunca cor solta, para o tema valer na página toda.
- `?tema=escuro` (ou `claro`) força um tema, para testar ou para campanha.
- Para o cliente que quer um tema só: deixe um nome em `TEMAS` e apague o bloco do outro. Para mais temas: crie o bloco `:root[data-tema="nome"]` e inclua o nome em `TEMAS` e `COR`.
- Cada tema precisa passar no contraste de 4,5:1. O logo em arquivo `<img src="logo.svg">` não troca de cor: use SVG inline com `fill="currentColor"` ou duas versões (ex.: `logo.svg` e `logo-claro.svg`, trocando pelo `data-tema`).

## Rastreamento

- IDs no topo de `public/tracking.js`: `googleTagId` (GA4, `G-XXXX`) e `metaPixelId`. Vazio = desligado, nada carregado.
- PageView automático em toda página que inclui o `tracking.js`.
- Cliques em `[data-track]` viram evento conforme o próprio link: `<a download>` → `file_download`; `href` terminando em `.pdf` → `abrir_pdf`; o resto → `clique_link`. Parâmetros: `destino` (= data-track) e, nos de arquivo, `file_name` e `file_extension`. Ao mudar um link de abrir para baixar, o evento acompanha; não mexa no `tracking.js` para isso.
- Verificação do Search Console: `<meta name="google-site-verification">` comentada no `<head>` do `index.html` (precisa estar no HTML, não no JS).
- Rota com rastreamento (link divulgado direto em QR code ou anúncio): copie `modelos/rota-rastreada.html` para `public/<rota>.html`, troque `DESTINO` e tire a rota do `vercel.json`.

## Rotas

- Rotas curtas são **opcionais**. Recomendadas quando o link também vai para bio, QR code ou impresso, ou muda com frequência (ex.: item do mês, WhatsApp). Para um link que só aparece na página, use o destino direto.
- Sem rastreamento → `redirects` no `vercel.json` com `"permanent": false` (para poder trocar o destino depois).
- Com rastreamento → `public/<rota>.html` a partir do modelo.
- Uma rota fica **em um lugar só**: se estiver nos dois, o `vercel.json` ganha.
- **Sempre que criar, mudar ou apagar uma rota, atualize o `ROTAS.md`.**

## Recomendações

**Conteúdo e ordem**
- O que o cliente mais quer que a pessoa faça vem primeiro (pedido, agendamento, WhatsApp). Destaque e botão imagem, quando houver, ficam no topo.
- Textos de botão curtos e com verbo ("Peça pelo app", "Agende sua consulta"). Subtítulo só quando ajuda a decidir.
- Evite mais de 7–8 itens seguidos sem título de seção.
- Um destaque por vez: dois brigam pela atenção.
- Bloco com texto embaixo (ex.: imagem + legenda) ganha um respiro maior depois dele (`--respiro-bloco`) do que o espaço entre botões, para a legenda não parecer colada no item seguinte.

**Identidade**
- Cores, fonte, raio e largura no bloco `:root` marcado "EDITE AQUI" (e, com temas, nos blocos `:root[data-tema="..."]`). Use variáveis, não cores soltas no meio do CSS.
- Atualize `<title>`, `description`, `og:title`, `og:description`, `og:image` (URL completa, 1200×630) e `theme-color` para cada cliente.
- Fonte própria do cliente: arquivo local em `public/` com `@font-face` e `font-display: swap`, nada de Google Fonts.

**Imagens e arquivos**
- Imagens com `width` e `height` do tamanho real (evita a página pular), comprimidas (idealmente abaixo de 200 KB; WebP ou JPG para fotos, SVG para logo). `loading="lazy"` no que estiver abaixo da primeira tela.
- Nomes de arquivo sem acento e sem espaço (`cardapio-2026.pdf`).
- PDFs grandes (acima de ~5 MB) pesam no 4G: comprima ou avise o usuário.

**Acessibilidade**
- Contraste mínimo de 4,5:1 entre texto e fundo (confira ao trocar cores).
- Ícone sem texto (redes sociais) precisa de `aria-label`. `alt` do botão imagem = o que a arte diz. Foto decorativa e logo (o nome já está no `<h1>`) com `alt=""`.
- Não remova o contorno de foco (`--foco`). Área de toque de pelo menos 44px.
- Mantenha o `prefers-reduced-motion` cobrindo toda animação nova.

**Links**
- Todo link para outro site com `target="_blank"` leva `rel="noopener"`.
- WhatsApp com mensagem pronta: `https://wa.me/55DDDNUMERO?text=...` com o texto codificado (`encodeURIComponent`).
- Todo item clicável novo ganha um `data-track` único (sem acento, sem espaço).

**Validade**
- Itens sazonais (item do mês, promoção, evento) com `data-ate`. Ao trocar o item do mês, atualize texto, datas e o destino da rota.
- Ao entregar, avise se algum item já está vencido ou vence em poucos dias.

**Código**
- Cada bloco de item tem um comentário curto dizendo o que é e como mudar. Mantenha esse padrão nos blocos novos.
- Mudanças mínimas: edite o bloco do item, não reescreva a página.

## Antes de entregar

1. Sirva localmente (`python3 -m http.server 4321 -d public`) e abra em largura de celular (375px): sem rolagem horizontal, sem erro no console.
2. Confira que logo, imagens e arquivos novos respondem (sem 404).
3. Se mexeu em rota: `vercel.json` válido (`python3 -m json.tool vercel.json`) e `ROTAS.md` atualizado. Redirects só funcionam na Vercel (ou com `npx vercel dev`); diga isso se não testou.
4. Não faça commit nem push sem o usuário pedir.
