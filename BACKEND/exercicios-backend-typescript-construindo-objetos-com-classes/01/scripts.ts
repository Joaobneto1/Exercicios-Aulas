class Calculadora {
    private numero1: number
    private numero2: number

    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1
        this.numero2 = numero2
    }

    somar(): number {
        return this.numero1 + this.numero2
    }

    subtrair(): number {
        return this.numero1 - this.numero2
    }

    multiplicar(): number {
        return this.numero1 * this.numero2
    }

    dividir(): number {
        return this.numero1 / this.numero2
    }
}

const calculadora = new Calculadora(10, 5)
console.log(calculadora.dividir());
