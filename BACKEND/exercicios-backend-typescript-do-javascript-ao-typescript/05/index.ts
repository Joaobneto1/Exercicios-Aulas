const filtroNumerosPares = (numeros: number[]): number[] => {
    const numerosPares = numeros.filter((numero) => {
        return numero % 2 === 0;
    });

    return numerosPares
};

const numeros: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44];

console.log(filtroNumerosPares(numeros));
