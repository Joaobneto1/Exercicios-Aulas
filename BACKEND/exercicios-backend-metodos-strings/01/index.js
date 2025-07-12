const comentario = "Esse cu é muito perigoso!";
comentario.toUpperCase();

if (comentario.includes("PANDEMIA") || comentario.includes("COVID") || comentario.includes("pandemia") || comentario.includes("covid")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário sem nenhuma palavra proibida");
}