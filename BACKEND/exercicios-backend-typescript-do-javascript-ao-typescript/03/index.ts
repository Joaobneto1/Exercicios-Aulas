const arrayNumeros: number[] = [0, 122, 4, 6, 8, 44, 98, 64, 88, 21];

const numerosPares = (numeros: number[]): string => {
    const resultado: boolean = numeros.every((numero) => {
        return numero % 2 === 0
    });

    if (resultado) {
        return 'Array válido';
    }

    return 'Array inválido';
};

console.log(numerosPares(arrayNumeros));
