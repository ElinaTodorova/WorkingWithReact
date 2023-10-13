import { useState } from "react"

export default function NavBar({pokemonInx, setPokemonInx,pokemonList}) {

    function handlePokemon(element, i) {
        setPokemonInx(i);
        if(element.name === 'pikachu') {
            alert('pika pikachu !!');
        }
        
    }
    
    return (
        <>
        {pokemonList.map((pokemon,index) => {
            return <button onClick={() => handlePokemon(pokemon,index)} key={pokemon.name}>{pokemon.name}</button>
            
        })}
        
        </>
    )
}