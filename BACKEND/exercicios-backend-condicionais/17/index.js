//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;


let valorDaParcela = (valorDoProduto / 100) / quantidadeDoParcelamento

let faltaDeParcelas = quantidadeDoParcelamento - Math.ceil(valorPago / valorDaParcela);

console.log(`Restam ${faltaDeParcelas} parcelas de ${valorDaParcela.toFixed(2)}`);