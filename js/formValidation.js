// formValidation.js — Validação e feedback visual de formulário

export function validarFormulario(event) {
  event.preventDefault();

  const campos = event.target.querySelectorAll("input[required]");
  let valido = true;

  campos.forEach(campo => {
    if (!campo.value.trim()) {
      campo.classList.add("erro");
      mostrarAviso(campo, "Campo obrigatório!");
      valido = false;
    } else {
      campo.classList.remove("erro");
      removerAviso(campo);
    }
  });

  if (valido) {
    alert("Cadastro enviado com sucesso!");
    event.target.reset();
  }
}

function mostrarAviso(campo, mensagem) {
  removerAviso(campo);
  const span = document.createElement("span");
  span.className = "aviso";
  span.textContent = mensagem;
  campo.insertAdjacentElement("afterend", span);
}

function removerAviso(campo) {
  const aviso = campo.parentNode.querySelector(".aviso");
  if (aviso) aviso.remove();
}
