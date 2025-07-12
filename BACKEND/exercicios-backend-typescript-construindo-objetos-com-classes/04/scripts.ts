class Pessoa {
    constructor(
        private nome: string,
        private idade: number,
        private nomePai: string,
        private nomeMae: string,
    ) { }

    irmaos(pessoa: Pessoa): boolean {
        return this.nomePai === pessoa.nomePai || this.nomeMae === pessoa.nomeMae
    }

    maisVelha(pessoa: Pessoa): boolean {
        return this.idade > pessoa.idade
    }
}

const guido = new Pessoa('Guido', 37, 'João', 'Joana');
const ana = new Pessoa('Ana', 32, 'José', 'Joana');

console.log(guido.irmaos(ana));
console.log(guido.maisVelha(ana));