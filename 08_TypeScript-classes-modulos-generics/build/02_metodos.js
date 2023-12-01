"use strict";
class Loja2 {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa) {
        return `Pedido na mesa: ${mesa}`;
    }
}
const reBurguer2 = new Loja2("Red Burguer", "lanches");
// console.log(reBurguer.nome)
//reBurguer2.criarLoja()
const retornoLoja = reBurguer2.emitirPedido(67);
console.log(retornoLoja);
