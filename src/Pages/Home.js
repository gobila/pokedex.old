import React, {useState, useEffect} from 'react'
import api, { getPokemons, getPokemonData, getSearch, getTypes } from "../services/api";
import Pokedex from '../components/Pokedex';
import '../assets/css/poke.css';
import Carousel from '../components/Carousel';
import Header from '../components/Header';


export default function Home(){
  const [pokemons, setPokemons]= useState([]);
  const [page, setPage]=useState(0);
  const [total, setTotal]=useState();
  const [loading, setLoading]=useState(true);
  const [types, setTypes]=useState([]);
  const [searchFall, setSearchFall]=useState(false);


  const getAllPokemons = async()=>{
    try {
      setLoading(true)
      const data = await getPokemons(6, 6* page);
      const promises = data.results.map(async (pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count /6))
    } catch (error) {
      console.log(error)
    }
  }

  const getPokemonsByType = async()=>{
    try {
      const data = await api.get('type').then((response)=>{
        return response.data.results
      });
      const promises = data.map(async (type)=>{
        return await getPokemonData(type.url)
      })
      const results = await Promise.all(promises)
      setTypes(results)
    } catch (error) {
      console.log(error)
    }
  }

  const onFilter = async () => {
    
  };


  useEffect(()=>{
      getAllPokemons();
      getPokemonsByType();
  },[page])

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return getAllPokemons();
    }
    const result = await getSearch(pokemon);
      setPokemons([result]);
      setPage(0);
      setTotal(1);
  };

  return(
    <div className="home">

      <Header 
      onSearch={onSearch}/>
      <section className="home-main">
        <Pokedex  types={types}  loading={loading}
                  pokemons={pokemons}  page={page}
                  setPage={setPage}  total={total}
                  onFilter={onFilter}
        />
        <div className="home-PokeList">
        </div>

        <Carousel pokemons={pokemons}  carousel={page}
                setCarousel={setPage}  total={total}
              />
      </section>
      <footer className="home-footer">
        footer
      </footer>
    </div>
  )
}