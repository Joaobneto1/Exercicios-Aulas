const { alunos } = require('../bancodedados/alunos');

let identificador = 0

const listarAlunos = (req, res) => {
    res.status(200).send(alunos);
}

const listarAlunosPorId = (req, res) => {
    const { id } = req.params

    if (Number(id) > identificador) return res.status(400).send('ID inválido');

    const filtroAluno = alunos.find(element => element.id === Number(id));
    if (!filtroAluno) return res.status(404).send('Aluno não encontrado');

    res.status(400).send(filtroAluno);
}

const criarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome || !sobrenome || !idade || !curso) return res.status(400).send('Falta de dados!');

    if (nome.length <= 1 || sobrenome.length <= 1 || !curso.length <= 1) return res.status(400).send('Há campos em branco');

    if (idade < 18) return res.status(400).send('Idade menor que 18');

    alunos.push({ id: identificador, nome, sobrenome, idade, curso })
    identificador++
    console.log(alunos, identificador);
    res.status(201).send('Aluno Criado');
}

const deletarAluno = (req, res) => {
    const { id } = req.params

    if (Number(id) > identificador) return res.status(400).send('ID inválido')

    const filtroAluno = alunos.find(element => element.id === Number(id));
    if (!filtroAluno) return res.status(400).send('Aluno excluido não encontrado');

    const indice = alunos.findIndex(element => element.id === Number(id));
    alunos.splice(indice, 1);
    res.status(200).send(alunos);
}

module.exports = {
    listarAlunos,
    listarAlunosPorId,
    criarAluno,
    deletarAluno
}