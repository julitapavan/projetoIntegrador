function scrappingContatoPage() {
    console.log(" Título da Página:", document.title);

    // Email e telefone do topo
    const topoContato = document.querySelectorAll(".top-shape p");
    topoContato.forEach(p => {
        console.log(" Contato Topo:", p.textContent.trim());
    });

    // Links da Navbar
    console.log("\n Links do Menu de Navegação:");
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        console.log(`- ${link.textContent.trim()} → ${link.href}`);
    });

    // Cabeçalho de Contato
    const cabecalho = document.querySelector(".display-4.text-white");
    if (cabecalho) {
        console.log("\nCabeçalho:", cabecalho.textContent.trim());
    }

    // Texto “Fale Conosco”
    const faleConosco = document.querySelector(".display-5.mb-4");
    if (faleConosco) {
        console.log(" Seção:", faleConosco.textContent.trim());
    }

    // Informações de contato no rodapé
    console.log("\n Contato no Rodapé:");
    const infosRodape = document.querySelectorAll(".col-lg-3.col-md-6:nth-child(2) p");
    infosRodape.forEach(p => {
        console.log("-", p.textContent.trim());
    });

    // Links úteis no rodapé
    console.log("\n Links do Rodapé:");
    const linksRodape = document.querySelectorAll(".col-lg-3.col-md-6:first-child a");
    linksRodape.forEach(link => {
        console.log(`- ${link.textContent.trim()} → ${link.href}`);
    });

    // Redes sociais (ícones)
    console.log("\n Redes Sociais:");
    document.querySelectorAll(".col-lg-3.col-md-6:nth-child(3) i").forEach(icon => {
        let nome = icon.className.split(" ").find(c => c.startsWith("fa-") || c.startsWith("fab-"));
        if (nome) {
            nome = nome.replace("fa-", "").replace("fab-", "");
            console.log("- " + nome.charAt(0).toUpperCase() + nome.slice(1));
        }
    });

    // Créditos finais
    const creditos = document.querySelector(".container-fluid.bg-dark.text-secondary.text-center");
    if (creditos) {
        console.log("\n Créditos:", creditos.innerText.trim());
    }
}

// Chama a função
scrappingContatoPage();
