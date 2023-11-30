"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem vind ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`);
}
acessar(123, "Wallace");
acessar("44", "Lucas");
logUsuario("4321");
function comprarItem(moeda) {
    console.log("Comprar com a moeda: ", moeda);
}
comprarItem("EUR");
