import { Arqueiro } from "./Arqueiro";
import { Mago } from "./Mago";

const guido = new Mago('Guido')
const dani = new Arqueiro('Dani')

console.log(guido);
guido.andar();
guido.andar();
console.log(guido.velocidade);
console.log(guido.usarMagia());

console.log(dani);
dani.contruirFlechas();
console.log(dani.flechas);





