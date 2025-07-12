export type Pessoa = {
    nome: string,
    email: string,
    telefone: string,
    senha: string,
}

export class Usuario {
    public nome: string
    public email: string
    public telefone: string
    private senha: string

    constructor(pessoa: Pessoa) {
        this.nome = pessoa.nome
        this.email = pessoa.email
        this.telefone = pessoa.telefone
        this.senha = pessoa.senha
    }

    autenticar(senha: string): string {
        if (this.senha === senha) {
            return 'Usuario Logado'
        }
        return 'Senha Invalida'
    }
}