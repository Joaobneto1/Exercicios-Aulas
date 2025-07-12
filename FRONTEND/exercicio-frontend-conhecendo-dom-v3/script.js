const pessoas = [{
    nome: 'Gabriela da Silva',
    profissao: 'Desenvolvedora Fullstack',
    descricao: '“Estive interessada em código por um tempo mas não tomava uma atitude, até agora. Não consigo recomendar esse curso o suficiente. Estou no trabalho dos meu sonhos e vejo um futuro brilhante!”',
    foto: 'pessoa.jpg'

}, {
    nome: 'João Nogueira',
    profissao: 'Desenvolvedor Front-end',
    descricao: '“Se você quiser ter a melhor base possível, recomendo fazer este curso. A profundidade em que os instrutores entram é incrível. Agora me sinto muito confiante em começar como um desenvolvedor profissional.”',
    foto: 'pessoa2.jpg'
}];

let indexAtual = 0;
const ultimoIndex = pessoas.length - 1;

const dadosPessoasAtt = () => {
    const pessoaAtual = pessoas[indexAtual];
    document.querySelector('.container__imagem').src = pessoaAtual.foto
    document.querySelector('.autor__texto').textContent = pessoaAtual.descricao
    document.querySelector('.autor__nome').textContent = pessoaAtual.nome
    document.querySelector('.autor__titulo').textContent = pessoaAtual.profissao
}

const pessoaAnterior = () => {
    if (indexAtual === 0) {
        indexAtual = ultimoIndex;
    } else {
        indexAtual--;
    }
    dadosPessoasAtt();
}

const proximaPessoa = () => {
    if (indexAtual === ultimoIndex) {
        indexAtual = 0;
    } else {
        indexAtual++;
    }
    dadosPessoasAtt();
}