# Modelo de link app — CNVT

Modelo para criar a página de links (link na bio) de um cliente, publicada em `<cliente>.cnvt.link` pela Vercel.

HTML, CSS e um pouco de JS puros: sem framework, sem `npm install`, sem build, sem biblioteca externa. Os únicos scripts de fora são os de rastreamento (Google e Meta), e só quando o ID estiver preenchido.

**É um modelo, não um molde.** Tudo aqui é exemplo a adaptar ao app do cliente (visual, peças, rodapé, rotas, textos). Os exemplos são peças combináveis e as recomendações são diretrizes: cada cliente usa o que precisa, do jeito que precisa. Nada aqui é obrigatório além da base técnica (HTML puro, mobile, acessível). As diretrizes para o agente (Claude Code) estão no [CLAUDE.md](CLAUDE.md).

## Estrutura

```
public/                      tudo aqui é publicado
  index.html                 a página (identidade, itens, rodapé, animação)
  tracking.js                Google Analytics e Pixel da Meta (preencher os IDs)
  logo.svg                   logo provisório (troque pelo do cliente; também é o favicon)
  arquivos/                  PDFs e arquivos (abrir ou baixar)
  imagens/                   artes (botão imagem, og:image, fotos)
vercel.json                  configuração da Vercel e redirects das rotas sem rastreamento
modelos/rota-rastreada.html  modelo de rota com rastreamento (não é publicado)
ROTAS.md                     registro de todas as rotas e onde cada uma fica
```

## Criar o link app de um cliente novo

1. **Copie a pasta** `_modelo` para `cnvt.link/<cliente>` (ex.: `cp -R _modelo nome-do-cliente`).
2. **Identidade**, em `public/index.html`:
   - Bloco `:root` marcado `EDITE AQUI` no topo do `<style>`: cores, fonte, raio da borda, largura.
   - No `<head>`: `<title>`, `description`, `og:title`, `og:description`, `og:image` (URL completa de uma imagem 1200x630 em `public/`) e `theme-color`.
   - No topo da página: nome e frase do cliente.
   - Troque `public/logo.svg` pelo logo (se for PNG, ajuste o `src` do logo e o `<link rel="icon">`).
3. **Itens**: em `public/index.html`, dentro de `<nav class="links">`. Cada item tem um comentário dizendo o que é; duplique ou apague o bloco inteiro. Veja os tipos abaixo.
4. **Arquivos**: coloque os PDFs em `public/arquivos/` (nomes sem acento e sem espaço) e apague o `LEIA-ME.txt`.
5. **Rotas** (opcionais): troque os destinos no `vercel.json`, apague as que não usar e atualize o `ROTAS.md`.
6. **Redes sociais**: no `<footer>`, troque os endereços e apague as redes que o cliente não tem. Troque também o texto do rodapé.
7. **Rastreamento**: preencha os IDs em `public/tracking.js`, se houver (ver abaixo).
8. **Deploy**: na Vercel, *Add New → Project*, importe o repositório e escolha a pasta do cliente como *Root Directory*. Não precisa configurar mais nada: o `vercel.json` já diz que não há framework nem build e que a pasta publicada é `public`. Depois, em *Settings → Domains*, adicione `<cliente>.cnvt.link`.

## Peças

Visual e destino são independentes: qualquer visual aceita qualquer destino, e qualquer item aceita validade e rastreamento. Combine como o cliente precisar.

**Visuais** (ícone `<svg>` e subtítulo `<small>` são opcionais em todos):

| Visual | Como é | Exemplo no index.html |
| ------ | ------ | --------------------- |
| Botão | `class="item"` | Fale no WhatsApp |
| Botão claro | `class="item item-claro"` (usa `--botao-2`) | Ver o cardápio |
| Destaque | `class="item destaque"`, selo opcional `<span class="selo">` | Novidade do mês |
| Botão imagem | `<a class="item-imagem">` com `<img>` dentro | Arte da campanha |
| Imagem + legenda | `<a class="item-bloco">` com `.item-imagem` e `.legenda` | Promoção da quarta |
| Com foto | `class="item item-foto"` com `<img>` redonda | Dra. Fulana de Tal |
| Título de seção | `<h2 class="secao">` | Materiais |

**Destinos:**

| Destino | Como é |
| ------- | ------ |
| Rota curta | `href="/whatsapp"`; o destino real fica no `vercel.json` |
| Link externo | `href="https://..." target="_blank" rel="noopener"` |
| Arquivo abrindo | `href="/arquivos/x.pdf" target="_blank" rel="noopener"` |
| Arquivo baixando | `href="/arquivos/x.pdf" download` (ou `download="nome-salvo.pdf"`) |
| Mesma aba | qualquer `href` sem `target` |

**Extras em qualquer item:** `data-de` / `data-ate` (validade), `data-dias` (dias da semana) e `data-track` (nome no rastreamento).

**Rota curta ou link direto?** A rota (`cliente.cnvt.link/whatsapp`) vale a pena quando o link também vai para bio, QR code ou impresso, ou muda com frequência: troca-se num lugar só. Para um link que só aparece na página, o link direto é mais simples.

**WhatsApp com mensagem pronta**: `https://wa.me/55DDDNUMERO?text=MENSAGEM`, com a mensagem codificada (espaço = `%20`, vírgula = `%2C`, `á` = `%C3%A1`). Para codificar, no console do navegador: `encodeURIComponent("Olá, vim pelo link")`. Para vários atendentes ou unidades, crie uma rota por pessoa (`/dra-fulana`, `/unidade-centro`).

