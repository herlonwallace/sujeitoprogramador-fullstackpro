"use strict";
function mostraPromocao(preco) {
    console.log(`Promoção do curso por apenas: R$: ${preco}`);
}
const novoCurso = {
    id: "1",
    nome: "Curso React JS",
    preco: 500,
    promocao: mostraPromocao
};
console.log(novoCurso.promocao(350));
let somaNumeros = (valor1, valor2) => {
    console.log('Resultado: ', valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(15, 10);
console.log('Resultado da variavel: ', resultado);
