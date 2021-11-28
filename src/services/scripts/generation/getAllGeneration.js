import axios from "axios";

import { getGenerationData } from "./getGenerationData";

export const getAllGeneration = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/generation`)
    .catch((err) => console.log("Error:", err));

  const res = await getGenerationData(response.data.results);

  return res;
}