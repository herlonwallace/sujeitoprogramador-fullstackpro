import { useEffect, useState } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"
import "./home.css"

// URL da API: /movie/550?api_key=6ab5b5c7f65a6334d298b04c923a0ea8&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([])
    const [loanding, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "6ab5b5c7f65a6334d298b04c923a0ea8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            //console.log(response)
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
        }

        loadFilmes()
    }, [])

    if(loanding) {
        return(
            <div className="loanding">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>    
        </div>
    )
}

export default Home