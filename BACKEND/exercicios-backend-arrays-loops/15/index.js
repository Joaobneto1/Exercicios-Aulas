const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const pares = [];
const impares = [];

original.filter(numero => {
    if (numero % 2 == 0) {
        pares.push(numero)
    } else {
        impares.push(numero)
    }
})

console.log(`${pares}\n${impares}`);