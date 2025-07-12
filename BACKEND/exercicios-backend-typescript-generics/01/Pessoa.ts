import { Base } from "./Base"


type TPessoa = {
    id: number
    nome: string
    email: string
}

export class Pessoa extends Base<TPessoa> {
    listarPeloEmail(email: string) {
        return this.tabela.find(element => element.email === email)
    }
}