import React from 'react';

const PokemonCarousel = (props)=>{
    const {pokemon} = props
    return(
        <div className="Carousel-card">
            <div className="Carousel-card-heard">
                <div className="Carousel-card-id">
                    <p className="Carousel-card-id-text">{pokemon.id}</p>
                </div>
            </div>
            <div className="Carousel-card-body">
                <img className="Carousel-card-body-img" src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
            <div className="Carousel-footer">
                <div className="Carousel-type">
                    {pokemon.types.map((type, index)=>{
                        return <div className={"Carousel-type-"+type.type.name} key={index}>{type.type.name}</div>
                    })}
                </div>
                <div className="Carousel-name">
                    {pokemon.name}
                </div>
            </div>
        </div>
        
    )
}

export default PokemonCarousel