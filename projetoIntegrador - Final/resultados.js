console.log("resultado.js carregado");

window.onload = function() {
  console.log("window.onload executado");

  const params = new URLSearchParams(window.location.search);
  const termo = params.get("busca")?.toLowerCase().trim();

  const container = document.getElementById("resultadoTexto");

  console.log("Termo:", termo);
  console.log("Container:", container);

  if (!container) {
    console.error("Elemento resultadoTexto não encontrado!");
    return;
  }

  if (!termo) {
    container.innerHTML = `<p>Nenhum termo de busca fornecido.</p>`;
    return;
  }

  // (restante do código igual)
  const rotas = [
    { palavra: "sobre", url: "/sobre.html" },
    { palavra: "contato", url: "/contato.html" },
    { palavra: "login", url: "/login/login.html" },
    { palavra: "cadastro", url: "/cadastro/cadastro.html" },
    { palavra: "início", url: "/index.html" },
    { palavra: "home", url: "/index.html" },
  ];

  const resultados = rotas.filter(r => r.palavra.includes(termo));

  if (resultados.length > 0) {
    container.innerHTML = `<p>Resultados para: <strong>${termo}</strong></p>`;
    resultados.forEach(r => {
      const link = document.createElement("a");
      link.href = r.url;
      link.textContent = `Ir para ${r.palavra}`;
      link.className = "btn btn-outline-primary d-block mb-2";
      container.appendChild(link);
    });
  } else {
    container.innerHTML = `Nenhuma página encontrada para: "<strong>${termo}</strong>"`;
  }
};
