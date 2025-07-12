const fs = require('fs/promises');
const { buscarEndereco } = require('utils-playground');

const retornoDoEndereco = async (req, res) => {
    try {
        const { cep } = req.params;
        const enderecoUtils = await buscarEndereco(cep);
        const endereco = await fs.readFile('./src/enderecos.json');
        const enderecoJs = JSON.parse(endereco);
        const enderecoEncontrado = enderecoJs.find(endereco => {
            return endereco.cep === enderecoUtils.cep
        })
        if (!enderecoEncontrado) {
            enderecoJs.push(enderecoUtils);
            const enderecoJson = JSON.stringify(enderecoJs);

            await fs.writeFile('./src/enderecos.json', enderecoJson);
        }
        return res.status(200).json(enderecoUtils);
    } catch (erro) {
        return res.status(500).json(`Erro: ${erro.message}`);
    }
}

module.exports = {
    retornoDoEndereco
}