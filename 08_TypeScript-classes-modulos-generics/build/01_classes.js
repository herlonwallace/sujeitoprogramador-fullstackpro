"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
}
const reBurguer = new Loja("Red Burguer", "lanches");
console.log(reBurguer.nome);
