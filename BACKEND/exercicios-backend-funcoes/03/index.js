const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function calcularTotalDeItens() {
        const totalItens = this.produtos.reduce((acumulador, itens) => { return acumulador + itens.qtd }, 0)
        console.log(totalItens);
    },
    calcularTotalAPagar: function calcularTotalAPagar() {
        const totalUnit = this.produtos.reduce((acumulador, produto) => { return (acumulador + produto.qtd * produto.precoUnit) }, 0)
        const trueUnit = totalUnit / 100
        console.log(trueUnit.toFixed(2));
    },
    addProduto: function addProduto() {
        const produtoExistente = this.produtos.find((p) => p.id === produto.id);
        if (produtoExistente) {
            produtoExistente.qtd += produto.qtd;
        } else {
            this.produtos.push(produto);
        }
    },
    calcularDesconto: function calcularDesconto() {
        const totalItens = this.calcularTotalDeItens();
        const totalAPagar = this.calcularTotalAPagar();

        let desconto = 0;

        if (totalItens > 4) {
            let precoBarato = Number.MAX_VALUE;
            for (const produto of this.produto) {
                precoBarato = Math.min(precoBarato, produto.precoUnit);
            }
            desconto += precoBarato;
        }

        if (totalAPagar > 10000) {
            desconto += totalAPagar * 0.1;
        }

        return desconto;
    },
}
