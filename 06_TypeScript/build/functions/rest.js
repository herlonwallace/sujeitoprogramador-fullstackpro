"use strict";
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje`);
}
totalVendas(3, 4, 7, 12, 54, 23);
