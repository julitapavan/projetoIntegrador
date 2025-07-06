// Objeto para armazenar os dados extraídos
const dados = {};

// Título da Página
dados.titulo = document.title;

// Topbar - Contato
dados.contatoTopbar = {
    email: document.querySelector('.fa-envelope-open')?.parentElement?.innerText.trim(),
    telefone: document.querySelector('.fa-phone-alt')?.parentElement?.innerText.trim()
};

// Navbar - Menu de Navegação
dados.navbar = Array.from(document.querySelectorAll('.navbar-nav .nav-link')).map(link => ({
    texto: link.innerText.trim(),
    href: link.getAttribute('href')
}));

// Formulário de Recuperação de Senha
const form = document.querySelector('form[action="senha.js"]');
if (form) {
    dados.formRecuperacao = {
        titulo: document.querySelector('h2')?.innerText.trim(),
        descricao: document.querySelector('.text-dark')?.innerText.trim(),
        campoEmail: {
            label: document.querySelector('label[for="email"]')?.innerText.trim(),
            placeholder: document.querySelector('input[type="email"]')?.getAttribute('placeholder')
        },
        botaoEnviar: form.querySelector('button[type="submit"]')?.innerText.trim(),
        voltarLogin: document.querySelector('.form-footer a')?.innerText.trim()
    };
}

// Footer - Links úteis
dados.linksRodape = Array.from(document.querySelectorAll('.bg-dark .bi-arrow-right')).map(icon => {
    const link = icon.closest('a');
    return {
        texto: link?.innerText.trim(),
        href: link?.getAttribute('href')
    };
});

// Footer - Contato
dados.contatoRodape = {
    endereco: document.querySelector('.bi-geo-alt')?.parentElement?.innerText.trim(),
    email: document.querySelector('.bi-envelope-open')?.parentElement?.innerText.trim(),
    telefone: document.querySelector('.bi-telephone')?.parentElement?.innerText.trim()
};

// Footer - Redes Sociais
dados.redesSociais = Array.from(document.querySelectorAll('.fab')).map(icon => {
    if (icon.classList.contains('fa-twitter')) return 'Twitter';
    if (icon.classList.contains('fa-facebook-f')) return 'Facebook';
    if (icon.classList.contains('fa-linkedin-in')) return 'LinkedIn';
    if (icon.classList.contains('fa-instagram')) return 'Instagram';
    return 'Outro';
});

// Direitos autorais
dados.direitosAutorais = document.querySelector('.container-fluid.bg-dark.text-secondary.text-center')?.innerText.trim();

// Exibir o resultado no console
console.log(dados);

//

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("#email");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        const email = emailInput.value.trim();

        // Validação básica de e-mail
        if (!validateEmail(email)) {
            showFeedback("Por favor, insira um e-mail válido.", "error");
            return;
        }

        // Simulação de envio de e-mail
        simulateEmailRecovery(email)
            .then((response) => {
                if (response.success) {
                    showFeedback("E-mail de recuperação enviado com sucesso!", "success");
                } else {
                    showFeedback("Erro ao enviar o e-mail. Tente novamente mais tarde.", "error");
                }
            })
            .catch(() => {
                showFeedback("Erro inesperado. Por favor, tente novamente.", "error");
            });
    });

    /**
     * Função para validar e-mail usando regex
     * @param {string} email
     * @returns {boolean}
     */
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Simula o envio de um e-mail de recuperação de senha.
     * @param {string} email
     * @returns {Promise<object>}
     */
    function simulateEmailRecovery(email) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`E-mail de recuperação enviado para: ${email}`);
                resolve({ success: true });
            }, 2000); // Simula um tempo de resposta de 2 segundos
        });
    }

    /**
     * Exibe mensagens de feedback na tela
     * @param {string} message
     * @param {string} type - "success" ou "error"
     */
    function showFeedback(message, type) {
        const feedback = document.createElement("div");
        feedback.className = `feedback ${type}`;
        feedback.textContent = message;

        document.body.appendChild(feedback);

        // Remove a mensagem após 3 segundos
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }
});
