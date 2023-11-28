document.addEventListener("DOMContentLoaded", function () {
  const diasMes = document.querySelector(".dias")
  const hoje = new Date()
  const mesAtual = hoje.getMonth()
  const anoAtual = hoje.getFullYear()

  function diasNoMes(mes, ano) {
    return new Date(ano, mes + 1, 0).getDate()
  }

  function obterTextoAleatorio() {
    const textos = [
      "Fulano da Silva chegou pontualmente às 9h para mais um dia de aula",
      "Fulano da Silva, infelizmente, chegou atrasado hoje, por volta das 9h15",
      "Fulano da Silva começou o dia com o pé direito, chegando na escola às 8h30",
      "Fulano da Silva apesar do trânsito, conseguiu chegar na hora, às 9h",
      "Fulano da Silva teve problemas no transporte e chegou atrasado, por volta das 10h",
      "Fulano da Silva foi o primeiro a chegar, pontualmente às 8h50",
    ]

    return textos[Math.floor(Math.random() * textos.length)]
  }

  function preencherDias() {
    const primeiroDiaMes = new Date(anoAtual, mesAtual, 1).getDay()
    const totalDiasMes = diasNoMes(mesAtual, anoAtual)
    const ultimoDiaMes = diasNoMes(mesAtual, anoAtual)

    // Preencher dias do mês anterior
    const ultimoDiaMesAnterior = diasNoMes(mesAtual - 1, anoAtual)
    for (let i = primeiroDiaMes - 1; i >= 0; i--) {
      const dia = document.createElement("div")
      dia.classList.add("other-month")
      dia.textContent = ultimoDiaMesAnterior - i
      diasMes.appendChild(dia)
    }

    // Preencher dias do mês atual
    for (let i = 1; i <= totalDiasMes; i++) {
      const dia = document.createElement("div")
      dia.textContent = i
      diasMes.appendChild(dia)

      // Adiciona um ouvinte de evento para cada dia
      dia.addEventListener("click", function () {
        const conteudoDia = document.getElementById("conteudo-dia")
        conteudoDia.textContent = obterTextoAleatorio()

        const modal = document.getElementById("detalhes-dia")
        modal.style.display = "block"
      })
    }

    // Preencher dias do próximo mês
    const ultimoDiaSemana = new Date(anoAtual, mesAtual, totalDiasMes).getDay()
    const diasProximoMes = 6 - ultimoDiaSemana
    for (let i = 1; i <= diasProximoMes; i++) {
      const dia = document.createElement("div")
      dia.classList.add("other-month")
      dia.textContent = i
      diasMes.appendChild(dia)
    }
  }

  preencherDias()

  const fecharModal = document.querySelector(".fechar")
  fecharModal.addEventListener("click", function () {
    const modal = document.getElementById("detalhes-dia")
    modal.style.display = "none"
  })

  window.addEventListener("click", function (event) {
    const modal = document.getElementById("detalhes-dia")
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })
})



//

 // Função para rolar suavemente até o elemento alvo
      function scrollToElement(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Adicione um ouvinte de clique aos links do menu
      document.addEventListener('DOMContentLoaded', function () {
        var menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(function (link) {
          link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão de navegação
            var targetElementId = link.getAttribute('href').substring(1);
            scrollToElement(targetElementId);
          });
        });
      });