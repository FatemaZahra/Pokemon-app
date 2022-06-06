import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const PokemonContainerShelf = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState("ditto");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchResult}`)
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((body) => {
        console.log(body);
      });
  }, [searchResult]);

  return (
    <>
      <SearchBar setSearchResult={setSearchResult} />
      <ul></ul>
    </>
  );
};

export default PokemonContainerShelf;
