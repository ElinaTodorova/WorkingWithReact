export default function NavBar({pokemonInx, setPokemonInx,pokemonLi}) {
    const decrementIndex = () => {
        setPokemonInx(pokemonInx - 1);
      }
    
      const incrementIndex = () => {
        setPokemonInx(pokemonInx + 1)
      }
    return (
        <>
        {pokemonInx > 0 ? <button onClick={decrementIndex}>Précédent</button> : null}
        {pokemonInx < pokemonLi.length - 1 ? <button onClick={incrementIndex}>Suivant</button> : null}
        </>
    )
}