(function () {
  const container = document.getElementById('substanceAccordion');
  if (!container) return;

  const ORDEM = [
    'mdma', 'mda', 'cocaina', 'anfetaminas', 'lsd', 'nbome',
    'cogumelos', 'dmt', 'mescalina', 'cetamina', 'ghb', 'inalantes',
    'maconha', 'alcool'
  ];

  function renderDosagem(dosagem) {
    return dosagem
      .map((d) => '<li><strong>' + d.nivel + ':</strong> ' + d.valor + '</li>')
      .join('');
  }

  function renderItem(chave) {
    const s = SUBSTANCIAS[chave];
    if (!s) return '';

    return (
      '<details class="substance-accordion-item">' +
        '<summary>' +
          '<span class="accordion-title">' + s.nome + '</span>' +
          '<span class="accordion-icon" aria-hidden="true">+</span>' +
        '</summary>' +
        '<div class="accordion-body">' +

          '<div class="detail-grid">' +
            '<div class="detail-block">' +
              '<h4>Como é encontrada</h4>' +
              '<p>' + s.aparencia + '</p>' +
            '</div>' +
            '<div class="detail-block">' +
              '<h4>Forma de uso</h4>' +
              '<p>' + s.viaDeUso + '</p>' +
            '</div>' +
          '</div>' +

          '<div class="detail-grid">' +
            '<div class="detail-block">' +
              '<h4>Efeitos físicos</h4>' +
              '<p>' + s.efeitosFisicos + '</p>' +
            '</div>' +
            '<div class="detail-block">' +
              '<h4>Efeitos psíquicos</h4>' +
              '<p>' + s.efeitosPsiquicos + '</p>' +
            '</div>' +
          '</div>' +

          '<div class="detail-block">' +
            '<h4>Dosagem</h4>' +
            '<ul class="dosagem-list">' + renderDosagem(s.dosagem) + '</ul>' +
          '</div>' +

          '<div class="timing-row">' +
            '<div><h4>Início</h4><p>' + s.inicio + '</p></div>' +
            '<div><h4>Pico</h4><p>' + s.pico + '</p></div>' +
            '<div><h4>Duração</h4><p>' + s.duracao + '</p></div>' +
          '</div>' +

          '<div class="detail-block cuidados-block">' +
            '<h4>Cuidados</h4>' +
            '<p>' + s.cuidados + '</p>' +
          '</div>' +

        '</div>' +
      '</details>'
    );
  }

  container.innerHTML = ORDEM.map(renderItem).join('');
})();
