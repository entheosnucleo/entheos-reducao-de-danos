const CUIDADOS_ORDEM = ["antes", "durante", "hidratacao", "combinacoes", "ambiente", "emergencia"];

const CUIDADOS = {
  antes: {
    titulo: "Antes de Usar",
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.3" y1="15.3" x2="21" y2="21"/></svg>`,
    itens: [
      { topico: "Pesquise antes de consumir", texto: "Não use nada sem saber o que é, a dosagem aproximada e os riscos conhecidos. Se possível, use kits de teste de substâncias (reagentes) para checar a composição antes do consumo." },
      { topico: "Nunca experimente algo novo pela primeira vez em um evento", texto: "Testar uma substância desconhecida pela primeira vez em um festival, sozinho(a) ou sob pressão do momento, aumenta muito o risco. Primeiras experiências merecem um ambiente calmo e conhecido." },
      { topico: "Avalie seu estado físico e emocional", texto: "Evite consumir se estiver muito cansado(a), desidratado(a), em jejum prolongado, tomando medicamentos incompatíveis ou emocionalmente fragilizado(a). O \"set\" (seu estado interno) influencia diretamente a experiência." },
      { topico: "Conte para alguém de confiança o que você vai usar", texto: "Combine com um amigo o que você consumiu e o horário aproximado. Em uma emergência, essa informação pode salvar sua vida." }
    ]
  },
  durante: {
    titulo: "Durante o Uso",
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 21h12"/><path d="M7 3c0 4 4 6 5 6s5-2 5-6"/><path d="M7 21c0-4 4-6 5-6s5 2 5 6"/></svg>`,
    itens: [
      { topico: "Comece com doses baixas e espere o efeito", texto: "\"Start low, go slow\": inicie com a menor dose eficaz e aguarde o tempo de início antes de redosar. Redosar cedo demais é uma das causas mais comuns de mal-estar evitável." },
      { topico: "Use balança de precisão para substâncias em pó ou cristal", texto: "Dosar \"no olho\" é uma das maiores fontes de intoxicação acidental. Sempre que possível, pese." },
      { topico: "Respeite o tempo de duração da substância", texto: "Cada substância tem uma janela de início, pico e duração própria (consulte a seção de Substâncias). Tomar mais antes do pico passar pode levar a sobrecarga." },
      { topico: "Evite consumir sozinho(a)", texto: "Fique perto de pessoas de confiança, principalmente durante o pico dos efeitos." }
    ]
  },
  hidratacao: {
    titulo: "Hidratação e Corpo",
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c4 5 7 9 7 13a7 7 0 1 1-14 0c0-4 3-8 7-13Z"/></svg>`,
    itens: [
      { topico: "Beba água regularmente, mas sem exagero", texto: "Cerca de 500ml por hora em ambientes de dança é uma referência razoável — beber água em excesso em pouco tempo também é perigoso (hiponatremia) e pode ser tão grave quanto a desidratação." },
      { topico: "Repouse periodicamente", texto: "Estimulantes e psicodélicos podem mascarar o cansaço e o superaquecimento do corpo. Faça pausas em local ventilado, longe do calor e da multidão." },
      { topico: "Preste atenção à temperatura corporal", texto: "Sensação de calor excessivo, pele muito quente ao toque ou ausência de suor são sinais de alerta de hipertermia — procure ajuda imediatamente." },
      { topico: "Coma algo leve antes e durante", texto: "Estar em jejum prolongado piora os efeitos colaterais físicos de diversas substâncias." }
    ]
  },
  combinacoes: {
    titulo: "Combinações e Riscos",
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/></svg>`,
    itens: [
      { topico: "Evite misturar substâncias sem saber a interação", texto: "Combinações podem ser sinérgicas, perigosas ou até fatais. Consulte a Tabela de Interações antes de combinar qualquer substância — inclusive com álcool." },
      { topico: "Cuidado redobrado com depressores do sistema nervoso central", texto: "Álcool, benzodiazepínicos, opioides e GHB combinados entre si têm risco elevado de depressão respiratória. Essa é uma das combinações mais perigosas que existem." },
      { topico: "Medicamentos de uso contínuo importam", texto: "Antidepressivos (principalmente IMAOs e ISRSs), medicação psiquiátrica e alguns remédios comuns podem ter interações graves com substâncias psicoativas. Consulte um profissional de saúde com antecedência se fizer uso contínuo de medicamentos." },
      { topico: "Desconfie de substâncias vendidas como outra coisa", texto: "Adulteração é comum. Testar a substância (reagentes) reduz — mas não elimina — esse risco." }
    ]
  },
  ambiente: {
    titulo: "Ambiente e Comunidade",
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3"/><circle cx="12" cy="4.5" r="1.8"/><circle cx="19" cy="16.5" r="1.8"/><circle cx="5" cy="16.5" r="1.8"/><line x1="12" y1="6.3" x2="12" y2="9.9"/><line x1="17.4" y1="15.3" x2="13.8" y2="13.3"/><line x1="6.6" y1="15.3" x2="10.2" y2="13.3"/></svg>`,
    itens: [
      { topico: "Fique em grupo e cuide de quem está com você", texto: "Combine pontos de encontro, cheque uns aos outros ao longo do evento e nunca deixe uma pessoa muito alterada sozinha." },
      { topico: "Use os espaços de acolhimento (chill-out)", texto: "Se o evento tiver uma área de descompressão, ela existe para isso: procure quando sentir necessidade de uma pausa, física ou emocional." },
      { topico: "Respeite os limites de quem está ao seu redor", texto: "Não ofereça substâncias a quem não pediu, não julgue as escolhas alheias e não pressione ninguém a consumir." },
      { topico: "Peça ajuda à equipe de redução de danos sem medo", texto: "A presença da equipe ENTHEOS/Natuflora no evento é para apoiar, não para punir. Procurar ajuda é sempre a atitude mais segura." }
    ]
  },
  emergencia: {
    titulo: "Emergência — Quando e Como Buscar Ajuda",
    rotulo: "Emergência",
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>`,
    itens: [
      { topico: "Reconheça os sinais de alerta", texto: "Confusão severa, dificuldade para respirar, convulsões, perda de consciência, dor no peito, temperatura corporal muito alta, vômito persistente ou comportamento de risco para si ou para outros são emergências médicas." },
      { topico: "Não hesite em pedir socorro", texto: "Em caso de dúvida, procure a equipe de apoio ou peça para alguém acionar o serviço médico do evento. O tempo de resposta importa mais do que o medo de \"dar problema\"." },
      { topico: "Posição lateral de segurança", texto: "Se alguém estiver inconsciente mas respirando, deite a pessoa de lado (nunca de barriga para cima) para evitar engasgo, e fique ao lado dela até a chegada de ajuda." },
      { topico: "Informe o que foi consumido", texto: "Se souber o que a pessoa usou (e quanto), informe a equipe médica. Essa informação agiliza o atendimento e pode ser decisiva." }
    ]
  }
};
