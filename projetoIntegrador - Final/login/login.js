
/*Redirecionar */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o comportamento padrão do formulário
        window.location.href = "/dashboard/dashboard.html"; // Redireciona para o dashboard
    });
});

// Função para validar o formulário
function validarFormulario() {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('password').value.trim();

  if (!email) {
    exibirMensagem('Por favor, insira seu e-mail.', 'erro');
    return false;
  }

  // Validação simples de formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    exibirMensagem('E-mail inválido.', 'erro');
    return false;
  }

  if (!senha) {
    exibirMensagem('Por favor, insira sua senha.', 'erro');
    return false;
  }

  // Se passou todas as validações
  return true;
}

// Função para capturar os dados do formulário
function capturarDadosLogin() {
  return {
    email: document.getElementById('email').value.trim(),
    senha: document.getElementById('password').value.trim(),
    lembrar: document.getElementById('remember').checked
  };
}

// Função para exibir mensagens na tela (sucesso ou erro)
function exibirMensagem(msg, tipo) {
  // tipo pode ser 'sucesso' ou 'erro'
  let divMsg = document.getElementById('mensagemLogin');
  if (!divMsg) {
    divMsg = document.createElement('div');
    divMsg.id = 'mensagemLogin';
    divMsg.style.marginBottom = '1rem';
    document.getElementById('loginForm').prepend(divMsg);
  }

  divMsg.textContent = msg;
  divMsg.style.color = tipo === 'erro' ? 'red' : 'green';
}

// Função para limpar formulário e mensagens
function limparFormulario() {
  document.getElementById('loginForm').reset();
  const divMsg = document.getElementById('mensagemLogin');
  if (divMsg) {
    divMsg.textContent = '';
  }
}

// Captura o evento submit e executa validação e captura
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // evita envio padrão do formulário

  if (validarFormulario()) {
    const dados = capturarDadosLogin();
    console.log('Dados do login:', dados);

    // Aqui você pode colocar sua lógica de login (ex: chamada API)

    exibirMensagem('Login efetuado com sucesso!', 'sucesso');
    // limparFormulario(); // descomente para limpar após login
  }
});

/*SCRAPING */

// 1. Título da página
const title = document.title;
console.log("Título da página:", title);

// 2. Links da navbar
const navbarLinks = document.querySelectorAll('nav.navbar a.nav-link');
console.log("\nLinks da Navbar:");
navbarLinks.forEach(link => {
  console.log(`- ${link.textContent.trim()}: ${link.href}`);
});

// 3. Informações de contato na topbar
const email = document.querySelector('.bg-primary .fa-envelope-open').parentElement.textContent.trim();
const phone = document.querySelector('.bg-primary .fa-phone-alt').parentElement.textContent.trim();
console.log("\nContato Topbar:");
console.log("Email:", email);
console.log("Telefone:", phone);

// 4. Campos do formulário de login
const inputs = document.querySelectorAll('#loginForm input');
console.log("\nCampos do formulário de login:");
inputs.forEach(input => {
  console.log(`- ${input.id} (${input.type}): ${input.placeholder || ''}`);
});

