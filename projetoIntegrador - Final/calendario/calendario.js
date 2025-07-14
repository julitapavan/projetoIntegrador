
    var calendar;

    $(document).ready(function () {
        // Define o idioma do Moment.js para pt-BR
        moment.locale('pt-BR');

        // Carrega os eventos salvos no localStorage ou começa com array vazio
        let savedEvents = JSON.parse(localStorage.getItem('eventosSalvos')) || [];

        // Inicializa o calendário
        calendar = $('#calendar').fullCalendar({
            locale: 'pt-BR',
            events: savedEvents,
            editable: true,
            droppable: true,
            selectable: true,

            // Ao selecionar um intervalo de dias
            select: function (start, end) {
                var title = prompt("Título do evento:");
                if (title) {
                    var newEvent = {
                        title: title,
                        start: start.format(),
                        end: end ? end.format() : null
                    };

                    // Adiciona o evento visualmente
                    calendar.fullCalendar('renderEvent', newEvent);

                    // Salva no localStorage
                    salvarEvento(newEvent);
                }
                calendar.fullCalendar('unselect');
            },

            // Ao clicar em um evento
            eventClick: function (event, jsEvent, view) {
                if (confirm("Deseja excluir este evento?")) {
                    calendar.fullCalendar('removeEvents', event._id);
                    removerEvento(event);
                }
            }
        });

        // Botão de adicionar manual
        $('#addEventBtn').click(function () {
            var title = prompt("Título do novo evento:");
            var date = prompt("Data do evento (YYYY-MM-DD):");
            if (title && date) {
                var newEvent = {
                    title: title,
                    start: date
                };

                calendar.fullCalendar('renderEvent', newEvent);
                salvarEvento(newEvent);
            }
        });

        // Função para salvar evento no localStorage
        function salvarEvento(evento) {
            savedEvents.push(evento);
            localStorage.setItem('eventosSalvos', JSON.stringify(savedEvents));
        }

        // Função para remover evento do localStorage
        function removerEvento(eventoRemover) {
            savedEvents = savedEvents.filter(function (evento) {
                return evento.title !== eventoRemover.title || evento.start !== eventoRemover.start;
            });
            localStorage.setItem('eventosSalvos', JSON.stringify(savedEvents));
        }
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