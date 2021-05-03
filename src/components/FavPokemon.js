import React from 'react';

const FavPokemon = (props)=>{
    const {pokemon} = props
    return(
        <div className="Favdex-card">
            <div className="Favdex-card-body">
                <img className="Favdex-card-body-img" src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <div className="Favdex-card-body-name">
                    {pokemon.name}
                </div>
                <div className="Favdex-card-body-type">
                    {pokemon.types.map((type, index)=>{
                        return <div className={"pokemon-type-"+type.type.name} key={index}>{type.type.name}</div>
                    })}
                </div>
                <div className="Favdex-card-body-action">
                    <button className="Favdex-card-body-action-view">👁</button>
                    <button className="Favdex-card-body-action-delete">🗑</button>
                </div>
             </div>
            
        </div>
        
    )
}

export default FavPokemon