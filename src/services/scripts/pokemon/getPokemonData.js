import axios from "axios";

export const getPokemonData = async (name) => {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const species = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.data.species.name}`);

  return { pokemon: pokemon.data, species: species.data }
}