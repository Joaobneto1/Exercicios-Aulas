const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const novoArray = cidades.filter(caracteres => caracteres.length <= 8);

console.log(novoArray.join(", "));
