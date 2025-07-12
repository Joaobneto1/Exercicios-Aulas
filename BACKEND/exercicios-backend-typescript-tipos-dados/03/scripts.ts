const tabuada = (numeros: number[]): string => {
    let resultado: string = '';

    for (const n of numeros) {
        for (let i = 0; i <= 10; i++) {
            resultado += `${n} X ${i} = ${n * i} \n`;

            if (i === 10) {
                resultado += '--------------------- \n'
            }
        }
    }

    return resultado;
}

console.log(tabuada([1, 2, 3, 4, 5, 6]));
