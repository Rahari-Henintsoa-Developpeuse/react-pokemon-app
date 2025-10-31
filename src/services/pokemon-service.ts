import Pokemon from "../models/pokemon";
 
export default class PokemonService {
 
  static getPokemons(): Promise<Pokemon[]> {
    return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
 
  static getPokemon(id: number): Promise<Pokemon|null> {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }

  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'PUT',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static deletePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3001/pokemons`, {
        method: 'POST',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static async searchPokemon(term: string): Promise<Pokemon[]> {
    if (term.length <= 1) {
      return [];
    }

    try {
      const response = await fetch('http://localhost:3001/pokemons');
      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }
      const allPokemons: Pokemon[] = await response.json();

      const filteredPokemons = allPokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(term.toLowerCase())
      );

      return filteredPokemons;
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      return [];
    }
  }
 
  static isEmpty(data: object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error('Error :', error);
  }
}