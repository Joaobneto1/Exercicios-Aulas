type TBase = {
    id: number
}

export abstract class Base<T extends TBase> {
    protected tabela: T[] = []

    listar(): T[] {
        return this.tabela
    }

    detalhar(id: number): T | undefined {
        return this.tabela.find(elemento => elemento.id === id)
    }

    cadastrar(objeto: T): void {
        this.tabela.push(objeto)
    }

    editar(id: number, objeto: Omit<T, 'id'>): void {
        const obj = this.tabela.find(element => element.id === id)

        const indiceObj = this.tabela.findIndex(element => element.id === id)

        if (obj) {
            const novoObj = Object.assign(obj, objeto)
            this.tabela.splice(indiceObj, 1, novoObj)
        }
    }

    excluir(id: number): void {
        const indiceObj = this.tabela.findIndex(element => element.id === id)

        this.tabela.splice(indiceObj, 1)
    }
}