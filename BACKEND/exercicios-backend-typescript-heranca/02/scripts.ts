import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const joao = new Professor({
    nome: 'Joao',
    email: 'joao@gmail.com',
    telefone: '123456789',
    senha: '12345'
})

const maria = new Aluno({
    nome: 'Maria',
    email: 'maria@gmail.com',
    telefone: '123456789',
    senha: '12345'
})

console.log(joao.autenticar('12345'));
joao.lancarNotas(maria, 8);
joao.lancarNotas(maria, 10);
console.log(maria.obterMedia());


