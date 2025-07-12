import { Animal, Mamifero } from "./Mamifero"

export class Baleia extends Mamifero {
    constructor(animal: Animal) {
        super(animal)
    }

    nadar() {
        return 'Baleia Nadando'
    }
}