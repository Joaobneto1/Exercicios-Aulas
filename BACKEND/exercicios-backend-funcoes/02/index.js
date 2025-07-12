const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function ligar() {
        if (this.ligado == true) {
            console.log('Este carro ja esta ligado.');
        } else {
            this.ligado == true
            console.log(`Carro ligado com uma velocidade de : ${this.velocidade}`);
        }
    },
    desligar: function desligar() {
        if (this.ligado == false) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado == false
            this.velocidade = 0
            console.log(`Carro ligado com uma velocidade de : ${this.velocidade}`);
        }
    },
    acelerar: function acelerar() {
        if (this.ligado == false) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            this.velocidade += 10
            console.log(`Carro ligado com uma velocidade de ${this.velocidade}`)
        }
    },
    desacelerar: function desacelerar() {
        if (this.ligado == false) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10
            console.log(`Carro ligado com uma velocidade de ${this.velocidade}`);
        }
    }
}

carro.desligar()
carro.ligar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()