import React, {useState}from 'react';

const Pokemon = (props)=>{
    const {pokemon} = props
    
    const [display, setDisplay]=useState("notdisplayed")

    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    };

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    };
    return(
        <div className="pokemon-card" onMouseEnter={e => showButton(e)}
        onMouseLeave={e => hideButton(e)}>
            
        <div className={"pokemon-"+display}>
            <button className="view">👁</button>
            <button className="fav">+</button>
        </div>

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