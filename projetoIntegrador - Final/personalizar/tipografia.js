// Função para extrair e mostrar as cores de fundo- SCRAPING
function extrairCoresDeFundo() {
  // Seleciona todos os elementos com as classes de bg (cores de fundo) dentro do container de cores
  const cores = document.querySelectorAll('.bg-light .bg-primary, .bg-secondary, .bg-success, .bg-danger, .bg-warning, .bg-info, .bg-light, .bg-dark');
  console.log('Cores de Fundo:');
  cores.forEach(cor => {
    console.log(`- ${cor.textContent.trim()} (${cor.className})`);
  });
}

// Função para extrair e mostrar as cores do texto
function extrairCoresDeTexto() {
  const textos = document.querySelectorAll('.bg-light p');
  console.log('\nCores de Texto:');
  textos.forEach(texto => {
    console.log(`- ${texto.textContent.trim()} (${texto.className})`);
  });
}

// Função para extrair e mostrar os títulos (h1 a h6)
function extrairTitulos() {
  const titulos = document.querySelectorAll('.bg-light h1, .bg-light h2, .bg-light h3, .bg-light h4, .bg-light h5, .bg-light h6');
  console.log('\nTítulos:');
  titulos.forEach(titulo => {
    console.log(`${titulo.tagName}: ${titulo.textContent.trim()}`);
  });
}

// Executa as funções
extrairCoresDeFundo();
extrairCoresDeTexto();
extrairTitulos();


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

