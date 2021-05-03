import axios from "axios";


const api = axios.create({
    baseURL:"https://pokeapi.co/api/v2/",
});

export const getSearch = async(pokemon)=>{
    const data = api.get(`pokemon/${pokemon}`).then((response)=>{
        return(response.data)
    })
    return data
}

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

export const getTypes = async()=>{
    const url='/type'
    const data = await api.get(url).then((response)=>{
        return(response.data)
    });
    return data
}

export default api
