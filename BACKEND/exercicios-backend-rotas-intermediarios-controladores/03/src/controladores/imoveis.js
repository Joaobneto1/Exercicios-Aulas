const imoveis = require('../dados/imoveis');

const mostrarImovel = (req, res) => {
    res.send(imoveis);
}

const mostrarImoveisId = (req, res) => {
    const imovelObtido = imoveis.find(function (imovel) {
        return imovel.id === Number(req.params.id)
    })
    res.send(imovelObtido)
}

module.exports = {
    mostrarImovel,
    mostrarImoveisId
}