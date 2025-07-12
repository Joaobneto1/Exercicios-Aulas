const nome = 'Guido Cerqueira';

function nickname(nome){
    let nick = "@" + nome.slice(0, nome.length - 2).replace(/ /g, "").toLocaleLowerCase()

    console.log(nick);
}

nickname(nome);