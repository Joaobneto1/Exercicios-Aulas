import { Animal, Mamifero } from "./Mamifero";

export class Gato extends Mamifero {
    constructor(animal: Animal) {
        super(animal)
    }

    miar() {
        return 'Gato Miando'
    }

    andar() {
        return 'Animal Andando'
    }
}