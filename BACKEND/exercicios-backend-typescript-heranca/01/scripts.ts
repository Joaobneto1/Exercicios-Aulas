import { Cachorro } from "./Cachorro";

const toto = new Cachorro({
    nome: 'Toto',
    altura: 53,
    comprimento: 76,
    peso: 15
})

console.log(toto);
console.log(toto.comer());
