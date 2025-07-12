const nomeArquivo = 'Foto da Familia.jpeg';

const index = nomeArquivo.indexOf(".");

const extensao = nomeArquivo.slice(index + 1, nomeArquivo.length);

if (extensao == "jpg" || extensao == "jpeg" || extensao == "gif" || extensao == "png") {
    console.log("Arquivo válido");
} else {
    console.log("Arquivo inválido");
}
