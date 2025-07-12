const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function encontrarDonoDoPet(lista, pet) {
    let petExiste = false
    for (let item of lista) {
        if (item.pets.includes(pet)) {
            petExiste = true
            console.log(`O dono(a) do(a) ${pet} é o(a) ${item.nome}`)
        }
    }

    if (petExiste === false) {
        console.log(`Que pena ${pet}, não encontramos seu dono(a)`)
    }

}

encontrarDonoDoPet(usuarios, 'Naninha')