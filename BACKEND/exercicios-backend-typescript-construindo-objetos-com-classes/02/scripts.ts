class Lampada {
    private estado: boolean
    private potencia: number

    constructor(potencia: number) {
        this.potencia = potencia
        this.estado = false
    }

    ligar() {
        this.estado = true
    }

    desligar() {
        this.estado = false
    }

    medirPotencia(): number {
        return this.potencia
    }

    verificarEstado(): boolean {
        return this.estado
    }
}

const lampada = new Lampada(30);

console.log(lampada.verificarEstado());
lampada.ligar();
console.log(lampada.verificarEstado());

