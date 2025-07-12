const produtos = require('../bancodedados/produtos');

const { getStateFromZipcode } = require('utils-playground');

const listagemProdutos = async (req, res) => {
    try {
        return res.status(200).json(produtos)
    } catch (erro) {
        return res.status(500).json(`Erro do servidor: ${erro.message} `)
    }

};

const listagemProdutosPorId = async (req, res) => {
    try {
        const { idProduto } = req.params;

        const produto = produtos.find(produto => {
            return produto.id === Number(idProduto);
        });

        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não existe.' })
        };

        return res.status(200).json(produto)
    } catch (erro) {
        return res.status(500).json(`Erro do servidor: ${erro.message} `)
    }

};

const calculoDoFrete = async (req, res) => {
    try {
        const { idProduto, cep } = req.params;

        const produto = produtos.find(produto => {
            return produto.id === Number(idProduto);
        });

        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não existe.' });
        };

        const estado = await getStateFromZipcode(cep);

        let frete;

        const estadosComFrete10 = ['BA', 'SE', 'AL', 'PE', 'PB'];
        const estadosComFrete15 = ['RJ', 'SP'];

        if (estadosComFrete10.includes(estado)) {
            frete = produto.valor * 0.1;
        } else if (estadosComFrete15.includes(estado)) {
            frete = produto.valor * 0.15;
        } else {
            frete = produto.valor * 0.12;
        };

        const resposta = {
            produto,
            estado,
            frete
        };

        return res.status(200).json(resposta)
    } catch (erro) {
        return res.status(500).json(`Erro do servidor: ${erro.message} `)
    }


};

module.exports = {
    listagemProdutos,
    listagemProdutosPorId,
    calculoDoFrete
}