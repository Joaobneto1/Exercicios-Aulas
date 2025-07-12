export class Personagem {
    public nome: string
    public velocidade: number

    constructor(nome: string) {
        this.nome = nome
        this.velocidade = 0
    }

    andar() {
        this.velocidade += 1
    }

    parar() {
        this.velocidade = 0
    }
}