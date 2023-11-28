document
  .querySelector(".menu-mobile-icon")
  .addEventListener("click", function (e) {
    var navbar = document.querySelector("#navbar")
    var menuCloseIcon = document.querySelector(".menu-mobile-fechar")

    navbar.classList.toggle("navbar-mobile")
    this.classList.toggle("fa-bars")
    this.classList.toggle("fa-times")

    // Verifica se a classe 'navbar-mobile' está presente, e exibe/oculta o ícone de fechar
    if (navbar.classList.contains("navbar-mobile")) {
      menuCloseIcon.style.display = "block"
    } else {
      menuCloseIcon.style.display = "none"
    }
  })

// Adiciona um evento ao ícone de fechar para fechar o menu quando clicado
document
  .querySelector(".menu-mobile-fechar")
  .addEventListener("click", function () {
    var navbar = document.querySelector("#navbar")
    var menuIcon = document.querySelector(".menu-mobile-icon")

    navbar.classList.remove("navbar-mobile")
    menuIcon.classList.add("fa-bars")
    menuIcon.classList.remove("fa-times")
    this.style.display = "none"
  })

// TESTES ABAIXO:

document.addEventListener("DOMContentLoaded", function () {
  // Função para abrir/fechar o dropdown
  function toggleDropdown(dropdown) {
    dropdown.classList.toggle("show")
  }

  // Função para fechar todos os dropdowns
  function closeAllDropdowns() {
    document
      .querySelectorAll(".navbar .dropdown ul")
      .forEach(function (dropdown) {
        dropdown.classList.remove("show")
      })
  }

  // Aplicando a lógica para o dropdown "Chat"
  var chatDropdownToggle = document.querySelector(".navbar .dropdown > a")
  var chatDropdownList = chatDropdownToggle.nextElementSibling

  chatDropdownToggle.addEventListener("click", function (e) {
    e.preventDefault()

    // Fecha outros dropdowns antes de abrir o clicado
    closeAllDropdowns()

    // Abre/fecha o dropdown clicado
    toggleDropdown(chatDropdownList)
  })

  // Aplicando a lógica para o submenu do dropdown "Chat"
  var chatSubmenuToggle = document.querySelector(
    ".navbar .dropdown .dropdown > a"
  )
  var chatSubmenuList = chatSubmenuToggle.nextElementSibling

  chatSubmenuToggle.addEventListener("click", function (e) {
    e.preventDefault()

    // Fecha outros dropdowns antes de abrir o clicado
    closeAllDropdowns()

    // Abre/fecha o dropdown clicado
    toggleDropdown(chatSubmenuList)
  })
})

const carrossel = document.getElementById("meuCarrossel")
const carrosselInner = carrossel.querySelector(".carrossel-inner")
let slideIndex = 0

function avancarSlide() {
  slideIndex += 2
  if (slideIndex >= carrosselInner.children.length) {
    slideIndex = 0
  }
  const deslocamento = -slideIndex * 50 + "%"
  carrosselInner.style.transform = "translateX(" + deslocamento + ")"
}

setInterval(avancarSlide, 5000) // Altere o valor para ajustar a velocidade do carrossel

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".scrollto")

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      var targetId = this.getAttribute("href").substring(1)
      var targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
})

