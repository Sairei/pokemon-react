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
    let selectLoc = location.data[i];

    const area = await axios.get(selectLoc.location_area.url);
    const loc = await axios.get(area.data.location.url);

    location.data[i]['location'] = loc.data;

    for(let j=0; j<selectLoc.version_details.length; j++) {
      let selectVersion = selectLoc.version_details[j];

      for(let k=0; k<selectVersion.encounter_details.length; k++) {
        let selectEncounter = selectVersion.encounter_details[k];
  
        const method = await axios.get(selectEncounter.method.url)

        location.data[i].version_details[j].encounter_details[k].method = method.data;

        for(let l=0; l<selectEncounter.condition_values.length; l++) {
          let selectCondition = selectEncounter.condition_values[l];

          const condition = await axios.get(selectCondition.url)

          location.data[i].version_details[j].encounter_details[k].condition_values[l] = condition.data;
        }
      }
    }
  }

  return { location: location.data }
}