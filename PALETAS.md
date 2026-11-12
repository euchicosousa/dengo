# Paletas da Dengo

As 4 paletas da marca (fundo claro + texto escuro), sorteadas a cada visita. As cores **originais** são as do app anterior e são as da marca. A página usa hoje a versão ajustada para contraste; se a clínica pedir as originais de volta, é só colar o bloco abaixo no `<style>` do `public/index.html`, no lugar das linhas `:root[data-tema="alegria"]`.

## Contraste (texto sobre fundo, mínimo recomendado 4,5:1)

| Paleta | Fundo | Texto original | Contraste original | Texto em uso | Contraste em uso |
| ------ | ----- | -------------- | ------------------ | ------------ | ---------------- |
| carinho | `#e7dae7` | `#644a67` | 5,73 | `#644a67` | 5,73 |
| abraço | `#f3e5e8` | `#814853` | 5,76 | `#814853` | 5,76 |
| alegria | `#ebf3e5` | `#647a57` | **4,14 (abaixo)** | `#5c7050` | 4,75 |
| serenidade | `#dfe6f0` | `#466282` | 5,02 | `#466282` | 5,02 |

Só a alegria mudou. No app anterior o texto de área (ex.: "PEDIATRA") ainda usava 50% de opacidade, o que dava cerca de 2:1; agora usa a cor cheia (`--texto-suave: var(--texto)`). Para voltar: `--texto-suave: color-mix(in srgb, var(--texto) 50%, var(--fundo));`.

## Paletas originais (CSS pronto para colar)

```css
:root {
  --fundo: #e7dae7;   /* carinho-light */
  --texto: #644a67;   /* carinho-dark */
}
:root[data-tema="abraco"]     { --fundo: #f3e5e8; --texto: #814853; }
:root[data-tema="alegria"]    { --fundo: #ebf3e5; --texto: #647a57; }
:root[data-tema="serenidade"] { --fundo: #dfe6f0; --texto: #466282; }
```

Tons intermediários da marca (usados só no app anterior, caso venham a ser úteis): carinho-base `#b4a3b5`, abraço-base `#eacbd1`, alegria-base `#c0ccb8`, serenidade-base `#beccde`.

No `404.html` as mesmas cores aparecem em `:root` (repita a troca lá).
