// formValidation.js — Validação e feedback visual de formulário

// Função simples para verificar a validade estrutural de um CPF (sem dígitos verificadores)
function isCPFValido(cpf) {
    // Remove caracteres não numéricos
    const limpo = cpf.replace(/[^\d]/g, ''); 
    // Aceita 11 dígitos
    return limpo.length === 11;
}

export function validarFormulario(event) {
    event.preventDefault();

    const campos = event.target.querySelectorAll("input[required]");
    let valido = true;

    campos.forEach(campo => {
        removerAviso(campo); // Limpa avisos anteriores
        
        // 1. Validação de Campo Vazio
        if (!campo.value.trim()) {
            valido = false;
            mostrarAviso(campo, "Campo obrigatório!");
            return;
        }

        // 2. Validação de CPF Específica
        if (campo.id === 'cpf' && !isCPFValido(campo.value)) {
            valido = false;
            mostrarAviso(campo, "CPF inválido ou incompleto (ex: 000.000.000-00).");
            return;
        }
        
        // 3. Validação de E-mail (se HTML5 pattern não for suficiente)
        // (A validação nativa do input type="email" geralmente é suficiente)

        // Se passar, remove erro visual (classe 'erro' precisa de CSS)
        campo.classList.remove("erro");
    });

    if (valido) {
        // Usa a classe 'sucesso' para feedback visual (requer CSS)
        alert("🎉 Cadastro enviado com sucesso! Retornando ao Início.");
        event.target.reset();

        // Volta para a página inicial
        navegarPara('index.html');
    }
}

function mostrarAviso(campo, mensagem) {
    campo.classList.add("erro");
    const span = document.createElement("span");
    span.className = "aviso erro-texto"; // Classe para feedback visual (requer CSS)
    span.setAttribute('aria-live', 'assertive'); // Acessibilidade: ler aviso
    span.textContent = mensagem;
    campo.insertAdjacentElement("afterend", span);
}

function removerAviso(campo) {
    campo.classList.remove("erro");
    const aviso = campo.parentNode.querySelector(".erro-texto");
    if (aviso) aviso.remove();
}