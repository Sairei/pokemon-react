import axios from "axios";

import { findImage, findShiny } from "../../utils/FindImage";
import { getChain } from "../evolution/getChain";

export const getPokemonData = async (name) => {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .catch(() => {
      console.log(`Pokemon ${name} inexistant`);
      return null;
    });

  if (pokemon === null)
    return { pokemon: null, species: null, evols: null }
  
  const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.data.species.name}`);

  let image = findImage(pokemon.data);
  let shiny = findShiny(pokemon.data);
  const evols = await getChain({ species: species.data, img: image, shiny: shiny })

  return { pokemon: pokemon.data, species: species.data, evols: evols }
}