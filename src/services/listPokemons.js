import {useEffect, useState} from 'react';

import logo from '../assets/img/logo2.svg';
import PokeLogo from '../assets/img/International_Pokémon_logo.svg'
import '../App.css';
import '../assets/css/poke.css';
import api from '../services/api';


export default function listPokemon(){

    // const [pokemon, setPokemon] = useState('');
    // const [type, setType] = useState('');

    const pokemon=[]

    const type1="go";
    const type2="go";
    const sprites="go";

    const idName='2'

    api.get(idName)
      .then((response) => {
        pokemon =response.data
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
}

