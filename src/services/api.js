import axios from "axios";


const api = axios.create({
    baseURL:"https://pokeapi.co/api/v2/",
});
export default api

export const getPokemons = async (limit =6 , offset = 0)=>{
    const url=`pokemon?limit=${limit}&offset=${offset}`
    const data = await api.get(url).then((response)=>{
       return(response.data)
    });
    return data
}

export const getPokemonData = async(url)=>{
    const data = await api.get(url).then((response)=>{
        return(response.data)
    });
    return data
}