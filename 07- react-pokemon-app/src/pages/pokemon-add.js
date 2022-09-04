import React, { useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

const PokemonAdd = () => {
  const [id] = useState(new Date().getTime());
  const [pokemon] = useState(new Pokemon(id));

  return (
    <div className="new">
      <h2 className="header center">Ajouter un pokemon</h2>
      <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
    </div>
  );
};

export default PokemonAdd;