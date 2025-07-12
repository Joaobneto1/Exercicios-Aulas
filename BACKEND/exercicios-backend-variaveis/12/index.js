// i(taxa juros) , m(montante) , c(capital incial) , n(numero de meses)

let montante = 90000;

let capitalInical = 60000;

let numeroDeMeses = 24;

let i = (Math.pow(montante/capitalInical, 1/numeroDeMeses) - 1) * 100;

console.log(`O financiamento de ${capitalInical} reais teve uma taxa de juros de ${i.toFixed(4)}%, após ${numeroDeMeses} meses você deve pagar ${montante} reais.`);

