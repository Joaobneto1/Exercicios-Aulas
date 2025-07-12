const express = require('express');
const { listagemDeCarros, obterCarro } = require('./controladores/carros');

const app = express();

app.get('/carros', listagemDeCarros);
app.get('/carros/:id', obterCarro);

app.listen(3000);