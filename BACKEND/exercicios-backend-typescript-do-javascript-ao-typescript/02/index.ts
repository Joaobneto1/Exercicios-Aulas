const livros: string[] = [
    "Guerra e Paz",
    "A Montanha Mágica",
    "Cem Anos de Solidão",
    "Dom Quixote",
    "A Divina Comédia",
];

const procurarLivro = (livros: string[], nomeLivro: string): string => {
    const posicao: number = livros.indexOf(nomeLivro);

    if (posicao === -1) {
        return 'Livro não encontrado';
    }
    return `O livro está na posição ${posicao + 1}`;
};

console.log(procurarLivro(livros, 'A Divina Comédia'));
