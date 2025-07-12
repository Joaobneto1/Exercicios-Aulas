const express = require('express');

const app = express();
let segundos = 0;
let minutos = 0;
let contagem;

const raiz = () => {
    segundos++
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
};

app.get("/", (req, res) => {
    if (segundos >= 10 && minutos < 10) {
        res.send(`Tempo atual do cronômetro: 0${minutos} minutos e ${segundos} segundos`);
    } else if (minutos >= 10 && segundos < 10) {
        res.send(`Tempo atual do cronômetro: ${minutos} minutos e 0${segundos} segundos`);
    } else if (minutos < 10 && segundos < 10) {
        res.send(`Tempo atual do cronômetro: 0${minutos} minutos e 0${segundos} segundos`);
    } else if (minutos >= 10 && segundos >= 10) {
        res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`);
    }
});

app.get("/iniciar", (req, res) => {
    contagem = setInterval(raiz, 1000);
    res.send("Cronômetro iniciado!");
});
app.get("/pausar", (req, res) => {
    clearInterval(contagem);
    res.send("Cronômetro pausado!");
});
app.get("/continuar", (req, res) => {
    contagem = setInterval(raiz, 1000);
    res.send("Cronômetro continuando!");
});
app.get("/zerar", (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send("Cronômetro zerado!");
});

app.listen(8000);