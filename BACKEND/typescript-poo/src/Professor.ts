import { Aluno } from "./Aluno";
import { TUsuario, Usuario } from "./Usuario";

interface IProfessor {
    lancarNota(aluno: Aluno, nota: number): void
}

export class Professor extends Usuario implements IProfessor {
    disciplina: string

    constructor(dados: TUsuario, disciplina: string) {
        super(dados)
        this.disciplina = disciplina
    }
    lancarNota(aluno: Aluno, nota: number): void {
        this.verificarLogin()
        aluno.notas.push(nota)
    }

    private verificarLogin(): void {
        if (!this.logado) {
            throw new Error('Professor não autenticado')
        }
    }
}