const numeros = [3, 24, 1, 8, 11, 7, 15];

const maxValue = numeros.reduce(function (prev, current) {
    return prev > current ? prev : current;
});

console.log(maxValue);