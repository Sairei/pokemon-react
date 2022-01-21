import axios from "axios";

export const getAllVersionName = async (group) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/version-group/${group}`)
    .catch((err) => {
      console.log("Error:", err);
      return null;
    });
  
  let res = [];
  if (response) {
    response.data.versions.forEach(v => {
      res.push(v.name);
    });
  } else {
    group.split('-').forEach(v => {
      res.push(v);
    });
  }

  return res;
}