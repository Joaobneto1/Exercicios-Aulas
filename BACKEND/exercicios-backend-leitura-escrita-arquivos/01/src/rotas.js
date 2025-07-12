const express = require('express');

const rotas = express();

const controladoresProdutos = require('./controladores/produtos');

rotas.get('/produtos', controladoresProdutos.listagemProdutos);

rotas.get('/produtos/:idProduto', controladoresProdutos.listagemProdutosPorId);

rotas.get('/produtos/:idProduto/frete/:cep', controladoresProdutos.calculoDoFrete);

module.exports = rotas