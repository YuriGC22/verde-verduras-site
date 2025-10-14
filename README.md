# Verde Verduras — Landing Page

Landing page estática para pedidos sob encomenda da Verde Verduras. A comunicação destaca produção no dia, entregas às segundas, quartas e sextas e atendimento via WhatsApp.

## Estrutura do projeto

- `index.html` — markup principal com hero, destaques, benefícios, como funciona, prova social, FAQ e rodapé.
- `src/styles/tokens.css` — design tokens (cores, tipografia, raios, espaçamentos).
- `src/styles/main.css` — estilos globais, layout responsivo e componentes.
- `src/scripts/main.js` — interações (menu mobile, FAQ, sticky header) e tracking de eventos.
- `imagens/` — assets estáticos usados no layout (logo, hero, cards, depoimentos, ícones).
- `docs/` — materiais de suporte (briefings, guias, conteúdo).

## Como rodar com Live Server

1. Abra a pasta do projeto no VS Code.
2. Garanta que a extensão **Live Server** esteja instalada.
3. Abra `index.html` e acione **Go Live** (ou `Alt+L Alt+O`).
4. O navegador abrirá em `http://127.0.0.1:5500` (porta pode variar) com recarregamento automático.
5. Imagens devem ficar em `imagens/` e ser referenciadas com caminhos relativos (`imagens/hero-desempacotando.png`).

Opcionalmente, use `live-server` via npm:

```bash
npx live-server .
```

## Deploy na Vercel

1. Conecte o repositório `verde-verduras-site` à Vercel.
2. Framework: **Other** | Diretório raiz: `.` | Output: estático.
3. Branches sugeridas:
   - `main` → produção (deploy automático a cada push).
   - `develop` → homologação (previews por Pull Request).
4. Ative previews por PR e configure domínio customizado quando disponível.
5. Adicione variáveis de ambiente apenas se necessário para analytics (`PLAUSIBLE_DOMAIN`, `NEXT_PUBLIC_*`, etc.).

## Métricas e eventos

O script `src/scripts/main.js` expõe `window.verdeAnalytics.track` e envia dados para o `dataLayer` quando presente. Eventos disponíveis:

- `click_whatsapp` — disparado em todos os botões que levam ao WhatsApp.
- `click_catalog` — disparado em botões que abrem o catálogo.
- `faq_toggle` — emitido ao abrir perguntas do FAQ (contexto slugado automaticamente).

Para validar localmente, abra o console do navegador com o Live Server ativo e observe os objetos `[analytics]`.

## Checklist de QA

- [ ] Substituir os placeholders em `imagens/` por arquivos otimizados (hero 21:9/4:5, cards 1:1/4:5, depoimentos, ícones SVG).
- [ ] Validar layout em 320 px, 768 px e 1280 px.
- [ ] Conferir sticky header, menu mobile e acordeão do FAQ.
- [ ] Testar os eventos `click_whatsapp`, `click_catalog`, `faq_toggle` no console.
- [ ] Exercitar a jornada real (WhatsApp e Catálogo abrindo em nova aba).
- [ ] Após merge na `main`, revisar build na Vercel e configurar domínio quando aplicável.

Atualize este README conforme novas campanhas, métricas ou integrações forem priorizadas.
