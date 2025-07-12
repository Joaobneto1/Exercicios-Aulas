const idade = 18;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = true;

if (idade > 12 && idade < 65 && possuiPatologia == false && altura > 150) {
    if( idade < 18 || ehEstudante == true) {
        console.log("Pode ir brincar e deve pagar 10 reais");
    } else {
        console.log("Deve pagar 20 reais");
    }
} else {
    console.log("Acesso Negado");
}
