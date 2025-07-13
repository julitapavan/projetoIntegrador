(function ($) {

    // Ao clicar no botão que abre/fecha a sidebar
    $('.sidebar-toggler').click(function () {
        // Alterna a classe "open" na sidebar e no conteúdo, abrindo ou fechando a sidebar
        $('.sidebar, .content').toggleClass("open");
        return false; // previne comportamento padrão
    });

})(jQuery);


//adicionar tag com nome
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser && currentUser.name) {
    const userNameElement = document.getElementById("userName");
    if (userNameElement) {
      userNameElement.textContent = `Bem-vindo(a), ${currentUser.name}!`;
    }
  } else {
    // Se não tiver usuário logado, redirecione para login (opcional)
    window.location.href = "/login/login.html";
  }
});

/*SCRAPING */

// Seleciona o título "Botões"
const titulos = document.querySelectorAll('h6.mb-4');
let botoes = [];

titulos.forEach(titulo => {
  if(titulo.textContent.trim() === 'Botões') {
    // Encontra todos os botões no próximo elemento irmão (container dos botões)
    const botoesContainer = titulo.nextElementSibling;
    const botoesElements = botoesContainer.querySelectorAll('button');
    
    botoes = Array.from(botoesElements).map(btn => btn.textContent.trim());
  }
});

console.log('Botões encontrados:', botoes);
