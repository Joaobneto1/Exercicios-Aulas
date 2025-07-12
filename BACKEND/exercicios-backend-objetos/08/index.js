const usuarios = [
    {
        nome: "João",
        pets: [],
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

for (let i in usuarios) {
    if (usuarios[i].pets.length == 0) {
        console.log(`Sou ${usuarios[i].nome} e não tenho pets`);
    } else if (usuarios[i].pets.length == 1) {
        console.log(`Sou ${usuarios[i].nome} e ${usuarios[i].pets.length} tenho pets`);
    } else {
        console.log(`Sou ${usuarios[i].nome} e ${usuarios[i].pets.length} tenho pets`);
    }
}