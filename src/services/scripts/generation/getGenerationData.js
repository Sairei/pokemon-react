import axios from "axios";

export const getGenerationData = async (result) => {
  const generationArr = [];

  await Promise.all(
    result.map((genItem) => {
      return axios
        .get(`https://pokeapi.co/api/v2/generation/${genItem.name}`)
        .then((result) => {
          generationArr.push(result.data);
        });
    })
  );
  
  generationArr.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

  return {
    generations: generationArr
  };
}