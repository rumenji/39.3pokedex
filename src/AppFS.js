import React from 'react';
import './App.css'
import {Pokedex} from "./Pokedex";
import Pokegame from './Pokegame';

function App(){
   
    return (
        <React.Fragment>
        <h2 className="pokedex-heading">Pokedex</h2>
        <div className="pokedex">
        <Pokegame />
        </div>
    </React.Fragment>
    )
}

export default App;