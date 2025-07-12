const elemento = document.querySelector("h2");

const colecaoDeElementos = document.querySelectorAll("h2");

console.log("elemento", elemento);
console.log("colecaoDeElementos", colecaoDeElementos);

// colecaoDeElementos.forEach((elementoh2) => {
//   console.log("elementoh2", elementoh2);
// });

for (let elementoh2 of colecaoDeElementos) {
  console.log("elementoh2", elementoh2);
}
