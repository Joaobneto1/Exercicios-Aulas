const nomes = ['joao', 'maria', 'jose', 'rodrigo'];
const numeros = [1, 5, 9, 7];

// const resultado = nomes.some((nome) => {
//     return nome === 'joao';
// });

const resultado = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(resultado);