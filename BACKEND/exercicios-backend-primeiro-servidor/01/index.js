const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let vezDeJogar = 1;

app.get('/', (req, res) => {
    vezDeJogar = (vezDeJogar + 1) % jogadores.length
    res.send(`É a vez de ${jogadores[vezDeJogar]} jogar!`)
});

app.listen(3000);