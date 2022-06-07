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
        <li> weight: {pokemonInfo.weight / 100}g </li>
      </ul>
      <h3>Types</h3>
      <ul className="list" id="types">
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
          .slice(0, 5)}
      </ol>
    </section>
  );
}

export default PokemonCard;
