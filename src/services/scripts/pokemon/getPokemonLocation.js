import axios from "axios";

export const getPokemonLocation = async (name) => {
  const location = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/encounters`)
    .catch(() => {
      console.log(`Pokemon ${name} does not exist`);
      return null;
    });

  if (location === null)
    return { location: null }

  return { location: location.data }
}