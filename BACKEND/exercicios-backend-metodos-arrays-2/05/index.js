const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: true,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const filtrarIdade = usuários.filter(filtro => filtro.idade > 18 && filtro.idade < 65);

if (filtrarIdade.every(elemnt => elemnt.habilitado == true)) {
    console.log("Todos passaram no teste.");
} else {
    console.log("Todos precisam estar habilitados");
}