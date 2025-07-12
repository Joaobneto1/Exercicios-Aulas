export type Animal = {
    nome: string,
    peso: number,
    altura: number,
    comprimento: number
}



export class Mamifero {
    public nome: string
    public peso: number
    public altura: number
    public comprimento: number

    constructor(animal: Animal) {
        this.nome = animal.nome
        this.peso = animal.peso
        this.altura = animal.altura
        this.comprimento = animal.comprimento
    }


    comer() {
        return 'Animal Comendo'
    }
}