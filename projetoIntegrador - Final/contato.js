// Define uma função chamada scrappingContatoPage
function scrappingContatoPage() {
    
    console.log(" Título da Página:", document.title);

   
    // 1. Contato no topo da página
    const topoContato = document.querySelectorAll(".top-shape p");
    topoContato.forEach(p => {
        // Para cada parágrafo encontrado, exibe seu texto no console
        console.log(" Contato Topo:", p.textContent.trim());
    });

  
    // 2. Links da barra de navegação (navbar)
    console.log("\n Links do Menu de Navegação:");
    // Seleciona todos os links que estão dentro do menu de navegação
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    
        console.log(`- ${link.textContent.trim()} → ${link.href}`);
    });

   
    // 3. Cabeçalho principal da página de contato
    const cabecalho = document.querySelector(".display-4.text-white");
    if (cabecalho) {
        // Se encontrado, exibe o conteúdo do cabeçalho
        console.log("\nCabeçalho:", cabecalho.textContent.trim());
    }

 
    // 4. Subtítulo ou seção "Fale Conosco"
    const faleConosco = document.querySelector(".display-5.mb-4");
    if (faleConosco) {
        // Se encontrado, imprime o texto da seção
        console.log(" Seção:", faleConosco.textContent.trim());
    }

    // 5. Informações de contato no rodapé
    console.log("\n Contato no Rodapé:");
    // Seleciona todos os <p> da segunda coluna do rodapé
    const infosRodape = document.querySelectorAll(".col-lg-3.col-md-6:nth-child(2) p");
    infosRodape.forEach(p => {
        
        console.log("-", p.textContent.trim());
    });

   
    // 6. Links úteis no rodapé
    console.log("\n Links do Rodapé:");
    // Seleciona os links da primeira coluna do rodapé
    const linksRodape = document.querySelectorAll(".col-lg-3.col-md-6:first-child a");
    linksRodape.forEach(link => {
        console.log(`- ${link.textContent.trim()} → ${link.href}`);
    });

  
    // 7. Ícones de redes sociais no rodapé
    console.log("\n Redes Sociais:");
    document.querySelectorAll(".col-lg-3.col-md-6:nth-child(3) i").forEach(icon => {
       
        let nome = icon.className.split(" ").find(c => c.startsWith("fa-") || c.startsWith("fab-"));
        if (nome) {
          
            nome = nome.replace("fa-", "").replace("fab-", "");
            console.log("- " + nome.charAt(0).toUpperCase() + nome.slice(1));
        }
    });

  
    // 8. Créditos finais (ex: copyright)
    const creditos = document.querySelector(".container-fluid.bg-dark.text-secondary.text-center");
    if (creditos) {
        console.log("\n Créditos:", creditos.innerText.trim());
    }
}

// Chama a função imediatamente após definida
scrappingContatoPage();


function redirecionarBusca() {
    const termo = document.getElementById("campoBusca").value.trim();
    if (termo) {
      // Redireciona para a página resultados.html com o termo como parâmetro
      window.location.href = `resultados.html?busca=${encodeURIComponent(termo)}`;
    } else {
      alert("Por favor, digite algo para buscar.");
    }
    return false; // Evita o reload automático
  }