const cadastro = (info?: { nome: string, valor?: number }) => {
    console.log(`Você cadastrou ${info!.nome}`);
}

cadastro({
    nome: 'Gol'
})

// ! non null assertion