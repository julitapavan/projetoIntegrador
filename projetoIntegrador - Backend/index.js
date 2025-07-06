/* NAVBAR INTERATIVA */
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.className = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
};

/* SCRAPING DE CONTEÚDO DA PÁGINA (CLIENT-SIDE) */
function extrairDadosPagina() {
    console.log("📰 Título:", document.title);

    // Contatos
    document.querySelectorAll("p").forEach((p) => {
        if (p.textContent.includes("@") || p.textContent.includes("+")) {
            console.log("📞 Contato:", p.textContent.trim());
        }
    });

    // Links do menu
    console.log("\n📌 Links do Menu:");
    document.querySelectorAll(".navbar-nav a").forEach((link) => {
        console.log(`- ${link.textContent.trim()} -> ${link.href}`);
    });

    // Links do rodapé
    console.log("\n🔗 Links do Rodapé:");
    document.querySelectorAll(".bg-dark a").forEach((link) => {
        console.log(`- ${link.textContent.trim()} -> ${link.href}`);
    });

    // Slides do carrossel
    console.log("\n🎞 Textos do Carrossel:");
    document.querySelectorAll(".carousel-caption h1").forEach((h1, i) => {
        console.log(`Slide ${i + 1}: ${h1.textContent.trim()}`);
    });

    // Redes sociais
    console.log("\n📱 Redes Sociais:");
    document.querySelectorAll(".btn.btn-lg-square i").forEach((icon) => {
        const classe = icon.className.split(" ").find((c) => c.startsWith("fa-"));
        if (classe) {
            const nome = classe.replace("fa-", "");
            console.log("-", nome.charAt(0).toUpperCase() + nome.slice(1));
        }
    });
}
extrairDadosPagina(); // Chama a função ao carregar

/* JQUERY + FUNCIONALIDADES */
(function ($) {
    "use strict";

    // Botão voltar ao topo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    // Formulário de pesquisa (filtra o carrossel como exemplo)
    $("form").submit(function (event) {
        event.preventDefault();
        let searchTerm = $("input[type='search']").val().toLowerCase();

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
