
type Info = {
    id: number;
    nome: string;
    descricao?: string
}

const produtoInfo: Info = {
    id: 321,
    nome: "Placa de Video",
}

type Categoria = {
    slug: string;
    quantidadeProduto: number;
}

const categoria1: Categoria = {
    slug: "hardware",
    quantidadeProduto: 2
}

type produtoInfo = Info & Categoria

const novoProduto: produtoInfo = {
    id: 456,
    nome: "Teclado",
    slug: "teclado-mecanico",
    quantidadeProduto: 10
}

console.log(novoProduto)