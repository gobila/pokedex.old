import {useEffect, useState} from 'react';

import logo from '../assets/img/logo2.svg';
import PokeLogo from '../assets/img/International_Pokémon_logo.svg'
import '../App.css';
import '../assets/css/poke.css';
import api from '../services/api';

function Home() {

  const [pokemon, setPokemon] = useState('');


  useEffect(()=>{
    getPokemons();
  },[])

  async function getPokemons(){
    await api.get('4').then((response)=>{
      setPokemon(response.data)
    }).catch((error)=>{
      setPokemon(null);
      console.log(error)
    })
  }

  return (
    pokemon&&
    <div className="Home">
      <header className="Home-header">
        <img src={PokeLogo} className="Home-logo" alt="logo" />
        <input className="Home-search">

        </input>
        <img src={logo} className="Home-logo" alt="logo"/>
      </header>
      <section className="Home-main">
        <div className="Home-PokeResult">
          {/* Filtro de tipo */}
          <div className="Home-typeFilter">
            FIltro
          </div>
          {/* lista de pokemons */}
          <div className="Home-PokeList">


{/* poke1 */}
            <div className="Home-pokemon">
              <div className="Home-pokemon-status">
                <div className="Home-pokemon-xp"><p>{pokemon.id}</p></div>
                <div className="Home-pokemon-type">
                  <p>{pokemon.types[0].type.name}</p>
                </div>
              </div>
              <div className="Home-pokemon-img">
                <img src={pokemon.sprites.front_default}/>
              </div>
              <div className="Home-pokemon-name">{pokemon.name}</div>
            </div>
            {/* poke1 */}
            <div className="Home-pokemon">
              <div className="Home-pokemon-status">
                <div className="Home-pokemon-xp"><p>{pokemon.id}</p></div>
                <div className="Home-pokemon-type">
                  <p>{pokemon.types[0].type.name}</p>
                </div>
              </div>
              <div className="Home-pokemon-img">
                <img src={pokemon.sprites.front_default}/>
              </div>
              <div className="Home-pokemon-name">{pokemon.name}</div>
            </div>
{/* poke1 */}
<div className="Home-pokemon">
              <div className="Home-pokemon-status">
                <div className="Home-pokemon-xp"><p>{pokemon.id}</p></div>
                <div className="Home-pokemon-type">
                  <p>{pokemon.types[0].type.name}</p>
                </div>
              </div>
              <div className="Home-pokemon-img">
                <img src={pokemon.sprites.front_default}/>
              </div>
              <div className="Home-pokemon-name">{pokemon.name}</div>
            </div>
            

          </div>
        </div>
      </section>
      <section className="Home-random">
        <div className="Home-PokeList">
          Aleatorio corrusel
        </div>
      </section>
      <footer className="Home-footer">
        footer
      </footer>
    </div>
  );
}

export default Home;
