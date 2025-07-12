const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length < 5) {
    let mudançaDeFila = filaDeFora.shift()
    filaDeDentro.push(mudançaDeFila)
}

console.log(`${filaDeDentro}\n${filaDeFora}`);