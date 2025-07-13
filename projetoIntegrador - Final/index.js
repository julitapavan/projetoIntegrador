/* NAVBAR INTERATIVA */

//Seleciona o botão do menu 
const toggleBtn = document.querySelector(".toggle_btn");
//Seleciona o ícone 
const toggleBtnIcon = document.querySelector(".toggle_btn i");
//Seleciona o menu dropdown que será aberto ou fechado
const dropDownMenu = document.querySelector(".dropdown_menu");


/* SCRAPING DE CONTEÚDO DA PÁGINA (CLIENT-SIDE) */
function extrairDadosPagina() {
    //Mostra o título da aba no console
    console.log(" Título:", document.title);

    //Busca parágrafos com "@" ou "+" como possível contato
    document.querySelectorAll("p").forEach((p) => {
        if (p.textContent.includes("@") || p.textContent.includes("+")) {
            console.log(" Contato:", p.textContent.trim());
        }
    });

    //Lista todos os links do menu de navegação
    console.log("\n Links do Menu:");
    document.querySelectorAll(".navbar-nav a").forEach((link) => {
        console.log(`- ${link.textContent.trim()} -> ${link.href}`);
    });

    //Lista todos os links dentro do rodapé escuro
    console.log("\n Links do Rodapé:");
    document.querySelectorAll(".bg-dark a").forEach((link) => {
        console.log(`- ${link.textContent.trim()} -> ${link.href}`);
    });

    //Mostra os títulos dos slides do carrossel
    console.log("\n Textos do Carrossel:");
    document.querySelectorAll(".carousel-caption h1").forEach((h1, i) => {
        console.log(`Slide ${i + 1}: ${h1.textContent.trim()}`);
    });

    //Detecta e exibe ícones das redes sociais (baseado na classe FontAwesome)
    console.log("\n Redes Sociais:");
    document.querySelectorAll(".btn.btn-lg-square i").forEach((icon) => {
        const classe = icon.className.split(" ").find((c) => c.startsWith("fa-"));
        if (classe) {
            const nome = classe.replace("fa-", "");
            console.log("-", nome.charAt(0).toUpperCase() + nome.slice(1));
        }
    });
}

//Executando a função
extrairDadosPagina();

(function ($) {
    "use strict"; //evita erros silenciosos

    //Exibe o botão "voltar ao topo" quando rola 30px para baixo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $(".back-to-top").fadeIn("slow"); // Aparece 
        } else {
            $(".back-to-top").fadeOut("slow"); // Some 
        }
    });

    // Quando o botão "voltar ao topo" for clicado
    $(".back-to-top").click(function () {
        //Anima a rolagem de volta ao topo
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    $("form").submit(function (event) {
        event.preventDefault(); 

        //Pega o valor pesquisado e transforma em minúsculas
        let searchTerm = $("input[type='search']").val().toLowerCase();

        //Percorre cada item do carrossel
        $(".carousel-item").each(function () {
            let itemText = $(this).text().toLowerCase();

            if (itemText.includes(searchTerm) || searchTerm === "") {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

})(jQuery);

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