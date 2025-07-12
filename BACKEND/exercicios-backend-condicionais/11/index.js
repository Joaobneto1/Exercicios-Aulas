//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10000000;

if (rendaMensalEmCentavos / 100 >= 2000 && mesesDecorridos < 60 && totalJaPagoPeloAluno / 100 > 18.000) {
    console.log(`Deve pagar R$${(rendaMensalEmCentavos / 100 * 18 /100)} reais`);
} else if (rendaMensalEmCentavos / 100 < 2000) {
    console.log(`O valor desta parcela é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
} else if (mesesDecorridos > 60) {
    console.log(`Os 60 meses ja passaram então nenhuma valor é atribuido, o valor da parcela é R$ 0 reais.`);
} else {
    console.log(`Parabens ja quitou a divida completa.`);
}
