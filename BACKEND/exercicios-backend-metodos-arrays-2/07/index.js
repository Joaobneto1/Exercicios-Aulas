const endereços = [
    { cep: 111222, rua: "Rua dos Artistas" },
    { cep: 111333, rua: "Rua Augusta" },
    { cep: 222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const endereço = endereços.find(element => element.cep === 222444);

console.log(endereço.rua);