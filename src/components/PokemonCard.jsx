

function propsCard(props) {
  
    let image = ''
    if(props.imgSrc) {
      image = <img src={props.imgSrc} alt={props.name} />;
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

export default propsCard;