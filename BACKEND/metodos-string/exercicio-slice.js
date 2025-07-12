// Exercicio - Slice

// Quero obter apenas os dois digitos do estado de uma cidade

const cidade = "Salvador-BA";

const penultimoIndex = cidade.length - 2;

let estado = cidade.slice(penultimoIndex);

console.log(estado);