import React from  'react';
import Pokemon from './Pokemon';
import Pagination from './Pagination';
import pokeball from '../assets/img/pokeball.png';

const Pokedex = (props)=>{
    const {pokemons, page, setPage, total, loading} = props;

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
          Filtro tipo
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