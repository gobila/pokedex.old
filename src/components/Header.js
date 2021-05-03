import React, {useState}from 'react';
import logo from '../assets/img/logo2.svg'
import pokemonLogo from '../assets/img/International_Pokémon_logo.svg';
import {getSearch} from '../services/api'
const Header=(props)=>{    
    const {onSearch} = props;
    const [search,setSearch] = useState('');
    
    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
          onSearch(null);
        }
      };
    const onClick = async (e) => {
    onSearch(search);
    };

    
    const onKeyUp = async(e)=> {
        if (e.charCode === 13) {
            onClick()
        }
      }

    return(
        <header className="home-header">
        <div className="header-logo">
            <img className="header-logo-img" src={pokemonLogo}/>
        </div>
        <input className="header-search" placeholder="Buscar Pokemon" type='text' onClick={onClick} onChange={onChange} onKeyPress={onKeyUp}>
        </input>
        <div className="header-login">
            <button className="header-login-btn"> Login</button>
        </div>
        <div className="header-logo">
            <img className="header-logo-img" src={logo}/>
        </div>
      </header>
    )
}

export default Header;