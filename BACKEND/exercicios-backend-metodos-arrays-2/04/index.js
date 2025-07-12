const numeros = [0, 122, 4, 6, 8, 44]

if (numeros.every(element => element % 2 == 0)) {
    console.log("Array válido");
} else {
    console.log("Array inválido");
}