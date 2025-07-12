const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];

function novo(array, number) {
    const novoArray = []
    for (let i = 0; i < number; i++) {

        novoArray.push(array.shift());
    }
    console.log(`Grupo 1: ${novoArray.join(', ')}\nGrupo 2: ${nomes.join(', ')}`);
}

novo(nomes, 4);