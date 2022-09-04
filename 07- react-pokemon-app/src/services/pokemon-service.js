export default class PokemonService {
  static getPokemons() {
    return fetch("http://localhost:3000/pokemons")
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static getPokemon(id) {
    return fetch(`http://localhost:3000/pokemons/${id}`)
      .then((response) => response.json())
      .then((data) => (this.isEmpty(data) ? null : data))
      .catch((error) => this.handleError(error));
  }

  static updatePokemon(pokemon) {
    return fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
      method: "PUT",
      body: JSON.stringify(pokemon),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static deletePokemon(pokemon) {
    return fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static addPokemon(pokemon) {
    pokemon.created = new Date(pokemon.created);
    return fetch(`http://localhost:3000/pokemons`, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static searchPokemon(term) {
    return fetch(`http://localhost:3000/pokemons?q=${term}`)
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static isEmpty(data) {
    return Object.keys(data).length === 0;
  }

  static handleError(error) {
    console.error(error);
  }
}
