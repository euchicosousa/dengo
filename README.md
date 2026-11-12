# Clínica Dengo — link app

Página de links (link na bio) da Clínica Dengo, publicada em **clinicadengo.cnvt.link** pela Vercel (projeto `dengo`, repositório `euchicosousa/dengo`, branch de produção `main`).

HTML, CSS e JS puros: sem framework, sem `npm install`, sem build, sem bibliotecas. Nasceu do modelo `cnvt.link/_modelo`. Sem rastreamento.

## Estrutura

```
public/                    tudo aqui é publicado
  index.html               a página (paletas, cards, rodapé, animação)
  404.html                 endereço de arquivo inexistente: leva para /
  og.jpg                   prévia ao compartilhar (1080x1080)
  ico.png                  favicon
  dengo.png                logo branco (não usado na página)
  map.svg instagram.svg whatsapp.svg   ícones do rodapé
  fonts/                   Poppins 300 e 700 (woff2)
  especialistas/           fotos 96x96 (kelly.png está fora da página)
vercel.json                redirects: /slug → WhatsApp, /pesquisa, catch-all → /
ROTAS.md                   registro de todas as rotas
PALETAS.md                 paletas da marca (originais e em uso)
CLAUDE.md                  diretrizes para o agente (Claude Code)
originais/                 artes originais (ignorada pelo git)
```

## Tarefas comuns

- **Adicionar especialista**: duplique um `<a class="card">` no `index.html`, coloque a foto 96x96 em `public/especialistas/`, crie o redirect no `vercel.json` (antes do último item, o catch-all) e uma linha no `ROTAS.md`. Não use parênteses no texto do WhatsApp: a Vercel rejeita.
- **Remover especialista**: apague o card, o redirect e a linha do `ROTAS.md` (e a foto, se quiser).
- **Trocar paleta**: veja `PALETAS.md`. Para testar uma: `/?tema=carinho`, `abraco`, `alegria` ou `serenidade`.

## Rodar localmente

```bash
npx vercel dev
```

Aplica os redirects do `vercel.json`. Só para ver a página: `python3 -m http.server 4321 -d public`.

## Publicar

Push na `main` publica sozinho. O projeto na Vercel está sem framework; o `vercel.json` define `outputDirectory: public`.
