import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loader';

const PokemonEdit: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const [pokemon, setPokemon] = useState<Pokemon | null>(null);
 
  useEffect(() => {
    PokemonService.getPokemon(+id).then(pokemon => setPokemon(pokemon));
  }, [id]);
    
  return (
    <div>
      { pokemon ? (
        <div className="row">
            <h4 className="header center">Éditer { pokemon.name }</h4>
            <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className="center"><Loader/></h4>
      )}
    </div>
  );
}
  
export default PokemonEdit;
