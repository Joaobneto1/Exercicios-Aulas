const palavra = 'Alemana';

let encontrado = false

for (let letra of palavra) {
    if (letra === 'h') {
        console.log('Tem a letra h');
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log('Nao tem h');
}
