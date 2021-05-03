import React, {useState, useEffect} from 'react'
import { getPokemons, getPokemonData } from "../services/api";
import Pokedex from '../components/Pokedex';
import '../assets/css/poke.css';

export default function(Home){
  const [pokemons, setPokemons]= useState([]);
  const [page, setPage]=useState(0);
  const [total, setTotal]=useState();
  const [loading, setLoading]=useState(true);

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

  useEffect(()=>{
    getAllPokemons()
  },[page])

  return(
    <div className="home">
      <header className="home-header">
        <input className="home-search">

        </input>
      </header>

      <section className="home-main">
          <Pokedex loading={loading}
                    pokemons={pokemons}
                    page={page}
                    setPage={setPage}
                    total={total}
          />
      </section>

      <section className="home-random">
        <div className="home-PokeList">
          Aleatorio corrusel
        </div>
      </section>
      <footer className="home-footer">
        footer
      </footer>
    </div>
  )
}