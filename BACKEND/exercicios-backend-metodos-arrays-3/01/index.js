const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]


// A

numeros.sort((a, b) => {
    return a - b;
});

console.log(numeros);

// B

numeros.sort((a, b) => {
    return b - a;
});

console.log(numeros);

// C

numeros.sort();

console.log(numeros);

// D 

frutas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(frutas);

// E

frutas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(frutas);

// F

frutas.sort((a, b) => {
    return a.length - b.length;
});

console.log(frutas);