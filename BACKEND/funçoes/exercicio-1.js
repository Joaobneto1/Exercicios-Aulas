const dados = {
    nome: "Joâo",
    idade: 12,
    profissao: "Estudante",
    altura: 1.4
}

function apresentar(pessoa) {
    console.log(`Olá! meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m e sou ${pessoa.profissao}`);
}

apresentar(dados);