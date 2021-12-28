import axios from "axios";
import { findImage } from "../../../utils/FindImage";

export const getChain = async ({ species, img }) => {
  const url = species.evolution_chain.url;
  const reponse = await axios.get(url)
    .catch((err) => console.log("Error:", err));
    
  const chains = reponse.data.chain;

  let evo_chains = [];
  for (let j = 0; j < chains.evolves_to.length; j++) {
    let chain = []
    
    let parentData = chains
    let data = chains.evolves_to[j]
    do {
      let detail = {};
      if(data)
        detail = data.evolution_details

      const Obj = {};
      Obj['name'] = parentData.species.name;
      Obj['detail'] = detail;

      if(parentData.species.name === species.name) {
        Obj['image'] = img
      } else {
        let tmp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${parentData.species.name}`);
        Obj['image'] = findImage(tmp.data);
      }

      chain.push(Obj)

      parentData = data
      if(data) 
        data = data.evolves_to[0]
    } while(!!parentData && parentData.hasOwnProperty('evolves_to'));

    evo_chains.push(chain);
  }

  return evo_chains;
};