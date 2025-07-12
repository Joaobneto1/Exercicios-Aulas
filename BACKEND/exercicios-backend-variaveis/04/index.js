let capital = 1000;

let taxaFixa = 0.125;

let tempo = 5;

let montante = capital * ((1 + taxaFixa) **tempo);

console.log(Math.round(montante));