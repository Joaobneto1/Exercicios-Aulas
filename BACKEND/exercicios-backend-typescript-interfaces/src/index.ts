import { Carrinho } from "./Carrinho"
import { VendaCredito } from "./VendaCredito"
import { VendaDebito } from "./VendaDebito"

const carrinhoGuido = new Carrinho()

carrinhoGuido.adicionarProduto({
    id: 1,
    descricao: 'abacaxi',
    categoria: 'frutas',
    valor: 850,
    quantidade: 1
})

carrinhoGuido.adicionarProduto({
    id: 2,
    descricao: 'uva',
    categoria: 'frutas',
    valor: 400,
    quantidade: 6
})

carrinhoGuido.adicionarProduto({
    id: 3,
    descricao: 'maça',
    categoria: 'frutas',
    valor: 900,
    quantidade: 2
})

console.log(carrinhoGuido.removerProduto(2));
console.log(carrinhoGuido.resumo());

const vendaDebitoGuido = new VendaDebito(carrinhoGuido)
vendaDebitoGuido.aplicarDesconto()
console.log(vendaDebitoGuido.finalizarPedido());