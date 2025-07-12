const frutas = ['abacaxi', 'manga', 'melancia'];
const numeros = [1, 2, 3, 4, 6];

// const resultado = frutas.every((elementoAtual) => {
//     return elementoAtual !== 'banana';
// });

const resultado = numeros.every((numero) => {
    return numero < 5;
});


console.log(resultado);