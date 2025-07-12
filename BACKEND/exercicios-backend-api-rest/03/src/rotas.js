const express = require('express');
const bodyParser = require('body-parser');
const {
    listagemLivros,
    listagemLivrosPorId,
    adicionarLivros,
    substituirLivros,
    atualizarLivros,
    removerLivros
} = require('../controladores/controlador');

const rotas = express();

rotas.use(bodyParser.json());

rotas.get('/livros', listagemLivros);
rotas.get('/livros/:id', listagemLivrosPorId);

rotas.post('/livros', adicionarLivros);

rotas.put('/livros/:id', substituirLivros);
rotas.patch('/livos/:id', atualizarLivros);
rotas.delete('/livros/:id', removerLivros);

module.exports = rotas