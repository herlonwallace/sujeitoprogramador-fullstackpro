
class Loja{
    //Atributos da nossa classe
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome
        this.categoria = categoria
    }
}

const reBurguer = new Loja("Red Burguer", "lanches")

console.log(reBurguer.nome)