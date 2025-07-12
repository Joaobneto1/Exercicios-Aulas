const original = [1, 4, 12, 21, 53, 88, 112];

let pares = function (item) {
    return !(item % 2);
}

let numerosPar = original.filter(pares);

console.log(numerosPar);