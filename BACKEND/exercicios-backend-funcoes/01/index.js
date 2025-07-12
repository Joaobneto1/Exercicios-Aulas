const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let qtdAcerto = 0
    for (let i in prova.questoes) {
        if (prova.questoes[i].resposta == prova.questoes[i].correta) {
            qtdAcerto++;
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${qtdAcerto} e obteve nota ${qtdAcerto * 2} `);
}

corrigirProva(prova);