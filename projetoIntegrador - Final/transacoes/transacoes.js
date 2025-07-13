//FUNÇÕES PARA REGISTRAR AS TRANSAÇÕES FEITAS

    // Carregar as transações do LocalStorage ou criar uma lista vazia
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // Função para salvar uma nova transação
    function saveTransaction(event) {
        event.preventDefault();

        // Obter os valores do formulário
        const nomeAcao = document.getElementById('nomeAcao').value;
        const tipoAcao = document.getElementById('tipoAcao').value;
        const dataTransacao = document.getElementById('dataTransacao').value;
        const valorTransacao = parseFloat(document.getElementById('valorTransacao').value);

        // Verificar se todos os campos foram preenchidos
        if (!nomeAcao || !tipoAcao || !dataTransacao || isNaN(valorTransacao)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        // Criar o objeto da transação
        const transaction = { nomeAcao, tipoAcao, dataTransacao, valorTransacao };

        // Adicionar a transação à lista
        transactions.push(transaction);

        // Salvar no LocalStorage
        localStorage.setItem('transactions', JSON.stringify(transactions));

        // Limpar o formulário
        document.querySelector('form').reset();

        // Atualizar a tabela
        renderTransactions();

        // Mensagem de confirmação
        alert("Transação salva com sucesso!");
    }

    // Função para renderizar a tabela de transações
    function renderTransactions() {
        const tableBody = document.getElementById('transactionTableBody');

        // Limpar o corpo da tabela
        tableBody.innerHTML = '';

        // Adicionar cada transação na tabela
        transactions.forEach((transaction, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${transaction.nomeAcao}</td>
                <td>${transaction.tipoAcao}</td>
                <td>${transaction.dataTransacao}</td>
                <td>R$ ${transaction.valorTransacao.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteTransaction(${index})">Excluir</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Função para excluir uma transação
    function deleteTransaction(index) {
        // Remover o item pelo índice
        transactions.splice(index, 1);

        // Atualizar o LocalStorage
        localStorage.setItem('transactions', JSON.stringify(transactions));

        // Re-renderizar a tabela
        renderTransactions();
    }

    // Inicializar a tabela ao carregar a página
    document.addEventListener('DOMContentLoaded', () => {
        renderTransactions();

        // Adicionar evento ao formulário
        document.getElementById('transactionForm').addEventListener('submit', saveTransaction);
    });


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