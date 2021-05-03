import React from  'react';
import Pokemon from './Pokemon';
import Pagination from './Pagination';
import pokeball from '../assets/img/pokeball.png';
import TypeFilter from './TypeFilter';

const Pokedex = (props)=>{
    const {pokemons, page, setPage, total, loading, types} = props;

    const lastPage = ()=>{
      const nextPage = Math.max(page - 1, 0)
      setPage(nextPage)
    }
    const nextPage = ()=>{
      const nextPage = Math.min(page + 1, total)
      setPage(nextPage)
    }


    return(
      <div className="pokemon">
        <div className="type-filter">
          <TypeFilter
          types={types}/>
        </div>
        {loading?
          <div className="load">
            <img src={pokeball} alt="Carregando pagina"/>
          </div>:
        <div className="pokemon-container">
          {pokemons.map((pokemon, index)=>{
            return(
              <Pokemon pokemon={pokemon} key={pokemon.name}/>
            )
          })}
        </div>
        }
        <Pagination
          page={page+1}
          totalpage={total}
          leftClick={lastPage}
          rightClick={nextPage}
        />
      </div>
    )
}
export default Pokedex;