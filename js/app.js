// app.js — Controlador principal da aplicação SPA e inicialização de módulos
import { navegarPara } from "./router.js";
import { validarFormulario } from "./formValidation.js";
import { carregarTemaSalvo, toggleTema } from "./utils.js";

document.addEventListener('DOMContentLoaded', () => {

    // =======================================
    // 1. Inicialização do Tema (Acessibilidade)
    // =======================================
    carregarTemaSalvo();

    const btnContraste = document.getElementById('modoAcessivel');
    if (btnContraste) {
        btnContraste.addEventListener('click', toggleTema);
    }
    
    // =======================================
    // 2. Configuração da Navegação SPA
    // =======================================
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const pagina = link.getAttribute("href");
            navegarPara(pagina);
        });
    });

    // =======================================
    // 3. Configuração da Validação do Formulário
    // =======================================
    // Como a navegação SPA injeta o formulário, precisamos de um evento para re-vincular
    // o listener após o conteúdo ser carregado. 
    // Para simplificar, vinculamos o listener ao elemento 'main' e usamos event delegation.
    
    document.querySelector('main').addEventListener('submit', event => {
        if (event.target.id === 'formCadastro') {
            validarFormulario(event);
        }
    });

    // =======================================
    // 4. Carregamento Inicial
    // =======================================
    // Navega para a página atual na URL (ex: index.html) ao carregar,
    // garantindo que o conteúdo esteja no MAIN (necessário se o MAIN estiver vazio)
    navegarPara(document.location.pathname);
});