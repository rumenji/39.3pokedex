import { defaultProps } from "./Pokedex";
const DEFAULT_NUMBER_CARDS = 4;

function randomPokemon(){
    let randomList1 = [];
    let randomList2 = [...defaultProps];
    for(let i = 0; i < DEFAULT_NUMBER_CARDS; i++){
        const pick = Math.floor(Math.random() * randomList2.length);
        const removedItem = randomList2.splice(pick, 1)[0];
        randomList1.push(removedItem);
    }
    return [randomList1, randomList2]
}

function calculateExp(list){
    return list.reduce((acc, pokemon) => acc + pokemon.base_experience, 0);
}

export {randomPokemon, calculateExp};