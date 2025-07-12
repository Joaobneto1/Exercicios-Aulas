const express = require('express');

const rotas = express();

const controladorProduto = require('./controladores/controlador');

rotas.get('/produtos', controladorProduto.listagemProdutos);

rotas.get('/produtos/:idProduto', controladorProduto.listagemProdutosPorId);

rotas.get('/produtos/:idProduto/frete/:cep', controladorProduto.calculoDoFrete);

module.exports = rotas