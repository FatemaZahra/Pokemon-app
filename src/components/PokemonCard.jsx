function PokemonCard({pokemonInfo}){
    return (
        <section id="card">
        <h2>{pokemonInfo.name} #{pokemonInfo.pokedexNumber}</h2>
        <img src={pokemonInfo.imageUrl} />
        <p>{pokemonInfo.height*10}cm {pokemonInfo.weight/100}g</p>
        <ul>
            {pokemonInfo.types.map((type) =>{
               return <li key={type}>{type}</li>
            })}
        </ul>
        <ol>
            {pokemonInfo.moves.map((move) =>{
                return <li key={move.move.name}>{move.move.name}</li>
            }).slice(0, 5)}
        </ol>
        </section>
    )
}

export default PokemonCard;