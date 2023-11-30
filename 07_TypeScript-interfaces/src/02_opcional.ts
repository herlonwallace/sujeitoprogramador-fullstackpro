
interface CadastroProps {
    nome?: string;
    email: string;
    status: boolean;
}

const novoUsuario: CadastroProps = {
    email: "Wherlon@hotmail.com",
    status: true,
}

console.log(novoUsuario)