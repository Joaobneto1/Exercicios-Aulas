interface IProduto {
    id: number
    descricao: string
    categoria: string
    valor: number
    quantidade: number
}

export class Carrinho {
    private produtos: IProduto[]

    constructor() {
        this.produtos = []
    }

    adicionarProduto(produto: IProduto): void {
        this.produtos.push(produto)
    }

    removerProduto(idProduto: number): string {
        const indiceProdutoEncontrado = this.produtos.findIndex(produto => produto.id === idProduto)

        if (indiceProdutoEncontrado === -1) {
            return 'Produto não encontrado'
        }

        this.produtos.splice(indiceProdutoEncontrado, 1)

        return 'Produto removido'
    }

    alterarQuantidadeProduto(idProduto: number, quantidade: number): string {
        const produtoEncontrado = this.produtos.find(produto => produto.id === idProduto)

        if (!produtoEncontrado) {
            return 'Produto não encontrado'
        }

        produtoEncontrado.quantidade = quantidade

        return `Quantidade de ${produtoEncontrado.descricao} alterado para ${quantidade}`
    }

    resumo(): IProduto[] {
        return this.produtos
    }
}