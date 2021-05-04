import React, {useState}from 'react';

const TypeFilter=(props)=>{
    const {types} = props;
    const {onFilter} = props;
    const [filter,setFilter] = useState('');
    
    const onChange = (e) => {
        setFilter(e.target.value);
        if (e.target.value.length === 0) {
            onFilter(null);
        }
      };
    const onClick = async (e) => {
        onFilter(filter);
        console.log(filter)
    };
    
    return(
        <div className="TypeFilter-container">
            <div className="TypeFilter-text">filter</div>

            <select className="TypeFilter-Filter">
                <option></option>
              {types.map((type, index)=>{
                  return <option key={index} className={"TypeFilter-types"} onChange={onChange} onClick={onClick}>{type.name}</option>
              })}
            </select>
        </div>
    )
}

export default TypeFilter;
