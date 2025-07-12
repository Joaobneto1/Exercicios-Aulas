//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento == "credito") {
  console.log(`Opção credito, o valor a ser pagado já com desconto aplicado é de ${valorDoProduto - valorDoProduto * 5 /100} reais`)
} else if(tipoDePagamento == "cheque") {
  console.log(`Opção cheque, o valor a ser pagado já com desconto aplicado é de ${valorDoProduto - valorDoProduto * 3 /100} reais`) 
} else {
  console.log(`Opção debito ou dinheiro, o valor a ser pagado já com desconto aplicado é de ${valorDoProduto - valorDoProduto * 10 /100} reais`) 
}