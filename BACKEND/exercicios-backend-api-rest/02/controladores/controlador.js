const { convidados } = require('../bancodedados/convidados');

let identificador = 0
const listarConvidados = (req, res) => {
    const { nome } = req.query

    if (nome) {
        const verificarLista = convidados.find(convidados => convidados === nome)
        if (!verificarLista) return res.send({ "mensagem": "O convidado está na lista" });

        res.send({ mensagem: "Convidado presente" });
    }
    res.status(200).send(convidados);
}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body
    const verificarLista = convidados.find(convidados => convidados === nome)
    if (verificarLista) return res.send({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });

    convidados.push(nome)
    res.send({ "mensagem": "Convidado adicionado" });
}

const deletarConvidado = (req, res) => {
    const { nome } = req.params

    const convidadoExcluido = convidados.find(element => element === nome);
    if (!convidadoExcluido) return res.send({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." });

    const indice = convidados.findIndex(element => element === nome);
    convidados.splice(indice, 1);
    res.status(200).send({ "mensagem": "Convidado removido" });
}

module.exports = {
    listarConvidados,
    adicionarConvidado,
    deletarConvidado
}