

interface ProdutoProps{
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: ProdutoProps = {
    id: "1",
    nome: "Tenis Nike",
    descricao: "Super tenis"
}

// produto1.id = "1234"

console.log(produto1)