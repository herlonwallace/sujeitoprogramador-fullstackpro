
class Loja2{
    //Atributos da nossa classe
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome
        this.categoria = categoria
    }

    criarLoja(): void {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
    }

    emitirPedido(mesa: number): string {
        return `Pedido na mesa: ${mesa}`
    }
}

const reBurguer2 = new Loja2("Red Burguer", "lanches")

// console.log(reBurguer.nome)

//reBurguer2.criarLoja()

const retornoLoja = reBurguer2.emitirPedido(67)
console.log(retornoLoja)