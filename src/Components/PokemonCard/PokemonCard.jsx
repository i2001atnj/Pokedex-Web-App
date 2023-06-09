import React from "react";
import { Link } from "react-router-dom";
import './PokemonCard.css'

const PokemonCard = (props) => {
  const { pokemon } = props
  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`} style={{textDecoration: "none"}}>
        <div className="pokemon-card">
          <div className="pokemon-id"><p>#{pokemon.id}</p></div>
          <img src={ pokemon.sprites.other["official-artwork"].front_default } alt={ pokemon.name }/>
          <div className="pokemon-name"><p>{pokemon.name}</p></div>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;