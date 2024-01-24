import React from 'react';
import './App.css'
import {Pokedex} from "./Pokedex";

function App(){
   
    return (
        <React.Fragment>
        <h2 className="pokedex-heading">Pokedex</h2>
        <div className="pokedex">
            <Pokedex />
        </div>
    </React.Fragment>
    )
}

export default App;