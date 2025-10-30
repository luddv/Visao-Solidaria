// utils.js — Funções utilitárias e gerenciamento de tema

// Chave de armazenamento local para o estado do tema
const TEMA_KEY = 'temaAltoContraste';

/**
 * Aplica o tema alto contraste/modo escuro salvo.
 */
export function carregarTemaSalvo() {
    const temaSalvo = localStorage.getItem(TEMA_KEY);
    if (temaSalvo === 'escuro') {
        document.body.classList.add('modo-escuro');
    }
}

/**
 * Alterna entre os modos normal e alto contraste.
 */
export function toggleTema() {
    document.body.classList.toggle('modo-escuro');
    
    // Salva o estado atual no localStorage
    if (document.body.classList.contains('modo-escuro')) {
        localStorage.setItem(TEMA_KEY, 'escuro');
        console.log("Tema: Alto Contraste (Salvo)");
    } else {
        localStorage.setItem(TEMA_KEY, 'claro');
        console.log("Tema: Normal (Salvo)");
    }
}