import React, {useState, useEffect} from 'react'
import api, { getPokemons, getPokemonData, getTypes } from "../services/api";
import FavDex from '../components/FavDex';
import '../assets/css/poke.css';
import Carousel from '../components/Carousel';
import Header from '../components/Header';


export default function UserDex(){
  const [pokemons, setPokemons]= useState([]);
  const [page, setPage]=useState(0);
  const [total, setTotal]=useState();
  const [loading, setLoading]=useState(true);
  const [types, setTypes]=useState([]);

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
      setTypes(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getAllPokemons();
    getPokemonsByType();
  },[page])



  return(
    <div className="home">

      <Header/>

      <section className="home-main">
          <FavDex  
                    pokemons={pokemons}
                    
          />
          <div className="home-PokeList">
        </div>
      </section>
      <footer className="home-footer">
        footer
      </footer>
    </div>
  )
}