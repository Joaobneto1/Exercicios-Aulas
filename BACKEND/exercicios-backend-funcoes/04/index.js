const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar(valor) {
        const valorCents = Math.round(valor / 100);
        this.saldo += valorCents;
        this.historicos.push({ tipo: "Deposito", valor: valorCents });
        console.log(`Depósito de R$${valorCents} realizado para o cliente: ${this.nome}`);
    },
    sacar(valor) {
        const valorCents = Math.round(valor / 100);
        if (valorCents > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            this.saldo -= valorCents;
            this.historicos.push({ tipo: "Saque", valor: valorCents });
            console.log(`Saque de R$${valorCents} realizado para o cliente: ${this.nome}`);
        }
    },
    extrato() {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo}`);
        for (const historico of this.historicos) {
            console.log(`${historico.tipo} de R$${historico.valor}`);
        }
    },
};

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();