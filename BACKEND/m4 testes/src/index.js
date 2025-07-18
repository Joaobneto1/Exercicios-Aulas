require('dotenv').config();
const express = require('express');
const rotas = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(process.env.PORT);