const cadastros = (numero: string | number) => {
    let resultado: string | number;

    if (typeof numero === 'string') {
        resultado = numero.toUpperCase();
    } else {
        resultado = numero.toFixed(2);
    }

    console.log(resultado);
}

cadastros('Guido')
cadastros((2500 / 100))