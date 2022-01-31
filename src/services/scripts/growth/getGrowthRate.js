import axios from "axios";


export const getGrowthRate = async (name) => {
  const growthRate = await axios.get(`https://pokeapi.co/api/v2/growth-rate/${name}`)
    .catch(() => {
      console.log(`Growth-rate ${name} does not exist`);
      return null;
    });

  if (growthRate === null)
    return { growthRate: null }

  return { growthRate: growthRate.data }
}