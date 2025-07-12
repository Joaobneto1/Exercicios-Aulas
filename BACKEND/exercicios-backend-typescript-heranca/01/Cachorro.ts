import { Animal, Mamifero } from "./Mamifero";

export class Cachorro extends Mamifero {

    constructor(animal: Animal) {
        super(animal)
    }

    latir() {
        return 'Cachorro Latindo'
    }

    andar() {
        return 'Animal Andando'
    }
}