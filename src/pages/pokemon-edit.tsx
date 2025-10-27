import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
   
const PokemonEdit: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const [pokemon, setPokemon] = useState<Pokemon | null>(null);
 
   useEffect(() => {
     if (!id) {
       setPokemon(null);
       return;
     }
 
     const foundPokemon = POKEMONS.find(pokemon => pokemon.id.toString() === id);
     setPokemon(foundPokemon || null);
   }, [id]);
    
  return (
    <div>
      { pokemon ? (
        <div className="row">
            <h4 className="header center">Éditer { pokemon.name }</h4>
            <PokemonForm pokemon={pokemon}></PokemonForm>
        </div>
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
}
  
export default PokemonEdit;
