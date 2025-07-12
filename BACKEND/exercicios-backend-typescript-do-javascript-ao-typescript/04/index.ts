const cidades: string[] = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const filtroCaracteres = (cidades: string[]): string[] => {
    const resultado = cidades.filter((cidade) => {
        return cidade.length <= 10;
    });

    return resultado
};

console.log(filtroCaracteres(cidades));
