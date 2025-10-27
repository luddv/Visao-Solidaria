// app.js — Controlador principal da aplicação SPA
import { navegarPara } from "./router.js";
import { validarFormulario } from "./formValidation.js";

// Manipula cliques nos links do menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const pagina = link.getAttribute("href");
    navegarPara(pagina);
  });
});

// Chama a validação do formulário quando a página é de cadastro
if (window.location.pathname.includes("cadastro.html")) {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", validarFormulario);
  }
}
