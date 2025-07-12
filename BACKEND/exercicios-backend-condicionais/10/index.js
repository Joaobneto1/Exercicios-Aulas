const caractere = "1024324";
let number = Number(caractere);

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log(`Vogal Maiuscula : ${caractere}`);
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log(`Vogal Minuscula : ${caractere}`);
} else if (typeof (number) === "number" && number >= 0) {
    console.log(`Numero : ${number}`);
} else {
    console.log(`Consoante : ${caractere}`);
}
