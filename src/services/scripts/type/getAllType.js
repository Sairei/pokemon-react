import axios from "axios";

import { getTypeData } from "./getTypeData";

export const getAllType = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/type`)
    .catch((err) => console.log("Error:", err));

  const res = await getTypeData(response.data.results);

  return res;
}