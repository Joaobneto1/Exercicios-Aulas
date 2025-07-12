let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

if (identificador !== 6) {
    identificador = identificador.padStart(6, 0);
}

let arrayDeNome = nome.split(" ");

let nomeFormatado = "";
for (let item of arrayDeNome) {
    let primeiraLetra = item.slice(0, 1);
    let restoDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restoDoNome + " ";
}

const objeto = [
    identificador,
    nomeFormatado,
    email.trim()
]

console.log(objeto);