**Arquivo: abrir ou baixar?** Decida por item. Como referência: abrir costuma ser melhor para consulta rápida (cardápio, catálogo) e baixar para o que a pessoa vai guardar (manual, e-book). No iPhone, o Safari às vezes abre o PDF mesmo com `download`; é limitação do navegador.

## Itens com validade

Os atributos `data-de` e `data-ate` (formato `AAAA-MM-DD`, o último dia conta) funcionam em qualquer item, inclusive título de seção e ícones do rodapé. Fora do período, o item some sozinho; não precisa apagar nada. Pode usar só um deles (só `data-ate` = aparece até aquele dia).

Um script logo depois da lista remove os itens antes da página aparecer, então o item vencido não pisca na tela. A data usada é a do celular de quem acessa.

## Itens por dia da semana

`data-dias="3"` mostra o item só às quartas (0 = domingo … 6 = sábado; vários dias: `data-dias="3,4"`). Útil para promoção semanal (quarta do camarão, terça de pizza). Combina com `data-de` / `data-ate` e usa o dia do celular de quem acessa. Fora do dia, o item é removido antes da página aparecer.

## Temas claro e escuro

A cada visita a página sorteia um tema, claro ou escuro, e aplica na página inteira (o texto troca de cor junto com o fundo). Está no `<head>` do `index.html` (lista `TEMAS`); as cores ficam em `:root` (claro) e `:root[data-tema="escuro"]`. Para testar, abra `/?tema=escuro` ou `/?tema=claro`. Se o cliente quiser um tema só, deixe um nome em `TEMAS` e apague o bloco do outro. O logo em `<img>` não troca de cor sozinho: use SVG inline com `currentColor` ou duas versões do arquivo.

## Animação

Os itens dentro de `.anim` (topo, lista e rodapé) sobem e aparecem em sequência, só com CSS. Itens novos entram na fila sozinhos, sem numerar. O destaque pulsa. Quem configurou o celular para reduzir movimento vê tudo parado (`prefers-reduced-motion`).

## Rastreamento

Abra `public/tracking.js` e preencha:

- `googleTagId`: ID do Google Analytics 4 / Google tag (`G-XXXXXXXXXX`).
- `metaPixelId`: ID do Pixel da Meta.

Com o ID vazio, a ferramenta fica desligada e nenhum script externo é carregado. Ligada, ela registra:

- a visita (PageView), automaticamente;
- os cliques em qualquer elemento com `data-track="nome"`. O evento muda conforme o tipo de link:

  | Link | Evento | Parâmetros |
  | ---- | ------ | ---------- |
  | `<a download>` | `file_download` | `destino`, `file_name`, `file_extension` |
  | `href` terminando em `.pdf` (sem `download`) | `abrir_pdf` | `destino`, `file_name`, `file_extension` |
  | Qualquer outro | `clique_link` | `destino` |

  O evento sai do próprio link: se um PDF passar de abrir para baixar, o evento muda junto, sem mexer no `tracking.js`. No Pixel da Meta, os três chegam como eventos personalizados com esses mesmos nomes. Todo item do modelo já tem `data-track`. Ao criar um item novo, dê um nome único (sem acento e sem espaço).

**Evite contar download duas vezes:** a "medição otimizada" do Google Analytics também registra `file_download` sozinha. Desligue a opção *Downloads de arquivos* em *Administrador → Fluxos de dados → (o fluxo) → Medição otimizada*.

No Google Analytics, para ver esses parâmetros nos relatórios, crie dimensões personalizadas `destino` e `file_name` (*Administrador → Definições personalizadas*).

**Verificação do Google Search Console** (opcional): no `<head>` do `index.html` há uma `<meta name="google-site-verification">` comentada. Tire do comentário e cole o código que o Search Console fornecer. Ela fica no HTML, e não no `tracking.js`, porque o Google lê a tag direto da página.

## Rotas

Regra completa e lista atual em [ROTAS.md](ROTAS.md). Resumo:

- **Sem rastreamento**: adicione o redirect no `vercel.json`.
- **Com rastreamento**: copie `modelos/rota-rastreada.html` para `public/<rota>.html` e siga as instruções no topo do arquivo. Ele carrega o `tracking.js`, espera o PageView sair e redireciona (função `redirecionar(url)`).

Uma rota fica em um lugar só: se estiver nos dois, o `vercel.json` ganha.

## Rodar localmente

```bash
npx vercel dev
```

O `vercel dev` aplica os redirects do `vercel.json`. Para ver só a página, qualquer servidor estático serve (`python3 -m http.server -d public`). Abrir o arquivo direto (`file://`) não carrega logo nem `tracking.js`, porque os caminhos começam com `/`.

## Acessibilidade (mantenha ao editar)

- Contraste: texto e botão precisam de contraste de pelo menos 4,5:1 com o fundo. Confira as cores novas em um verificador de contraste.
- Ícones sem texto (redes sociais) precisam de `aria-label`.
- Não tire o contorno de foco (`--foco`): é o que mostra onde está quem navega pelo teclado.
- Fotos que só decoram ficam com `alt=""`; o logo também, porque o nome já aparece no `<h1>`.
