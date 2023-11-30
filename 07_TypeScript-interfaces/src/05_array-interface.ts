

// interface TecnologiaProps {
//     id: string;
//     nome: string;
//     slug: (string | number)[];
// }

// let tecnologia1: TecnologiaProps = {
//     id: "1",
//     nome: "PHP",
//     slug: ["PHP", "PHP-do-zero", "PHP12", 12]
// }

interface TecnologiaProps {
    id: string;
    nome: string;
    descricao?: string;
}

interface NomesProps {
    tecnologia: TecnologiaProps[]
}

let frontEnd: NomesProps = {
    tecnologia: [
        {id: "45", nome: "HTML", descricao: "Introdução ao HTML"},
        {id: "87", nome: "CSS", descricao: "CSS que da vida e cores ao HTML"}
    ]
}

console.log(frontEnd.tecnologia)

