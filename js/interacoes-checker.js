(function () {
  const selectA = document.getElementById('substanciaA');
  const selectB = document.getElementById('substanciaB');
  const legend = document.getElementById('statusLegend');
  const estadoVazio = document.getElementById('estadoVazio');
  const estadoResultado = document.getElementById('estadoResultado');

  if (!selectA || !selectB || !estadoVazio || !estadoResultado) return;

  const chavesOrdenadas = Object.keys(SUBSTANCIAS_INTERACAO).sort((a, b) =>
    SUBSTANCIAS_INTERACAO[a].localeCompare(SUBSTANCIAS_INTERACAO[b], 'pt-BR')
  );

  function popularSelect(select) {
    chavesOrdenadas.forEach((chave) => {
      const opt = document.createElement('option');
      opt.value = chave;
      opt.textContent = SUBSTANCIAS_INTERACAO[chave];
      select.appendChild(opt);
    });
  }

  function corTextoContraste(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminancia = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminancia > 0.55 ? '#3B2E24' : '#EDE6D6';
  }

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  }

  function popularLegenda() {
    if (!legend) return;
    Object.keys(STATUS_INFO).forEach((status) => {
      const info = STATUS_INFO[status];

      const chip = document.createElement('span');
      chip.className = 'status-chip';
      chip.style.background = info.cor;
      chip.style.color = corTextoContraste(info.cor);

      const simbolo = document.createElement('span');
      simbolo.className = 'chip-simbolo';
      simbolo.textContent = info.simbolo;

      const nome = document.createElement('span');
      nome.textContent = info.label;

      chip.appendChild(simbolo);
      chip.appendChild(nome);
      legend.appendChild(chip);
    });
  }

  function limparEstadoResultado() {
    estadoResultado.innerHTML = '';
    estadoResultado.hidden = true;
    estadoResultado.classList.remove('show');
  }

  function exibirEstadoResultado(node) {
    estadoVazio.hidden = true;
    estadoResultado.innerHTML = '';
    estadoResultado.appendChild(node);
    estadoResultado.hidden = false;
    estadoResultado.classList.remove('show');
    void estadoResultado.offsetWidth;
    estadoResultado.classList.add('show');
  }

  function mostrarVazio() {
    limparEstadoResultado();
    estadoVazio.hidden = false;
  }

  function mostrarAviso(mensagem) {
    const aviso = document.createElement('p');
    aviso.className = 'resultado-aviso';
    aviso.textContent = mensagem;
    exibirEstadoResultado(aviso);
  }

  function mostrarResultado(status, nomeA, nomeB) {
    const info = STATUS_INFO[status];

    const card = document.createElement('div');
    card.className = 'resultado-card';
    card.style.background = hexToRgba(info.cor, 0.12);
    card.style.borderLeftColor = info.cor;

    const simbolo = document.createElement('span');
    simbolo.className = 'resultado-simbolo';
    simbolo.style.color = info.cor;
    simbolo.textContent = info.simbolo;

    const texto = document.createElement('div');
    texto.className = 'resultado-texto';

    const nivel = document.createElement('span');
    nivel.className = 'resultado-nivel';
    nivel.textContent = info.label;

    const substancias = document.createElement('span');
    substancias.className = 'resultado-substancias';
    substancias.textContent = nomeA + ' + ' + nomeB;

    texto.appendChild(nivel);
    texto.appendChild(substancias);
    card.appendChild(simbolo);
    card.appendChild(texto);

    exibirEstadoResultado(card);
  }

  function verificarInteracao() {
    const a = selectA.value;
    const b = selectB.value;

    if (!a || !b) {
      mostrarVazio();
      return;
    }

    if (a === b) {
      mostrarAviso('Selecione duas substâncias diferentes');
      return;
    }

    const status =
      (INTERACOES[a] && INTERACOES[a][b]) ||
      (INTERACOES[b] && INTERACOES[b][a]);

    if (!status) {
      mostrarAviso('Não temos dados sobre essa combinação — procure a equipe de redução de danos.');
      return;
    }

    mostrarResultado(status, SUBSTANCIAS_INTERACAO[a], SUBSTANCIAS_INTERACAO[b]);
  }

  popularSelect(selectA);
  popularSelect(selectB);
  popularLegenda();

  selectA.addEventListener('change', verificarInteracao);
  selectB.addEventListener('change', verificarInteracao);
})();
