import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

const PokemonContainerShelf = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState("");
  const [validSearch, setValidSearch] = useState("Search for a pokemon!");
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender === false) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchResult.toLowerCase()}`)
        .then((response) => {
          if (response.status === 404) {
            // setFirstRender(false);
            return Promise.reject("Pokemon not found");
          }
          return response.json();
        })
        .then(
          ({
            name,
            id,
            moves,
            height,
            weight,
            types,
            sprites: { front_default },
          }) => {
            setValidSearch("");
            // setFirstRender(false);
            setPokemonInfo((currentState) => {
              const newObject = {
                name: name,
                pokedexNumber: id,
                moves: moves,
                height: height,
                weight: weight,
                imageUrl: front_default,
              };

              if (types.length === 1) {
                newObject.types = [types[0].type.name];
              } else {
                newObject.types = [types[0].type.name, types[1].type.name];
              }
              return newObject;
            });

            setIsLoading(false);
          }
        )
        .catch((err) => {
          setValidSearch("Pokemon not found");
          setPokemonInfo(null);
        });
    } else {
      setFirstRender(false);
      setIsLoading(false);
    }
  }, [searchResult]);

  return (
    <div id="shelf">
      <SearchBar setSearchResult={setSearchResult} />
      <p>{validSearch}</p>
      {isLoading ? (
        <p>... Loading</p>
      ) : pokemonInfo === null ? (
        <></>
      ) : (
        <PokemonCard pokemonInfo={pokemonInfo} />
      )}
    </div>
  );
};

export default PokemonContainerShelf;
