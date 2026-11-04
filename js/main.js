/* Save Point — comportamento mínimo da interface (menu do celular e formulário de contato).
   Feito por Teteu 🤓 e Vinícius · AOP2 Front-end · UVV */
(function () {
  "use strict";

  // Menu no celular: o botão abre e fecha a navegação e avisa o leitor de tela pelo aria-expanded.
  var botao = document.querySelector(".menu-botao");
  var menu = document.getElementById("menu");
  if (botao && menu) {
    botao.addEventListener("click", function () {
      var aberto = menu.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
      botao.textContent = aberto ? "✕ Fechar" : "☰ Menu";
    });
  }

  // Formulário de contato: valida no navegador e mostra a confirmação (não há servidor neste trabalho).
  var form = document.getElementById("form-contato");
  var aviso = document.getElementById("mensagem-form");
  if (form && aviso) {
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();                 // nada de recarregar a página
      if (!form.checkValidity()) {             // usa as regras do próprio HTML (required, type=email, minlength)
        form.reportValidity();                 // o navegador aponta o campo com problema
        return;
      }
      var nome = form.elements.nome.value.trim();
      aviso.textContent = "Obrigado, " + nome + "! Sua mensagem foi registrada. Respondemos em até três dias úteis.";
      aviso.classList.add("visivel");
      form.reset();
    });
  }
})();
