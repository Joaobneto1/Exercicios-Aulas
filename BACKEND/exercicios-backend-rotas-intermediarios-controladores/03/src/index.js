const express = require('express');

const app = express();

const { mostrarImovel, mostrarImoveisId } = require('./controladores/imoveis');

app.get('/imoveis', mostrarImovel);

app.get('/imoveis/:id', mostrarImoveisId);

app.listen(8000);