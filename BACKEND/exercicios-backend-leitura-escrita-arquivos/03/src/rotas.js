const express = require('express');

const rotas = express();

const { retornoDoEndereco } = require('./controladores/enderecos');

rotas.get('/enderecos/:cep', retornoDoEndereco);

module.exports = rotas