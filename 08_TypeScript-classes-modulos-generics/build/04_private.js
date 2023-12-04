"use strict";
class Conta {
    constructor() {
        this.limite = 450;
    }
    aumentarLimit(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimit(quantidade);
        }
        else {
            return false;
        }
    }
}
const fulano = new Conta();
fulano.solicitarLimiteApp(true, 1200);
console.log(fulano);
