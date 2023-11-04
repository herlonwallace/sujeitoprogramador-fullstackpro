// let primeiros = [1, 2, 3]
// let numeros = [...primeiros, 4, 5, 6]
// console.log(numeros)

// ============================================================================================

// let pessoa = {
//     nome: "Wallace",
//     idade: 70,
//     cargo: "TI"
// }

// let novaPessoa = {
//     ...pessoa,
//     status: "ATIVO",
//     cidade: "Copacabana / RJ"
// }

// console.log(novaPessoa)

// =============================================================================================

function novoUsuario(info){
    let dados = {
        ...info,
        status: "Ativos",
        inicio: "20/12/2024",
        codigo: 654432
    }

    console.log(dados)
} 

novoUsuario({nome: "Jose", sobrenome: "Silva", Cargo: "Dev"})

