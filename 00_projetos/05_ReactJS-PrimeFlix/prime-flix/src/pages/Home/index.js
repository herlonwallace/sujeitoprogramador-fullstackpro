import { useEffect, useState } from "react"
import api from "../../services/api"

// URL da API: /movie/550?api_key=6ab5b5c7f65a6334d298b04c923a0ea8&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "6ab5b5c7f65a6334d298b04c923a0ea8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response)
        }

        loadFilmes()
    })
    return(
        <div>
            <h1>Bem vindo a Home</h1>    
        </div>
    )
}

export default Home