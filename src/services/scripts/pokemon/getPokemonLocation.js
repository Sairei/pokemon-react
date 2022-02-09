import axios from "axios";

export const getPokemonLocation = async (name) => {
  const location = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/encounters`)
    .catch(() => {
      console.log(`Pokemon ${name} does not exist`);
      return null;
    });

  if (location === null)
    return { location: null }

  for(let i=0; i<location.data.length; i++) {
    const area = await axios.get(location.data[i].location_area.url);
    const loc = await axios.get(area.data.location.url);

    location.data[i]['location_area'] = area.data;
    location.data[i]['location'] = loc.data;
  }

  return { location: location.data }
}