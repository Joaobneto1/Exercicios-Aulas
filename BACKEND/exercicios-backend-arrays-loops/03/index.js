const numeros = [54, 22, 14, 87, 10, 284];

let quantidade = 0;

let indice

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] == 10) {
        quantidade++
        indice = numeros.indexOf(10);
    }
}
if (quantidade > 0) {
    console.log(`O numero 10 esta no indice ${indice}`)
} else {
    console.log(`-1`);
}