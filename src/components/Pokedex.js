import React, {useState}from 'react';
import Pokemon from './Pokemon';
import Pagination from './Pagination';
import pokeball from '../assets/img/pokeball.png';
import TypeFilter from './TypeFilter';

const Pokedex = (props)=>{
    const {pokemons, page, setPage, total, loading, types,onFilter} = props;
    
    const [filter,setFilter] = useState('');

    const lastPage = ()=>{
      const nextPage = Math.max(page - 1, 0)
      setPage(nextPage)
    }
    const nextPage = ()=>{
      const nextPage = Math.min(page + 1, total)
      setPage(nextPage)
    }

    const onChange = (e) => {
      setFilter(e.target.value);
      if (e.target.value.length === 0) {
          onFilter(null);
          console.log(onFilter)
      }
    };
    const onClick = async (e) => {
      onFilter(filter);
    };

    return(
      <div className="pokemon">
        <div className="type-filter">
          <div className="TypeFilter-container">
              <div className="TypeFilter-text">filter</div>

              <select className="TypeFilter-Filter">
                  <option></option>
                {types.map((type, index)=>{
                    return <option key={index} className={"TypeFilter-types"}>{type.name}</option>
                })}
              </select>
          </div>
        </div>
        
        {loading?
          <div className="pokemon-load">
            <img className="pokemon-load-animation" src={pokeball} alt="Carregando pagina"/>
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