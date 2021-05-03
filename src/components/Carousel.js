import React from 'react';
import PokemonCarousel from './PokemonCarousel';

const Carousel =(props)=>{
    
  const {pokemons, leftClick, rightClick, carousel,setCarousel, total,}= props;
  const left='<';
  const right='>';


    const lastCarousel = ()=>{
      const nextCarousel = Math.max(carousel - 1, 0)
      setCarousel(nextCarousel)
    }
    const nextCarousel = ()=>{
      const nextCarousel = Math.min(carousel + 1, total)
      setCarousel(nextCarousel)
    }
    return(
      <div className="Carousel">
        <button className="Carousel-btn" onClick={lastCarousel}>
          {left}
        </button>
        <div className="Carousel-container">
          
            {pokemons.map((pokemon, index)=>{
            return(
              <PokemonCarousel pokemon={pokemon} key={pokemon.name}/>
            )
          })}
        </div>
        
        <button className="Carousel-btn" onClick={nextCarousel}>
            {right}
          </button>
        </div>
    )
}

export default Carousel;
