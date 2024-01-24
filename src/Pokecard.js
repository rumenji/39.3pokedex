import React from 'react';
import './Pokecard.css';
function Pokecard({id, name, type, base_experience}){
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <React.Fragment>
        <div className="pokecard">
            <h3 className="pokecard-title">{name}</h3>
            <img className="pokecard-image" alt="Pokemon image" src={imgSrc}></img>
            <p className="pokecard-type">Type: {type}</p>
            <p className="pokecard-experience">EXP: {base_experience}</p>
        </div>
        </React.Fragment>
    )
}

export default Pokecard;