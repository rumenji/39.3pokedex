import Pokecard from "./Pokecard";

const defaultProps = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]

function Pokedex(props){
    const winner = props.isWinner ? <h3>This hand wins</h3> : <h3></h3>;
    const pokeProps = Object.keys(props).length !== 0 ? props.pokemon : defaultProps;
    return (
        <div>
        {pokeProps.map(prop => (<Pokecard key={prop.id} id={prop.id} name={prop.name} type={prop.type} base_experience={prop.base_experience} />))}
        {winner}
        </div>
        )
}

export { Pokedex, defaultProps};