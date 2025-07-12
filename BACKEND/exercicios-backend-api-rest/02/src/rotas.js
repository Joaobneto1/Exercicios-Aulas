const express = require('express');
const bodyParser = require('body-parser');
const { listarConvidados, adicionarConvidado, deletarConvidado } = require('../controladores/controlador');

const rotas = express();

rotas.use(bodyParser.json());

rotas.get('/convidados', listarConvidados);

rotas.post('/convidados', adicionarConvidado);

rotas.delete('/convidados/:nome', deletarConvidado);

module.exports = rotas