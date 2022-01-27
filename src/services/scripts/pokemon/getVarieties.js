import axios from "axios";

import { capitalize } from "../../utils/Capitalize";
import { findImage } from "../../utils/FindImage";

export const getAllVarieties = async (species) => {
  let res = [];

  for (let i=0; i<species.varieties.length; i++) {
    let v = species.varieties[i];
    let varietieName = v.pokemon.name.replaceAll('-', ' ');
    varietieName = capitalize(varietieName);

    let pokemon = await axios.get(v.pokemon.url);

    res.push({
      name: varietieName,
      link: `/pokemon/${v.pokemon.name}/more`,
      image: findImage(pokemon.data)
    });
  }

  return { varieties: res };
}