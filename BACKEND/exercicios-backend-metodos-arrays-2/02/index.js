const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

if (palavras.find(palavra => palavra.length > 5)) {
    console.log('Existe palavra inválida')
} else {
    console.log('Array validado');
}