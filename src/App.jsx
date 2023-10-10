import PokemonCard from "./components/PokemonCard.jsx";
import { useState } from "react";


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  let [pokemonIndex, setPokemonIndex] = useState(0);
  //let pokemon = pokemonList[0];
  const decrementIndex = () => {
    setPokemonIndex(pokemonIndex - 1);
  }

  const incrementIndex = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 ? <button onClick={decrementIndex}>Précédent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={incrementIndex}>Suivant</button> : null}
    </div>
  );
}

export default App
