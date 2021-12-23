import axios from "axios";

export const getAllPokemons = async (offset, limit, selectedType) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .catch((err) => console.log("Error:", err));

  const result = response.data.results;
  const pokemonArr = [], filterArr = [];

  await Promise.all(
    result.map((pokemonItem) => {
      return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
        .then((result) => {
          pokemonArr.push(result.data);
        });
    })
  );

  pokemonArr.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

  if (selectedType) {
    for (let i = 0; i < pokemonArr.length; i++) {
      for (let j = 0; j < pokemonArr[i].types.length; j++) {
        if (selectedType === pokemonArr[i].types[j].type.name) {
          filterArr.push(pokemonArr[i])
        }
      }
    }
    return {
      allPokemons: filterArr,
      showLoading: false
    };
  } 
  else {
    return {
      allPokemons: pokemonArr,
      showLoading: false
    };
  }
}