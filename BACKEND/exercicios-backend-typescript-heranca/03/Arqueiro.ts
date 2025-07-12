import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {
    public flechas: number

    constructor(nome: string) {
        super(nome)
        this.flechas = 5
    }

    lancarFlechas() {
        if (this.flechas <= 0) {
            return 'Flechas Indisponivel'
        }

        this.flechas -= 1
        return 'Flecha Usada'
    }

    contruirFlechas() {
        this.flechas += 1
    }
}