type Produto = {
    descricao: string,
    valor: number,
    quantidade: number
}

class Fatura {
    private cliente: string
    private transacoes: Produto[] = []

    constructor(cliente: string) {
        this.cliente = cliente
    }

    registrarTransacao(produto: Produto) {
        this.transacoes.push(produto)
    }

    fecharFatura(): string {
        let fatura = `Cliente: ${this.cliente}\n\n`
        let total = 0

        for (const produto of this.transacoes) {
            total += produto.valor * produto.quantidade
            fatura += `${produto.quantidade} - ${produto.descricao} (${produto.valor}) = ${produto.quantidade * produto.valor}\n`
        }

        fatura += `\n\nTotal: ${total}`
        return fatura
    }
}

const faturaGuido = new Fatura('Guido');
faturaGuido.registrarTransacao({
    descricao: 'Camisa Preta',
    valor: 5990,
    quantidade: 2
})

faturaGuido.registrarTransacao({
    descricao: 'Camisa Azul',
    valor: 7900,
    quantidade: 1
})

console.log(faturaGuido.fecharFatura());
