
interface CursoProps {
    id: string;
    nome: string;
    preco: number;

    // Definir a funcao e o que ela deve esperar e retornar
    promocao: (preco: number) => void
}

function mostraPromocao(preco: number): void{
    console.log(`Promoção do curso por apenas: R$: ${preco}`)
}

const novoCurso: CursoProps = {
    id: "1",
    nome: "Curso React JS",
    preco: 500,
    promocao: mostraPromocao
}

console.log(novoCurso.promocao(350))

// =========================================================================================

interface SomaProps{
    (valor1: number, valor2: number): number
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
    console.log('Resultado: ', valor1 + valor2)
    return valor1 + valor2
}

const resultado = somaNumeros(15, 10)

console.log('Resultado da variavel: ', resultado)