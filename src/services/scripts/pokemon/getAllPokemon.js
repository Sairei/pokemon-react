import axios from "axios";

import { getPokemonData } from "./getPokemonData";

export const getAllPokemons = async (offset, limit, selectedType) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .catch((err) => console.log("Error:", err));

  const res = await getPokemonData(response.data.results, selectedType);

  return res;
}