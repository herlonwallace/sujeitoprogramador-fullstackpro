import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <h1>Bem vindo a página Home</h1>

            <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default Home