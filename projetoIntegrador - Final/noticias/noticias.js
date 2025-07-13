


// URL da API de notícias com a chave de API e termos de busca
const apiUrl = 'https://newsapi.org/v2/everything?q=finanças+OR+day+trade+OR+adminstração+OR+bolsa+de+valores+OR+ações+OR+investimentos+OR+economia+OR+criptoativos&apiKey=0316d77287f84d189c7bcccbc8dbb403';

// Função assíncrona para buscar notícias da API
async function fetchNews() {
  try {
    
    const response = await fetch(apiUrl);
    // Converte a resposta para formato JSON
    const data = await response.json();

    // Verifica se a resposta contém a lista de artigos e se não está vazia
    if (data.articles && data.articles.length > 0) {
      // Seleciona o elemento HTML onde as notícias serão exibidas
      const newsList = document.getElementById('newsList');

      // Limpa o conteúdo anterior para atualizar com as novas notícias
      newsList.innerHTML = '';

      // Percorre cada artigo retornado pela API
      data.articles.forEach(article => {
        // Confirma que o artigo tem título, URL, descrição e imagem para exibir
        if (article.title && article.url && article.description && article.urlToImage) {
          // Cria um novo div para o card de notícia
          const newsCard = document.createElement('div');
          // Adiciona classe para estilização responsiva usando Bootstrap
          newsCard.classList.add('col-md-4');

          // Define o conteúdo HTML do card com imagem, título, descrição e link
          newsCard.innerHTML = `
            <div class="news-card">
              <img src="${article.urlToImage}" alt="${article.title}">
              <div class="news-card-body">
                <h5>${article.title}</h5>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Leia mais</a>
              </div>
            </div>
          `;
          // Adiciona o card criado dentro do container de notícias na página
          newsList.appendChild(newsCard);
        }
      });
    } else {
      // Se não encontrar notícias, mostra um alerta para o usuário
      alert('Nenhuma notícia encontrada.');
    }
  } catch (error) {
    // Em caso de erro na requisição ou processamento, exibe no console
    console.error('Erro ao buscar notícias:', error);
  }
}

// Quando a página terminar de carregar, executa a função para buscar notícias
window.onload = fetchNews;

//nome do usuário

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

