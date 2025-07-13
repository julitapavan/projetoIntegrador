
/*ESTILIZAÇÃO COM O JS */

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona os elementos que queremos animar
  const fadeElems = document.querySelectorAll('.fade-in');

  // Para cada elemento, adiciona a classe 'visible' com um pequeno delay
  fadeElems.forEach((elem, index) => {
    setTimeout(() => {
      elem.classList.add('visible');
    }, 200 * index); // 200ms de delay entre cada elemento para efeito cascata
  });
});


/*SCRAPING DA PÁGINA */

// Função que coleta e exibe dados da página "Sobre Nós"
function scrapingSobrePage() {
    // Exibe o título da aba
    console.log(" Título da Página:", document.title);

    // Coleta o cabeçalho principal
    const cabecalho = document.querySelector(".display-4.text-white");
    if (cabecalho) {
        console.log(" Cabeçalho:", cabecalho.textContent.trim());
    }

    // Coleta o título de boas-vindas
    const tituloBemVindo = document.querySelector(".display-5.mb-4");
    if (tituloBemVindo) {
        console.log(" Título de Boas-vindas:", tituloBemVindo.textContent.trim());
    }

    // Coleta o parágrafo de missão
    const missao = document.querySelector("h4.text-primary + p");
    if (missao) {
        console.log(" Missão:", missao.textContent.trim());
    }

    // Coleta todos os títulos das seções com ícones
    document.querySelectorAll(".col-lg-6 .h-100 h3").forEach((el, i) => {
        console.log(` Seção ${i+1}:`, el.textContent.trim());
    });

    // Coleta e exibe os links do rodapé
    console.log("Links do Rodapé:");
    document.querySelectorAll(".col-lg-3.col-md-6:first-child a").forEach(link => {
        console.log(`- ${link.textContent.trim()} → ${link.href}`);
    });

    // Coleta as redes sociais (ícones)
    console.log("Redes Sociais:");
    document.querySelectorAll(".col-lg-3.col-md-6:nth-child(3) i").forEach(icon => {
        let nome = icon.className.split(" ").find(c => c.startsWith("fa-") || c.startsWith("fab-"));
        if (nome) {
            nome = nome.replace("fa-", "").replace("fab-", "");
            console.log("- " + nome.charAt(0).toUpperCase() + nome.slice(1));
        }
    });
}

// Executa a função depois que a página carregar
document.addEventListener("DOMContentLoaded", scrapingSobrePage);


  function pesquisar() {
    const termo = document.getElementById("campoBusca").value.trim();
    if (termo) {
      console.log("🔎 Termo pesquisado:", termo);
      alert(`Você buscou por: "${termo}"`);
    } else {
      alert("Por favor, digite algo para buscar.");
    }
    return false; // Impede o reload da página
  }



  function redirecionarBusca() {
    const termo = document.getElementById("campoBusca").value.trim();
    if (termo !== "") {
      window.location.href = `/resultados.html?busca=${encodeURIComponent(termo)}`;
    }
    return false;
  }

