const alturaEmCm = 175;

if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("Voce esta aprovado e na posiçao de LIBERO");
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("Voce esta aprovado e na posiçao de PONTEIRO");
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("Voce esta aprovado e na posiçao de OPOSTO");
} else if (alturaEmCm > 205) {
    console.log("Voce esta aprovado e na posiçao de CENTRAL");
} else {
    console.log("Voce esta reprovado");
}