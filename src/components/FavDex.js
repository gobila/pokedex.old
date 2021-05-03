import React from  'react';
import FavPokemon from './FavPokemon';
import Pagination from './Pagination';
import pokeball from '../assets/img/pokeball.png';
import TypeFilter from './TypeFilter';

const FavDex = (props)=>{
    const {pokemons,loading} = props;


    return(
      <div className="pokemon">
        <div className="Favdex-container">
          POKEDEX USUARIO
        </div>
        <div className="Favdex-titles-card">
            <div className="Favdex-titles-card-body">
                <div className="Favdex-titles-card-body-img">
                    Foto
                </div>
                <div className="Favdex-titles-card-body-name">
                    Nome
                </div>
                <div className="Favdex-titles-card-body-type">
                   Tipo
                </div>
                <div className="Favdex-titles-card-body-action">
                    Ação
                </div>
             </div>
            
        </div>
        {loading?
          <div className="load">
            <img src={pokeball} alt="Carregando pagina"/>
          </div>:
        <div className="Favdex-pokemon-container">
          {pokemons.map((pokemon, index)=>{
            return(
              <FavPokemon pokemon={pokemon} key={pokemon.name}>
                  {pokemon.name} {pokemon.type}
              </FavPokemon>
            )
          })}
        </div>
        }
      </div>
    )
}
export default FavDex;