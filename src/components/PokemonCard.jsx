function PokemonCard({ pokemonInfo }) {
  return (
    <section id="card">
      <h2 className="h2">
        {pokemonInfo.name} #{pokemonInfo.pokedexNumber}
      </h2>
      <img id="card_img" src={pokemonInfo.imageUrl} alt={pokemonInfo.name} />
      <h3>Stats</h3>
      <ul className="list" id="stats">
        <li> height: {pokemonInfo.height * 10}cm </li>
        <li> weight: {pokemonInfo.weight / 10}kg </li>
        {pokemonInfo.stats.map((stat) =>{
            return <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
        })}
      </ul>
      <h3>Types</h3>
      <ul className={pokemonInfo.types.length === 1 ? "single" : "list"} id="types">
        {pokemonInfo.types.map((type) => {
          return <li key={type}>{type}</li>;
        })}
      </ul>
      <h3>Moves</h3>
      <ol className="list" id="moves">
        {pokemonInfo.moves
          .map((move) => {
            return <li key={move.move.name}>{move.move.name}</li>;
          })
          .slice(0, 6)}
      </ol>
    </section>
  );
}

export default PokemonCard;
