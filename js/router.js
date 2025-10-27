// router.js — Sistema simples de navegação SPA
export function navegarPara(pagina) {
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      document.querySelector("main").innerHTML = extrairConteudo(html);
      window.history.pushState({}, "", pagina);
    })
    .catch(err => console.error("Erro ao carregar página:", err));
}

// Extrai apenas o conteúdo <main> da página carregada
function extrairConteudo(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.querySelector("main").innerHTML;
}
