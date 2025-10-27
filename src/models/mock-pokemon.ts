import Pokemon from './pokemon';
import { pokemonImages } from '../utils/pokemonImages';

export const POKEMONS: Pokemon[] = [
 {
  id: 1,
  name: "Bulbizarre",
  hp: 25,
  cp: 5,
  picture: pokemonImages['001'],
  types: ["Plante", "Poison"],
  created: new Date()
 },
 {
  id: 2,
  name: "Salamèche",
  hp: 28,
  cp: 6,
  picture: pokemonImages['002'],
  types: ["Feu"],
  created: new Date()
 },
 {
  id: 3,
  name: "Carapuce",
  hp: 21,
  cp: 4,
  picture: pokemonImages['003'],
  types: ["Eau"],
  created: new Date()
 },
 {
  id: 4,
  name: "Aspicot",
  hp: 16,
  cp: 2,
  picture: pokemonImages['004'],
  types: ["Insecte", "Poison"],
  created: new Date()
 },
 {
  id: 5,
  name: "Roucool",
  hp: 30,
  cp: 7,
  picture: pokemonImages['005'],
  types: ["Normal", "Vol"],
  created: new Date()
 },
 {
  id: 6,
  name: "Rattata",
  hp: 18,
  cp: 6,
  picture: pokemonImages['006'],
  types: ["Normal"],
  created: new Date()
 },
 {
  id: 7,
  name: "Piafabec",
  hp: 14,
  cp: 5,
  picture: pokemonImages['007'],
  types: ["Normal", "Vol"],
  created: new Date()
 },
 {
  id: 8,
  name: "Abo",
  hp: 16,
  cp: 4,
  picture: pokemonImages['008'],
  types: ["Poison"],
  created: new Date()
 },
 {
  id: 9,
  name: "Pikachu",
  hp: 21,
  cp: 7,
  picture: pokemonImages['009'],
  types: ["Electrik"],
  created: new Date()
 },
//  {
//   id: 10,
//   name: "Sabelette",
//   hp: 19,
//   cp: 3,
//   picture: pokemonImages['010'],
//   types: ["Normal"],
//   created: new Date()
//  },
//  {
//   id: 11,
//   name: "Mélofée",
//   hp: 25,
//   cp: 5,
//   picture: pokemonImages['011'],
//   types: ["Fée"],
//   created: new Date()
//  },
//  {
//   id: 12,
//   name: "Groupix",
//   hp: 17,
//   cp: 8,
//   picture: pokemonImages['012'],
//   types: ["Feu"],
//   created: new Date()
//  }
];
  
export default POKEMONS;
