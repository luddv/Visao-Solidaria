// router.js — Sistema simples de navegação SPA
export function navegarPara(pagina, pushHistory = true) {
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      // 1. Injeta o novo conteúdo
      document.querySelector("main").innerHTML = extrairConteudo(html);

      // 2. Atualiza a URL apenas se não for uma navegação do histórico
      if (pushHistory) {
        window.history.pushState({ path: pagina }, "", pagina);
      }

      // 3. Move o foco para o main (Acessibilidade)
      document.querySelector('main').focus();

    })
    .catch(err => console.error("Erro ao carregar página:", err));
}

// Extrai apenas o conteúdo <main> da página carregada
function extrairConteudo(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  // Retorna o conteúdo, garantindo o tabindex:0 para foco inicial de acessibilidade
  return doc.querySelector("main").innerHTML;
}

// Inicializa o listener para o botão Voltar/Avançar do navegador
window.onpopstate = (event) => {
    // Reusa a função navegarPara, mas impede que ela adicione um novo estado ao histórico
    navegarPara(document.location.pathname, false); 
};