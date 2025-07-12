import { Pessoa } from "./Pessoa";


const pessoa = new Pessoa()


pessoa.cadastrar({
    id: 1,
    nome: 'joao',
    email: 'joao@email.com'
})

pessoa.cadastrar({
    id: 2,
    nome: 'julia',
    email: 'julia@email.com'
})

pessoa.editar(1, {
    nome: 'joao batista',
    email: 'joaob@email.com'
})

console.log(pessoa.listar());
