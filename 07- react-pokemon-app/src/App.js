import React, { useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div>
      <h1>Pokédex</h1>
      <p>Il y a {pokemons.length} pokémons dans le Pokédex.</p>
    </div>
  );
}

export default App;
