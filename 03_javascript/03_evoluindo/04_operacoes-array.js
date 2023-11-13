// MAP
// let lista = ["João", "Felipe", "Glória"]

// lista.map((item, index) => {
//     console.log(`Passando: ${item} - ${index}`)
// })

// =========================================================================================

//REDUCE
// let numeros = [5, 3, 2]

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//     console.log(`${acumulador} - total até o momento!`)
//     console.log(`${numero} - valor atual`)
//     console.log(`${indice} - indice atual`)
//     console.log(`${original} - valor original`)
//     console.log(`==========================================`)

//     return acumulador += numero
// })

// console.log("Total do reduce " + total)

// =========================================================================================

// FIND
// let listagem = [5, 1, "Pedro", 5, 4, ""]

// let busca = listagem.find((item) => {
    
//     // item === "Pedro" ?  console.log("Item encontrado") : console.log("Não está na lista") 
//     if(item === "Pedro"){
//         return console.log("Item encontrado")
//     }

// })

// console.log(busca)

// =========================================================================================
// FILTER
let palavras = ["Kiko", "Carla", "Tamires", "Kleber", "Ana", "Bia", "Maradona"]

let resultado = palavras.filter((item) => {
    return item.length < 4
})

console.log(resultado)
