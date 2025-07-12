const elemento = document.querySelector("h1");

elemento.textContent = "Olá Debug";

function calcular(n1, n2) {
  soma(n1, n2);
}

calcular(10, 20);

async function buscarTodos() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/todos");
  const respostaFormatada = await resposta;
  console.log(respostaFormatada);
}

buscarTodos();
