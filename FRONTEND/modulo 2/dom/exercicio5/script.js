const colecaoDeLi = document.querySelectorAll("li");
console.log(colecaoDeLi);

for (let li of colecaoDeLi) {
  li.onclick = function (event) {
    const elementoLiClicada = event.target;

    if (elementoLiClicada.style.backgroundColor !== "rgb(204, 204, 204)") {
      elementoLiClicada.style.backgroundColor = "rgb(204, 204, 204)";
      elementoLiClicada.style.textDecoration = "line-through";
      return;
    }

    elementoLiClicada.style.backgroundColor = "#7373e1";
    elementoLiClicada.style.textDecoration = "none";
  };
}
