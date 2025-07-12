// crie uma lista com 5 paises

const paises = ['Brasil', 'Argentina', 'Espanha', 'EUA', 'Chilhe'];
console.log(paises);

// remova um pais do fim da lista

paises.pop();
console.log(paises);

// adicionar um pais ao inicio da lista

paises.unshift('Chile');
console.log(paises);

// remover um pais do inicio da lista

paises.shift();
console.log(paises);

// imprimir o ultimo item da lista
const ultimo = paises[paises.length - 1];
console.log(ultimo);

// imprima o segundo pais da lista
console.log(paises[1]);

//imprima o pais de indice 2
console.log(paises[2]);