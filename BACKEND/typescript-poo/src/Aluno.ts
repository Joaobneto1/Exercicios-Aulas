import { TUsuario, Usuario } from "./Usuario";

export class Aluno extends Usuario {
    notas: number[]

    constructor(dados: TUsuario) {
        super(dados)
        this.notas = []
    }

    obterMedia(): number {
        let total = 0

        for (const nota of this.notas) {
            total += nota
        }

        return total / this.notas.length
    }
}