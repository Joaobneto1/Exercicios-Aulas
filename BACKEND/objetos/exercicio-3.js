const produtosConsumidos = [
    {
        nome: "Pão de Alho",
        precoUnit: 1500,
        quantidade: 3
    },
    {
        nome: "Cerveja",
        precoUnit: 1000,
        quantidade: 2
    },
    {
        nome: "Água",
        precoUnit: 500,
        quantidade: 1
    }
];

const cartao = {
    nomeDoCliente: "Joao",
    idade: 20,
    produtosConsumidos
}


console.log(cartao.nomeDoCliente);
console.log(cartao.idade);
cartao.idade = 22;
console.log(cartao.idade);
console.log(cartao.produtosConsumidos[0].nome);
console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);