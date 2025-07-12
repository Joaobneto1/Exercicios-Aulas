const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];

function novo(array, number) {
    let novoArray = []
    for (let i = number; i < number + 3; i++) {
        novoArray.push(array[i])
    }
    console.log(novoArray.join(" - "));
}

novo(nomes, 3);