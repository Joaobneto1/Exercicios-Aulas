function imprimirData(dia, mes, ano) {
    // duas opçoes de se transformar number em string
    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = `${mes}`.padStart(2, "0");

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(8, 7, 2021);