const jogada1 = "papel"
const jogada2 = "pedra"

if (jogada1 === "pedra" && jogada2 === "tesoura" ||
    jogada1 === "tesoura" && jogada2 === "papel" ||
    jogada1 === "papel" && jogada2 === "pedra") {
    console.log(`jogada 1 ganhou, sendo ela: ${jogada1}`);
} else if (jogada1 === "pedra" && jogada2 === "pedra" ||
    jogada1 === "papel" && jogada2 === "papel" ||
    jogada1 === "tesoura" && jogada2 === "tesoura") {
    console.log(`Empate, as duas jogadas foram ${jogada1}`);
} else {
    console.log(`jogada 2 ganhou, sendo ela: ${jogada2}`);
}