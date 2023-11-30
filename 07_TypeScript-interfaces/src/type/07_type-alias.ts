type Uuid = number | string | null

function acessar(uuid: Uuid, nome: string) {
    console.log(`ID: ${uuid} - Bem vind ${nome}`)
}

function logUsuario(uuid: Uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`)
}

 acessar(123, "Wallace")

 acessar("44", "Lucas")

 logUsuario("4321")



 type Moedas = "BRL" | "EUR" | "USD"

 function comprarItem(moeda: Moedas) {
    console.log("Comprar com a moeda: ", moeda)
 }

 comprarItem("EUR")
