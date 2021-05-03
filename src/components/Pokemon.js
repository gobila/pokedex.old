import React from 'react';

const Pokemon = (props)=>{
    const {pokemon} = props
    return(
        <div className="pokemon-card">
            <div className="pokemon-card-heard">
                <div className="pokemon-id">
                    <p className="pokemon-id-text">{pokemon.id}</p>
                </div>
                <div className="pokemon-type">
                    {pokemon.types.map((type, index)=>{
                        return <div className={"pokemon-type-"+type.type.name} key={index}>{type.type.name}</div>
                    })}
                </div>
            </div>
            <div className="pokemon-card-body">
                <img className="pokemon-card-body-img" src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
            <div className="pokemon-footer">
                <div className="pokemon-name">
                    {pokemon.name}
                </div>
            </div>
        </div>
        
    )
}

export default Pokemon