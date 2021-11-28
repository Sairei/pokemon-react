import axios from "axios";

export const getTypeData = async (result) => {
  const typeArr = [];

  await Promise.all(
    result.map((typeItem) => {
      return axios
        .get(`https://pokeapi.co/api/v2/type/${typeItem.name}`)
        .then((result) => {
          if(result.data.name !== "unknown" & result.data.name !== "shadow") 
            typeArr.push(result.data);
        });
    })
  );
  
  return {
    types: typeArr
  };
}