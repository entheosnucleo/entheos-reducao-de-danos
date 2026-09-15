const SUBSTANCIAS = {

  mdma: {
    nome: "MDMA / Ecstasy",
    aparencia: "Comprimidos prensados (geralmente com logos/estampas), cápsulas, ou cristal solto (\"molly\").",
    viaDeUso: "Oral — engolido como comprimido/cápsula, ou cristal embrulhado em papel (\"bombing\").",
    efeitosFisicos: "Aumento de frequência cardíaca, pressão arterial e temperatura corporal, ranger de dentes, dificuldade para urinar, desidratação.",
    efeitosPsiquicos: "Euforia, bem-estar, sociabilidade, empatia aumentada. Negativos: ranger de dentes incômodo, insônia, ressaca emocional (ansiedade/depressão pós-uso).",
    dosagem: [
      { nivel: "Leve", valor: "40–75 mg" },
      { nivel: "Comum", valor: "75–125 mg" },
      { nivel: "Forte", valor: "125–175 mg" },
      { nivel: "Muito forte", valor: "175 mg+" }
    ],
    inicio: "20–70 min", pico: "1,5–3 h", duracao: "3–5 h (ressaca: 2–24 h)",
    cuidados: "Hidratação: cerca de 250–500 mL (1–2 copos) por hora dançando, sem passar de ~1L/hora, alternando com isotônico — beber água em excesso é perigoso (o MDMA retém líquido no corpo, podendo causar hiponatremia com risco de vida). Sinais de superaquecimento: tontura, suor excessivo evoluindo pra pele quente/seca, confusão (emergência médica). Contraindicação: IMAOs (risco de síndrome serotoninérgica). Adulterante crítico: PMA/PMMA tem início mais lento, levando a redose perigoso — testar sempre."
  },

  mda: {
    nome: "MDA",
    aparencia: "Comprimidos, cápsulas ou pó — sem padrão visual confiável (diferente do MDMA, não use aparência como garantia de conteúdo).",
    viaDeUso: "Oral.",
    efeitosFisicos: "Aumento moderado de frequência cardíaca e pressão arterial, hipertermia, tensão de mandíbula, náusea, dor de cabeça.",
    efeitosPsiquicos: "Euforia intensa, empatia; mais estimulante e psicodélica que o MDMA. Negativos: prejuízo de memória/concentração, depressão pós-uso por dias.",
    dosagem: [
      { nivel: "Leve", valor: "40–60 mg" },
      { nivel: "Comum", valor: "75–125 mg" },
      { nivel: "Forte", valor: "150–200 mg" }
    ],
    inicio: "20–90 min", pico: "2–4 h", duracao: "3–8 h (efeitos residuais até 24h)",
    cuidados: "É um adulterante/substituto comum em produtos vendidos como MDMA — testar sempre. Cerca de 5x mais neurotóxica que o MDMA: espaçar bem mais o intervalo entre usos. Mesmos riscos que o MDMA: síndrome serotoninérgica com IMAOs, hipertermia, hidratação moderada (nem excesso, nem falta)."
  },

  cocaina: {
    nome: "Cocaína",
    aparencia: "Pó branco (cloridrato de cocaína); \"crack\" é a forma em pedra, fumável.",
    viaDeUso: "Insuflada (aspirada em \"carreiras\"), fumada (crack), injetada, raramente oral.",
    efeitosFisicos: "Aumento súbito de frequência cardíaca, pressão arterial e temperatura; vasoconstrição; dilatação pupilar.",
    efeitosPsiquicos: "Confiança, alerta, euforia em doses típicas. Doses altas/repetidas: comportamento errático, paranoia, ansiedade.",
    dosagem: [
      { nivel: "Leve", valor: "20–50 mg" },
      { nivel: "Comum", valor: "50–100 mg" },
      { nivel: "Forte", valor: "100–150 mg" },
      { nivel: "Muito forte", valor: "150 mg+" }
    ],
    inicio: "1–3 min", pico: "15–30 min", duracao: "30–90 min",
    cuidados: "Cocaína + álcool forma cocaetileno, associado a risco 18–25x maior de morte cardíaca súbita — nunca combinar. Adulterante crítico: levamisol, presente em 40–90% das amostras testadas, causa queda grave de glóbulos brancos e lesões necróticas de pele (sinais: febre, mal-estar, lesões escuras, especialmente nas orelhas). Sinais de alerta cardíaco: dor no peito, batimento irregular — emergência médica imediata."
  },

  anfetaminas: {
    nome: "Anfetaminas / Metanfetaminas",
    aparencia: "Pó, cristal (\"ice\" — parece cacos de vidro), comprimidos; cor tipicamente branca/transparente.",
    viaDeUso: "Oral (mais segura, efeito mais lento), insuflada, fumada (cristal), injetada (maior risco).",
    efeitosFisicos: "Aumento de pressão arterial, frequência cardíaca e temperatura; desidratação; ranger de dentes; coceira (metanfetamina).",
    efeitosPsiquicos: "Confiança, sociabilidade, energia. Doses altas: agitação, paranoia, psicose em usuários vulneráveis.",
    dosagem: [
      { nivel: "Metanfetamina — Leve", valor: "5–10 mg" },
      { nivel: "Metanfetamina — Comum", valor: "10–30 mg" },
      { nivel: "Metanfetamina — Forte", valor: "30–40 mg" },
      { nivel: "Anfetamina", valor: "faixas não padronizadas — varia muito com a pureza do mercado ilícito" }
    ],
    inicio: "Metanfetamina oral: 20–70 min · Anfetamina oral: 15–30 min",
    pico: "—", duracao: "Metanfetamina: 8–10 h · Anfetamina: 2–4 h",
    cuidados: "\"Overamping\" (superestimulação) pode causar picos perigosos de frequência cardíaca e pressão arterial. Risco maior em quem já tem hipertensão. Binges de vários dias aumentam risco de psicose."
  },

  lsd: {
    nome: "LSD",
    aparencia: "Papel mata-borrão (\"blotter\", geralmente com estampas impressas); também líquido, gel tabs ou \"candy\".",
    viaDeUso: "Oral / sublingual (absorção pela mucosa da boca).",
    efeitosFisicos: "Dilatação pupilar, leve aumento da pressão arterial e temperatura corporal, tensão muscular, náusea, sensibilidade à luz.",
    efeitosPsiquicos: "Distorções visuais, alteração da percepção de tempo, euforia, introspecção intensa. Negativos: ansiedade, pânico, HPPD raro.",
    dosagem: [
      { nivel: "Limiar", valor: "10–20 mcg" },
      { nivel: "Leve", valor: "20–75 mcg" },
      { nivel: "Comum", valor: "50–150 mcg" },
      { nivel: "Forte", valor: "150–400 mcg" },
      { nivel: "Muito forte", valor: "400 mcg+" }
    ],
    inicio: "20–90 min", pico: "2–4 h", duracao: "8–12 h",
    cuidados: "Hidratação moderada — não precisa (nem deve) hiper-hidratar como no MDMA. Contraindicações: histórico pessoal/familiar de transtornos psicóticos, uso com lítio ou tricíclicos."
  },

  nbome: {
    nome: "NBOMe / Novas Substâncias Psicoativas (NSP)",
    aparencia: "Papel mata-borrão (visualmente idêntico ao LSD, inclusive com logos), líquido incolor, pó branco, comprimidos.",
    viaDeUso: "Sublingual (embaixo da língua) ou insuflada — únicas vias com eficácia confirmada.",
    efeitosFisicos: "Dilatação pupilar, rubor facial, calafrios, taquicardia. Doses altas: convulsões, febre alta, vasoconstrição.",
    efeitosPsiquicos: "Euforia inicial. Negativos: confusão, paranoia, pânico, alucinações esmagadoras, alta taxa de HPPD relatada.",
    dosagem: [
      { nivel: "Sublingual — Leve", valor: "200–500 mcg" },
      { nivel: "Sublingual — Comum", valor: "500–800 mcg" },
      { nivel: "Sublingual — Forte", valor: "700–1000 mcg+" }
    ],
    inicio: "15–45 min", pico: "—", duracao: "4–11 h",
    cuidados: "Vendido como LSD falso — visualmente indistinguível. Mortes documentadas com apenas 2–3 blotters (margem muito mais estreita que o LSD). Diferenciação prática: reagente de Ehrlich fica roxo na presença de LSD (indol); NBOMe não reage. Risco agudo é hipertermia/convulsão/rabdomiólise — prioridade é resfriar e buscar emergência médica, não hidratar."
  },

  cogumelos: {
    nome: "Cogumelos Mágicos (Psilocibina)",
    aparencia: "Cogumelos secos (mais comum) ou frescos, inteiros ou triturados.",
    viaDeUso: "Oral — comidos crus/secos, em chá, ou macerados em suco de limão (\"lemon tek\", reduz náusea e acelera o efeito).",
    efeitosFisicos: "Dilatação pupilar, aumento de frequência cardíaca/respiratória, náusea (comum), dor de cabeça residual.",
    efeitosPsiquicos: "Relaxamento, euforia, riso, alterações visuais, sensação de conexão. Negativos: ansiedade, delírios, estados psicóticos transitórios.",
    dosagem: [
      { nivel: "Limiar", valor: "0,25 g" },
      { nivel: "Leve", valor: "0,25–1 g" },
      { nivel: "Comum", valor: "1–2,5 g" },
      { nivel: "Forte", valor: "2,5–5 g" },
      { nivel: "Muito forte", valor: "5 g+" }
    ],
    inicio: "15–60 min", pico: "2–4 h", duracao: "4–8 h",
    cuidados: "Cogumelo fresco equivale a ~10x a dose seca. Lítio é contraindicação forte (risco de convulsão). IMAOs geralmente contraindicados. ISRS tendem a atenuar o efeito."
  },

  dmt: {
    nome: "DMT",
    aparencia: "Cristais, pó ou resina pegajosa, cor amarelo-alaranjada a acastanhada, odor característico (naftalina/couro).",
    viaDeUso: "Fumada/vaporizada (forma cristalina, efeito quase imediato); via oral só funciona combinada com IMAO (ayahuasca) — sozinha, é inativada no estômago.",
    efeitosFisicos: "Fumado: mínimos, leve aumento de PA/FC. Ayahuasca: náusea e vômito comuns.",
    efeitosPsiquicos: "Dissolução do ego, sensação de outros mundos/entidades, euforia; pode ser transformador ou aterrorizante.",
    dosagem: [
      { nivel: "Fumado — Limiar", valor: "2–5 mg" },
      { nivel: "Fumado — Leve", valor: "10–20 mg" },
      { nivel: "Fumado — Comum", valor: "20–40 mg" },
      { nivel: "Fumado — Forte", valor: "40–60 mg" },
      { nivel: "Ayahuasca (oral)", valor: "dose muito variável por receita tradicional" }
    ],
    inicio: "Fumado: 10–60 segundos · Ayahuasca: 20–60 min",
    pico: "Fumado: ~5 min", duracao: "Fumado: 5–20 min · Ayahuasca: 2–6 h",
    cuidados: "Ponto crítico: combinar ayahuasca (via IMAO) com ISRS, tricíclicos, alguns opioides ou MDMA tem risco de síndrome serotoninérgica potencialmente fatal."
  },

  mescalina: {
    nome: "Mescalina",
    aparencia: "Cactos — peyote (\"botões\" secos em disco) ou São Pedro/Tocha Peruana (fatias ou pó); também disponível em pó encapsulado.",
    viaDeUso: "Oral — mastigação de botões secos, infusão em água, ou cápsulas (para evitar o sabor amargo).",
    efeitosFisicos: "Dilatação pupilar, náusea/vômito (muito comum), sudorese, tremores, palpitações.",
    efeitosPsiquicos: "Interconectividade, experiências espirituais, euforia. Negativos: pavor intenso em doses altas.",
    dosagem: [
      { nivel: "Limiar", valor: "100 mg" },
      { nivel: "Leve", valor: "100–200 mg" },
      { nivel: "Comum", valor: "200–300 mg" },
      { nivel: "Forte", valor: "300–500 mg" },
      { nivel: "Muito forte", valor: "500–700 mg+" }
    ],
    inicio: "45–90 min", pico: "2–4 h", duracao: "6–14 h",
    cuidados: "Hipertensão ou condição cardíaca preexistente. Evitar estimulantes concomitantes. IMAOs desaconselhados."
  },

  cetamina: {
    nome: "Quetamina (Ketamina)",
    aparencia: "Forma farmacêutica é líquida; no mercado recreativo geralmente evaporada em pó branco.",
    viaDeUso: "Insuflada (mais comum); intramuscular; oral e retal (raras).",
    efeitosFisicos: "Analgesia, sensação de peso corporal (doses baixas). Doses altas: anestesia dissociativa, perda de coordenação.",
    efeitosPsiquicos: "Sensação \"flutuante\" (doses baixas). Doses altas: experiências fora do corpo (\"k-hole\").",
    dosagem: [
      { nivel: "Nasal — Limiar", valor: "5 mg" },
      { nivel: "Nasal — Comum (\"bump\")", valor: "30–75 mg" },
      { nivel: "Nasal — K-hole completo", valor: "~100 mg" }
    ],
    inicio: "5–20 min", pico: "—", duracao: "45–120 min",
    cuidados: "Cuidado central é postural: sempre sentado ou deitado ao usar doses maiores (risco de queda e asfixia por vômito). Nunca combinar com álcool, benzodiazepínicos ou GHB. Nunca redosar ainda sob efeito."
  },

  ghb: {
    nome: "GHB (Gama-hidroxibutirato)",
    aparencia: "Líquido incolor, sabor salgado (GBL/BD, precursores que viram GHB no corpo, têm sabor mais amargo).",
    viaDeUso: "Oral — quase exclusivamente, diluído em água/suco, medido com seringa oral graduada.",
    efeitosFisicos: "Relaxamento muscular, tontura, náusea. Doses altas: perda de consciência, convulsões.",
    efeitosPsiquicos: "Euforia, desinibição, aumento de sociabilidade — comparável à intoxicação alcoólica.",
    dosagem: [
      { nivel: "Aviso", valor: "Margem entre dose recreativa e fatal de apenas 5:1 a 8:1 — sempre usar seringa graduada em mL, nunca \"tampinhas\". Consultar a equipe de RD." }
    ],
    inicio: "10–40 min", pico: "—", duracao: "1–3 h (esperar no mínimo 2h entre doses)",
    cuidados: "Contraindicação absoluta: combinar com álcool, opioides ou benzodiazepínicos — pode ser fatal mesmo tomado com horas de diferença. Se a pessoa ficar muito sonolenta, deitar de lado (posição lateral de segurança). Nunca deixar sozinha."
  },

  inalantes: {
    nome: "Inalantes",
    aparencia: "Quatro categorias: solventes voláteis (cola, tíner), aerossóis (spray de cabelo, tinta), gases (óxido nitroso, isqueiro), e nitritos/\"poppers\" (líquido claro/amarelado, vendido disfarçado como \"limpador\" ou \"odorizador\").",
    viaDeUso: "Inalados direto do recipiente, de pano embebido (\"huffing\"), ou de saco plástico (\"bagging\"); poppers cheirados direto do frasco, tampando uma narina por vez.",
    efeitosFisicos: "Tontura, dor de cabeça, fala arrastada, fraqueza muscular, náusea, arritmia cardíaca. Nitritos especificamente: queda de pressão arterial, taquicardia reflexa.",
    efeitosPsiquicos: "Euforia rápida e breve, riso incontrolável, confusão; doses altas: alucinações leves, perda de consciência.",
    dosagem: [
      { nivel: "Aviso", valor: "Não há dose segura padronizada — o risco está na própria substância e via de uso, não numa quantidade específica." }
    ],
    inicio: "Segundos", pico: "—", duracao: "Muito curta — segundos a poucos minutos; nitritos 1–4 min",
    cuidados: "Síndrome da Morte Súbita por Inalação: pode ocorrer mesmo na primeira vez, por arritmia cardíaca — evitar susto ou esforço físico logo após inalar. Risco de asfixia com sacos plásticos — nunca colocar saco sobre a cabeça. Nitritos: nunca combinar com Viagra/Cialis (queda severa de pressão), nunca engolir, nunca aproximar de chama. Usar sempre em local ventilado e nunca sozinho."
  },

  maconha: {
    nome: "Maconha",
    aparencia: "Flor/buds (material vegetal); concentrados como haxixe, óleo e kief são muito mais potentes.",
    viaDeUso: "Fumada, vaporizada, ou comestíveis.",
    efeitosFisicos: "Aumento de frequência cardíaca, olhos vermelhos, boca seca, aumento de apetite.",
    efeitosPsiquicos: "Relaxamento, percepção sensorial aumentada, euforia. Doses altas: ansiedade, pânico, raramente alucinações leves.",
    dosagem: [
      { nivel: "Fumado", valor: "uma tragada pequena, esperar 15–20 min antes de repetir" },
      { nivel: "Comestível", valor: "começar com 2,5 mg de THC, aumentar aos poucos" }
    ],
    inicio: "Fumado: quase imediato · Comestível: 30 min–1h (pode levar até 2h)",
    pico: "—", duracao: "Fumado: 1–3 h · Comestível: muitas horas, efeito mais intenso e imprevisível",
    cuidados: "O redose precoce de comestíveis é o maior risco: como o efeito demora, é comum consumir mais antes de sentir a primeira dose. Esperar pelo menos 2 horas antes de repetir um comestível."
  },

  alcool: {
    nome: "Álcool",
    aparencia: "Líquido — bebidas fermentadas (cerveja, vinho) ou destiladas.",
    viaDeUso: "Oral.",
    efeitosFisicos: "Coordenação reduzida, náusea, desidratação, sonolência.",
    efeitosPsiquicos: "Euforia leve, desinibição. Doses altas: labilidade emocional, blackouts.",
    dosagem: [
      { nivel: "Referência", valor: "1 dose padrão ≈ 1 lata de cerveja, 1 taça de vinho ou 1 dose de destilado" }
    ],
    inicio: "15–30 min", pico: "30–90 min", duracao: "1,5–3 h (efeitos agudos)",
    cuidados: "O fígado processa álcool numa taxa de ~1 dose padrão por hora. Alternar cada dose com um copo de água. Contraindicação crítica: combinar com benzodiazepínicos, opioides ou GHB — a combinação é sinérgica, muito mais perigosa que cada um isolado."
  }

};
