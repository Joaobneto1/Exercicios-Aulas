import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

const guido = new Cliente({
    nome: 'Guido',
    email: 'guido@email.com',
    cpf: '12345678900'
})

const maria = new Cliente({
    nome: 'Maria',
    email: 'maria@email.com',
    cpf: '12345678901'
})

const contaPoupancaGuido = new ContaPoupanca({
    cliente: guido,
    numero: '0012-3',
    agencia: '321-3',
    senha: '12345',
    saldo: 50000
})

const contaCorrenteMaria = new ContaCorrente({
    cliente: maria,
    numero: '0012-4',
    agencia: '321-3',
    senha: '12345',
    saldo: 100000
})


// console.log(contaCorrenteMaria.sacar(150000, '12345'));
// console.log(contaCorrenteMaria.sacar(50000, '12345'));
// console.log(contaCorrenteMaria.sacar(1, '12345'));

console.log(contaPoupancaGuido.sacar(50000, '12345'));
console.log(contaPoupancaGuido.depositar(10000));


// console.log(contaPoupancaGuido, contaCorrenteMaria);