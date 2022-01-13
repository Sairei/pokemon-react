import axios from "axios";
import { findImage, findShiny } from "../../utils/FindImage";

export const getChain = async ({ pokemon, species, img, shiny }) => {
  let res;

  if (pokemon.name.includes('-')) {
    let v = pokemon.name.substring(pokemon.name.indexOf('-') +1);
    res = await getVariationChain({ varieties: v, species: species, img: img, shiny: shiny });
  } 
  else {
    res = await getDefaultChain({ species: species, img: img, shiny: shiny });
  }

  return res;
}


const getDefaultChain = async ({ species, img, shiny }) => {
  const url = species.evolution_chain.url;
  const reponse = await axios.get(url)
    .catch((err) => console.log("Error:", err));

  const chains = reponse.data.chain;

  let evo_chains = [];
  let j = 0;
  do {
    let chain = []

    let parentData = chains
    let data = chains.evolves_to[j]
    do {
      let detail = {};
      if (data)
        detail = data.evolution_details

      const Obj = {};
      Obj['name'] = parentData.species.name;
      Obj['detail'] = detail;

      if (parentData.species.name === species.name) {
        Obj['image'] = img
        Obj['shiny'] = shiny
      } else {
        let tmp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${parentData.species.name}`)
        .catch((err) => {
          return null;
        });
        if (tmp === null) {
          tmp = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${parentData.species.name}`);
          let defaultName = tmp.data.varieties.filter(v => { return v.is_default; })[0].pokemon.name;
          tmp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${defaultName}`);
          
          console.log(`Pokemon ${parentData.species.name} not default name : search for ${defaultName}`);
          Obj['link'] = defaultName;
        }

        Obj['image'] = findImage(tmp.data);
        Obj['shiny'] = findShiny(tmp.data);
      }

      if (Obj.image)
        chain.push(Obj)

      parentData = data
      if (data)
        data = data.evolves_to[0]
    } while (!!parentData && parentData.hasOwnProperty('evolves_to'));

    evo_chains.push(chain);
    j++;
  } while (j < chains.evolves_to.length)

  return evo_chains;
};


const getVariationChain = async ({ varieties, species, img, shiny }) => {
  const url = species.evolution_chain.url;
  const reponse = await axios.get(url)
    .catch((err) => console.log("Error:", err));

  const chains = reponse.data.chain;

  let evo_chains = [];
  let j = 0;
  do {
    let chain = []

    let parentData = chains
    let data = chains.evolves_to[j]
    do {
      let detail = {};
      if (data)
        detail = data.evolution_details

      const Obj = {};
      Obj['name'] = parentData.species.name;
      Obj['detail'] = detail;

      if (parentData.species.name === species.name) {
        Obj['link'] = parentData.species.name + '-' + varieties
        Obj['image'] = img
        Obj['shiny'] = shiny
      } else {
        let tmp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${parentData.species.name + '-' + varieties}`)
        .catch(() => {
          return null;
        });
        if (tmp === null) {
          console.log(`Varieties ${varieties} does not exist for pokemon ${parentData.species.name}`);
          tmp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${parentData.species.name}`);
        }

        Obj['link'] = tmp.data.name
        Obj['image'] = findImage(tmp.data);
        Obj['shiny'] = findShiny(tmp.data);
      }

      chain.push(Obj)

      parentData = data
      if (data)
        data = data.evolves_to[0]
    } while (!!parentData && parentData.hasOwnProperty('evolves_to'));

    evo_chains.push(chain);
    j++;
  } while (j < chains.evolves_to.length)

  return evo_chains;
};