// Coleta do título da página
const pageTitle = document.title;

// Coleta dos links do menu de navegação (navbar)
const navLinks = Array.from(document.querySelectorAll('.navbar-nav .nav-link')).map(link => ({
    texto: link.innerText.trim(),
    href: link.href
}));

// Coleta das informações da topbar
const emailTopbar = document.querySelector('.fa-envelope-open')?.parentElement?.innerText.trim();
const telefoneTopbar = document.querySelector('.fa-phone-alt')?.parentElement?.innerText.trim();

// Coleta dos campos do formulário de login
const loginFormFields = {
    emailLabel: document.querySelector('label[for="email"]')?.innerText.trim(),
    senhaLabel: document.querySelector('label[for="password"]')?.innerText.trim(),
    lembrar: document.querySelector('label[for="remember"]')?.innerText.trim(),
    esqueceuSenha: document.querySelector('a[href="senha.html"]')?.innerText.trim(),
    botaoEntrar: document.querySelector('button[type="submit"]')?.innerText.trim()
};

// Coleta dos links do rodapé
const footerLinks = Array.from(document.querySelectorAll('.container-fluid.bg-dark a')).map(link => ({
    texto: link.innerText.trim(),
    href: link.href
}));

// Coleta das redes sociais
const redesSociais = Array.from(document.querySelectorAll('.btn.btn-lg-square i')).map(icon => {
    const classe = icon.className;
    if (classe.includes('fa-twitter')) return 'Twitter';
    if (classe.includes('fa-facebook')) return 'Facebook';
    if (classe.includes('fa-linkedin')) return 'LinkedIn';
    if (classe.includes('fa-instagram')) return 'Instagram';
    return 'Desconhecido';
});

// Coleta do autor e direitos autorais
const direitosAutorais = document.querySelector('div.container-fluid.bg-dark.text-secondary.text-center')?.innerText.trim();

// Resultado final
const resultado = {
    tituloPagina: pageTitle,
    navLinks,
    emailTopbar,
    telefoneTopbar,
    loginFormFields,
    footerLinks,
    redesSociais,
    direitosAutorais
};

console.log(resultado);


//

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o comportamento padrão do formulário
        window.location.href = "/dashboard/dashboard.html"; // Redireciona para o dashboard
    });
});
