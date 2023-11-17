import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/ 
// URL da API: /movie/550?api_key=6ab5b5c7f65a6334d298b04c923a0ea8&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api