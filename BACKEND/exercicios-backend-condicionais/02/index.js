const jogada1 = 28;
const jogada2 = 73;

const somaDasJogadas = (jogada1 + jogada2) % 2;

if (somaDasJogadas == 0) {
    console.log(`A pessoa que escolheu par ganhou, pois a soma da ${jogada1} + ${jogada2} deu ${jogada1 + jogada2}`);
} else {
    console.log(`A pessoa que escolheu impar ganhou, pois a soma da ${jogada1} + ${jogada2} deu ${jogada1 + jogada2}`);
}