const jogadores = require('../bancodedados');

let i = 0;

const rodada = (req, res) => {
    if (i === jogadores.length) {
        i = 0
    }
    res.send(`É a vez de ${jogadores[i]} jogar!`);
    i++
}

const remocao = (req, res) => {
    const { indice } = req.query
    const jogadorRemovido = jogadores[Number(indice)];
    const jogadorExiste = jogadores.includes(jogadorRemovido);

    if (jogadorExiste) {
        jogadores.splice(Number(indice), 1);
        res.send(jogadores);
    } else {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    }
}

const adicionado = (req, res) => {
    const { nome, indice } = req.query

    if (!indice) {
        jogadores.push(nome)
        res.send(jogadores)
    } else if (Number(indice) > jogadores.length) {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`);
    } else {
        jogadores.splice(Number(indice), 0, nome);
        res.send(jogadores);
    }
}

module.exports = {
    rodada,
    remocao,
    adicionado
}