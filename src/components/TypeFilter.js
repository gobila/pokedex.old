import React from 'react';

const TypeFilter=(props)=>{
    const {types} = props;

    
    return(
        <div className="TypeFilter-container">
            <div className="TypeFilter-text">filter</div>

            <select className="TypeFilter-Filter">
                <option></option>
              {types.map((type, index)=>{
                  return <option key={index} className={"TypeFilter-types"}>{type.name}</option>
              })}
            </select>
        </div>
    )
}

export default TypeFilter;
