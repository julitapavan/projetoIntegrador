
//Realizando o cadastro dos dados e verificando condições para isso (e-mail, senha)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirmPassword = document.querySelector("#confirmPassword").value.trim();

    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    // Pega os usuários já cadastrados (ou cria um array vazio)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica se o email já existe
    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      alert("Este e-mail já está cadastrado.");
      return;
    }

    // Adiciona novo usuário
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    // Salva o usuário logado atual para o dashboard usar
    localStorage.setItem("currentUser", JSON.stringify({ name, email }));

    alert("Cadastro realizado com sucesso!");
    form.reset();

    // Redireciona para o dashboard
    window.location.href = "/dashboard/dashboard.html";
  });
});


/*SCRAPING */

function scrapeCadastroPage() {
  // Título da página
  const pageTitle = document.title;

  // Topbar - contatos (email e telefone)
  const topbarEmail = document.querySelector('.fa-envelope-open')?.parentElement.textContent.trim() || '';
  const topbarPhone = document.querySelector('.fa-phone-alt')?.parentElement.textContent.trim() || '';

  // Navbar - links (texto e href)
  const navbarLinks = Array.from(document.querySelectorAll('nav .navbar-nav a')).map(a => ({
    text: a.textContent.trim(),
    href: a.href
  }));

  // Formulário de cadastro - campos e placeholders
  const form = document.querySelector('#registerForm');
  const formTitle = document.querySelector('.card-title, .card h4')?.textContent.trim() || '';
  const inputs = Array.from(form.querySelectorAll('input')).map(input => ({
    id: input.id,
    type: input.type,
    placeholder: input.placeholder || '',
    required: input.required
  }));

  // Links do rodapé
  const footerLinks = Array.from(document.querySelectorAll('.container-fluid.bg-dark a')).map(a => ({
    text: a.textContent.trim(),
    href: a.href
  }));

  // Informações de contato no rodapé
  const footerContactElements = document.querySelectorAll('.container-fluid.bg-dark p');
  const footerContacts = Array.from(footerContactElements).map(p => p.textContent.trim());

  // Redes sociais (ícones e href)
  const socialLinks = Array.from(document.querySelectorAll('.btn.btn-primary.btn-lg-square.rounded-circle')).map(a => ({
    iconClass: a.querySelector('i')?.className || '',
    href: a.href
  }));

  // Copyright
  const copyright = document.querySelector('.container-fluid.bg-dark.text-secondary.text-center p')?.textContent.trim() || '';

  return {
    pageTitle,
    topbar: {
      email: topbarEmail,
      phone: topbarPhone
    },
    navbarLinks,
    form: {
      formTitle,
      inputs
    },
    footer: {
      links: footerLinks,
      contacts: footerContacts,
      socialLinks,
      copyright
    }
  };
}

console.log(scrapeCadastroPage());


        

        

        
