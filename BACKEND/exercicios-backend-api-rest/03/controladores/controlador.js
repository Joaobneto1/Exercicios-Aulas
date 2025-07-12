const { livros } = require('../bancodedados/livros');

let identificador = 1
const listagemLivros = (req, res) => {
    res.status(200).send(livros);
}

const listagemLivrosPorId = (req, res) => {
    const { id } = req.params

    if (Number(id) > identificador) return res.send({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." });

    const livroFiltrado = livros.find(livros => livros.id === Number(id));
    if (!livroFiltrado) return res.send({ "mensagem": "Não existe livro para o ID informado" });

    res.send(livroFiltrado);
}

const adicionarLivros = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    livros.push({
        id: identificador,
        titulo,
        autor,
        ano,
        numPaginas
    })
    identificador++
    res.send(livros);
}

const substituirLivros = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    let verificarLivros = livros.find(livros => livros.id === Number(id));
    if (!verificarLivros) return res.send({ "mensagem": "Não existe livro a ser substituído para o ID informado." });

    verificarLivros.titulo = titulo
    verificarLivros.autor = autor
    verificarLivros.ano = ano
    verificarLivros.numPaginas = numPaginas

    res.status(200).send({ "mensagem": "Livro substituído." });
}

const atualizarLivros = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    const verificarLivros = livros.find(livros => livros.id === Number(id));
    if (!verificarLivros) return res.send({ "mensagem": "Não existe livro a ser alterado para o ID informado." });

    verificarLivros.titulo = titulo ?? verificarLivros.titulo
    verificarLivros.autor = autor ?? verificarLivros.autor
    verificarLivros.ano = ano ?? verificarLivros.ano
    verificarLivros.numPaginas = numPaginas ?? verificarLivros.numPaginas

    res.status(200).send({ "mensagem": "Livro alterado." });
}

const removerLivros = (req, res) => {
    const { id } = req.params
    const verificarLivros = livros.find(livros => livros.id === Number(id));
    if (!verificarLivros) return res.send({ "mensagem": "Não existe livro a ser removido para o ID informado." });

    const indice = livros.findIndex(livros => livros.id === Number(id));
    livros.splice(indice, 1)
    console.log(livros)

    res.status(200).send({ "mensagem": "removido" });

}

module.exports = {
    listagemLivros,
    listagemLivrosPorId,
    adicionarLivros,
    substituirLivros,
    atualizarLivros,
    removerLivros
}