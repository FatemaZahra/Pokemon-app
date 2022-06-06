import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

const PokemonContainerShelf = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState("ditto");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchResult}`)
      .then((response) => {
        return response.json();
      })
      .then(({name, id, moves, height, weight, types, sprites : {front_default}}) => {
        setPokemonInfo((currentState) =>{
         const newObject =  {
              name: name,
              pokedexNumber : id,
              moves : moves,
              height : height,
              weight : weight,
              imageUrl : front_default
         }
        
          if(types.length === 1){
            newObject.types = [types[0].type.name]
          } else {
            newObject.types = [types[0].type.name, types[1].type.name]
          }
          return newObject;
        })

        setIsLoading(false);
      });
  }, [searchResult]);


  if(isLoading){
    return <p>...loading</p>
  }

  return (
    <div id="shelf">
      <SearchBar setSearchResult={setSearchResult} />
      <PokemonCard pokemonInfo={pokemonInfo}/>
    </div>
  );
};

export default PokemonContainerShelf;
