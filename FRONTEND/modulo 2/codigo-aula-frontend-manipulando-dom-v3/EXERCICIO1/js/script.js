const inputCadastrar = document.querySelector("input");
const botaoCadastrar = document.querySelector("button");
const elementoUl = document.querySelector("ul");

function limparInputCadastrar() {
  inputCadastrar.value = "";
}

function injetarElementoNoHTML(elementoPai, novoElemnto) {
  elementoPai.appendChild(novoElemnto);
}

function criarElemento(tagName, texto) {
  const elemento = document.createElement(tagName);
  if (texto) {
    elemento.textContent = texto;
  }
  return elemento;
}

botaoCadastrar.onclick = function () {
  // verificando o valor do input
  if (inputCadastrar.value.length <= 0) {
    inputCadastrar.classList.add("borda-vermelha");
    return;
  }

  // criar uma li
  const novaLi = criarElemento("li");

  // criou o botão de excluir
  const botaoExcluir = criarElemento("button", "Excluir");

  botaoExcluir.onclick = function () {
    novaLi.remove();
  };

  const elementoSpan = criarElemento("span", inputCadastrar.value);

  // injetar na novaLi elementoSpan e botaoExcluir
  injetarElementoNoHTML(novaLi, elementoSpan);
  injetarElementoNoHTML(novaLi, botaoExcluir);

  // criando o evento de clique para li
  novaLi.onclick = function (event) {
    const elemento = event.target;

    if (elemento.nodeName == "LI") {
      elemento.classList.toggle("comprado");
    } else {
      elemento.parentElement.classList.toggle("comprado");
    }
  };

  // injetando li na ul
  injetarElementoNoHTML(elementoUl, novaLi);

  //limpando o input de cadastro
  limparInputCadastrar();
};
