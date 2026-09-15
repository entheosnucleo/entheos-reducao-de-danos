document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("cuidadosCarousel");
  const content = document.getElementById("cuidadosContent");
  if (!track || !content || typeof CUIDADOS === "undefined") return;

  let resumeTimer = null;

  // monta os ícones duas vezes seguidas (loop contínuo via translate -50%)
  function renderIcones() {
    let html = "";
    for (let volta = 0; volta < 2; volta++) {
      CUIDADOS_ORDEM.forEach((id) => {
        const c = CUIDADOS[id];
        html += `
          <button type="button" class="cuidado-icone" data-id="${id}" aria-label="${c.titulo}">
            <span class="cuidado-icone-circle">${c.icone}</span>
            <span class="cuidado-icone-label">${c.rotulo || c.titulo}</span>
          </button>`;
      });
    }
    track.innerHTML = html;
  }

  function renderConteudo(id) {
    const c = CUIDADOS[id];
    if (!c) return;
    const itensHtml = c.itens
      .map(
        (item) => `
        <div class="cuidado-item">
          <h4>${item.topico}</h4>
          <p>${item.texto}</p>
        </div>`
      )
      .join("");

    content.innerHTML = `
      <div class="cuidado-icone-grande">${c.icone}</div>
      <h3 class="cuidado-titulo">${c.titulo}</h3>
      <div class="cuidado-itens">${itensHtml}</div>
    `;
    content.classList.remove("fade-in");
    void content.offsetWidth; // reinicia a animação
    content.classList.add("fade-in");

    track.querySelectorAll(".cuidado-icone").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.id === id);
    });
  }

  function pausarCarrossel() {
    track.classList.add("is-paused");
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      track.classList.remove("is-paused");
    }, 10000); // retoma o giro automático após 10s sem interação
  }

  track.addEventListener("click", (e) => {
    const btn = e.target.closest(".cuidado-icone");
    if (!btn) return;
    renderConteudo(btn.dataset.id);
    pausarCarrossel();
  });

  renderIcones();
  renderConteudo(CUIDADOS_ORDEM[0]); // abre "Antes de Usar" por padrão
});
