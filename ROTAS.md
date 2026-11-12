# Registro de rotas

Rotas curtas (`/slug`) da Dengo. Cada especialista tem a sua, porque o link também é divulgado fora da página (bio, stories, QR code, impresso) e a mensagem do WhatsApp fica num lugar só. Todas são redirects no `vercel.json` (este app **não usa rastreamento**).

Uma rota fica em **um lugar só**. Se ela estiver nos dois, o `vercel.json` ganha. Os redirects são avaliados em ordem: o último (catch-all) precisa continuar sendo o último.

Todos os WhatsApp abaixo vão para `https://wa.me/5588992630993` com a mensagem `Gostaria de agendar uma CONSULTA com a <nome> - <área>` (hífen no lugar dos parênteses do app anterior: a Vercel não aceita parênteses em destino de redirect).

| Rota | Destino | Onde fica |
| ---- | ------- | --------- |
| `/` | Página principal (`public/index.html`) | arquivo |
| `/edrine` | WhatsApp: Edrine Vasconcelos (Nutricionista materno infantil) | `vercel.json` |
| `/brenda` | WhatsApp: Dra. Brenda Vasconcelos (Pediatra) | `vercel.json` |
| `/sheilly` | WhatsApp: Sheily Barreto (Psicológa infantil) | `vercel.json` |
| `/ivna` | WhatsApp: Ivna Arruda (Fonoaudióloga) | `vercel.json` |
| `/kelvia` | WhatsApp: Kelvia Silva Cavalcante (Psicóloga) | `vercel.json` |
| `/alana` | WhatsApp: Alana Melo (Pediatra) | `vercel.json` |
| `/alanne` | WhatsApp: Dra. Alanne Holanda (Urologista pediátrica) | `vercel.json` |
| `/keylla` | WhatsApp: Keylla Albuquerque (Consultora em Amamentação) | `vercel.json` |
| `/juliana` | WhatsApp: Juliana Lavor (Fisioterapeuta do Des. Infantil) | `vercel.json` |
| `/luma` | WhatsApp: Luma Torre (Consultora do Sono) | `vercel.json` |
| `/pesquisa` | https://g.page/r/CfwEPNOYaE9hEAI/review (avaliação no Google) | `vercel.json` |
| qualquer endereço sem ponto que não exista | redireciona para `/` (lista das especialistas) | `vercel.json` (último item) |
| arquivo que não existe (ex.: `/foto.png`) | `public/404.html`, que também leva para `/` | arquivo |

## Histórico

- Removidas: `/danielle` (Danielle Paiva saiu da equipe) e `/cafe-materno-psi-2026` (evento encerrado; será pensado algo diferente no ano que vem). Esses endereços agora caem no redirect para `/`.
- `/kelly` não existe (Kelly Alves está fora da lista; `kelly.png` continua em `public/especialistas/`).
- No app anterior (Remix) cada `/slug` mostrava uma tela de 1 segundo antes do WhatsApp. Agora o redirect é direto.
