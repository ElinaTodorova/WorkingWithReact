import PropTypes from 'prop-types';

function PokemonCard(props) {
  
    let image = ''
    if(props.pokemon.imgSrc) {
      image = <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />;
    }else {
     image =  <p>???</p>;
    }
    
    return (
        <figure>

            {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name} /> : <p>???</p>}
            <figcaption>{props.pokemon.name}</figcaption>
        </figure>
    )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
  })
}

export default PokemonCard;