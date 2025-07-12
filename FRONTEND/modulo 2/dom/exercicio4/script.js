const elementoBotao = document.querySelector(".btn");
elementoBotao.onclick = (event) => {
  console.log("btn foi clicado");
  const botao = event.target;
  console.log(botao.style.backgroundColor);
  if (botao.style.backgroundColor !== "red") {
    botao.style.backgroundColor = "red";
    document.body.style.backgroundColor = "blue";
  } else {
    botao.style.backgroundColor = "rgb(240, 240, 240)";
    document.body.style.backgroundColor = "#fff";
  }
};
