function somar(...resto) {
  return resto.reduce((acc, n) => (acc += n), 0);
}
console.log(somar(1, 2, 3)); // 6
console.log(somar(1, 2, 3, 5, 6)); // 7

const numeros = [1, 2, 3, 4, 5];

const [n1, ...restoDosNumeros] = numeros;

console.log(restoDosNumeros);
