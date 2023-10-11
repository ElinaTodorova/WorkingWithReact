export default function NavBar({pokemonInx, setPokemonInx,pokemonList}) {
    const changeState = (e) => {
      e.preventDefault();
      setPokemonInx(pokemonInx)
      
    }
      
    return (
        <>
        {pokemonList.map((pokemon,index) => {
            return <button onClick={e => setPokemonInx(index)} key={pokemon.name}>{pokemon.name}</button>
            
        })}
        
        </>
    )
}