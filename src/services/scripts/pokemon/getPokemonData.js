import axios from "axios";
import { getChain } from "../evolution/getChain";

export const getPokemonData = async (name) => {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.data.species.name}`);

  let image = pokemon.data.sprites.other.dream_world.front_default ? pokemon.data.sprites.other.dream_world.front_default : pokemon.data.sprites.other['official-artwork'].front_default;
  const evols = await getChain({ species: species.data, img: image })

  return { pokemon: pokemon.data, species: species.data, evols: evols }
}