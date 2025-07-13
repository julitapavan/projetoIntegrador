  const form = document.getElementById("recovery-form");
  const alertBox = document.getElementById("custom-alert");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    if (!validateEmail(email)) {
      showAlert("Por favor, insira um e-mail válido.", "red");
      return;
    }

    showAlert("E-mail de recuperação enviado com sucesso!", "#28a745");
    this.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showAlert(message, bgColor) {
    alertBox.textContent = message;
    alertBox.style.backgroundColor = bgColor;
    alertBox.style.display = "block";

    setTimeout(() => {
      alertBox.style.display = "none";
    }, 3000);
  }

//SCRAPING

// Extrair título da página
const pageTitle = document.title;
const formHeader = document.querySelector('.form-container h2')?.innerText || "";
const formDescription = document.querySelector('.form-container p.text-dark')?.innerText || "";

// Extrair placeholder do input de email
const emailPlaceholder = document.querySelector('#email')?.getAttribute('placeholder') || "";

// Extrair links do menu navbar (texto e href)
const navbarLinks = Array.from(document.querySelectorAll('nav .navbar-nav a')).map(a => ({
  text: a.innerText.trim(),
  href: a.href
}));

// Extrair contatos do topo (email e telefone)
const topContactEmail = document.querySelector('.container-fluid.bg-white .fa-envelope-open')?.parentElement.innerText.trim() || "";
const topContactPhone = document.querySelector('.container-fluid.bg-white .fa-phone-alt')?.parentElement.innerText.trim() || "";

// Extrair texto do rodapé de direitos autorais
const footerText = document.querySelector('.container-fluid.bg-primary p')?.innerText.trim() || "";

// Resultado formatado
const scrapingResult = {
  pageTitle,
  formHeader,
  formDescription,
  emailPlaceholder,
  navbarLinks,
  topContactEmail,
  topContactPhone,
  footerText
};

console.log(scrapingResult);
