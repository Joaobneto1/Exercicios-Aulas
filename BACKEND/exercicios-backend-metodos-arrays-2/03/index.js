const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

if (palavras.some(bebida => bebida === "cerveja" || bebida === "vodka")) {
    console.log("Revise sua lista, joão. possui bebida com venda proibida!");
} else {
    console.log("Tudo certo, vamos as compras!");
}