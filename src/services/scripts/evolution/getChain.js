import axios from "axios";

export const getChain = async ({ species }) => {
  console.log(species);
  const url = species.evolution_chain.url;
  const reponse = await axios.get(url)
    .catch((err) => console.log("Error:", err));

  const chains = reponse.data.chain;

  let evo_chains = [];
  for (let j = 0; j < chains.evolves_to.length; j++) {
    let chain = []

    let detail = chains.evolves_to[j].evolution_details
    console.log(detail);
    do {
      const Obj = {};
      Obj['stat__name'] = chains.evolves_to[j].stat.name;
      Obj['stat__val'] = chains.evolves_to[j].base_stat;
    } while(false);

    evo_chains.push(chain);
  }

  return evo_chains;
};