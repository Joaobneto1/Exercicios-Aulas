const express = require('express');
const bodyParser = require('body-parser');

const { listarAlunos, listarAlunosPorId, criarAluno, deletarAluno } = require('../controladores/controlador');
const { verificarSenha } = require('../intermediario/senha');

const rotas = express();

rotas.use(verificarSenha);
rotas.use(bodyParser.json());

rotas.get('/alunos', listarAlunos);
rotas.get('/alunos/:id', listarAlunosPorId);

rotas.post('/alunos', criarAluno);

rotas.delete('/alunos/:id', deletarAluno);

module.exports = rotas