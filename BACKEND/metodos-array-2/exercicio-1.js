const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 19 }
];

const ficaslizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });

    if (resultado) {
        console.log('Festa Liberada!');
    } else {
        console.log('Possui menor de idade');
    }
}

ficaslizarFesta(usuarios);