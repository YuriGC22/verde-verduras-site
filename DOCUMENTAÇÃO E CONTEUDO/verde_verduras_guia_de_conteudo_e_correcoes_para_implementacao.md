# Verde Verduras — Guia de Conteúdo e Correções (para implementação)

## 1) Posição da marca
**O que entregamos:** hortifruti **sob encomenda**, **selecionado no dia**, **higienizado** e **embalado** (a vácuo ou em pote), entregue **no mesmo dia da produção**.

**Benefício ao cliente:** otimiza a rotina alimentar. A pessoa recebe produtos prontos para a geladeira/congelador, **economiza tempo** (sem descascar, sem higienizar, sem ir ao mercado) e **mantém alimentação saudável** com praticidade.

**Fluxo operacional (para comunicação):**
1. Pedidos pelo WhatsApp ao longo da semana.  
2. **Dias de entrega:** **segunda e sexta**.  
3. **Manhã do dia de entrega:** seleção e processamento (higienização, corte, embalagem).  
4. **Tarde:** **entrega**.

---

## 2) Correções obrigatórias no site
1. **Endereço correto (rodapé/contato):**  
   `PRIVÊ RESIDENCIAL ELZA FRONZA, CHÁCARA 10-A`
2. **Não trabalhamos com assinatura:**  
   Remover qualquer menção a assinatura, clubes, planos recorrentes. Excluir seções/FAQs e CTAs relacionados.
3. **Atendimento & entregas:**  
   - **Atendemos pelo WhatsApp de domingo a domingo.**  
   - **Entregas apenas seg/sex.**  
   - **Não temos pronta entrega; pedidos são produzidos sob demanda.**
4. **CTAs devem abrir em nova guia/aba:**  
   Aplicar em **todos os botões/links**: `target="_blank" rel="noopener noreferrer"`.
5. **Siglas/ícones estranhos (DLV, SEG, ORG, etc.):**  
   Substituir placeholders por **SVGs reais** (ou texto). Sugestão de arquivos: `delivery.svg`, `organic.svg`, `shield.svg`, `calendar.svg`, `wash.svg`, `truck.svg`, `support.svg`, `whatsapp.svg`, `catalog.svg`. Garantir acessibilidade (`aria-hidden="true"` nos ícones e texto visível ao lado).
6. **Imagens (estrutura):**  
   Criar pasta na **raiz do projeto**: `./imagens/` e mover **todo conteúdo visual** do site para lá (heros, cards, selos, logos). Atualizar caminhos.

---

## 3) Links oficiais de conversão (usar em todas as CTAs)
- **WhatsApp (E.164):**  
  `https://wa.me/5562982594500?text=Ol%C3%A1%21%20Quero%20fazer%20um%20pedido%20pelo%20site%20da%20Verde%20Verduras.%20Voc%C3%AAs%20entregam%20no%20meu%20bairro%3F`
- **Catálogo WhatsApp:**  
  `https://wa.me/c/556282594500`

> Replicar as duas CTAs (header, hero, meio da página, rodapé) e **sempre** abrir em nova aba.

---

## 4) Organização do conteúdo por seção
### Header
- Logo + navegação (Início, Destaques, Benefícios, Como funciona, FAQ).  
- **CTAs duplas:** “**Pedir no WhatsApp**” (primária) e “**Ver Catálogo**” (secundária) — **nova aba**.

### Hero (acima da dobra)
- **Título:** “Verduras e legumes **higienizados e prontos** para o seu dia a dia.”
- **Subtítulo:** “Produzimos sob demanda e entregamos **às segundas e sextas**. **Peça pelo WhatsApp** e receba pronto para consumir ou congelar.”
- **Bullets (3):**  
  • Economize tempo: sem descascar, sem higienizar.  
  • Selecionado e processado **no dia da entrega**.  
  • Embalado a vácuo ou em potes, conforme o produto.  
- **CTAs lado a lado:** WhatsApp | Catálogo — **nova aba**.

### Destaques (produtos/combos)
- Cards com foto nítida, título curto e descrição curta (gramatura/uso).  
- Link do **Catálogo** no card — **nova aba**.

### Benefícios (3–4 colunas)
- Produção no dia da entrega.  
- Higienização e embalagem seguras.  
- Frescor e praticidade.  
- Zero desperdício: pedido sob demanda.

### Como funciona (passo a passo)
1. **Você faz o pedido** pelo WhatsApp (todos os dias).  
2. **Selecionamos e processamos** na manhã do dia de entrega.  
3. **Embalamos** (a vácuo ou pote).  
4. **Entregamos** à tarde nas **segundas e sextas**.

### Prova social
- Depoimentos reais curtos (1–2 linhas), fotos reais, selos simples.

### FAQ (substituir/ajustar)
- **Vocês têm pronta entrega?** Não. **Produzimos sob demanda** para garantir frescor e qualidade.  
- **Quais são os dias de entrega?** **Segunda e sexta.** Pedidos entram na rota do próximo dia de entrega.  
- **Como faço o pedido?** Pelo **WhatsApp** (atendimento **domingo a domingo**).  
- **Os produtos chegam prontos?** Sim, **higienizados e embalados** (a vácuo ou em pote), prontos para consumir ou congelar.

### Rodapé / Contato
- **Endereço:** `PRIVÊ RESIDENCIAL ELZA FRONZA, CHÁCARA 10-A`  
- **Telefone:** `62 98259-4500` (link `tel:`)  
- **CTAs repetidas:** WhatsApp | Catálogo — **nova aba**  
- Política de privacidade/termos (placeholders).

---

## 5) Padrões de imagem (pasta `./imagens/`)
- **Hero desktop:** 1920×1080 (ou 2400×1350), WebP/JPEG (80–85%).  
- **Hero mobile:** 1080×1350.  
- **Cards:** 1080×1080 (1:1) ou 1080×1350 (4:5).  
- PNG apenas para logos/selos com transparência.  
- Nome de arquivo: `categoria-nome-produto.webp` (SEO).  
- Atribuir **alt text** descritivo em PT-BR.

---

## 6) Instrumentação mínima (nomes reservados)
- Eventos de clique: `click_whatsapp`, `click_catalog`.  
- Manter `data-analytics`/`data-analytics-context` consistentes nos botões.

---

## 7) Checklist de entrega para o desenvolvedor
- [ ] Remover toda referência a **assinatura** (seções, FAQs, CTAs).  
- [ ] Atualizar **atendimento** (WhatsApp **dom–dom**) e **entregas seg/sex**.  
- [ ] Deixar claro: **sem pronta entrega**; **sob demanda**.  
- [ ] Corrigir **endereço** no rodapé/contato.  
- [ ] Aplicar `target="_blank" rel="noopener noreferrer"` nos **CTAs** de WhatsApp e Catálogo.  
- [ ] Trocar siglas/ícones (DLV, SEG, ORG etc.) por **SVGs reais** (ou texto).  
- [ ] Criar pasta **`./imagens/`** na raiz e apontar todas as imagens para ela.  
- [ ] Revisar headings e microcopy conforme as seções acima.  
- [ ] Validar que os links de conversão estão **exatamente** como fornecidos.
