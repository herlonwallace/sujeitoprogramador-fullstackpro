let pessoa = {
    nome: "Wallace",
    sobrenome: "Herlon",
    empresa: "Desenvolvimento de aplicativo",
    cargo: "FullStack ReactJS"
}

// const { nome:nomePessoa, cargo } = pessoa

// console.log(nomePessoa)
// console.log(cargo)

// ===========================================================================================

let nome = ["Lucas", "William", "Lopes"]

// let { 0:aluno1, 1:aluno2 } = nome

// console.log(aluno1)
// console.log(aluno2)

let [primeironome, ,terceironome] = nome

console.log(primeironome)
console.log(terceironome)

