// spread ...


const pessoa = {
    nome: "Joao",
    idade: 20,
    cidade: "Maceio",
    profissao: "Dev",
};

const endereco = {
    rua: "Aqui",
    numero: "32",
    bairro: "Bairro Legal"
};

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
};

console.log(objetoFundido);