import React from "react";
import { Pokedex, defaultProps } from "./Pokedex";
import {randomPokemon, calculateExp} from "./helpers";
import "./Pokegame.css"

function Pokegame(){
    const random = randomPokemon();
    const exp1 = calculateExp(random[0]);
    const exp2 = calculateExp(random[1]);
    const winner1 = exp1 > exp2;
    const winner2 = exp1 < exp2;
    return (
        <React.Fragment>
            <div className="pokeList1">
                <Pokedex pokemon={random[0]} isWinner={winner1}/>
            </div>
            <div className="pokeList2">
                <Pokedex pokemon={random[1]} isWinner={winner2}/>
            </div>
        </React.Fragment>
    )

}

export default Pokegame;

