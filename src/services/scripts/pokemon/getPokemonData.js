import axios from "axios";

export const getPokemonData = async (result, selectedType) => {
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

  if (selectedType !== undefined) {
    for (let i = 0; i < pokemonArr.length; i++) {
      for (let j = 0; j < pokemonArr[i].types.length; j++) {
        if (selectedType === pokemonArr[i].types[j].type.name) {
          filterArr.push(pokemonArr[i])
        }
      }
    }
    return {
      isFilter: true,
      filterPokemons: filterArr,
      allPokemons: pokemonArr,
      showLoading: false
    };
  } 
  else {
    return {
      isFilter: false,
      filterPokemons: [],
      allPokemons: pokemonArr,
      showLoading: false
    };
  }
}