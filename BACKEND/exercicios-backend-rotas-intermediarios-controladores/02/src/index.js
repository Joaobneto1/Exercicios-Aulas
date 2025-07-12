const express = require('express');

const app = express();

const { rodada, remocao, adicionado } = require('./controladores/recursos');



app.get('/', rodada);

app.get('/remover', remocao);

app.get('/adicionar', adicionado);



app.listen(8000);