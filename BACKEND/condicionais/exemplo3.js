const temIngresso = true;
const censura = 16;
const idade = 18; 
const estaComOsPais = true;
 
// tem ingresso E
// tem idade maior ou igual a censura OU está com os pais

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar");
    } else {
        console.log("Barrado.");
    }
} else {
    console.log('Barrado.');
}