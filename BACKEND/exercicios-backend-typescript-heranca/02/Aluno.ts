import { Pessoa, Usuario } from "./Usuario";

export class Aluno extends Usuario {
    private notas: number[]

    constructor(pessoa: Pessoa) {
        super(pessoa)
        this.notas = []
    }

    set setNotas(nota: number) {
        this.notas.push(nota)
    }

    obterMedia() {
        let contador = 0
        let total = 0

        for (const nota of this.notas) {
            total += nota
            contador++
        }

        return total / contador
    }
}