function replaceALL(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}


const texto = "Aprenda programar do zero na Cubos Academy";

console.log(replaceALL(texto, " ", "-").toLowerCase());