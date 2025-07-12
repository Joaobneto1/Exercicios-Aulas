import { Personagem } from "./Personagem";

export class Mago extends Personagem {
    public magia: number

    constructor(nome: string) {
        super(nome)
        this.magia = 5
    }

    usarMagia() {
        if (this.magia <= 0) {
            return 'Magia Indisponivel'
        }

        this.magia -= 1
        return 'Magia Usada'
    }

    criarMagia() {
        this.magia += 1
    }
}