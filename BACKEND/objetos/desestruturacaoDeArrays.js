const array = [1, 2, 3, 4, 5, 6];

// const [a, ...resto, b] = array; não funciona

const [a, b, ...resto] = array;

console.log(a, b, resto);